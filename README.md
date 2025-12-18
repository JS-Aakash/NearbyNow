# 🛰️ NearbyNow – Hyperlocal Community Messaging Web App

NearbyNow is a mobile-first, Firebase-powered hyperlocal messaging platform that enables users to share posts visible only within a 10 km radius. It is designed for fast, real-time communication inside neighborhoods, college campuses, hostels, apartments, and small communities.

The platform focuses on relevance, immediacy, and locality — ensuring that users see only what truly matters around them, right now.

---

## 🌟 Why NearbyNow?

Most social platforms are global and noisy. NearbyNow is built to strengthen local connections by enabling:

- 📢 Local announcements and updates  
- 🆘 Emergency alerts  
- 🤝 Requests and nearby services  
- 🥘 Food sharing to reduce waste  
- 🏘️ Community interaction and bonding  

---

## 🚀 Features

- 📍 **Geolocation-Based Visibility**  
  Posts are visible only to users within a **10 km radius**, ensuring true hyperlocal relevance.

- 🗂️ **Post Categories**  
  Categorize messages as **Community, Request, Emergency, Service, Food Share**, etc.

- ⏰ **Auto-Expiring Posts**  
  Messages automatically expire after **1–24 hours**, keeping the feed fresh and clutter-free.

- 🥘 **Food Share Tab**  
  A dedicated section to share surplus food with nearby users.

- 🗨️ **Real-Time Hyperlocal Feed**  
  Instantly see nearby posts using Firestore’s real-time updates.

- 🧭 **Mobile-First UI**  
  Clean, responsive interface optimized for mobile devices with bottom navigation.

- 🔐 **Secure Authentication**  
  Email and password authentication powered by Firebase Auth.

- 🔥 **Scalable Backend**  
  Firebase Firestore ensures fast reads, writes, and real-time sync.

---

## 🛠️ Tech Stack

| Layer       | Technology |
|------------|------------|
| Frontend   | HTML5, Tailwind CSS |
| Logic      | Vanilla JavaScript |
| Backend    | Firebase Firestore |
| Auth       | Firebase Authentication |
| Location   | Browser Geolocation API |
| Hosting    | Firebase Hosting / Netlify |

---

## 🧠 Architecture Overview

- Client fetches user location using the **Geolocation API**
- Posts are stored in **Firestore** with:
  - Latitude & longitude  
  - Timestamp  
  - Expiry time  
  - Category  
- Client filters posts based on:
  - Distance (≤ 10 km)  
  - Valid expiry time  
- Firestore listeners push real-time updates to the feed

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/JS-Aakash/NearbyNow.git
cd NearbyNow

## 2️⃣ Firebase Configuration

- Create a Firebase project from the Firebase Console  
- Enable the following services:
  - **Firestore Database**
  - **Authentication (Email/Password)**
- Copy your Firebase configuration and add it inside the JavaScript config file

---

## 3️⃣ Run Locally

- Open `index.html` in a modern web browser  
- Allow location access when prompted by the browser  

---

## ✅ How to Use

- Sign up or log in using email & password  
- Allow location permission  
- Create a post by selecting a category and expiry duration  
- View real-time posts from users nearby  

---

## 🔐 Security Notes

- Firestore rules restrict unauthorized access  
- Location data is used only for distance-based filtering  
- Exact addresses are never displayed or stored publicly  

---

## 🚀 Deployment

The application can be deployed using:

- **Firebase Hosting**
- **Netlify**

Works best on modern mobile browsers.

---

## 🧩 Future Enhancements

- 🔔 Push notifications for emergencies  
- 🧑‍🤝‍🧑 User profiles and reputation system  
- 🗺️ Map-based feed view  
- 🧵 Comments and reactions  
- 🕒 Scheduled posts  
- 🛑 Moderation and reporting system  

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository  
2. Create a new branch  
3. Commit your changes  
4. Open a Pull Request  

For major changes, please open an issue first to discuss your ideas.

---

## 📄 License

MIT License  
© 2025 Aakash JS
