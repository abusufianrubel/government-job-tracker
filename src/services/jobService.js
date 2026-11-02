
import { getDB } from "../db/database";

function normalize(value) {
  return String(value || "").trim().toLowerCase();
}

export async function getAllJobs() {
  const db = await getDB();
  return db.getAll("applications");
}

export async function getJobById(id) {
  const db = await getDB();
  return db.get("applications", Number(id));
}

export async function findDuplicateJob(job, excludeId = null) {
  const db = await getDB();
  const jobs = await db.getAll("applications");

  return jobs.find((existing) => {
    if (excludeId && existing.id === Number(excludeId)) {
      return false;
    }

    const sameUserId =
      normalize(existing.userId) === normalize(job.userId);

    const sameOrganization =
      normalize(existing.organization) === normalize(job.organization);

    const samePost =
      normalize(existing.post) === normalize(job.post);

    // Duplicate detection requires all three identifiers.
    return (
      normalize(job.userId) &&
      sameUserId &&
      sameOrganization &&
      samePost
    );
  }) || null;
}

export async function addJob(job) {
  const duplicate = await findDuplicateJob(job);

  if (duplicate) {
    return {
      success: false,
      duplicate: true,
      existingJob: duplicate,
    };
  }

  const db = await getDB();
  const now = new Date().toISOString();

  const newJob = {
    ...job,
    vacancy: Number(job.vacancy),
    createdAt: now,
    updatedAt: now,
  };

  const id = await db.add("applications", newJob);

  return {
    success: true,
    job: { ...newJob, id },
  };
}

export async function updateJob(id, changes) {
  const existing = await getJobById(id);

  if (!existing) {
    throw new Error("Application not found.");
  }

  const duplicate = await findDuplicateJob(changes, id);

  if (duplicate) {
    return {
      success: false,
      duplicate: true,
      existingJob: duplicate,
    };
  }

  const db = await getDB();

  const updatedJob = {
    ...existing,
    ...changes,
    vacancy: Number(changes.vacancy),
    updatedAt: new Date().toISOString(),
  };

  await db.put("applications", updatedJob);

  return {
    success: true,
    job: updatedJob,
  };
}

export async function deleteJob(id) {
  const db = await getDB();
  await db.delete("applications", Number(id));

  return true;
}
