// import { MoreHorizontal } from "lucide-react";

// const statusColors = {
//   Applied: "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400",
//   "Exam Upcoming": "bg-orange-50 text-orange-600 dark:bg-orange-950 dark:text-orange-400",
//   "Result Pending": "bg-purple-50 text-purple-600 dark:bg-purple-950 dark:text-purple-400",
//   Passed: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400",
// };

// export default function ApplicationTable({ applications }) {
//   return (
//     <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
//       <div className="flex items-center justify-between border-b border-slate-100 p-5 dark:border-slate-800">
//         <div>
//           <h3 className="font-bold text-slate-800 dark:text-white">
//             Recent Applications
//           </h3>
//           <p className="mt-1 text-xs text-slate-400">
//             Your latest job applications
//           </p>
//         </div>
//         <button className="text-sm font-semibold text-emerald-600">
//           View All →
//         </button>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full text-left text-sm">
//           <thead className="bg-slate-50 text-xs text-slate-500 dark:bg-slate-800">
//             <tr>
//               <th className="px-5 py-4">Organization / Post</th>
//               <th className="px-5 py-4">Vacancy</th>
//               <th className="px-5 py-4">Exam Date</th>
//               <th className="px-5 py-4">Status</th>
//               <th className="px-5 py-4">Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {applications.map((job) => (
//               <tr
//                 key={job.id}
//                 className="border-t border-slate-100 dark:border-slate-800"
//               >
//                 <td className="px-5 py-4">
//                   <p className="font-semibold text-slate-700 dark:text-white">
//                     {job.post}
//                   </p>
//                   <p className="mt-1 text-xs text-slate-400">
//                     {job.organization}
//                   </p>
//                 </td>

//                 <td className="px-5 py-4 text-slate-500">
//                   {job.vacancy}
//                 </td>

//                 <td className="px-5 py-4 text-slate-500">
//                   {job.examDate || "Not Scheduled"}
//                 </td>

//                 <td className="px-5 py-4">
//                   <span className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold ${statusColors[job.status] || "bg-slate-100 text-slate-600"}`}>
//                     {job.status}
//                   </span>
//                 </td>

//                 <td className="px-5 py-4">
//                   <button className="text-slate-400 hover:text-emerald-600">
//                     <MoreHorizontal size={20} />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }


import { Pencil, Trash2, Search } from "lucide-react";

export default function ApplicationTable({
  applications,
  search,
  setSearch,
  onEdit,
  onDelete,
}) {
  const statusColors = {
    Applied: "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400",
    "Exam Upcoming": "bg-orange-50 text-orange-600 dark:bg-orange-950 dark:text-orange-400",
    "Result Pending": "bg-purple-50 text-purple-600 dark:bg-purple-950 dark:text-purple-400",
    Passed: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400",
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 p-5 dark:border-slate-800">
        <div>
          <h3 className="font-bold text-slate-800 dark:text-white">
            All Applications
          </h3>
          <p className="mt-1 text-xs text-slate-400">
            {applications.length} applications found
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-slate-100 px-3 py-2 dark:bg-slate-800">
          <Search size={16} className="text-slate-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search jobs..."
            className="w-36 bg-transparent text-sm outline-none dark:text-white"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs text-slate-500 dark:bg-slate-800">
            <tr>
              <th className="px-5 py-4">Organization / Post</th>
              <th className="px-5 py-4">User ID</th>
              <th className="px-5 py-4">Vacancy</th>
              <th className="px-5 py-4">Payment</th>
              <th className="px-5 py-4">Status</th>
              <th className="px-5 py-4">Result</th>
              <th className="px-5 py-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {applications.map((job) => (
              <tr key={job.id} className="border-t border-slate-100 dark:border-slate-800">
                <td className="px-5 py-4">
                  <p className="font-semibold text-slate-700 dark:text-white">
                    {job.post}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    {job.organization}
                  </p>
                </td>

                <td className="px-5 py-4 text-slate-500">
                  {job.userId || "—"}
                </td>

                <td className="px-5 py-4 text-slate-500">
                  {job.vacancy}
                </td>

                <td className="px-5 py-4">
                  <span className={`rounded-full px-3 py-1.5 text-xs ${
                    job.paymentStatus === "Paid"
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-orange-50 text-orange-600"
                  }`}>
                    {job.paymentStatus}
                  </span>
                </td>

                <td className="px-5 py-4">
                  <span className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold ${
                    statusColors[job.status] || "bg-slate-100 text-slate-600"
                  }`}>
                    {job.status || "Applied"}
                  </span>
                </td>

                <td className="px-5 py-4">
                  <span className="whitespace-nowrap rounded-full bg-purple-50 px-3 py-1.5 text-xs font-semibold text-purple-600 dark:bg-purple-950 dark:text-purple-400">
                    {job.resultStatus || "Pending"}
                  </span>
                </td>

                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onEdit(job)}
                      title="Edit"
                      className="rounded-lg p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950"
                    >
                      <Pencil size={16} />
                    </button>

                    <button
                      onClick={() => onDelete(job)}
                      title="Delete"
                      className="rounded-lg p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-950"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {applications.length === 0 && (
              <tr>
                <td colSpan="6" className="py-12 text-center text-slate-400">
                  No applications found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
