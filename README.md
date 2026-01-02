# Erateek - Digital Agency Website

A premium, high-performance digital agency website built for **Erateek (إراتيك)** in Yemen. Designed with a mobile-first approach, full Arabic (RTL) & English (LTR) localization, and powered by a modern tech stack.

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: JavaScript (React 19)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom Design System
- **CMS**: [Sanity.io](https://www.sanity.io/) (Headless CMS for Blog)
- **Animations**: Framer Motion
- **Icons**: Lucide React

## ✨ Features

- **Bilingual Support**: Fully localized contentMain & Layouts for Arabic (`ar`) and English (`en`).
- **Dynamic Blog**: Real-time content fetching from Sanity, with reading time estimation and category filtering.
- **Performance Optimized**: Usage of `next/image`, static generation (`generateStaticParams`), and dynamic metadata.
- **Modern UI**: Glassmorphism effects, custom gradients, and a sleek dark theme.
- **SEO Ready**: Dynamic meta tags, OpenGraph support, Sitemap, and Robots.txt.

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/erateek-web.git
    cd erateek-web
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Environment Setup**:
    Create a `.env.local` file in the root directory and add the following:

    ```env
    # Sanity CMS
    NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
    NEXT_PUBLIC_SANITY_DATASET=production
    SANITY_API_TOKEN=your_write_token # Only needed for scripts/automation

    # Contact Form (Nodemailer)
    EMAIL_USER=your_email@gmail.com
    EMAIL_PASS=your_app_password
    ```

4.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it.

## 📦 Deployment

This project is optimized for deployment on **Vercel**.

1.  Push your code to GitHub.
2.  Import the project in Vercel.
3.  Add the Environment Variables in the Vercel Dashboard.
4.  Deploy!

## 📁 Project Structure

- `/src/app`: App Router pages and layouts.
- `/src/components`: Reusable UI components and sections.
- `/src/lib`: Utility functions (blog fetching, reading time, etc.).
- `/src/sanity`: Sanity schema and client configuration.
- `/src/i18n`: Localization dictionaries.

---
© 2026 Erateek. All rights reserved.
