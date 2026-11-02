
// import { useEffect, useState } from "react";
// import { X, Save } from "lucide-react";

// const initialForm = {
//   organization: "",
//   post: "",
//   vacancy: "",
//   applicantName: "",
//   userId: "",
//   mobile: "",
//   applicationDate: new Date().toISOString().slice(0, 10),
//   paymentStatus: "Pending",
//   admitCardStatus: "Not Published",
//   circularUrl: "",
//   applicantCopyUrl: "",
//   admitCardUrl: "",
//   notes: "",
// };

// const inputClass =
//   "mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-emerald-950";

// function Field({ label, name, value, onChange, type = "text", required = false }) {
//   return (
//     <label className="block">
//       <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
//         {label} {required && <span className="text-red-500">*</span>}
//       </span>

//       <input
//         className={inputClass}
//         name={name}
//         type={type}
//         value={value}
//         onChange={onChange}
//         required={required}
//         min={type === "number" ? 0 : undefined}
//         placeholder={type === "number" ? "Enter vacancy" : ""}
//       />
//     </label>
//   );
// }

// export default function JobForm({ initialJob, onSave, onClose }) {
//   const [form, setForm] = useState(initialForm);
//   const [saving, setSaving] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (initialJob) {
//       setForm({ ...initialForm, ...initialJob });
//     } else {
//       setForm(initialForm);
//     }
//   }, [initialJob]);

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setForm((previous) => ({
//       ...previous,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setError("");

//     if (!form.organization.trim() || !form.post.trim()) {
//       setError("Organization and Post Name are required.");
//       return;
//     }

//     if (form.vacancy === "" || Number(form.vacancy) < 0) {
//       setError("Please enter a valid vacancy.");
//       return;
//     }

//     setSaving(true);

//     try {
//       const result = await onSave({
//         ...form,
//         organization: form.organization.trim(),
//         post: form.post.trim(),
//         userId: form.userId.trim(),
//       });

//       if (result?.duplicate) {
//         setError(
//           `Duplicate application found! Existing ID: ${result.existingJob.id}`
//         );
//       } else if (result?.success) {
//         onClose();
//       }
//     } catch (err) {
//       setError(err.message || "Could not save application.");
//     } finally {
//       setSaving(false);
//     }
//   };

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-3 sm:p-6"
//       onMouseDown={(event) => {
//         if (event.target === event.currentTarget) onClose();
//       }}
//     >
//       <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-slate-900">
//         <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
//           <div>
//             <h2 className="text-xl font-bold text-slate-800 dark:text-white">
//               {initialJob ? "Edit Application" : "Add New Application"}
//             </h2>
//             <p className="mt-1 text-xs text-slate-500">
//               Enter your government job information
//             </p>
//           </div>

//           <button
//             type="button"
//             onClick={onClose}
//             className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
//           >
//             <X size={20} />
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-6 p-5">
//           <section>
//             <h3 className="mb-4 font-semibold text-slate-800 dark:text-white">
//               Job Information
//             </h3>

//             <div className="grid gap-4 sm:grid-cols-2">
//               <Field label="Organization Name" name="organization" value={form.organization} onChange={handleChange} required />

//               <Field label="Post Name" name="post" value={form.post} onChange={handleChange} required />

//               <Field label="Vacancy" name="vacancy" type="number" value={form.vacancy} onChange={handleChange} required />

//               <Field label="Application Date" name="applicationDate" type="date" value={form.applicationDate} onChange={handleChange} />
//             </div>
//           </section>

//           <section>
//             <h3 className="mb-4 font-semibold text-slate-800 dark:text-white">
//               Applicant Information
//             </h3>

//             <div className="grid gap-4 sm:grid-cols-2">
//               <Field label="Applicant Name" name="applicantName" value={form.applicantName} onChange={handleChange} />

//               <Field label="User ID" name="userId" value={form.userId} onChange={handleChange} />

//               <Field label="Mobile Number" name="mobile" value={form.mobile} onChange={handleChange} />

//               <label className="block">
//                 <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
//                   Payment Status
//                 </span>

//                 <select
//                   name="paymentStatus"
//                   value={form.paymentStatus}
//                   onChange={handleChange}
//                   className={inputClass}
//                 >
//                   <option>Pending</option>
//                   <option>Paid</option>
//                   <option>Unpaid</option>
//                   <option>Unknown</option>
//                 </select>
//               </label>

//               <label className="block">
//                 <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
//                   Admit Card Status
//                 </span>

//                 <select
//                   name="admitCardStatus"
//                   value={form.admitCardStatus}
//                   onChange={handleChange}
//                   className={inputClass}
//                 >
//                   <option>Not Published</option>
//                   <option>Available</option>
//                   <option>Downloaded</option>
//                 </select>
//               </label>
//             </div>
//           </section>

//           <section>
//             <h3 className="mb-4 font-semibold text-slate-800 dark:text-white">
//               Document Links
//             </h3>

//             <div className="space-y-4">
//               <Field label="Circular PDF Link" name="circularUrl" value={form.circularUrl} onChange={handleChange} type="url" />

//               <Field label="Applicant Copy Link" name="applicantCopyUrl" value={form.applicantCopyUrl} onChange={handleChange} type="url" />

//               <Field label="Admit Card Link" name="admitCardUrl" value={form.admitCardUrl} onChange={handleChange} type="url" />
//             </div>
//           </section>

//           <section>
//             <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
//               Notes

//               <textarea
//                 name="notes"
//                 rows={3}
//                 value={form.notes}
//                 onChange={handleChange}
//                 className={inputClass}
//                 placeholder="Additional information..."
//               />
//             </label>
//           </section>

//           {error && (
//             <div className="rounded-xl bg-red-50 p-3 text-sm text-red-600 dark:bg-red-950 dark:text-red-300">
//               {error}
//             </div>
//           )}

//           <div className="flex justify-end gap-3 border-t border-slate-200 pt-5 dark:border-slate-800">
//             <button
//               type="button"
//               onClick={onClose}
//               className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm dark:border-slate-700"
//             >
//               Cancel
//             </button>

//             <button
//               type="submit"
//               disabled={saving}
//               className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 disabled:opacity-50"
//             >
//               <Save size={17} />
//               {saving ? "Saving..." : "Save Application"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { X, Save, BriefcaseBusiness, CreditCard, FileCheck, CalendarDays, Award } from "lucide-react";

const initialForm = {
  organization: "",
  post: "",
  vacancy: "",
  applicantName: "",
  userId: "",
  mobile: "",
  applicationDate: new Date().toISOString().slice(0, 10),

  status: "Applied",
  paymentStatus: "Pending",
  paymentDate: "",

  admitCardStatus: "Not Published",
  admitCardDownloaded: false,

  examDate: "",
  examStatus: "Not Scheduled",
  examType: "Written",

  resultStatus: "Pending",
  resultDate: "",
  finalStatus: "Active",

  circularUrl: "",
  applicantCopyUrl: "",
  admitCardUrl: "",
  notes: "",
};

const inputClass =
  "mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white";

function Field({ label, name, value, onChange, type = "text", required = false }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
        {label} {required && <span className="text-red-500">*</span>}
      </span>

      <input
        className={inputClass}
        name={name}
        type={type}
        value={value ?? ""}
        onChange={onChange}
        required={required}
        min={type === "number" ? 0 : undefined}
      />
    </label>
  );
}

function SelectField({ label, name, value, onChange, options }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
        {label}
      </span>

      <select
        name={name}
        value={value ?? ""}
        onChange={onChange}
        className={inputClass}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function Section({ title, icon: Icon, children }) {
  return (
    <section className="space-y-4">
      <h3 className="flex items-center gap-2 border-b border-slate-100 pb-3 font-semibold text-slate-800 dark:border-slate-800 dark:text-white">
        <Icon size={18} className="text-emerald-600" />
        {title}
      </h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {children}
      </div>
    </section>
  );
}

export default function JobForm({ initialJob, onSave, onClose }) {
  const [form, setForm] = useState(initialForm);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setForm({ ...initialForm, ...(initialJob || {}) });
  }, [initialJob]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!form.organization.trim() || !form.post.trim()) {
      setError("Organization and Post Name are required.");
      return;
    }

    if (form.vacancy === "" || !Number.isFinite(Number(form.vacancy)) || Number(form.vacancy) < 0) {
      setError("Please enter a valid vacancy.");
      return;
    }

    setSaving(true);

    try {
      const result = await onSave({
        ...form,
        vacancy: Number(form.vacancy),
      });

      if (result?.duplicate) {
        setError(
          `Duplicate application found! Existing Application ID: ${result.existingJob.id}`
        );
      } else if (result?.success) {
        onClose();
      }
    } catch (err) {
      setError(err.message || "Could not save application.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-3 sm:p-6">
      <div className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-slate-900">

        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          <div>
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">
              {initialJob ? "Edit Application" : "Add New Application"}
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              Manage your complete job application lifecycle.
            </p>
          </div>

          <button type="button" onClick={onClose} className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-7 p-5">

          <Section title="Job Information" icon={BriefcaseBusiness}>
            <Field label="Organization Name" name="organization" value={form.organization} onChange={handleChange} required />
            <Field label="Post Name" name="post" value={form.post} onChange={handleChange} required />
            <Field label="Vacancy" name="vacancy" type="number" value={form.vacancy} onChange={handleChange} required />
            <Field label="Application Date" name="applicationDate" type="date" value={form.applicationDate} onChange={handleChange} />
            <SelectField label="Application Status" name="status" value={form.status} onChange={handleChange} options={[
              "Applied", "Payment Pending", "Admit Card Available",
              "Exam Upcoming", "Exam Completed", "Result Pending", "Closed"
            ]} />
            <SelectField label="Final Application Status" name="finalStatus" value={form.finalStatus} onChange={handleChange} options={[
              "Active", "Closed", "Cancelled"
            ]} />
          </Section>

          <Section title="Applicant Information" icon={BriefcaseBusiness}>
            <Field label="Applicant Name" name="applicantName" value={form.applicantName} onChange={handleChange} />
            <Field label="User ID" name="userId" value={form.userId} onChange={handleChange} />
            <Field label="Mobile Number" name="mobile" value={form.mobile} onChange={handleChange} />
          </Section>

          <Section title="Payment Management" icon={CreditCard}>
            <SelectField label="Payment Status" name="paymentStatus" value={form.paymentStatus} onChange={handleChange} options={[
              "Pending", "Paid", "Unpaid", "Unknown"
            ]} />
            <Field label="Payment Date" name="paymentDate" type="date" value={form.paymentDate} onChange={handleChange} />
          </Section>

          <Section title="Admit Card Management" icon={FileCheck}>
            <SelectField label="Admit Card Status" name="admitCardStatus" value={form.admitCardStatus} onChange={handleChange} options={[
              "Not Published", "Available", "Downloaded"
            ]} />
            <Field label="Admit Card PDF Link" name="admitCardUrl" type="url" value={form.admitCardUrl} onChange={handleChange} />

            <label className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
              <input
                type="checkbox"
                name="admitCardDownloaded"
                checked={Boolean(form.admitCardDownloaded)}
                onChange={handleChange}
                className="h-4 w-4 accent-emerald-600"
              />
              Admit Card Download Completed
            </label>
          </Section>

          <Section title="Exam Management" icon={CalendarDays}>
            <Field label="Exam Date" name="examDate" type="date" value={form.examDate} onChange={handleChange} />
            <SelectField label="Exam Type" name="examType" value={form.examType} onChange={handleChange} options={[
              "Written", "MCQ", "Practical", "Viva", "Other"
            ]} />
            <SelectField label="Exam Status" name="examStatus" value={form.examStatus} onChange={handleChange} options={[
              "Not Scheduled", "Scheduled", "Completed", "Cancelled"
            ]} />
          </Section>

          <Section title="Result Management" icon={Award}>
            <SelectField label="Result Status" name="resultStatus" value={form.resultStatus} onChange={handleChange} options={[
              "Pending", "Passed", "Failed", "Waiting List",
              "Viva Pending", "Final Selected", "Rejected",
              "Cancelled / Closed"
            ]} />
            <Field label="Result Publication Date" name="resultDate" type="date" value={form.resultDate} onChange={handleChange} />
          </Section>

          <Section title="Documents & Notes" icon={FileCheck}>
            <Field label="Circular PDF Link" name="circularUrl" type="url" value={form.circularUrl} onChange={handleChange} />
            <Field label="Applicant Copy Link" name="applicantCopyUrl" type="url" value={form.applicantCopyUrl} onChange={handleChange} />

            <label className="block sm:col-span-2">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Additional Notes
              </span>
              <textarea
                name="notes"
                rows={3}
                value={form.notes}
                onChange={handleChange}
                className={inputClass}
                placeholder="Write your notes..."
              />
            </label>
          </Section>

          {error && (
            <div className="rounded-xl bg-red-50 p-3 text-sm text-red-600 dark:bg-red-950 dark:text-red-300">
              {error}
            </div>
          )}

          <div className="flex justify-end gap-3 border-t border-slate-200 pt-5 dark:border-slate-800">
            <button type="button" onClick={onClose} className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm dark:border-slate-700">
              Cancel
            </button>

            <button type="submit" disabled={saving} className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 disabled:opacity-50">
              <Save size={17} />
              {saving ? "Saving..." : "Save Application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
