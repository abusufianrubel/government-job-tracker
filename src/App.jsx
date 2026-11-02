// import { useState } from "react";
// import {
//   BriefcaseBusiness,
//   CalendarDays,
//   CheckCircle2,
//   Clock,
//   Plus,
// } from "lucide-react";

// import Sidebar from "./components/Sidebar";
// import Header from "./components/Header";
// import StatCard from "./components/StatCard";
// import ApplicationTable from "./components/ApplicationTable";
// import UpcomingExams from "./components/UpcomingExams";

// import { applications, upcomingExams } from "./data/mockData";

// function App() {
//   const [collapsed, setCollapsed] = useState(false);
//   const [dark, setDark] = useState(false);
//   const [language, setLanguage] = useState("en");
//   const [activePage, setActivePage] = useState("dashboard");

//   const isBn = language === "bn";

//   const total = applications.length;
//   const passed = applications.filter(job => job.status === "Passed").length;
//   const upcoming = applications.filter(job => job.status === "Exam Upcoming").length;
//   const pending = applications.filter(job => job.status === "Result Pending").length;

//   return (
//     <div className={dark ? "dark" : ""}>
//       <div className="flex min-h-screen bg-slate-100 text-slate-800 dark:bg-slate-950 dark:text-white">
//         <Sidebar
//           collapsed={collapsed}
//           setCollapsed={setCollapsed}
//           activePage={activePage}
//           setActivePage={setActivePage}
//         />

//         <main className="min-w-0 flex-1">
//           <Header
//             dark={dark}
//             setDark={setDark}
//             language={language}
//             setLanguage={setLanguage}
//           />

//           <div className="mx-auto max-w-[1600px] p-5 md:p-8">
//             <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
//               <div>
//                 <h1 className="text-2xl font-bold">
//                   {isBn ? "স্বাগতম! 👋" : "Welcome back! 👋"}
//                 </h1>
//                 <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
//                   {isBn
//                     ? "আপনার চাকরির আবেদনের সারসংক্ষেপ।"
//                     : "Here is your job application overview."}
//                 </p>
//               </div>

//               <button className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700">
//                 <Plus size={18} />
//                 {isBn ? "নতুন আবেদন" : "Add New Job"}
//               </button>
//             </div>

//             <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//               <StatCard
//                 title={isBn ? "মোট আবেদন" : "Total Applications"}
//                 value={total}
//                 icon={BriefcaseBusiness}
//                 color="green"
//                 subtitle={isBn ? "সকল আবেদন" : "All applications"}
//               />

//               <StatCard
//                 title={isBn ? "আসন্ন পরীক্ষা" : "Upcoming Exams"}
//                 value={upcoming}
//                 icon={CalendarDays}
//                 color="orange"
//                 subtitle={isBn ? "পরীক্ষার অপেক্ষায়" : "Exam scheduled"}
//               />

//               <StatCard
//                 title={isBn ? "উত্তীর্ণ" : "Passed"}
//                 value={passed}
//                 icon={CheckCircle2}
//                 color="purple"
//                 subtitle={isBn ? "সফলভাবে উত্তীর্ণ" : "Successfully passed"}
//               />

//               <StatCard
//                 title={isBn ? "ফলাফল অপেক্ষমাণ" : "Result Pending"}
//                 value={pending}
//                 icon={Clock}
//                 color="blue"
//                 subtitle={isBn ? "ফলাফলের অপেক্ষায়" : "Awaiting results"}
//               />
//             </section>

//             <section className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-[1.7fr_1fr]">
//               <ApplicationTable applications={applications} />
//               <UpcomingExams exams={upcomingExams} />
//             </section>

//             <footer className="mt-6 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-900">
//               {isBn
//                 ? "আপনার সকল সরকারি চাকরির আবেদন এক জায়গায় পরিচালনা করুন।"
//                 : "Manage all your government job applications in one place."}
//             </footer>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default App;


import { useMemo, useState } from "react";
import {
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Clock,
  Plus,
} from "lucide-react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import ApplicationTable from "./components/ApplicationTable";
import UpcomingExams from "./components/UpcomingExams";
import JobForm from "./components/JobForm";

import useJobs from "./hooks/useJobs";

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [dark, setDark] = useState(false);
  const [language, setLanguage] = useState("en");
  const [activePage, setActivePage] = useState("dashboard");

  const [showForm, setShowForm] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [search, setSearch] = useState("");

  const {
    jobs,
    loading,
    error,
    createJob,
    editJob,
    removeJob,
  } = useJobs();

  const isBn = language === "bn";

  const filteredJobs = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return jobs;

    return jobs.filter((job) =>
      [
        job.organization,
        job.post,
        job.userId,
        job.applicantName,
      ].some((value) => String(value || "").toLowerCase().includes(query))
    );
  }, [jobs, search]);

  // const passed = jobs.filter((job) => job.resultStatus === "Passed").length;

  const total = jobs.length;

  const passed = jobs.filter(
    (job) => ["Passed", "Final Selected"].includes(job.resultStatus)
  ).length;

  const failed = jobs.filter(
    (job) => ["Failed", "Rejected"].includes(job.resultStatus)
  ).length;

  const pending = jobs.filter(
    (job) => job.resultStatus === "Pending"
  ).length;

  const paymentPending = jobs.filter(
    (job) => ["Pending", "Unpaid"].includes(job.paymentStatus)
  ).length;

  const upcoming = jobs.filter((job) => {
    if (!job.examDate || job.examStatus !== "Scheduled") {
      return false;
    }

    const examDate = new Date(`${job.examDate}T00:00:00`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return examDate >= today;
  });

  // const upcoming = jobs.filter((job) => {
  //   if (!job.examDate || job.examStatus === "Completed" || job.examStatus === "Cancelled") {
  //     return false;
  //   }

  //   const examDate = new Date(`${job.examDate}T00:00:00`);
  //   const today = new Date();
  //   today.setHours(0, 0, 0, 0);

  //   return examDate >= today;
  // });

  // const pending = jobs.filter(
  //   (job) => !job.resultStatus || job.resultStatus === "Pending"
  // ).length;

  // const handleSave = async (formData) => {
  //   const data = {
  //     ...formData,
  //     status: editingJob ? editingJob.status || "Applied" : "Applied",
  //     examStatus: editingJob?.examStatus || "Not Scheduled",
  //     resultStatus: editingJob?.resultStatus || "Pending",
  //     examDate: editingJob?.examDate || "",
  //   };

  //   if (editingJob) {
  //     return editJob(editingJob.id, data);
  //   }

  //   return createJob(data);
  // };

  
const handleSave = async (formData) => {
  const data = {
    ...formData,
    vacancy: Number(formData.vacancy),
    status: formData.status || "Applied",
    paymentStatus: formData.paymentStatus || "Pending",
    admitCardStatus: formData.admitCardStatus || "Not Published",
    admitCardDownloaded: Boolean(formData.admitCardDownloaded),
    examStatus: formData.examStatus || "Not Scheduled",
    examType: formData.examType || "Written",
    resultStatus: formData.resultStatus || "Pending",
    finalStatus: formData.finalStatus || "Active",
  };

  if (editingJob) {
    return editJob(editingJob.id, data);
  }

  return createJob(data);
};

  const handleEdit = (job) => {
    setEditingJob(job);
    setShowForm(true);
  };

  const handleDelete = async (job) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${job.post} at ${job.organization}?`
    );

    if (confirmed) {
      await removeJob(job.id);
    }
  };

  const openNewJobForm = () => {
    setEditingJob(null);
    setShowForm(true);
  };

  const examList = upcoming.map((job) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const date = new Date(`${job.examDate}T00:00:00`);
    const daysLeft = Math.ceil((date - today) / 86400000);

    return {
      id: job.id,
      post: job.post,
      organization: job.organization,
      daysLeft,
    };
  });

  return (
    <div className={dark ? "dark" : ""}>
      <div className="flex min-h-screen bg-slate-100 text-slate-800 dark:bg-slate-950 dark:text-white">
        <Sidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          activePage={activePage}
          setActivePage={setActivePage}
        />

        <main className="min-w-0 flex-1">
          <Header
            dark={dark}
            setDark={setDark}
            language={language}
            setLanguage={setLanguage}
          />

          <div className="mx-auto max-w-[1600px] p-5 md:p-8">
            <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold">
                  {isBn ? "স্বাগতম! 👋" : "Welcome back! 👋"}
                </h1>

                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  {isBn
                    ? "আপনার চাকরির আবেদনের সারসংক্ষেপ।"
                    : "Here is your job application overview."}
                </p>
              </div>

              <button
                onClick={openNewJobForm}
                className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                <Plus size={18} />
                {isBn ? "নতুন আবেদন" : "Add New Job"}
              </button>
            </div>

            {error && (
              <div className="mb-5 rounded-xl bg-red-50 p-4 text-sm text-red-600 dark:bg-red-950 dark:text-red-300">
                {error}
              </div>
            )}

            {loading ? (
              <div className="py-20 text-center text-slate-500">
                Loading applications...
              </div>
            ) : (
              <>
                <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  <StatCard
                    title="Total Applications"
                    value={jobs.length}
                    icon={BriefcaseBusiness}
                    color="green"
                    subtitle="Saved applications"
                  />

                  <StatCard
                    title="Upcoming Exams"
                    value={upcoming.length}
                    icon={CalendarDays}
                    color="orange"
                    subtitle="Scheduled exams"
                  />

                  <StatCard
                    title="Passed"
                    value={passed}
                    icon={CheckCircle2}
                    color="purple"
                    subtitle="Successfully passed"
                  />

                  <StatCard
                    title="Result Pending"
                    value={pending}
                    icon={Clock}
                    color="blue"
                    subtitle="Awaiting results"
                  />
                </section>

                <section className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-[1.7fr_1fr]">
                  <ApplicationTable
                    applications={filteredJobs}
                    search={search}
                    setSearch={setSearch}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                  />

                  <UpcomingExams exams={examList} />
                </section>
              </>
            )}
          </div>
        </main>

        {showForm && (
          <JobForm
            initialJob={editingJob}
            onSave={handleSave}
            onClose={() => {
              setShowForm(false);
              setEditingJob(null);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default App;
