
import {
  ArrowLeft,
  Pencil,
  Building2,
  User,
  CreditCard,
  FileCheck,
  CalendarDays,
  Award,
  ExternalLink,
} from "lucide-react";

function DetailCard({ title, icon: Icon, children }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
      <h3 className="mb-4 flex items-center gap-2 font-semibold text-slate-800 dark:text-white">
        <Icon size={18} className="text-emerald-600" />
        {title}
      </h3>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-100 pb-3 last:border-0 last:pb-0 dark:border-slate-800">
      <span className="text-sm text-slate-500">{label}</span>
      <span className="max-w-[65%] break-words text-right text-sm font-medium text-slate-800 dark:text-slate-200">
        {value || "Not provided"}
      </span>
    </div>
  );
}

function DocumentLink({ label, url }) {
  if (!url) {
    return <DetailRow label={label} value="Not available" />;
  }

  let validUrl;

  try {
    validUrl = new URL(url);
  } catch {
    return <DetailRow label={label} value="Invalid URL" />;
  }

  if (!["https:", "http:"].includes(validUrl.protocol)) {
    return <DetailRow label={label} value="Invalid URL" />;
  }

  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-sm text-slate-500">{label}</span>

      <a
        href={validUrl.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-sm font-medium text-emerald-600 hover:underline"
      >
        Open Document
        <ExternalLink size={14} />
      </a>
    </div>
  );
}

export default function ApplicationDetails({
  job,
  onBack,
  onEdit,
}) {
  if (!job) return null;

  return (
    <div className="mx-auto max-w-6xl space-y-6">

      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={onBack}
          className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800"
        >
          <ArrowLeft size={18} />
          Back to Applications
        </button>

        <button
          onClick={() => onEdit(job)}
          className="flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          <Pencil size={16} />
          Edit Application
        </button>
      </div>

      <div className="rounded-2xl bg-gradient-to-r from-emerald-700 to-teal-600 p-6 text-white">
        <p className="text-sm text-emerald-100">
          {job.organization}
        </p>

        <h1 className="mt-2 text-2xl font-bold">
          {job.post}
        </h1>

        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <span className="rounded-lg bg-white/15 px-3 py-2">
            Vacancy: {job.vacancy}
          </span>

          <span className="rounded-lg bg-white/15 px-3 py-2">
            User ID: {job.userId || "N/A"}
          </span>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">

        <DetailCard title="Job Information" icon={Building2}>
          <DetailRow label="Organization" value={job.organization} />
          <DetailRow label="Post" value={job.post} />
          <DetailRow label="Vacancy" value={job.vacancy} />
          <DetailRow label="Application Date" value={job.applicationDate} />
          <DetailRow label="Application Status" value={job.status} />
          <DetailRow label="Final Status" value={job.finalStatus} />
        </DetailCard>

        <DetailCard title="Applicant Information" icon={User}>
          <DetailRow label="Applicant Name" value={job.applicantName} />
          <DetailRow label="User ID" value={job.userId} />
          <DetailRow label="Mobile Number" value={job.mobile} />
        </DetailCard>

        <DetailCard title="Payment Information" icon={CreditCard}>
          <DetailRow label="Payment Status" value={job.paymentStatus} />
          <DetailRow label="Payment Date" value={job.paymentDate} />
        </DetailCard>

        <DetailCard title="Admit Card Information" icon={FileCheck}>
          <DetailRow label="Admit Card Status" value={job.admitCardStatus} />
          <DetailRow
            label="Downloaded"
            value={job.admitCardDownloaded ? "Yes" : "No"}
          />
        </DetailCard>

        <DetailCard title="Exam Information" icon={CalendarDays}>
          <DetailRow label="Exam Date" value={job.examDate} />
          <DetailRow label="Exam Type" value={job.examType} />
          <DetailRow label="Exam Status" value={job.examStatus} />
        </DetailCard>

        <DetailCard title="Result Information" icon={Award}>
          <DetailRow label="Result Status" value={job.resultStatus} />
          <DetailRow label="Result Date" value={job.resultDate} />
        </DetailCard>

        <div className="md:col-span-2">
          <DetailCard title="Documents" icon={FileCheck}>
            <DocumentLink label="Circular PDF" url={job.circularUrl} />
            <DocumentLink label="Applicant Copy" url={job.applicantCopyUrl} />
            <DocumentLink label="Admit Card" url={job.admitCardUrl} />
          </DetailCard>
        </div>

        <div className="md:col-span-2">
          <DetailCard title="Personal Notes" icon={FileCheck}>
            <p className="whitespace-pre-wrap text-sm leading-6 text-slate-600 dark:text-slate-300">
              {job.notes || "No notes added yet."}
            </p>
          </DetailCard>
        </div>

      </div>
    </div>
  );
}
