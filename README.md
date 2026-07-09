# 🔐 OTP Generator App

A fast, interactive React application that generates a 6-digit One-Time Password (OTP) with a built-in countdown timer and auto-expiring state.

## ✨ Features
* **Randomized Generation:** Creates a secure, random 6-digit code on demand.
* **Live Countdown Timer:** Displays a real-time countdown (e.g., 5 seconds) until the OTP expires.
* **Smart UI State:** Automatically disables the "Generate" button while a code is active to prevent spamming.
* **Accessibility Built-in:** Uses `aria-live` attributes to ensure screen readers automatically announce when the timer expires.

## 🛠️ Built With
* [React](https://react.dev/) - Frontend library (Hooks: `useState`, `useEffect`)
* [Vite](https://vitejs.dev/) - Build tool and development server
* CSS3 - Styling

## 🚀 How to Run Locally

1. Clone this repository:
   ```bash
   git clone [https://github.com/rojii-sketch/OTP-Generator.git](https://github.com/rojii-sketch/OTP-Generator.git)