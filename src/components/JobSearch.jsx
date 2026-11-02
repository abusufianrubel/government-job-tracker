
import { Search, X } from "lucide-react";

export default function JobSearch({ search, setSearch, total, filtered }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1">
          <Search
            size={19}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search organization, post, User ID, name or mobile..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-10 text-sm outline-none focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />

          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
              title="Clear search"
            >
              <X size={17} />
            </button>
          )}
        </div>

        <div className="text-sm text-slate-500 dark:text-slate-400">
          Showing <strong className="text-slate-800 dark:text-white">{filtered}</strong> of {total} applications
        </div>
      </div>
    </div>
  );
}
