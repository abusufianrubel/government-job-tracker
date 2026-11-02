# CODING_STANDARDS.md

# Government Job Tracker

## Coding Standards & Development Guidelines

**Project:** Government Job Tracker\
**Version:** 1.0\
**Language:** JavaScript\
**Frontend:** React\
**Build Tool:** Vite\
**Styling:** Tailwind CSS\
**Icons:** Lucide React\
**Database:** IndexedDB\
**Platform:** Chrome Extension Manifest V3

---

# 1. Purpose

This document defines the coding standards, naming conventions, React development practices, file organization rules, error handling guidelines, and code quality requirements for the Government Job Tracker project.

All developers and AI coding agents must follow these standards.

The primary goals are:

- Maintain readable code.
- Maintain consistent coding style.
- Improve code reusability.
- Reduce unnecessary complexity.
- Prevent duplicated logic.
- Improve maintainability.
- Protect existing functionality.
- Support future scalability.

---

# 2. Mandatory Technology Rules

The following technologies are mandatory.

| Category             | Technology         |
| -------------------- | ------------------ |
| Programming Language | JavaScript         |
| Frontend             | React              |
| Build Tool           | Vite               |
| Styling              | Tailwind CSS       |
| Icons                | Lucide React       |
| Database             | IndexedDB          |
| Browser Storage      | Chrome Storage API |
| Extension Platform   | Chrome Manifest V3 |
| PDF Processing       | pdfjs-dist         |
| Excel Export         | xlsx               |
| PDF Export           | jsPDF              |

## Strict Rules

1. JavaScript only.
2. Never use TypeScript.
3. Use JSX for React components.
4. Use Tailwind CSS for styling.
5. Do not introduce custom CSS.
6. Use functional React components.
7. Use React Hooks.
8. Use ES Modules.
9. Avoid unnecessary dependencies.
10. Follow the existing Vite configuration.

Do not introduce another framework or styling system without explicit approval.

---

# 3. Naming Conventions

Consistent naming is mandatory.

## 3.1 Files and Folders

| Type             | Convention                          | Example                |
| ---------------- | ----------------------------------- | ---------------------- |
| React Components | PascalCase                          | `ApplicationTable.jsx` |
| Custom Hooks     | camelCase with use                  | `useJobs.js`           |
| Services         | camelCase                           | `jobService.js`        |
| Utility Files    | camelCase                           | `dateUtils.js`         |
| Constants        | camelCase or descriptive convention | `constants.js`         |
| Folders          | kebab-case or existing convention   | `applicant-import/`    |

Use the existing project convention when modifying existing files.

## 3.2 Variables

Use camelCase.

Good:

javascript

```
const applicantName = "John Doe";
const paymentStatus = "Paid";
const examDate = "2026-11-15";

```

Avoid:

javascript

```
const Applicant_Name = "John Doe";
const PAYMENTSTATUS = "Paid";
const x = "2026-11-15";

```

## 3.3 Functions

Use descriptive camelCase names.

Good:

javascript

```
function createJob() {}

function updatePaymentStatus() {}

function parseApplicantCopy() {}

function calculateDaysRemaining() {}

```

Avoid:

javascript

```
function doIt() {}

function handleData() {}

function x() {}

```

## 3.4 React Components

Use PascalCase.

javascript

```
function ApplicationDetails() {
  return <div>Application Details</div>;
}

export default ApplicationDetails;

```

## 3.5 Custom Hooks

All custom hooks must start with `use`.

javascript

```
function useJobs() {}

function useJobFilters() {}

function useNotifications() {}

```

## 3.6 Constants

Use descriptive names.

For fixed configuration values, prefer UPPER_SNAKE_CASE.

javascript

```
const MAX_PDF_SIZE = 10 * 1024 * 1024;

const DEFAULT_LANGUAGE = "en";

const APPLICATION_STATUSES = [
  "Applied",
  "Payment Pending",
  "Admit Card Available",
  "Exam Upcoming",
  "Exam Completed",
  "Closed"
];

```

---

# 4. JavaScript Standards

## 4.1 Use const by Default

Prefer `const` when reassignment is unnecessary.

javascript

```
const organization = "Department of National Savings";

let paymentStatus = "Pending";

paymentStatus = "Paid";

```

Avoid unnecessary `var`.

## 4.2 Use Strict Equality

Always prefer:

javascript

```
if (job.id === selectedJobId) {
  // Logic
}

```

Avoid:

javascript

```
if (job.id == selectedJobId) {
  // Logic
}

```

## 4.3 Use Optional Chaining

Use optional chaining when accessing potentially missing properties.

javascript

```
const userId = job?.userId || "";

```

## 4.4 Use Nullish Coalescing

Use `??` when zero, false, and empty strings should remain valid values.

javascript

```
const vacancy = job.vacancy ?? 0;

```

Do not replace valid zero values accidentally with fallback values.

## 4.5 Use Template Literals

javascript

```
const message = `Application for ${job.post} saved successfully.`;

```

Avoid unnecessary string concatenation.

## 4.6 Avoid Deeply Nested Conditions

Prefer early returns.

Good:

javascript

```
function validateJob(job) {
  if (!job) {
    return {
      success: false,
      message: "Invalid application."
    };
  }

  if (!job.organization) {
    return {
      success: false,
      message: "Organization is required."
    };
  }

  return {
    success: true
  };
}

```

---

# 5. React Coding Standards

## 5.1 Functional Components

Always use functional React components.

jsx

```
function StatCard({ title, value, icon }) {
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm">
      <h3 className="text-sm text-slate-500">
        {title}
      </h3>

      <p className="mt-2 text-2xl font-bold">
        {value}
      </p>
    </div>
  );
}

export default StatCard;

```

Do not introduce class components.

## 5.2 Component Responsibilities

Each component should have one primary responsibility.

Examples:

| Component        | Responsibility              |
| ---------------- | --------------------------- |
| Sidebar          | Navigation                  |
| Header           | Theme and language controls |
| StatCard         | Display statistics          |
| JobForm          | Application form            |
| ApplicationTable | Display applications        |
| ApplicantImport  | Import Applicant Copy       |
| ImportPreview    | Review imported information |

Avoid making one component responsible for the entire application.

## 5.3 Component Size

Keep components reasonably small.

When a component becomes difficult to understand:

- Extract reusable UI.
- Move business logic into hooks.
- Move database logic into services.
- Move formatting logic into utilities.

Do not split components unnecessarily.

## 5.4 Props

Use clear and descriptive prop names.

Good:

jsx

```
<ApplicationTable
  applications={filteredJobs}
  onEdit={handleEdit}
  onDelete={handleDelete}
  onView={handleView}
/>

```

Avoid unclear props:

jsx

```
<Table
  data={jobs}
  fn1={edit}
  fn2={remove}
/>

```

## 5.5 Avoid Prop Drilling

For deeply shared state, consider an appropriate Context Provider.

However, do not introduce Context or another state management library for every small state value.

Use local state whenever possible.

---

# 6. React Hooks Standards

## 6.1 useState

Use for component-level state.

javascript

```
const [showForm, setShowForm] = useState(false);

const [selectedJob, setSelectedJob] = useState(null);

```

## 6.2 useEffect

Use effects for synchronization with external systems.

Examples:

- Loading data.
- Browser event listeners.
- External subscriptions.

Avoid using effects for calculations that can be performed during rendering.

## 6.3 useMemo

Use when memoization provides a meaningful benefit.

javascript

```
const passedJobs = useMemo(() => {
  return jobs.filter(
    (job) => job.resultStatus === "Passed"
  );
}, [jobs]);

```

Do not use `useMemo` for every variable.

## 6.4 useCallback

Use when stable function references are beneficial.

javascript

```
const refreshJobs = useCallback(async () => {
  const data = await getAllJobs();
  setJobs(data);
}, []);

```

## 6.5 Custom Hooks

Reusable application logic should be implemented through custom hooks.

Existing hooks:

- `useJobs.js`
- `useJobFilters.js`

Do not duplicate their responsibilities inside new components.

## 6.6 Rules of Hooks

- Call hooks only at the top level.
- Never call hooks inside conditions.
- Never call hooks inside loops.
- Never call hooks inside nested functions.
- Keep hook order consistent.

---

# 7. Tailwind CSS Standards

Tailwind CSS is the only approved styling solution.

## 7.1 Use Utility Classes

Good:

jsx

```
<div className="flex items-center justify-between rounded-xl bg-white p-5 shadow-sm dark:bg-slate-900">
  Content
</div>

```

## 7.2 Avoid Custom CSS

Do not create custom CSS classes for ordinary styling.

Forbidden example:

css

```
.custom-card {
  padding: 20px;
  border-radius: 12px;
}

```

Use Tailwind utilities instead.

## 7.3 Responsive Design

Use responsive breakpoints.

jsx

```
<div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
  Content
</div>

```

## 7.4 Dark Mode

Every major UI component must support dark mode.

jsx

```
<div className="bg-white text-slate-800 dark:bg-slate-900 dark:text-white">
  Content
</div>

```

## 7.5 Consistent Spacing

Prefer a consistent spacing scale.

Examples:

- `p-4`
- `p-5`
- `p-6`
- `gap-4`
- `gap-5`
- `mb-6`

Avoid arbitrary spacing values unless necessary.

---

# 8. Icon Standards

Use Lucide React.

jsx

```
import {
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Clock,
  Plus,
  Search
} from "lucide-react";

```

Example:

jsx

```
<button className="flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-white">
  <Plus size={18} />
  Add Application
</button>

```

Rules:

- Use consistent icon sizes.
- Use meaningful icons.
- Avoid unnecessary decorative icons.
- Use accessible labels for icon-only buttons.

Do not introduce another icon library without approval.

---

# 9. File Organization Standards

Keep files organized according to their responsibilities.

Recommended structure:

text

```
src/
│
├── components/
│   ├── common/
│   ├── layout/
│   └── applications/
│
├── features/
│   ├── dashboard/
│   ├── applications/
│   ├── applicant-import/
│   ├── examinations/
│   ├── results/
│   ├── documents/
│   ├── notifications/
│   ├── analytics/
│   ├── backup/
│   └── export/
│
├── hooks/
│
├── services/
│   ├── database/
│   └── jobService.js
│
├── utils/
│
├── locales/
│
├── App.jsx
└── main.jsx

```

This is a target organization. Do not move existing files without a clear implementation requirement.

---

# 10. Service Layer Standards

Database and external service operations must remain outside UI components.

Example:

javascript

```
import {
  getAllJobs,
  addJob,
  updateJob,
  deleteJob
} from "../services/jobService";

```

Services should:

- Handle data persistence.
- Validate incoming data.
- Handle asynchronous operations.
- Return predictable results.
- Handle database errors.
- Avoid depending on React components.

## Standard Service Response

Use a consistent response structure where appropriate.

Success:

javascript

```
{
  success: true,
  job: savedJob
}

```

Failure:

javascript

```
{
  success: false,
  message: "Unable to save application."
}

```

Do not silently swallow important errors.

---

# 11. Database Coding Standards

IndexedDB is the primary application database.

Rules:

1. Never access IndexedDB directly inside React components.
2. Use service modules.
3. Use asynchronous database operations.
4. Handle transaction errors.
5. Validate data before saving.
6. Preserve existing records.
7. Use unique record IDs.
8. Implement migrations when schemas change.
9. Avoid unnecessary database queries.
10. Handle missing records safely.

## Example

javascript

```
export async function createJob(job) {
  try {
    const savedJob = await addJob(job);

    return {
      success: true,
      job: savedJob
    };
  } catch (error) {
    console.error("Create job failed:", error);

    return {
      success: false,
      message: "Failed to save application."
    };
  }
}

```

The exact implementation must follow the existing `jobService.js` contract.

---

# 12. Applicant Copy Parsing Standards

Applicant Copy parsing must be implemented separately from React UI.

Recommended file:

`src/utils/applicantParser.js`

Responsibilities:

- Normalize extracted text.
- Identify field labels.
- Extract organization information.
- Extract post name.
- Extract applicant name.
- Extract User ID.
- Extract mobile number.
- Extract application date.
- Extract payment status.
- Extract reference number.

## Important Rules

- Do not assume every Teletalk website has the same layout.
- Support English and Bangla labels where available.
- Handle missing fields.
- Handle unexpected formatting.
- Validate extracted data.
- Never infer vacancy.
- Vacancy must be entered manually.
- Do not automatically save without user confirmation.

## Parsing Example

javascript

```
function parseApplicantCopy(text) {
  if (!text || typeof text !== "string") {
    return {
      success: false,
      data: null,
      message: "Invalid Applicant Copy text."
    };
  }

  const normalizedText = text.replace(/\s+/g, " ").trim();

  return {
    success: true,
    data: {
      organization: "",
      post: "",
      applicantName: "",
      userId: "",
      mobile: "",
      applicationDate: "",
      paymentStatus: "Pending",
      referenceNo: "",
      vacancy: ""
    },
    normalizedText
  };
}

```

This is a structural example, not a complete production parser.

---

# 13. Form Validation Standards

All forms must validate user input before submission.

## Application Validation

Required fields should be defined centrally.

Examples:

- Organization.
- Post Name.
- Vacancy.
- Applicant Name where applicable.

## Vacancy Validation

javascript

```
function validateVacancy(value) {
  const vacancy = Number(value);

  if (!Number.isInteger(vacancy) || vacancy <= 0) {
    return {
      valid: false,
      message: "Vacancy must be a positive integer."
    };
  }

  return {
    valid: true,
    value: vacancy
  };
}

```

## Validation Rules

- Display clear error messages.
- Prevent invalid submissions.
- Do not silently modify user input.
- Handle optional fields appropriately.
- Normalize data before persistence.

---

# 14. Error Handling Standards

All asynchronous operations must use appropriate error handling.

Use try/catch where failures are expected.

javascript

```
async function loadApplications() {
  try {
    const jobs = await getAllJobs();

    return jobs;
  } catch (error) {
    console.error("Failed to load applications:", error);

    throw new Error("Unable to load applications.");
  }
}

```

## Error Categories

- Database errors.
- PDF processing errors.
- URL import errors.
- Validation errors.
- Duplicate detection errors.
- Notification errors.
- Backup errors.
- Export errors.

Provide understandable user-facing messages.

Avoid exposing unnecessary technical information.

---

# 15. Async/Await Standards

Prefer async/await for asynchronous code.

Good:

javascript

```
async function saveApplication(formData) {
  try {
    const result = await createJob(formData);

    return result;
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Unable to save application."
    };
  }
}

```

Avoid unnecessary promise chaining.

Always handle rejected promises.

---

# 16. Data Formatting Standards

Keep formatting logic in utility files.

Examples:

- Date formatting.
- Currency formatting.
- Status labels.
- Phone number display.
- Vacancy formatting.
- Text normalization.

Recommended:

`src/utils/formatters.js`

Use ISO date strings for persisted dates where appropriate.

Avoid storing localized display dates as the primary date representation.

---

# 17. Status Management Standards

Use consistent internal status values.

## Application Status

- Applied.
- Payment Pending.
- Admit Card Available.
- Exam Upcoming.
- Exam Completed.
- Result Pending.
- Closed.

## Result Status

- Pending.
- Passed.
- Failed.
- Waiting List.
- Viva Pending.
- Final Selected.
- Rejected.
- Cancelled / Closed.

Do not use inconsistent spellings or create duplicate status values.

Display labels can be translated independently.

---

# 18. Security Standards

Applicant information may contain sensitive personal data.

Mandatory requirements:

- Never store account passwords.
- Never store SMS PINs.
- Do not collect unnecessary NID information.
- Do not collect unnecessary passport information.
- Keep application data local by default.
- Do not transmit applicant data without consent.
- Validate external URLs.
- Avoid unsafe HTML rendering.
- Do not execute imported content.
- Request minimum Chrome permissions.
- Validate extension messages.
- Avoid exposing private data in logs.

Use only the applicant information required for application tracking.

---

# 19. Chrome Extension Coding Standards

The final extension must use Manifest V3.

Rules:

- Use a background service worker.
- Use Chrome Alarms API for scheduled reminders.
- Use Chrome Notifications API for notifications.
- Request minimum permissions.
- Handle service worker restarts.
- Validate runtime messages.
- Avoid remote executable code.
- Keep popup lightweight.
- Share the same database schema between popup and dashboard.

Do not use React timers as the primary persistent notification scheduler.

---

# 20. Performance Standards

- Avoid unnecessary re-renders.
- Use pagination for large lists.
- Avoid unnecessary database reloads.
- Use memoization where beneficial.
- Avoid expensive operations during rendering.
- Process PDF files asynchronously.
- Release PDF resources after processing.
- Avoid loading unnecessary libraries.
- Keep popup rendering lightweight.

Prioritize practical performance improvements over premature optimization.

---

# 21. Accessibility Standards

All interactive elements should be accessible.

Requirements:

- Use semantic HTML.
- Provide labels for form fields.
- Provide accessible names for icon-only buttons.
- Support keyboard navigation.
- Maintain sufficient color contrast.
- Use visible focus states.
- Do not communicate status through color alone.
- Provide meaningful empty states.
- Ensure modals are keyboard accessible.

---

# 22. Testing Standards

Every new feature must be tested.

## Unit Tests

Test:

- Utility functions.
- Applicant Copy parser.
- Duplicate detection.
- Validation.
- Date calculations.
- Status calculations.

## Integration Tests

Test:

- Application CRUD.
- IndexedDB persistence.
- PDF import.
- URL import.
- Backup and restore.
- Export functionality.

## Manual Tests

Test:

- Light Mode.
- Dark Mode.
- Bangla interface.
- English interface.
- Search.
- Filters.
- Form validation.
- Duplicate warnings.
- Browser restart.
- Chrome notifications.

Do not mark a feature as completed until relevant tests pass.

---

# 23. Git & Code Maintenance Standards

- Use meaningful commit messages.
- Keep commits focused.
- Avoid committing personal applicant data.
- Never commit secrets.
- Do not commit unnecessary generated files.
- Update documentation when architecture changes.
- Remove unused code.
- Remove unused dependencies.
- Preserve working functionality.

Example commit messages:

text

```
feat: add applicant copy PDF import

fix: correct duplicate application detection

refactor: improve job service architecture

docs: update architecture documentation

test: add applicant parser unit tests

```

---

# 24. AI Coding Agent Rules

Before modifying any code, AI agents must:

1. Read `AGENTS.md`.
2. Read `ARCHITECTURE.md`.
3. Read `CODING_STANDARDS.md`.
4. Inspect the actual project files.
5. Understand existing data flow.
6. Identify affected components and services.
7. Explain the implementation plan.
8. Make focused changes.
9. Run relevant tests.
10. Report modified files.

## Additional Rules

- Never replace an entire file unnecessarily.
- When a full replacement is requested, provide the complete file.
- Explain exactly where code belongs.
- Do not invent existing functions or files.
- Do not assume a feature is implemented.
- Do not break existing functionality.
- Do not introduce TypeScript.
- Do not introduce custom CSS.
- Do not introduce unnecessary dependencies.
- Do not claim tests passed unless actually executed.

---

# 25. Definition of Done

A feature is considered complete only when:

- Implementation is complete.
- Existing functionality remains operational.
- Input validation works.
- Error handling works.
- Data persistence works where applicable.
- Light Mode works.
- Dark Mode works.
- Bangla interface works where applicable.
- English interface works where applicable.
- Relevant tests pass.
- No critical console errors remain.
- Documentation is updated where necessary.

---

# 26. Final Coding Principles

Every developer and AI agent must prioritize:

1. Readability over cleverness.
2. Simplicity over unnecessary abstraction.
3. Reusability over duplication.
4. Data integrity over convenience.
5. Security over shortcuts.
6. Maintainability over quick hacks.
7. Testing over assumptions.
8. Incremental development over uncontrolled refactoring.

**Final Principle: Write code that another developer can understand, maintain, test, and extend without having to rewrite the entire project.**