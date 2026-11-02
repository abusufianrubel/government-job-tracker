// import { openDB } from "idb";

// const DB_NAME = "government-job-tracker";
// const DB_VERSION = 1;

// export const dbPromise = openDB(DB_NAME, DB_VERSION, {
//   upgrade(db) {
//     if (!db.objectStoreNames.contains("applications")) {
//       const store = db.createObjectStore("applications", {
//         keyPath: "id",
//         autoIncrement: true,
//       });

//       store.createIndex("userId", "userId");
//       store.createIndex("organization", "organization");
//       store.createIndex("post", "post");
//       store.createIndex("applicationDate", "applicationDate");
//     }
//   },
// });

// export async function getDB() {
//   return dbPromise;
// }


import { openDB } from "idb";

const DB_NAME = "government-job-tracker";
const DB_VERSION = 2;

export const dbPromise = openDB(DB_NAME, DB_VERSION, {
  upgrade(db, oldVersion) {
    if (!db.objectStoreNames.contains("applications")) {
      const store = db.createObjectStore("applications", {
        keyPath: "id",
        autoIncrement: true,
      });

      store.createIndex("userId", "userId");
      store.createIndex("organization", "organization");
      store.createIndex("post", "post");
      store.createIndex("applicationDate", "applicationDate");
    }

    if (oldVersion < 2) {
      // Version 2 introduces lifecycle management fields.
      // Existing records remain intact.
    }
  },
});

export async function getDB() {
  return dbPromise;
}
