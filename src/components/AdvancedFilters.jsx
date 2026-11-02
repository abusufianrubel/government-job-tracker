
import { Filter, RotateCcw } from "lucide-react";

const filterOptions = {
  status: [
    "All",
    "Applied",
    "Payment Pending",
    "Admit Card Available",
    "Exam Upcoming",
    "Exam Completed",
    "Result Pending",
    "Closed",
  ],
  paymentStatus: ["All", "Pending", "Paid", "Unpaid", "Unknown"],
  admitCardStatus: [
    "All",
    "Not Published",
    "Available",
    "Downloaded",
  ],
  examStatus: [
    "All",
    "Not Scheduled",
    "Scheduled",
    "Completed",
    "Cancelled",
  ],
  resultStatus: [
    "All",
    "Pending",
    "Passed",
    "Failed",
    "Waiting List",
    "Viva Pending",
    "Final Selected",
    "Rejected",
    "Cancelled / Closed",
  ],
};

const labels = {
  status: "Application Status",
  paymentStatus: "Payment Status",
  admitCardStatus: "Admit Card",
  examStatus: "Exam Status",
  resultStatus: "Result Status",
};

export default function AdvancedFilters({
  filters,
  updateFilter,
  resetFilters,
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h3 className="flex items-center gap-2 font-bold text-slate-800 dark:text-white">
          <Filter size={18} className="text-emerald-600" />
          Advanced Filters
        </h3>

        <button
          onClick={resetFilters}
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <RotateCcw size={15} />
          Reset Filters
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {Object.entries(filterOptions).map(([name, options]) => (
          <label key={name} className="block">
            <span className="text-xs font-semibold text-slate-500">
              {labels[name]}
            </span>

            <select
              value={filters[name]}
              onChange={(event) =>
                updateFilter(name, event.target.value)
              }
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option === "All" ? `All ${labels[name]}` : option}
                </option>
              ))}
            </select>
          </label>
        ))}
      </div>
    </section>
  );
}
