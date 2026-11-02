# Government Job Tracker

## Project Roadmap, Milestones & Tasklist

**Project Type:** Chrome Extension\
**Frontend:** React + JavaScript (No TypeScript)\
**Build Tool:** Vite\
**Styling:** Tailwind CSS\
**Icons:** Lucide React\
**Storage:** IndexedDB / Chrome Local Storage\
**Architecture:** Component-Based, Modular, Scalable\
**UI Theme:** Light & Dark Mode\
**Language:** Bangla & English\
**Platform:** Windows 11 / Google Chrome

---

# 1. Project Overview

Government Job Tracker is a Chrome Extension designed to help users manage and track their Bangladesh Government Job Applications from application submission to final recruitment results.

The extension will provide:

- Government Job Application Management
- Automatic Applicant Copy Import
- Manual Vacancy Entry
- Payment Status Tracking
- Admit Card Management
- Exam Date Tracking
- Exam Notifications
- Result Tracking
- Application Document Management
- Advanced Search and Filters
- Statistics and Analytics
- Data Backup and Restore
- Excel and PDF Export

## Core Workflow

1. Apply for a government job.
2. Import Applicant Copy automatically.
3. Enter vacancy manually.
4. Verify and save application information.
5. Track payment status.
6. Track admit card availability.
7. Record exam dates.
8. Receive exam notifications.
9. Update examination status.
10. Track results.
11. Mark final selection or rejection.
12. Close completed applications.

---

# 2. Technology Stack

| Area              | Technology                   |
| ----------------- | ---------------------------- |
| Language          | JavaScript                   |
| Frontend          | React                        |
| Build Tool        | Vite                         |
| Styling           | Tailwind CSS                 |
| Icons             | Lucide React                 |
| Browser Platform  | Chrome Extension Manifest V3 |
| Database          | IndexedDB                    |
| Small Preferences | Chrome Storage API           |
| PDF Extraction    | pdfjs-dist                   |
| Date Handling     | JavaScript Date API          |
| Excel Export      | xlsx                         |
| PDF Export        | jsPDF                        |
| Notifications     | Chrome Notifications API     |
| Routing           | React Router                 |
| Version Control   | Git                          |
| Package Manager   | npm                          |

---

# 3. Milestone Breakdown

## Milestone 01 – Project Planning & Requirements

**Status: COMPLETED**

- Define project objectives.
- Define target users.
- Identify supported government job websites.
- Select application tracking features.
- Define payment tracking requirements.
- Define admit card tracking requirements.
- Define examination tracking requirements.
- Define result tracking requirements.
- Define data storage requirements.
- Define notification requirements.
- Define import requirements.
- Define backup and restore requirements.
- Define export requirements.
- Define language requirements.
- Define Light and Dark Mode requirements.
- Prepare initial PRD.

## Milestone 02 – Development Environment Setup

**Status: COMPLETED**

- Install Node.js.
- Install VS Code.
- Configure Windows 11 development environment.
- Create Vite project.
- Configure React JavaScript.
- Configure Tailwind CSS.
- Install Lucide React.
- Run development server.
- Verify React application in browser.

## Milestone 03 – Dashboard UI Development

**Status: COMPLETED**

- Create application layout.
- Create collapsible sidebar.
- Create dashboard header.
- Create statistics cards.
- Create application table.
- Create upcoming examination section.
- Implement navigation.
- Implement Light Mode.
- Implement Dark Mode.
- Implement language toggle.
- Create reusable UI components.
- Implement responsive layout.

## Milestone 04 – Core Job Management System

**Status: COMPLETED**

- Create job data structure.
- Create IndexedDB service.
- Implement add application.
- Implement edit application.
- Implement delete application.
- Implement application listing.
- Implement useJobs custom hook.
- Implement data refresh.
- Implement application details.
- Implement JobForm.
- Implement application table integration.
- Test CRUD operations.

## Milestone 05 – Application Status & Tracking

**Status: COMPLETED**

- Application status management.
- Payment status management.
- Admit card status management.
- Admit card download tracking.
- Examination status management.
- Examination date management.
- Result status management.
- Final application status management.
- Update application details.
- Test status changes.

### Application Status

- Applied
- Payment Pending
- Payment Completed
- Admit Card Available
- Exam Upcoming
- Exam Completed
- Result Pending
- Passed
- Failed
- Closed

### Result Status

- Pending
- Passed
- Failed
- Waiting List
- Viva Pending
- Final Selected
- Rejected
- Cancelled / Closed

## Milestone 06 – Search, Filters & Application Details

**Status: COMPLETED**

- Create JobSearch component.
- Create AdvancedFilters component.
- Create useJobFilters hook.
- Search by organization.
- Search by post name.
- Search by User ID.
- Search by applicant name.
- Filter by application status.
- Filter by payment status.
- Filter by admit card status.
- Filter by exam status.
- Filter by result status.
- Reset filters.
- Create ApplicationDetails page.
- Integrate search and filters.
- Test filtering functionality.

## Milestone 07 – Applicant Copy Automatic Import

**Status: IN PROGRESS**

### 7.1 PDF Import Infrastructure

- Install pdfjs-dist.
- Create applicantParser.js.
- Configure PDF.js worker.
- Extract text from PDF.
- Create ApplicantImport component.
- Create PDF upload interface.
- Implement PDF URL input.
- Implement PDF URL fetching.
- Implement basic error handling.

### 7.2 Teletalk Applicant Copy Parser

- Detect organization name.
- Extract post name.
- Extract Bangla post name.
- Extract applicant name.
- Extract Bangla applicant name.
- Extract User ID.
- Extract application date.
- Extract payment status.
- Extract mobile number.
- Extract reference number.
- Keep vacancy as manual entry.
- Validate extraction using actual Teletalk PDF files.
- Support different Teletalk department layouts.
- Handle missing fields.
- Handle scanned PDF limitations.
- Add OCR support if needed.

### 7.3 Import Preview

- Create ImportPreview component.
- Display extracted information.
- Allow editing extracted fields.
- Add manual vacancy input.
- Validate vacancy.
- Validate organization name.
- Validate post name.
- Display missing-field warnings.
- Display extraction confidence.
- Add import cancellation.

### 7.4 Duplicate Detection

- Check duplicate User ID.
- Check organization.
- Check post name.
- Prevent duplicate creation through useJobs.
- Display detailed duplicate warning UI.
- Allow opening existing application.
- Test duplicate PDF import.
- Test duplicate URL import.
- Test duplicate manual application.
- Handle concurrent duplicate creation.

### 7.5 Import Integration

- Connect ApplicantImport to App.jsx.
- Connect ImportPreview to App.jsx.
- Connect createJob.
- Verify IndexedDB persistence.
- Test complete PDF import workflow.
- Test complete URL import workflow.
- Test imported data after browser refresh.

### 7.6 Import Security

- Validate uploaded file type.
- Limit PDF file size.
- Restrict URL protocols.
- Prevent unsafe URL access.
- Avoid collecting NID and unnecessary personal data.
- Never collect passwords or SMS PINs.
- Process PDF locally.
- Handle inaccessible URLs safely.

**Milestone 07 Completion Criteria:**

Applicant Copy PDF must be imported, parsed, manually verified, checked for duplicates, and saved successfully into IndexedDB.

---

## Milestone 08 – Document Management System

**Status: NOT STARTED**

### 8.1 Document Categories

- Applicant Copy
- Job Circular PDF
- Admit Card
- Other Documents

### 8.2 Document Management

- Add document URL.
- Edit document URL.
- Delete document URL.
- Open document in browser.
- Associate documents with applications.
- Display document availability.
- Validate document URLs.
- Prevent duplicate document links.

### 8.3 Document UI

- Create DocumentCard component.
- Create DocumentList component.
- Add document section to ApplicationDetails.
- Add document status indicators.
- Add open/download actions where supported.

**Completion Criteria:** Every application can maintain separate links for Circular, Applicant Copy and Admit Card.

---

## Milestone 09 – Exam Date Notification System

**Status: NOT STARTED**

### 9.1 Exam Scheduling

- Add examination date.
- Add examination time.
- Add examination type.
- Add examination center.
- Add examination address.
- Add examination instructions.
- Edit examination schedule.
- Cancel examination schedule.

### 9.2 Notification System

- Request Chrome notification permission.
- Implement Chrome Notifications API.
- Notify one day before examination.
- Notify on examination day.
- Avoid duplicate notifications.
- Handle missed notifications.
- Support notification settings.
- Add notification history.
- Support disabled notifications.

### 9.3 Notification UI

- Create NotificationCenter component.
- Display upcoming exams.
- Display notification history.
- Add notification settings.
- Add notification permission status.

**Completion Criteria:** Users receive notifications one day before and on the examination day, subject to browser and operating-system notification permissions.

---

## Milestone 10 – Advanced Dashboard Statistics

**Status: NOT STARTED**

### 10.1 Application Statistics

- Total applications.
- Total paid applications.
- Total unpaid applications.
- Total admit cards downloaded.
- Total upcoming examinations.
- Total completed examinations.
- Total pending results.
- Total passed.
- Total failed.
- Total selected.
- Total closed applications.

### 10.2 Analytics

- Application status distribution.
- Result status distribution.
- Payment status distribution.
- Monthly application statistics.
- Examination statistics.
- Success rate.
- Organization-wise statistics.

### 10.3 Dashboard UI

- Create Analytics page.
- Add charts.
- Add statistics cards.
- Add date filters.
- Add organization filters.

**Completion Criteria:** Dashboard statistics must be calculated from actual IndexedDB records.

---

## Milestone 11 – Advanced Application Management

**Status: NOT STARTED**

- Application sorting.
- Sort by application date.
- Sort by examination date.
- Sort by organization.
- Sort by vacancy.
- Filter by date range.
- Filter by organization.
- Filter by vacancy range.
- Saved filters.
- Application notes.
- Application activity history.
- Bulk selection.
- Bulk status update.
- Bulk delete with confirmation.
- Archive applications.
- Restore archived applications.
- Pagination for large datasets.

---

## Milestone 12 – Backup & Restore System

**Status: NOT STARTED**

### 12.1 JSON Backup

- Export all applications to JSON.
- Include application details.
- Include status information.
- Include document URLs.
- Include examination information.
- Include result information.
- Include backup metadata.
- Include schema version.

### 12.2 JSON Restore

- Upload JSON backup.
- Validate backup structure.
- Validate schema version.
- Preview backup contents.
- Detect duplicate records.
- Provide Merge option.
- Provide Replace option.
- Confirm before replacing existing data.
- Restore applications.
- Verify restored records.

### 12.3 Backup Safety

- Handle corrupted backup.
- Handle invalid JSON.
- Handle partial restore failure.
- Prevent accidental data loss.
- Display restore summary.

**Completion Criteria:** Users can safely export and restore their complete application data.

---

## Milestone 13 – Excel & PDF Export

**Status: NOT STARTED**

### 13.1 Excel Export

- Install xlsx.
- Export all applications.
- Export filtered applications.
- Export selected applications.
- Include application status.
- Include payment status.
- Include examination dates.
- Include result status.
- Format Excel columns.
- Add export date.

### 13.2 PDF Export

- Install jsPDF.
- Export application list.
- Export individual application details.
- Export statistics report.
- Support Bangla text through embedded Unicode fonts.
- Add report title.
- Add export date.
- Add page numbers.

**Completion Criteria:** Users can export their data into usable Excel and PDF reports.

---

## Milestone 14 – Bangla & English Localization

**Status: NOT STARTED**

- Create translation structure.
- Add English translations.
- Add Bangla translations.
- Translate sidebar.
- Translate dashboard.
- Translate forms.
- Translate application statuses.
- Translate notifications.
- Translate filters.
- Translate error messages.
- Translate export labels.
- Persist language preference.
- Test both languages.

**Completion Criteria:** All major interface elements must support Bangla and English.

---

## Milestone 15 – Light & Dark Mode

**Status: PARTIALLY COMPLETED**

- Add Light Mode.
- Add Dark Mode toggle.
- Apply theme to main dashboard.
- Apply theme to every component.
- Apply theme to modal dialogs.
- Apply theme to import pages.
- Apply theme to document pages.
- Apply theme to notification pages.
- Persist theme preference.
- Test theme consistency.

---

## Milestone 16 – Chrome Extension Conversion

**Status: NOT STARTED**

### 16.1 Extension Setup

- Create manifest.json.
- Configure Manifest V3.
- Configure extension name.
- Configure extension version.
- Configure extension description.
- Configure extension icons.
- Configure permissions.
- Configure popup entry.
- Configure dashboard entry.

### 16.2 Popup Interface

- Create compact popup.
- Display total applications.
- Display upcoming examinations.
- Display pending payments.
- Display recent applications.
- Add quick application button.
- Add open dashboard button.
- Add quick search.

### 16.3 Full Dashboard

- Open full dashboard in extension tab.
- Support complete application management.
- Support collapsible sidebar.
- Support all dashboard features.
- Support popup-to-dashboard navigation.

### 16.4 Background Service Worker

- Create background.js.
- Configure service worker.
- Implement notification scheduling.
- Implement alarm management.
- Handle extension startup.
- Handle browser restart.
- Handle notification updates.

### 16.5 Chrome Storage Integration

- Store theme preference.
- Store language preference.
- Store sidebar state.
- Store notification preferences.
- Store small application settings.
- Keep main application records in IndexedDB.

### 16.6 Extension Permissions

- Configure storage permission.
- Configure notifications permission.
- Configure alarms permission.
- Configure required host permissions only.
- Review permission necessity.
- Test permission prompts.

**Completion Criteria:** The React application must run as a functional Chrome Extension using Manifest V3.

---

## Milestone 17 – Website Integration

**Status: NOT STARTED**

### 17.1 Supported Websites

- Teletalk Government Job Portal.
- Other government application portals.
- Identify supported website formats.
- Identify Applicant Copy formats.
- Identify public PDF URLs.

### 17.2 Website Import

- Detect supported Applicant Copy pages.
- Extract visible application information.
- Add manual import fallback.
- Handle unsupported websites.
- Handle login-required pages.
- Handle dynamic page content.
- Handle website layout changes.

### 17.3 Website Compatibility

- Test Teletalk pages.
- Test multiple government departments.
- Test multiple circular formats.
- Test browser security restrictions.
- Document supported websites.

**Completion Criteria:** Supported government application pages must provide a reliable import experience.

---

## Milestone 18 – Testing & Quality Assurance

**Status: NOT STARTED**

### 18.1 Functional Testing

- Test application creation.
- Test application editing.
- Test application deletion.
- Test duplicate detection.
- Test search.
- Test advanced filters.
- Test PDF extraction.
- Test URL import.
- Test manual vacancy entry.
- Test document links.
- Test exam scheduling.
- Test notifications.
- Test result management.
- Test backup.
- Test restore.
- Test Excel export.
- Test PDF export.

### 18.2 Data Testing

- Test IndexedDB persistence.
- Test browser restart.
- Test extension restart.
- Test large application datasets.
- Test corrupted records.
- Test invalid data.
- Test import conflicts.

### 18.3 UI Testing

- Test responsive layout.
- Test Light Mode.
- Test Dark Mode.
- Test Bangla interface.
- Test English interface.
- Test popup layout.
- Test full dashboard.

### 18.4 Performance Testing

- Optimize React rendering.
- Optimize large application lists.
- Optimize PDF extraction.
- Optimize IndexedDB queries.
- Check memory usage.
- Check extension startup performance.

---

## Milestone 19 – Security & Reliability

**Status: NOT STARTED**

- Validate all user inputs.
- Validate imported PDF files.
- Restrict URL protocols.
- Prevent unsafe URL fetching.
- Avoid unnecessary host permissions.
- Protect sensitive applicant information.
- Never store passwords or SMS PINs.
- Avoid storing NID and unnecessary identity data.
- Keep application data local by default.
- Handle database failures.
- Handle notification failures.
- Handle invalid backup files.
- Implement safe database migrations.
- Review extension permissions.

---

## Milestone 20 – Production Build & Release

**Status: NOT STARTED**

### 20.1 Production Preparation

- Remove unused components.
- Remove debug logs.
- Fix console errors.
- Fix console warnings.
- Verify all imports.
- Verify all routes.
- Verify extension permissions.
- Verify database migration.
- Verify production configuration.

### 20.2 Production Build

- Configure Vite production build.
- Build extension assets.
- Generate Manifest V3 package.
- Verify output directory.
- Test production build locally.
- Load unpacked extension in Chrome.
- Test all critical features.

### 20.3 Release

- Create project logo.
- Create extension icons.
- Prepare screenshots.
- Write extension description.
- Prepare installation guide.
- Prepare user documentation.
- Prepare privacy policy.
- Package extension.
- Optional Chrome Web Store submission.

**Completion Criteria:** Extension must be production-ready, tested, installable and documented.

---

# 4. Application Data Model

Each application should contain the following information.

## Basic Information

- id
- organization
- post
- postBangla
- vacancy
- applicantName
- applicantNameBn
- userId
- mobile
- applicationDate
- referenceNo
- importSource

## Payment Information

- paymentStatus
- paymentDate
- paymentTransactionId

## Admit Card Information

- admitCardStatus
- admitCardDownloaded
- admitCardUrl
- admitCardDownloadDate

## Examination Information

- examStatus
- examType
- examDate
- examTime
- examCenter
- examAddress
- examInstructions

## Result Information

- resultStatus
- resultDate
- resultNotes

## Document Information

- circularUrl
- applicantCopyUrl
- admitCardUrl

## Application Management

- status
- finalStatus
- notes
- createdAt
- updatedAt
- archivedAt

---

# 5. Application Status Reference

| Status               | Meaning               |
| -------------------- | --------------------- |
| Applied              | Application submitted |
| Payment Pending      | Payment incomplete    |
| Payment Completed    | Payment successful    |
| Admit Card Available | Admit card published  |
| Exam Upcoming        | Examination scheduled |
| Exam Completed       | Examination completed |
| Result Pending       | Result not published  |
| Passed               | Passed examination    |
| Failed               | Failed examination    |
| Closed               | Application closed    |

# 6. Final Navigation Structure

text

```
Government Job Tracker
│
├── Dashboard
│   ├── Statistics
│   ├── Recent Applications
│   └── Upcoming Exams
│
├── Applications
│   ├── All Applications
│   ├── Add Application
│   ├── Import Applicant Copy
│   ├── Search & Filters
│   └── Application Details
│
├── Examination
│   ├── Upcoming Exams
│   ├── Completed Exams
│   └── Exam Calendar
│
├── Results
│   ├── Pending Results
│   ├── Passed
│   ├── Failed
│   ├── Waiting List
│   └── Final Selected
│
├── Documents
│   ├── Circulars
│   ├── Applicant Copies
│   └── Admit Cards
│
├── Analytics
│   ├── Application Statistics
│   ├── Payment Statistics
│   └── Result Statistics
│
├── Backup & Restore
│   ├── JSON Backup
│   └── JSON Restore
│
├── Export
│   ├── Excel Export
│   └── PDF Export
│
└── Settings
    ├── Language
    ├── Theme
    ├── Notifications
    └── Data Management

```

---

# 7. Development Rules

These rules must be followed throughout development.

1. Use JavaScript only. Do not introduce TypeScript.
2. Use Tailwind CSS. Avoid custom CSS.
3. Build reusable React components.
4. Keep business logic inside hooks and services.
5. Keep database logic inside service modules.
6. Avoid placing all functionality inside App.jsx.
7. Use consistent naming conventions.
8. Use reusable validation functions.
9. Handle loading, empty and error states.
10. Keep application data local by default.
11. Never save sensitive credentials.
12. Test each milestone before starting the next.
13. Do not replace working architecture without a clear reason.
14. Maintain backward compatibility for database changes.
15. Keep documentation updated.

---

# 8. Project Completion Criteria

The project will be considered complete when:

- All applications can be managed.
- Applicant Copy PDF import works.
- Manual Vacancy Entry works.
- Duplicate detection works.
- Payment tracking works.
- Admit Card tracking works.
- Exam scheduling works.
- Notifications work.
- Result tracking works.
- Document links work.
- Search and advanced filters work.
- Dashboard analytics work.
- JSON backup and restore work.
- Excel export works.
- PDF export works.
- Bangla and English work.
- Light and Dark Mode work.
- Chrome Popup works.
- Full Dashboard works.
- Manifest V3 extension works.
- Production testing is successful.
- User documentation is complete.

---

# 9. Current Development Progress

| Milestone                       | Status      |
| ------------------------------- | ----------- |
| 01. Planning & Requirements     | Completed   |
| 02. Environment Setup           | Completed   |
| 03. Dashboard UI                | Completed   |
| 04. Job Management              | Completed   |
| 05. Status Management           | Completed   |
| 06. Search & Filters            | Completed   |
| 07. Applicant Copy Import       | In Progress |
| 08. Document Management         | Pending     |
| 09. Exam Notifications          | Pending     |
| 10. Dashboard Analytics         | Pending     |
| 11. Advanced Management         | Pending     |
| 12. Backup & Restore            | Pending     |
| 13. Excel & PDF Export          | Pending     |
| 14. Localization                | Pending     |
| 15. Theme Completion            | Pending     |
| 16. Chrome Extension Conversion | Pending     |
| 17. Website Integration         | Pending     |
| 18. Testing & QA                | Pending     |
| 19. Security & Reliability      | Pending     |
| 20. Production Release          | Pending     |

---

**Project Goal:** Build a reliable, privacy-conscious, maintainable and scalable Bangladesh Government Job Tracker Chrome Extension that manages the complete job application lifecycle from application submission to final selection.