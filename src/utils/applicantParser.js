
import * as pdfjsLib from "pdfjs-dist";

// Configure PDF.js worker for Vite
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

// Extract text from uploaded PDF
export async function extractPdfText(file) {
  if (!file || file.type !== "application/pdf") {
    throw new Error("Please select a valid PDF file.");
  }

  const arrayBuffer = await file.arrayBuffer();

  const pdf = await pdfjsLib.getDocument({
    data: new Uint8Array(arrayBuffer),
  }).promise;

  let fullText = "";

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
    const page = await pdf.getPage(pageNumber);
    const content = await page.getTextContent();

    const pageText = content.items
      .map((item) => item.str)
      .join(" ");

    fullText += pageText + "\n";
  }

  return fullText;
}

// Extract field values using common English and Bengali labels
function findValue(text, labels) {
  for (const label of labels) {
    const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    const regex = new RegExp(
      `(?:${escaped})\\s*[:：=-]?\\s*([^\\n]{2,100})`,
      "i"
    );

    const match = text.match(regex);

    if (match?.[1]) {
      return match[1].trim();
    }
  }

  return "";
}

// Parse Applicant Copy text
export function parseApplicantCopy(text) {
  const normalized = text
    .replace(/\r/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\n+/g, "\n");

  const data = {
    organization: findValue(normalized, [
      "Organization",
      "Department",
      "Ministry",
      "প্রতিষ্ঠানের নাম",
      "দপ্তরের নাম",
    ]),

    post: findValue(normalized, [
      "Post Name",
      "Post",
      "Position",
      "পদের নাম",
    ]),

    vacancy: findValue(normalized, [
      "Number of Vacancy",
      "Total Vacancy",
      "Vacancy",
      "পদ সংখ্যা",
      "শূন্যপদ",
    ]),

    applicantName: findValue(normalized, [
      "Applicant Name",
      "Name of Applicant",
      "Applicant's Name",
      "প্রার্থীর নাম",
      "নাম",
    ]),

    userId: findValue(normalized, [
      "User ID",
      "UserID",
      "User Id",
      "ইউজার আইডি",
    ]),

    applicationDate: findValue(normalized, [
      "Application Date",
      "Applied Date",
      "আবেদনের তারিখ",
    ]),

    paymentStatus: findValue(normalized, [
      "Payment Status",
      "Payment",
      "পেমেন্ট স্ট্যাটাস",
    ]),

    mobile: findValue(normalized, [
      "Mobile Number",
      "Mobile No",
      "Phone Number",
      "মোবাইল নম্বর",
    ]),
  };

  // Normalize payment status
  const payment = data.paymentStatus.toLowerCase();

  if (payment.includes("paid") || payment.includes("successful")) {
    data.paymentStatus = "Paid";
  } else if (payment.includes("pending")) {
    data.paymentStatus = "Pending";
  } else if (payment.includes("unpaid")) {
    data.paymentStatus = "Unpaid";
  } else {
    data.paymentStatus = "Unknown";
  }

  // Keep vacancy numeric only
  const vacancyMatch = data.vacancy.match(/[\d,০-৯]+/);

  if (vacancyMatch) {
    const banglaDigits = "০১২৩৪৫৬৭৮৯";

    data.vacancy = Number(
      vacancyMatch[0]
        .replace(/,/g, "")
        .replace(/[০-৯]/g, (digit) =>
          banglaDigits.indexOf(digit)
        )
    );
  } else {
    data.vacancy = "";
  }

  return data;
}
