# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# 🚗 Car Booking System

A web-based car rental booking system built with **React.js**. Users can select cars, pick booking dates, view total cost, and confirm reservations — all in a seamless and interactive interface.

## 🔧 Features

- 🗓️ **Date Selection** using a custom calendar
- 🚘 **Car Selection** from a list of available vehicles
- 🕒 **Live Timer** to show the time taken during the booking process
- 💵 **Cost Calculation** based on selected car's daily rate and number of days
- ✅ **Booking Confirmation** with visual feedback
- 🔄 **Reset Booking** to start over
- 📦 API-ready with mock data using `json-server`

## 🧩 Tech Stack

- **React.js** with hooks (`useState`, `useEffect`)
- **React Router DOM** for navigation
- **Lucide React** for icons
- **JSON Server** for simulating a backend API
- **Vite** for fast development setup

## 📁 Project Structure

```bash
src/
│
├── components/
│   ├── Calendar.jsx      # Date selection
│   ├── Timer.jsx         # Timer countdown
│   ├── Checkout.jsx      # Booking summary
│   ├── ChooseCar.jsx     # Car selection UI
│   └── CarApi.jsx        # Car data fetching
│
├── App.jsx               # Main component logic
├── index.jsx             # App entry point
├── assets/               # Static images or styles (if any)
