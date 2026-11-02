# AGENTS.md

# Government Job Tracker – AI Agent Instructions

This document defines the development rules, architecture guidelines, coding standards, and implementation requirements for AI coding agents working on the Government Job Tracker project.

All AI agents must follow these instructions before modifying the project.

---

# 1. Project Overview

**Project Name:** Government Job Tracker

**Purpose:** A Chrome Extension for managing and tracking Bangladesh Government Job Applications from application submission to final recruitment results.

## Main Objectives

- Manage government job applications.
- Automatically import Teletalk Applicant Copy information.
- Manually enter vacancy information.
- Track payment status.
- Track admit card availability.
- Manage examination schedules.
- Receive examination notifications.
- Track examination results.
- Manage application documents.
- Search and filter applications.
- Generate application statistics.
- Export application data.
- Backup and restore application records.

---

# 2. Mandatory Technology Rules

The following technology choices are mandatory.

| Area                 | Technology         |
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

1. Use JavaScript only.
2. NEVER introduce TypeScript.
3. Use JSX for React components.
4. Use Tailwind CSS for styling.
5. Do not introduce custom CSS unless explicitly approved.
6. Use Lucide React for icons.
7. Use functional React components.
8. Use React Hooks appropriately.
9. Use ES Modules.
10. Follow the existing Vite configuration.

Do not introduce additional frameworks or libraries without explaining why they are necessary.

---

# 3. Existing Development Progress

The project is under active development.

## Completed Milestones

- Milestone 01 – Project Planning & Requirements
- Milestone 02 – Development Environment Setup
- Milestone 03 – Dashboard UI Development
- Milestone 04 – Core Job Management System
- Milestone 05 – Application Status Management
- Milestone 06 – Search, Filters & Application Details

## Current Milestone

**Milestone 07 – Applicant Copy Automatic Import**

Implemented or partially implemented:

- PDF Upload.
- PDF URL Import.
- PDF Text Extraction.
- Applicant Copy Parser.
- Import Preview.
- Manual Vacancy Entry.
- Duplicate Detection Integration.
- IndexedDB Integration.

Actual implementation and test coverage must be checked before assuming any task is complete.

## Upcoming Milestones

- Milestone 08 – Document Management
- Milestone 09 – Exam Notifications
- Milestone 10 – Dashboard Analytics
- Milestone 11 – Advanced Application Management
- Milestone 12 – JSON Backup & Restore
- Milestone 13 – Excel & PDF Export
- Milestone 14 – Bangla & English Localization
- Milestone 15 – Theme Completion
- Milestone 16 – Chrome Extension Conversion
- Milestone 17 – Government Website Integration
- Milestone 18 – Testing & Quality Assurance
- Milestone 19 – Security & Reliability
- Milestone 20 – Production Release

Refer to `PROJECT_ROADMAP.md` for the complete task breakdown.

---

# 4. Project Architecture

Follow a modular, component-based architecture.

## Architectural Principles

- Keep UI components separate from business logic.
- Keep database operations inside service modules.
- Keep reusable logic inside custom hooks.
- Keep parsing logic inside utility modules.
- Avoid oversized components.
- Avoid unnecessary code duplication.
- Prefer reusable components.
- Maintain predictable data flow.
- Avoid unnecessary global state.
- Preserve existing working architecture.

## Recommended Structure

text

```
src/
│
├── assets/
│
├── components/
│   ├── Sidebar.jsx
│   ├── Header.jsx
│   ├── StatCard.jsx
│   ├── ApplicationTable.jsx
│   ├── UpcomingExams.jsx
│   ├── JobForm.jsx
│   ├── JobSearch.jsx
│   ├── AdvancedFilters.jsx
│   ├── ApplicationDetails.jsx
│   ├── ApplicantImport.jsx
│   └── ImportPreview.jsx
│
├── hooks/
│   ├── useJobs.js
│   └── useJobFilters.js
│
├── services/
│   └── jobService.js
│
├── utils/
│   └── applicantParser.js
│
├── App.jsx
├── main.jsx
└── index.css

```

Additional folders may be introduced when necessary.

Do not reorganize the entire project without a clear technical reason.

---

# 5. React Development Rules

## Components

- Use functional components.
- Use descriptive component names.
- Keep components focused on one responsibility.
- Extract repeated UI into reusable components.
- Avoid deeply nested conditional rendering.
- Keep component props clear and predictable.

## Hooks

- Follow React Hooks rules.
- Keep reusable data logic inside custom hooks.
- Avoid unnecessary useEffect.
- Use useMemo only when useful.
- Use useCallback where stable references are beneficial.
- Handle loading and error states.

## State Management

Prefer local component state for local UI interactions.

Use custom hooks for reusable application logic.

Do not introduce Redux, Zustand, or another state management library without a clear requirement.

---

# 6. Tailwind CSS Rules

Tailwind CSS is the only approved styling approach.

## Required Practices

- Use Tailwind utility classes.
- Use consistent spacing.
- Use consistent border radius.
- Use responsive utility classes.
- Support Light Mode and Dark Mode.
- Maintain accessible color contrast.
- Use consistent status colors.

## Forbidden Practices

- Do not create unnecessary CSS files.
- Do not use inline style objects for ordinary styling.
- Do not introduce styled-components.
- Do not introduce CSS Modules.
- Do not introduce another CSS framework.

Use existing Tailwind configuration and project conventions.

---

# 7. Database & Data Management

IndexedDB is the primary database for application records.

Chrome Storage API should be used for lightweight extension preferences.

## Database Rules

- Keep database operations in service modules.
- Do not access IndexedDB directly inside UI components.
- Use asynchronous operations.
- Handle database errors.
- Validate records before saving.
- Preserve existing records during updates.
- Avoid accidental data deletion.
- Support database schema migrations.
- Maintain backward compatibility.

## Existing Service

`src/services/jobService.js`

Existing custom hook:

`src/hooks/useJobs.js`

The `useJobs` hook is responsible for:

- Loading applications.
- Creating applications.
- Updating applications.
- Deleting applications.
- Refreshing application data.
- Managing loading and error states.

Do not duplicate these responsibilities elsewhere.

## Data Integrity

Every application must have a unique ID.

Duplicate detection should use a combination of:

- User ID.
- Organization.
- Post name.

Handle missing User IDs safely.

Do not assume that every application has a User ID.

---

# 8. Applicant Copy Import Rules

Applicant Copy import is a core project feature.

## Supported Import Methods

1. PDF Upload.
2. Manual PDF URL Import.

## Automatically Extracted Fields

- Organization Name.
- Post Name.
- Bangla Post Name.
- Applicant Name.
- Bangla Applicant Name.
- User ID.
- Application Date.
- Payment Status.
- Mobile Number.
- Reference Number.

## Manual Field

Vacancy must always be manually entered by the user.

Do not attempt to infer vacancy from Applicant Copy.

## Import Workflow

text

```
PDF Upload / URL Import
          |
          v
    PDF Text Extraction
          |
          v
   Applicant Copy Parser
          |
          v
     Import Preview
          |
          v
    Manual Verification
          |
          v
    Vacancy Entry
          |
          v
    Duplicate Detection
          |
          v
       Validation
          |
          v
      IndexedDB Save

```

## Import Rules

- Never save imported data without user confirmation.
- Allow users to edit extracted information.
- Validate required fields.
- Validate vacancy as a positive integer.
- Handle missing fields.
- Handle malformed PDFs.
- Handle unsupported PDF formats.
- Handle URL fetching errors.
- Prevent duplicate applications.
- Never store passwords or SMS PINs.
- Avoid collecting unnecessary personal information.

## PDF Processing

Prefer browser-side PDF processing.

Support multiple Teletalk Applicant Copy layouts where practical.

Do not assume every government portal uses the same PDF format.

---

# 9. Application Status Rules

The system must support these application statuses:

- All Applications.
- Applied.
- Payment Pending.
- Admit Card Available.
- Exam Upcoming.
- Exam Completed.
- Result Pending.
- Passed.
- Failed.
- Closed.

## Result Statuses

- Pending.
- Passed.
- Failed.
- Waiting List.
- Viva Pending.
- Final Selected.
- Rejected.
- Cancelled / Closed.

Do not change existing status values without considering database compatibility.

---

# 10. Examination & Notification Rules

The examination system must support:

- Examination date.
- Examination time.
- Examination type.
- Examination center.
- Examination address.
- Examination instructions.

## Notification Schedule

- One day before examination.
- On examination day.

## Chrome Extension Requirements

When implementing extension notifications:

- Use Chrome Notifications API.
- Use Chrome Alarms API for scheduling.
- Handle browser restarts.
- Prevent duplicate notifications.
- Check notification permissions.
- Handle expired or cancelled schedules.
- Avoid relying on React timers for persistent background scheduling.

---

# 11. Chrome Extension Rules

The final application must use Chrome Manifest V3.

## Main Extension Components

- Popup UI.
- Full Dashboard.
- Background Service Worker.
- Manifest Configuration.
- Chrome Storage Integration.
- IndexedDB Integration.

## Security Rules

- Request only necessary permissions.
- Avoid broad host permissions.
- Do not use remote executable JavaScript.
- Follow Manifest V3 restrictions.
- Validate messages between extension contexts.
- Keep sensitive application information local.
- Do not expose private data to external websites.

Do not convert the project into a Chrome Extension prematurely. Complete and test the core features first.

---

# 12. Localization Rules

The interface must support:

- English.
- Bangla.

## Requirements

- Keep translations organized.
- Avoid hardcoding repeated UI text.
- Maintain consistent translation keys.
- Support Bangla Unicode.
- Ensure Bangla text renders correctly.
- Preserve user language preference.

Do not translate internal database enum values unless a migration strategy is provided.

---

# 13. Theme Rules

The application must support:

- Light Mode.
- Dark Mode.

## Requirements

- Maintain consistent theme colors.
- Support all components.
- Support modal dialogs.
- Support forms.
- Support tables.
- Support import screens.
- Persist theme preference.

Use Tailwind's existing dark mode configuration.

---

# 14. Error Handling Rules

Every asynchronous operation should have appropriate error handling.

Examples:

- IndexedDB errors.
- PDF extraction errors.
- URL fetch failures.
- Invalid user inputs.
- Duplicate application errors.
- Import validation errors.
- Backup restoration errors.
- Notification permission errors.

Provide understandable user-facing error messages.

Do not silently ignore important failures.

Avoid exposing sensitive technical details to end users.

---

# 15. Security & Privacy Rules

Applicant information can contain sensitive personal data.

Mandatory requirements:

1. Never collect account passwords.
2. Never collect SMS PINs.
3. Do not store NID unnecessarily.
4. Do not store passport information unnecessarily.
5. Do not store birth registration numbers unnecessarily.
6. Do not collect unrelated family information.
7. Process PDFs locally whenever possible.
8. Keep application records local by default.
9. Validate external URLs.
10. Avoid unsafe HTML rendering.
11. Do not execute imported PDF content.
12. Request minimum Chrome permissions.
13. Protect backup and restore operations.
14. Do not transmit applicant information without explicit user consent.

---

# 16. Coding Standards

## Naming Conventions

| Item             | Convention                         | Example          |
| ---------------- | ---------------------------------- | ---------------- |
| React Components | PascalCase                         | ApplicationTable |
| Hooks            | camelCase with use                 | useJobs          |
| Functions        | camelCase                          | createJob        |
| Variables        | camelCase                          | paymentStatus    |
| Constants        | UPPER_SNAKE_CASE where appropriate | DEFAULT_STATUS   |
| Files            | Existing project convention        | jobService.js    |

## Code Quality

- Write readable code.
- Use meaningful variable names.
- Avoid unnecessary comments.
- Add comments for complex logic.
- Avoid duplicated logic.
- Avoid excessively large functions.
- Avoid unnecessary dependencies.
- Remove unused imports.
- Remove unused variables.
- Keep code formatted consistently.

---

# 17. Testing Requirements

Every new feature must be tested before marking it complete.

## Mandatory Tests

- Application creation.
- Application editing.
- Application deletion.
- Duplicate detection.
- Search.
- Advanced filtering.
- PDF upload.
- PDF URL import.
- Applicant Copy parsing.
- Manual vacancy entry.
- Import validation.
- IndexedDB persistence.
- Payment tracking.
- Admit card tracking.
- Exam scheduling.
- Notifications.
- Result tracking.
- JSON backup.
- JSON restore.
- Excel export.
- PDF export.

Do not claim that a feature works unless it has actually been tested.

---

# 18. Git & Project Maintenance

- Keep changes focused.
- Avoid unrelated refactoring.
- Do not overwrite working code unnecessarily.
- Keep README.md updated.
- Keep PROJECT_ROADMAP.md updated.
- Keep AGENTS.md updated when development rules change.
- Use meaningful commit messages.
- Do not commit secrets or personal applicant data.
- Do not commit generated backup files.

---

# 19. AI Agent Workflow

Before implementing any task, the AI agent must follow this workflow.

## Step 1 – Inspect

- Inspect existing project structure.
- Read relevant components.
- Read existing hooks.
- Read service modules.
- Understand current data flow.
- Check package.json.
- Check relevant configuration.

## Step 2 – Plan

- Identify the files that need modification.
- Identify new files required.
- Identify dependencies.
- Identify possible side effects.
- Explain the implementation approach.

## Step 3 – Implement

- Follow existing architecture.
- Reuse existing components.
- Reuse existing hooks.
- Reuse existing services.
- Avoid unnecessary refactoring.
- Keep changes modular.

## Step 4 – Validate

- Run the appropriate build command.
- Check for syntax errors.
- Check for missing imports.
- Check React warnings.
- Test affected functionality.
- Verify data persistence.

## Step 5 – Report

At the end of every task, provide:

1. What was implemented.
2. Files created.
3. Files modified.
4. Dependencies added.
5. Commands executed.
6. Tests performed.
7. Remaining issues.
8. Next recommended task.

---

# 20. Important Instructions for AI Coding Agents

These instructions have the highest priority within project development.

1. Do not assume that a feature exists just because it appears in documentation.
2. Inspect the actual source code before modifying it.
3. Do not replace the entire App.jsx unnecessarily.
4. Do not break existing working features.
5. Do not introduce TypeScript.
6. Do not introduce custom CSS.
7. Do not change the database schema without considering existing records.
8. Do not create duplicate hooks or services.
9. Do not hardcode sensitive applicant information.
10. Do not mark untested functionality as completed.
11. Do not skip validation.
12. Do not remove existing functionality without approval.
13. Provide complete code when a complete file replacement is requested.
14. When modifying a file, clearly explain what to replace and where.
15. Prefer incremental implementation over large uncontrolled changes.

---

# 21. Current Development Priority

The immediate development priority is:

**Milestone 07 – Complete Applicant Copy Automatic Import.**

Priority tasks:

1. Verify PDF extraction with actual Teletalk Applicant Copies.
2. Improve parsing accuracy.
3. Complete manual vacancy validation.
4. Improve duplicate warning UI.
5. Verify PDF URL import.
6. Verify IndexedDB persistence.
7. Complete end-to-end import testing.

After Milestone 07, continue with:

**Milestone 08 – Document Management System.**

---

# Final Development Principle

Build a reliable, maintainable, privacy-conscious, and scalable Government Job Tracker.

Prioritize correctness, data integrity, usability, and backward compatibility over unnecessary complexity.

Every implementation must follow the existing project architecture and these instructions.

**Project Goal: Make Bangladesh Government Job Application Management simple, organized, and reliable.**