# 🇧🇩 Government Job Tracker

**A Smart Chrome Extension to Manage and Track Bangladesh Government Job Applications.**

Government Job Tracker is a personal application management system designed to help job seekers organize, monitor, and track their Bangladesh Government Job Applications from submission to final recruitment results.

The project aims to simplify the entire government job application journey through automatic Applicant Copy import, manual vacancy management, payment tracking, examination reminders, result tracking, and detailed analytics.

---

## 📌 Project Overview

| Property             | Details                |
| -------------------- | ---------------------- |
| Project Name         | Government Job Tracker |
| Project Type         | Chrome Extension       |
| Target Platform      | Google Chrome          |
| Country              | Bangladesh             |
| Frontend             | React                  |
| Programming Language | JavaScript             |
| Build Tool           | Vite                   |
| Styling              | Tailwind CSS           |
| Icons                | Lucide React           |
| Database             | IndexedDB              |
| Extension Standard   | Chrome Manifest V3     |
| Language Support     | Bangla & English       |
| Theme                | Light & Dark Mode      |
| Development Status   | In Progress            |

---

## 🎯 Project Goals

The primary goal is to provide a centralized platform where users can manage all their government job applications.

Key objectives:

- Manage multiple government job applications.
- Automatically import information from Teletalk Applicant Copies.
- Manually enter job vacancy information.
- Track application payment status.
- Track admit card availability and downloads.
- Manage examination dates and schedules.
- Receive examination notifications.
- Track examination results.
- Store important application document links.
- Analyze application and examination statistics.
- Export and restore application data.

---

## ✨ Key Features

### 1. Dashboard

- Overview of all applications.
- Total application statistics.
- Payment statistics.
- Upcoming examinations.
- Recent applications.
- Application status overview.

### 2. Application Management

- Add new applications.
- Edit existing applications.
- Delete applications.
- View detailed application information.
- Track organization and post information.
- Record vacancy numbers.
- Store applicant information.
- Detect duplicate applications.

### 3. Applicant Copy Automatic Import

Import application information using two methods:

**PDF Upload**

- Upload Teletalk Applicant Copy PDF.
- Extract text automatically.
- Parse application information.
- Preview extracted information.
- Edit extracted fields before saving.

**PDF URL Import**

- Import publicly accessible PDF URLs.
- Extract information from supported PDF files.
- Handle inaccessible URLs gracefully.

**Automatically Extracted Information**

| Field                 | Import Method |
| --------------------- | ------------- |
| Organization Name     | Automatic     |
| Post Name             | Automatic     |
| Bangla Post Name      | Automatic     |
| Applicant Name        | Automatic     |
| Bangla Applicant Name | Automatic     |
| User ID               | Automatic     |
| Application Date      | Automatic     |
| Payment Status        | Automatic     |
| Mobile Number         | Automatic     |
| Reference Number      | Automatic     |
| Vacancy               | Manual        |

### 4. Vacancy Management

- Manually enter total vacancy.
- Edit vacancy information.
- Associate vacancy with the corresponding application.
- Validate vacancy numbers.

### 5. Payment Tracking

- Payment Pending.
- Paid.
- Unpaid.
- Payment date.
- Transaction information.

### 6. Admit Card Management

- Track admit card availability.
- Record download status.
- Store admit card URL.
- Track download date.

### 7. Examination Management

- Schedule examination dates.
- Record examination time.
- Store examination center.
- Track examination status.
- View upcoming examinations.

### 8. Examination Notifications

- Notification one day before examination.
- Notification on examination day.
- Chrome desktop notifications.
- Notification preferences.

### 9. Result Management

Supported result statuses:

- Pending
- Passed
- Failed
- Waiting List
- Viva Pending
- Final Selected
- Rejected
- Cancelled / Closed

### 10. Document Management

Manage document links for:

- Job Circular PDF
- Applicant Copy
- Admit Card
- Other Documents

### 11. Search & Advanced Filters

- Search by organization.
- Search by post name.
- Search by User ID.
- Search by applicant name.
- Filter by application status.
- Filter by payment status.
- Filter by examination status.
- Filter by result status.
- Reset filters.

### 12. Statistics & Analytics

- Total applications.
- Paid and unpaid applications.
- Upcoming examinations.
- Completed examinations.
- Passed and failed applications.
- Final selection statistics.
- Organization-wise application statistics.

### 13. Backup & Restore

- Export application data as JSON.
- Restore data from JSON.
- Validate backup files.
- Detect duplicate records.
- Merge or replace existing data.

### 14. Data Export

- Excel export.
- PDF report generation.
- Individual application export.
- Application statistics export.

### 15. User Interface

- Modern dashboard.
- Collapsible sidebar.
- Light Mode.
- Dark Mode.
- Bangla language.
- English language.
- Responsive interface.
- Reusable React components.

---

## 🛠️ Technology Stack

| Technology               | Purpose                    |
| ------------------------ | -------------------------- |
| React                    | User Interface             |
| JavaScript               | Application Logic          |
| Vite                     | Development & Build        |
| Tailwind CSS             | Styling                    |
| Lucide React             | Icons                      |
| IndexedDB                | Application Database       |
| Chrome Storage API       | Extension Preferences      |
| pdfjs-dist               | PDF Text Extraction        |
| xlsx                     | Excel Export               |
| jsPDF                    | PDF Export                 |
| Chrome Notifications API | Desktop Notifications      |
| Chrome Manifest V3       | Browser Extension Platform |

---

## 📂 Project Structure

text

```
government-job-tracker/
│
├── public/
│   └── icons/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── Header.jsx
│   │   ├── StatCard.jsx
│   │   ├── ApplicationTable.jsx
│   │   ├── UpcomingExams.jsx
│   │   ├── JobForm.jsx
│   │   ├── JobSearch.jsx
│   │   ├── AdvancedFilters.jsx
│   │   ├── ApplicationDetails.jsx
│   │   ├── ApplicantImport.jsx
│   │   └── ImportPreview.jsx
│   │
│   ├── hooks/
│   │   ├── useJobs.js
│   │   └── useJobFilters.js
│   │
│   ├── services/
│   │   └── jobService.js
│   │
│   ├── utils/
│   │   └── applicantParser.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── PROJECT_ROADMAP.md
├── README.md
├── package.json
├── vite.config.js
└── index.html

```

*Note: This represents the current and planned project structure. Additional folders and files will be introduced as development progresses.*

---

## 🚀 Getting Started

### Prerequisites

Before running the project, install:

- Node.js (LTS recommended)
- npm
- Visual Studio Code
- Google Chrome

### 1. Clone the Repository

bash

```
git clone YOUR_REPOSITORY_URL

```

### 2. Navigate to Project Directory

bash

```
cd government-job-tracker

```

### 3. Install Dependencies

bash

```
npm install

```

### 4. Start Development Server

bash

```
npm run dev

```

### 5. Open in Browser

Visit:

text

```
http://localhost:5173

```

---

## 🧪 Testing

Before completing each milestone, verify:

- Application creation.
- Application editing.
- Application deletion.
- Duplicate detection.
- Search and filters.
- PDF extraction.
- Manual vacancy entry.
- Applicant Copy import.
- Payment tracking.
- Admit card tracking.
- Examination scheduling.
- Result management.
- IndexedDB persistence.
- Backup and restore.
- Excel and PDF export.

---

## 🗺️ Development Roadmap

| Milestone | Feature                         | Status      |
| --------- | ------------------------------- | ----------- |
| 01        | Project Planning & Requirements | Completed   |
| 02        | Development Environment Setup   | Completed   |
| 03        | Dashboard UI                    | Completed   |
| 04        | Core Job Management             | Completed   |
| 05        | Application Status Management   | Completed   |
| 06        | Search & Advanced Filters       | Completed   |
| 07        | Applicant Copy Automatic Import | In Progress |
| 08        | Document Management             | Planned     |
| 09        | Exam Date Notifications         | Planned     |
| 10        | Dashboard Analytics             | Planned     |
| 11        | Advanced Application Management | Planned     |
| 12        | JSON Backup & Restore           | Planned     |
| 13        | Excel & PDF Export              | Planned     |
| 14        | Bangla & English Localization   | Planned     |
| 15        | Theme Completion                | Planned     |
| 16        | Chrome Extension Conversion     | Planned     |
| 17        | Government Website Integration  | Planned     |
| 18        | Testing & Quality Assurance     | Planned     |
| 19        | Security & Reliability          | Planned     |
| 20        | Production Release              | Planned     |

For the complete task breakdown, see PROJECT_ROADMAP.md.

---

## 🔐 Privacy & Data Security

Privacy is an important design consideration.

- Application data is intended to remain locally stored.
- Applicant Copy PDF processing is performed in the browser.
- Passwords and SMS PINs should never be collected.
- NID and unnecessary sensitive personal information should not be stored.
- External document links are stored instead of copying entire PDFs into the database.
- Backup files should be handled securely.
- Website permissions should be limited to what the extension actually needs.

---

## 🎨 UI Design Principles

- Modern and clean interface.
- Consistent spacing and typography.
- Reusable components.
- Tailwind CSS utility classes.
- Light and Dark Mode.
- Responsive layouts.
- Accessible forms and controls.
- Consistent status indicators.

---

## 📌 Current Development Progress

**Current Milestone: 07 – Applicant Copy Automatic Import**

Recently implemented:

- PDF text extraction.
- Applicant Copy parser.
- PDF Upload interface.
- PDF URL Import interface.
- Import Preview.
- Manual Vacancy Entry.
- Duplicate Detection integration.

Remaining tasks include real-world PDF validation, robust URL import testing, and completing the import workflow.

---

## 🤝 Development Guidelines

1. Use JavaScript, not TypeScript.
2. Use Tailwind CSS instead of custom CSS.
3. Follow component-based architecture.
4. Keep database operations inside service modules.
5. Keep reusable business logic inside custom hooks.
6. Avoid unnecessary code duplication.
7. Validate all imported information.
8. Test each milestone before proceeding.
9. Maintain backward compatibility for database changes.
10. Keep project documentation updated.

---

## 📄 License

License: To be determined.

---

## 👨‍💻 Project Vision

Government Job Tracker aims to become a reliable personal productivity tool for Bangladesh government job seekers.

The ultimate goal is to make government job application management easier, more organized, and more efficient — from the first application to final selection.

**Built with ❤️ for Bangladesh Government Job Seekers.**