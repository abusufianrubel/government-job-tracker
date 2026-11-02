
import { useMemo, useState } from "react";

export default function useJobFilters(jobs) {
  const [search, setSearch] = useState("");

  const [filters, setFilters] = useState({
    status: "All",
    paymentStatus: "All",
    admitCardStatus: "All",
    examStatus: "All",
    resultStatus: "All",
  });

  const updateFilter = (name, value) => {
    setFilters((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const resetFilters = () => {
    setSearch("");
    setFilters({
      status: "All",
      paymentStatus: "All",
      admitCardStatus: "All",
      examStatus: "All",
      resultStatus: "All",
    });
  };

  const filteredJobs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return jobs.filter((job) => {
      const matchesSearch =
        !query ||
        [
          job.organization,
          job.post,
          job.userId,
          job.applicantName,
          job.mobile,
        ].some((value) =>
          String(value || "").toLowerCase().includes(query)
        );

      const matchesStatus =
        filters.status === "All" ||
        (job.status || "Applied") === filters.status;

      const matchesPayment =
        filters.paymentStatus === "All" ||
        (job.paymentStatus || "Pending") === filters.paymentStatus;

      const matchesAdmit =
        filters.admitCardStatus === "All" ||
        (job.admitCardStatus || "Not Published") ===
          filters.admitCardStatus;

      const matchesExam =
        filters.examStatus === "All" ||
        (job.examStatus || "Not Scheduled") === filters.examStatus;

      const matchesResult =
        filters.resultStatus === "All" ||
        (job.resultStatus || "Pending") === filters.resultStatus;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPayment &&
        matchesAdmit &&
        matchesExam &&
        matchesResult
      );
    });
  }, [jobs, search, filters]);

  return {
    search,
    setSearch,
    filters,
    updateFilter,
    resetFilters,
    filteredJobs,
  };
}
