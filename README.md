# IoT-Enabled Reverse Vending Machine (RVM) Management Platform

A complete multi-role web platform for managing a network of physical Reverse Vending Machines (RVMs) that accept recyclable plastic bottles and reward citizens with **Green Coins**.

Built using **Next.js 14+ (App Router), TypeScript, Tailwind CSS, JWT Authentication with HTTP-only Cookies, Zod, Recharts, and Mongoose ODM**.

---

## 🔒 Security Notice

Security is an important part of the GreenVision RVM platform.

- Sensitive credentials must be managed through environment variables.
- Never commit `.env` or `.env.local` files to a public repository.
- Configure deployment environment variables securely through Vercel.
- Use strong, unique JWT secrets and IoT API keys.
- Restrict database access to trusted network sources.
- Rotate any credentials that may have been accidentally exposed.
- Demo accounts are intended for testing and demonstration purposes only.

---

## 🚀 Quick Start Guide

### 1. Prerequisites

- Node.js v18+ or v20+
- npm or yarn
- Git

### 2. Environment Setup

Create a `.env.local` file in the project root directory.

Configure the required environment variables according to your implementation:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_ACCESS_SECRET=your_access_secret
JWT_REFRESH_SECRET=your_refresh_secret
JWT_ACCESS_EXPIRY=15m
JWT_REFRESH_EXPIRY=7d
NEXT_PUBLIC_APP_NAME=RVM Green Coin System
NEXT_PUBLIC_STORAGE_ALERT_THRESHOLD=80
NEXT_PUBLIC_STORAGE_CRITICAL_THRESHOLD=90
IOT_API_KEY=your_iot_api_key
```

**Important:** Replace placeholder values with your actual configuration. Never share or commit real credentials.

### 3. Database Setup

If MongoDB Atlas is configured, connect your database using the `MONGODB_URI` environment variable.

Configure your MongoDB Atlas Network Access to allow only trusted IP addresses.

Run the database seed command if supported by your project:

```bash
npm run seed
```

### 4. Demo Account Credentials

| Role | Portal | Email | Password |
|---|---|---|---|
| Admin | `/admin/dashboard` | `admin@rvmgreencoin.org` | `Admin@1234` |
| Employee | `/employee/dashboard` | `ramesh@rvm.org` | `Tech@1234` |
| Citizen | `/user/dashboard` | `user1@example.com` | `User@1234` |

Demo credentials are for demonstration purposes only.

---

## 💻 Running the Web Application

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Open your browser:

http://localhost:3000

### Project Links

- **Live Website:** https://reverse-vending-web.vercel.app/
- **Model Simulation:** https://greenvision-delta.vercel.app/
- **Demo Video:** https://drive.google.com/file/d/1ZTHdM0LP_pCx8wiBSGn6RY7vreuLAgve/view?usp=sharing
- **GitHub Repository:** https://github.com/sanjayrams-26/RVM

### Platform Modules

- **Public Landing Page:** `/`
- **Login:** `/login`
- **Citizen Dashboard:** `/user/dashboard`
- **Admin Dashboard:** `/admin/dashboard`
- **Employee Dashboard:** `/employee/dashboard`

---

## 🤖 IoT Telemetry Simulator

The platform supports IoT telemetry simulation for demonstrating machine monitoring.

Physical RVM devices can transmit telemetry data through:

`POST /api/iot/machine-data`

Device authentication uses the `x-iot-api-key` header.

To start the simulator, run:

```bash
npm run simulator
```

The simulator generates sample telemetry events at regular intervals to demonstrate bottle deposits and machine storage-level updates.

---

## 📊 Build & Production Deployment

Create an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

The application can be deployed using Vercel with the required environment variables configured securely.

---

## 🌱 Project Vision

GreenVision RVM aims to make recycling smarter, easier, and more rewarding through IoT technology and digital incentives.

By connecting citizens, administrators, employees, and smart recycling machines, the platform promotes responsible waste disposal and supports a cleaner, more sustainable environment.

**Think Green. Recycle Smart. Earn Rewards.**
