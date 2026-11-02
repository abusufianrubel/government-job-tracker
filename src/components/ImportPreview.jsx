
import { useState } from "react";
import { CheckCircle2, Save, X } from "lucide-react";

const fields = [
  ["organization", "Organization Name"],
  ["post", "Post Name"],
  ["postBangla", "Post Name (Bangla)"],
  ["vacancy", "Total Vacancy"],
  ["applicantName", "Applicant Name"],
  ["applicantNameBn", "Applicant Name (Bangla)"],
  ["userId", "User ID"],
  ["applicationDate", "Application Date"],
  ["paymentStatus", "Payment Status"],
  ["mobile", "Mobile Number"],
  ["referenceNo", "Reference Number"],
];

export default function ImportPreview({ data, onConfirm, onCancel }) {
  const [form, setForm] = useState({
    ...data,
    status: "Applied",
    admitCardStatus: "Not Published",
    admitCardDownloaded: false,
    examStatus: "Not Scheduled",
    examType: "Written",
    examDate: "",
    resultStatus: "Pending",
    finalStatus: "Active",
    circularUrl: "",
    admitCardUrl: "",
    notes: "",
  });

  const [saving, setSaving] = useState(false);

  const updateField = (name, value) => {
    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSaving(true);

    try {
      await onConfirm({
        ...form,
        vacancy: form.vacancy === "" ? 0 : Number(form.vacancy),
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
            Verify Imported Data
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Check and correct the extracted information before saving.
          </p>
        </div>

        <button onClick={onCancel} className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800">
          <X size={20} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">

        {fields.map(([name, label]) => (
          <label key={name} className="block">
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
              {label}
            </span>

            <input
              type={name === "applicationDate" ? "date" : name === "vacancy" ? "number" : "text"}
              min={name === "vacancy" ? 0 : undefined}
              value={form[name] ?? ""}
              onChange={(event) => updateField(name, event.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </label>
        ))}

        <div className="rounded-xl bg-emerald-50 p-3 text-sm text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
          <CheckCircle2 size={17} className="mr-2 inline" />
          Imported via {form.importSource || "Unknown"}
        </div>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-xl border border-slate-200 px-5 py-3 text-sm dark:border-slate-700"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={saving || !form.organization.trim() || !form.post.trim()}
            className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white disabled:opacity-50"
          >
            <Save size={17} />
            {saving ? "Saving..." : "Confirm & Save"}
          </button>
        </div>
      </form>
    </div>
  );
}
