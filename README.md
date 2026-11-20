# IoT-Enabled Reverse Vending Machine (RVM) Management Platform

A complete multi-role web platform for managing a network of physical Reverse Vending Machines (RVMs) that accept recyclable plastic bottles and reward citizens with **Green Coins**.

Built with **Next.js 14+ (App Router)**, **TypeScript**, **Mongoose ODM (MongoDB Atlas)**, **Tailwind CSS (Light Theme)**, **JWT Authentication in httpOnly Cookies**, **Zod**, and **Recharts**.

---

## 🔒 Security Notice
> **IMPORTANT SECURITY NOTE:** MongoDB Atlas credentials were configured via `.env.local` using standard environment variables (`process.env.MONGODB_URI`). Please ensure you rotate the MongoDB password in your Atlas Security panel before deploying to production.

---

## 🚀 Quick Start Guide

### 1. Prerequisites
- **Node.js** v18+ or v20+
- **npm** or **yarn**

### 2. Environment Setup
The project reads configurations from `.env.local` (never commit this file):

```env
Security Notice
Store database connection strings, JWT secrets, and IoT API keys securely in environment variables.
Configure environment variables separately in the deployment platform.
Use strong, unique secrets for authentication and device authorization.
Restrict database network access to trusted IP addresses.
Rotate any credentials that may have been accidentally exposed.
```

### 3. Seed Database
Make sure your MongoDB Atlas cluster allows connection from your current IP (add `0.0.0.0/0` in Atlas Network Access for development). Then run:

```bash
npm run seed
```

This populates:
- 1 Super Admin
- 3 Districts (Coimbatore, Chennai, Madurai) with location nodes
- 11 RVM Machines with realistic initial storage fill levels
- 5 Field Technicians (Employees) with assigned machine units
- 15 Registered Citizen Recyclers (Users)
- 50+ Historical deposit transactions spanning the past 30 days

---

## 🔑 Demo Account Credentials

| Role | Portal URL | Email | Password |
|---|---|---|---|
| **Admin** | `/admin/dashboard` | `admin@rvmgreencoin.org` | `Admin@1234` |
| **Employee** | `/employee/dashboard` | `ramesh@rvm.org` | `Tech@1234` |
| **User** | `/user/dashboard` | `user1@example.com` | `User@1234` |

---

## 💻 Running the Web Application

### Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.
Live Link https://reverse-vending-web.vercel.app/
Model simulation https://greenvision-delta.vercel.app/
Short Video https://drive.google.com/file/d/1ZTHdM0LP_pCx8wiBSGn6RY7vreuLAgve/view?usp=sharing


- **Public Landing Page**: `/`
- **Login**: `/login` (Unified login for all three roles with automatic redirection)
- **User Panel**: `/user/dashboard`
- **Admin Panel**: `/admin/dashboard`
- **Employee Panel**: `/employee/dashboard`

---

## 🤖 Running the IoT Telemetry Simulator

Physical RVM devices transmit hardware telemetry to `POST /api/iot/machine-data` authenticated via `x-iot-api-key`. To simulate live bottle deposits and storage level changes:

```bash
npm run simulator
```

The simulator script will post randomized telemetry events to your local server every 5 seconds.

---

## 📊 Build & Production Deployment

To create an optimized production build:
```bash
npm run build
npm start
```
