import {
  LayoutDashboard,
  BriefcaseBusiness,
  CalendarDays,
  ChartNoAxesCombined,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "applications", label: "Applications", icon: BriefcaseBusiness },
  { id: "exams", label: "Upcoming Exams", icon: CalendarDays },
  { id: "statistics", label: "Statistics", icon: ChartNoAxesCombined },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function Sidebar({
  collapsed,
  setCollapsed,
  activePage,
  setActivePage,
}) {
  return (
    <aside
      className={`relative min-h-screen shrink-0 border-r border-slate-200 bg-white p-4 transition-all duration-300 dark:border-slate-800 dark:bg-slate-900 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="flex items-center gap-3 border-b border-slate-100 pb-7 dark:border-slate-800">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-600 text-white">
          <BriefcaseBusiness size={22} />
        </div>

        {!collapsed && (
          <span className="whitespace-nowrap text-lg font-bold text-slate-800 dark:text-white">
            Govt Job Tracker
          </span>
        )}
      </div>

      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-20 z-10 grid h-7 w-7 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-white"
        title="Collapse Sidebar"
      >
        {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>

      {!collapsed && (
        <p className="mb-3 mt-7 px-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Main Menu
        </p>
      )}

      <nav className="mt-7 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = activePage === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              title={collapsed ? item.label : ""}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                active
                  ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400"
                  : "text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
              } ${collapsed ? "justify-center" : ""}`}
            >
              <Icon size={20} />
              {!collapsed && <span>{item.label}</span>}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
