import { Bell, Globe, Moon, Sun, Search } from "lucide-react";

export default function Header({ dark, setDark, language, setLanguage }) {
  return (
    <header className="flex min-h-20 items-center justify-between gap-4 border-b border-slate-200 bg-white px-6 dark:border-slate-800 dark:bg-slate-900">
      <div>
        <h2 className="text-lg font-bold text-slate-800 dark:text-white">
          {language === "bn" ? "ড্যাশবোর্ড" : "Dashboard"}
        </h2>
        <p className="text-xs text-slate-500">
          {language === "bn"
            ? "আপনার চাকরির আবেদনের সারসংক্ষেপ"
            : "Manage your government job journey"}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <div className="hidden items-center gap-2 rounded-xl bg-slate-100 px-3 py-2 md:flex dark:bg-slate-800">
          <Search size={17} className="text-slate-400" />
          <input
            placeholder={language === "bn" ? "খুঁজুন..." : "Search..."}
            className="w-32 bg-transparent text-sm outline-none dark:text-white"
          />
        </div>

        <button
          onClick={() => setLanguage(language === "bn" ? "en" : "bn")}
          className="rounded-xl p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          title="Change language"
        >
          <Globe size={19} />
        </button>

        <button
          onClick={() => setDark(!dark)}
          className="rounded-xl p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          title="Change theme"
        >
          {dark ? <Sun size={19} /> : <Moon size={19} />}
        </button>

        <button
          className="relative rounded-xl p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          title="Notifications"
        >
          <Bell size={19} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>
      </div>
    </header>
  );
}
