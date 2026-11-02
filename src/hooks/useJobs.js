
// import { useCallback, useEffect, useState } from "react";

// import {
//   getAllJobs,
//   addJob,
//   updateJob,
//   deleteJob,
// } from "../services/jobService";

// export default function useJobs() {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const refreshJobs = useCallback(async () => {
//     try {
//       setError("");
//       const data = await getAllJobs();
//       setJobs(data);
//     } catch (err) {
//       setError(err.message || "Failed to load applications.");
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     refreshJobs();
//   }, [refreshJobs]);

//   const createJob = async (job) => {
//     const result = await addJob(job);

//     if (result.success) {
//       await refreshJobs();
//     }

//     return result;
//   };

//   const editJob = async (id, changes) => {
//     const result = await updateJob(id, changes);

//     if (result.success) {
//       await refreshJobs();
//     }

//     return result;
//   };

//   const removeJob = async (id) => {
//     await deleteJob(id);
//     await refreshJobs();
//   };

//   return {
//     jobs,
//     loading,
//     error,
//     refreshJobs,
//     createJob,
//     editJob,
//     removeJob,
//   };
// }



import { useCallback, useEffect, useState } from "react";

import {
  getAllJobs,
  addJob,
  updateJob,
  deleteJob,
} from "../services/jobService";

// Normalize values for duplicate comparison
function normalize(value) {
  return String(value || "")
    .trim()
    .toLowerCase();
}

// Check duplicate applications
function findDuplicate(jobs, newJob, excludeId = null) {
  const userId = normalize(newJob.userId);
  const organization = normalize(newJob.organization);
  const post = normalize(newJob.post);

  // User ID is required for this duplicate rule
  if (!userId || !organization || !post) {
    return null;
  }

  return jobs.find((job) => {
    if (job.id === excludeId) return false;

    return (
      normalize(job.userId) === userId &&
      normalize(job.organization) === organization &&
      normalize(job.post) === post
    );
  }) || null;
}

export default function useJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Refresh applications from IndexedDB
  const refreshJobs = useCallback(async () => {
    try {
      setError("");

      const data = await getAllJobs();

      setJobs(data);
      return data;
    } catch (err) {
      setError(err.message || "Failed to load applications.");
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshJobs();
  }, [refreshJobs]);

  // Create application with duplicate detection
  const createJob = async (job) => {
    try {
      const currentJobs = await getAllJobs();

      const duplicate = findDuplicate(currentJobs, job);

      if (duplicate) {
        return {
          success: false,
          duplicate: true,
          existingJob: duplicate,
          message: "This application already exists.",
        };
      }

      const result = await addJob(job);

      if (result.success) {
        await refreshJobs();
      }

      return result;
    } catch (err) {
      setError(err.message || "Failed to create application.");

      return {
        success: false,
        message: err.message || "Failed to create application.",
      };
    }
  };

  // Update application
  const editJob = async (id, changes) => {
    try {
      const currentJobs = await getAllJobs();

      const duplicate = findDuplicate(
        currentJobs,
        changes,
        id
      );

      if (duplicate) {
        return {
          success: false,
          duplicate: true,
          existingJob: duplicate,
          message: "Another application with these details already exists.",
        };
      }

      const result = await updateJob(id, changes);

      if (result.success) {
        await refreshJobs();
      }

      return result;
    } catch (err) {
      setError(err.message || "Failed to update application.");

      return {
        success: false,
        message: err.message || "Failed to update application.",
      };
    }
  };

  // Delete application
  const removeJob = async (id) => {
    try {
      await deleteJob(id);
      await refreshJobs();

      return { success: true };
    } catch (err) {
      setError(err.message || "Failed to delete application.");

      return {
        success: false,
        message: err.message || "Failed to delete application.",
      };
    }
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
