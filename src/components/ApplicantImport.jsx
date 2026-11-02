
import { useState } from "react";
import { FileUp, Link, Loader2, Upload } from "lucide-react";

import {
  extractPdfText,
  parseApplicantCopy,
} from "../utils/applicantParser";

export default function ApplicantImport({ onImport }) {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [mode, setMode] = useState("pdf");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const processPdf = async (pdfFile) => {
    setError("");
    setLoading(true);

    try {
      const text = await extractPdfText(pdfFile);
      const extractedData = parseApplicantCopy(text);

      if (!Object.values(extractedData).some((value) => value !== "" && value !== "Unknown")) {
        throw new Error(
          "No recognizable information found. Please check the PDF."
        );
      }

      onImport({
        ...extractedData,
        applicantCopyUrl: "",
        importSource: "PDF",
      });
    } catch (err) {
      setError(err.message || "PDF import failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleFileImport = async () => {
    if (!file) {
      setError("Please select an Applicant Copy PDF.");
      return;
    }

    await processPdf(file);
  };

  const handleUrlImport = async () => {
    setError("");

    if (!url.trim()) {
      setError("Please enter a PDF URL.");
      return;
    }

    try {
      const parsedUrl = new URL(url);

      if (!["https:", "http:"].includes(parsedUrl.protocol)) {
        throw new Error("Only HTTP and HTTPS URLs are allowed.");
      }

      if (parsedUrl.username || parsedUrl.password) {
        throw new Error("URLs containing credentials are not allowed.");
      }

      setLoading(true);

      const response = await fetch(parsedUrl.href);

      if (!response.ok) {
        throw new Error("Could not access this URL.");
      }

      const blob = await response.blob();

      if (
        blob.type !== "application/pdf" &&
        !parsedUrl.pathname.toLowerCase().endsWith(".pdf")
      ) {
        throw new Error(
          "This URL does not appear to point to a PDF. Please use a direct PDF link."
        );
      }

      const pdfFile = new File(
        [blob],
        "applicant-copy.pdf",
        { type: "application/pdf" }
      );

      const text = await extractPdfText(pdfFile);
      const extractedData = parseApplicantCopy(text);

      if (!Object.values(extractedData).some((value) => value !== "" && value !== "Unknown")) {
        throw new Error("No recognizable information found in this PDF.");
      }

      onImport({
        ...extractedData,
        applicantCopyUrl: parsedUrl.href,
        importSource: "URL",
      });
    } catch (err) {
      setError(
        err.message.includes("Failed to fetch")
          ? "Website blocked access (CORS). Download the PDF and use PDF Upload instead."
          : err.message || "URL import failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6">

      <div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
          Import Applicant Copy
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Extract your government job application information automatically.
        </p>
      </div>

      <div className="flex rounded-xl bg-slate-100 p-1 dark:bg-slate-800">
        <button
          onClick={() => {
            setMode("pdf");
            setError("");
          }}
          className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold ${
            mode === "pdf"
              ? "bg-white text-emerald-600 shadow dark:bg-slate-700"
              : "text-slate-500"
          }`}
        >
          <FileUp size={17} />
          PDF Upload
        </button>

        <button
          onClick={() => {
            setMode("url");
            setError("");
          }}
          className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold ${
            mode === "url"
              ? "bg-white text-emerald-600 shadow dark:bg-slate-700"
              : "text-slate-500"
          }`}
        >
          <Link size={17} />
          PDF URL Import
        </button>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">

        {mode === "pdf" ? (
          <div className="space-y-4">
            <label className="flex min-h-48 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 p-6 text-center hover:border-emerald-500 dark:border-slate-700">
              <Upload size={32} className="mb-3 text-emerald-600" />

              <span className="font-semibold text-slate-700 dark:text-white">
                Select Applicant Copy PDF
              </span>

              <span className="mt-2 text-xs text-slate-500">
                PDF files only
              </span>

              <input
                type="file"
                accept=".pdf,application/pdf"
                className="hidden"
                onChange={(event) => {
                  setFile(event.target.files?.[0] || null);
                  setError("");
                }}
              />
            </label>

            {file && (
              <p className="text-sm text-emerald-600">
                Selected: {file.name}
              </p>
            )}

            <button
              onClick={handleFileImport}
              disabled={loading || !file}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700 disabled:opacity-50"
            >
              {loading ? <Loader2 className="animate-spin" size={18} /> : <FileUp size={18} />}
              {loading ? "Extracting..." : "Extract PDF Information"}
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              Applicant Copy PDF URL

              <input
                type="url"
                value={url}
                onChange={(event) => setUrl(event.target.value)}
                placeholder="https://example.com/applicant-copy.pdf"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
            </label>

            <button
              onClick={handleUrlImport}
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700 disabled:opacity-50"
            >
              {loading ? <Loader2 className="animate-spin" size={18} /> : <Link size={18} />}
              {loading ? "Importing..." : "Import from URL"}
            </button>

            <p className="text-xs text-slate-500">
              Requires a publicly accessible direct PDF URL. Some websites block browser access.
            </p>
          </div>
        )}

        {error && (
          <div className="mt-4 rounded-xl bg-red-50 p-3 text-sm text-red-600 dark:bg-red-950 dark:text-red-300">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}
