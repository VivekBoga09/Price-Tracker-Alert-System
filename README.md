
# Price Tracker Alert System

A full-stack web application that tracks product prices from e-commerce websites and alerts users when the price drops.
The project includes a **React dashboard, Node.js backend, MongoDB database, automated price monitoring, Telegram notifications, and a Chrome browser extension for quick product tracking.**

---

##  Features

* Track product prices from e-commerce websites (Amazon supported)
* Automatic **price monitoring using scheduled cron jobs**
* **Telegram alerts** when price drops
* **Chrome Extension** to quickly add products from browser
* Store and manage products in **MongoDB**
* Clean **React UI dashboard**
* Delete and manage tracked products
* Automated scraping using **Puppeteer**

---

##  Tech Stack

Frontend

* React
* CSS

Backend

* Node.js
* Express.js

Database

* MongoDB

Automation

* Puppeteer (web scraping)
* Node-cron (scheduled jobs)

Notifications

* Telegram Bot API

Browser Extension

* Chrome Extension (Manifest V3)

---

##  Project Structure

```
Price-Tracker-Alert-System
│
├── client/                # React frontend
│
├── server/                # Node.js backend
│   ├── models/
│   │    └── product.js
│   └── server.js
│
├── extension/             # Chrome extension
│
└── README.md
```

---


### 2️⃣ Install backend dependencies

```
cd server
npm install
```

Run the backend server:

```
node server.js
```

Server will start on:

```
http://localhost:5000
```

---

### 3️⃣ Install frontend dependencies

```
cd client
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 📦 Chrome Extension Setup

1. Build the React project

```
npm run build
```

2. Open Chrome

3. Go to

```
chrome://extensions
```

4. Enable **Developer Mode**

5. Click

```
Load Unpacked
```

6. Select the **extension folder**

Now you can open the extension from the browser toolbar and add products directly.

---

## 🔔 Telegram Notification Setup

1. Open Telegram
2. Search for **BotFather**
3. Create a new bot
4. Copy the **Bot Token**

Add it in backend:

```
const TELEGRAM_TOKEN = "YOUR_BOT_TOKEN"
const TELEGRAM_CHAT_ID = "YOUR_CHAT_ID"
```

---

## ⏱ Automated Price Checking

The system automatically checks prices using cron jobs.

Example:

```
cron.schedule("*/5 * * * *")
```

This checks prices **every 5 minutes**.

---

## 📸 Example Workflow

1. User adds product URL
2. Backend scrapes product price using Puppeteer
3. Product stored in MongoDB
4. Cron job checks price periodically
5. If price drops → Telegram notification sent

---

## 🎯 Future Improvements

* Support for more e-commerce websites
* Email notifications
* Price history charts
* User authentication
* Deploy full system online

---

## 👨‍💻 Author

Vivek Boga

Built as a **full-stack project demonstrating web scraping, automation, browser extensions, and real-time notifications.**
