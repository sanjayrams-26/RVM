# IoT-Enabled Reverse Vending Machine (RVM) Management Platform

A complete multi-role web platform for managing a network of physical **Reverse Vending Machines (RVMs)** that collect recyclable plastic bottles and reward citizens with **Green Coins**.

Built using **Next.js 14+ (App Router), TypeScript, MongoDB Atlas, Mongoose ODM, Tailwind CSS, JWT Authentication, Zod, and Recharts**.

---

## 🔒 Security Notice

Security is a core part of the GreenVision RVM platform.

- Sensitive credentials are managed through environment variables.
- Database connection strings, JWT secrets, and IoT API keys must never be committed to the public repository.
- Deployment environment variables should be configured securely through Vercel.
- Use strong, unique JWT secrets and IoT API keys.
- Restrict database access to trusted network sources.
- Immediately rotate any credentials that may have been accidentally exposed.
- Demo accounts are intended for testing and demonstration purposes only.

**Important:** Never publish actual passwords, API keys, MongoDB connection strings, or authentication secrets in this repository.

---

## 🚀 Quick Start Guide

### 1. Prerequisites

Make sure the following tools are installed:

- Node.js v18+ or v20+
- npm or yarn
- MongoDB Atlas account
- Git

### 2. Clone the Repository

```bash
git clone https://github.com/sanjayrams-26/RVM.git
cd RVM
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Environment Setup

Create a `.env.local` file in the root directory of the project.

Add the following environment variables:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_strong_jwt_secret
IOT_API_KEY=your_secure_iot_api_key
```

**Configuration instructions:**

- Replace each placeholder with your actual project credentials.
- Use the same environment variable names expected by your application.
- Keep `.env.local` private and never upload it to GitHub.
- Configure the corresponding environment variables in Vercel before deployment.

### 5. Seed the Database

Ensure your MongoDB Atlas cluster is configured to accept connections from your development environment.

Run:

```bash
npm run seed
```

This populates the database with:

- 1 Super Admin
- 3 Districts (Coimbatore, Chennai, Madurai) with location nodes
- 11 RVM Machines with initial storage fill levels
- 5 Field Technicians with assigned machine units
- 15 Registered Citizen Recyclers
- 50+ Historical deposit transactions spanning the past 30 days

---

## 🔑 Demo Account Credentials

The following accounts are intended for application demonstration and testing.

| Role | Portal URL | Email | Password |
|---|---|---|---|
| **Admin** | `/admin/dashboard` | `admin@rvmgreencoin.org` | `Admin@1234` |
| **Employee** | `/employee/dashboard` | `ramesh@rvm.org` | `Tech@1234` |
| **User** | `/user/dashboard` | `user1@example.com` | `User@1234` |

**Security:** These are demonstration credentials. Do not use them in production. Change default passwords before deploying publicly.

---

## 💻 Running the Web Application

### Start Development Server

```bash
npm run dev
```

Open your browser and navigate to:

http://localhost:3000

### Application Links

| Component | URL |
|---|---|
| Public Landing Page | `/` |
| Unified Login | `/login` |
| User Dashboard | `/user/dashboard` |
| Admin Dashboard | `/admin/dashboard` |
| Employee Dashboard | `/employee/dashboard` |

### Live Project Links

- **Live Web Application:** https://reverse-vending-web.vercel.app/
- **RVM Model Simulation:** https://greenvision-delta.vercel.app/
- **Project Demonstration Video:** https://drive.google.com/file/d/1ZTHdM0LP_pCx8wiBSGn6RY7vreuLAgve/view?usp=sharing

---

## 🤖 Running the IoT Telemetry Simulator

Physical RVM devices transmit hardware telemetry to the following API endpoint:

```http
POST /api/iot/machine-data
```

The endpoint authenticates incoming requests using the `x-iot-api-key` header.

### Start the Simulator

```bash
npm run simulator
```

The simulator sends randomized telemetry events to your local server every 5 seconds.

It simulates:

- Bottle deposit events
- Machine storage level changes
- Live machine telemetry
- Device-to-server communication

This allows developers to test IoT functionality without requiring physical RVM hardware.

---

## 📊 Build & Production Deployment

### Create an Optimized Production Build

```bash
npm run build
```

### Start the Production Server

```bash
npm start
```

### Deployment

The application can be deployed using **Vercel** with MongoDB Atlas as the database.

Before deployment:

1. Configure all required environment variables in Vercel.
2. Ensure MongoDB Atlas network access and database permissions are configured securely.
3. Verify that no sensitive credentials are present in the GitHub repository.
4. Use strong production secrets and change all default demo passwords.

---

## 🛠️ Technology Stack

| Category | Technologies |
|---|---|
| Frontend | Next.js 14+, React, TypeScript |
| Backend | Next.js API Routes |
| Database | MongoDB Atlas |
| ODM | Mongoose |
| Styling | Tailwind CSS |
| Authentication | JWT, HTTP-only Cookies |
| Validation | Zod |
| Data Visualization | Recharts |
| Deployment | Vercel |
| IoT Integration | REST API, Telemetry Simulator |

---

## 🌱 Project Objective

The GreenVision RVM platform aims to encourage sustainable waste management by connecting physical reverse vending machines with a centralized digital management system.

By rewarding citizens with Green Coins for recycling plastic bottles, the platform promotes responsible recycling habits while enabling administrators and field technicians to monitor and manage RVM operations efficiently.

**GreenVision – Turning Plastic Waste into Digital Rewards.**
