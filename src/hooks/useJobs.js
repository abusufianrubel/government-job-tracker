
import { useCallback, useEffect, useState } from "react";

import {
  getAllJobs,
  addJob,
  updateJob,
  deleteJob,
} from "../services/jobService";

export default function useJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const refreshJobs = useCallback(async () => {
    try {
      setError("");
      const data = await getAllJobs();
      setJobs(data);
    } catch (err) {
      setError(err.message || "Failed to load applications.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshJobs();
  }, [refreshJobs]);

  const createJob = async (job) => {
    const result = await addJob(job);

    if (result.success) {
      await refreshJobs();
    }

    return result;
  };

  const editJob = async (id, changes) => {
    const result = await updateJob(id, changes);

    if (result.success) {
      await refreshJobs();
    }

    return result;
  };

  const removeJob = async (id) => {
    await deleteJob(id);
    await refreshJobs();
  };

  return {
    jobs,
    loading,
    error,
    refreshJobs,
    createJob,
    editJob,
    removeJob,
  };
}
