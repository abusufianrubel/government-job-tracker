import { CalendarDays, Clock } from "lucide-react";

export default function UpcomingExams({ exams }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
      <h3 className="font-bold text-slate-800 dark:text-white">
        Upcoming Exams
      </h3>

      <p className="mt-1 text-xs text-slate-400">
        Stay prepared for your exams
      </p>

      <div className="mt-5 space-y-5">
        {exams.map((exam) => (
          <div key={exam.id} className="flex items-center gap-3">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
              <CalendarDays size={21} />
            </div>

            <div className="min-w-0 flex-1">
              <h4 className="truncate text-sm font-semibold text-slate-700 dark:text-white">
                {exam.post}
              </h4>

              <p className="mt-1 truncate text-xs text-slate-400">
                {exam.organization}
              </p>

              <p className="mt-2 flex items-center gap-1 text-xs text-orange-500">
                <Clock size={13} />
                {exam.daysLeft} days left
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
