<div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
&nbsp; <h1 style="margin: 0; font-size: 2rem;">🛰️ NearbyNow – Hyperlocal Community Messaging Web App</h1>
</div>

A modern **location-based community platform** for sharing, caring, and connecting—with your neighbors and beyond!

---

## 🌎 What is NearbyNow?

**NearbyNow** is a web app that lets you post and discover messages, food shares, and local updates—visible only to those nearby. Whether you want to help others, alert your community, or simply share extra food, do it all in real-time and with a tap.

---

## ✨ Features

- 📍 **Location-aware Messaging:** Post/view messages visible within a custom radius.
- 🍲 **Food Share Tab:** Easily give away surplus food to neighbors.
- 🎯 **Smart Filters & Tabs:** Filter by _Community Msg_, _Emergency_, _Request_, _Service_, or _Food Share_.
- ⏰ **Scheduled & Expiring Posts:** Schedule when posts go live, and have them expire after set hours.
- ❤️ **Likes & 💬 Comments:** React and converse with neighbors.
- 👤 **User Profiles:** View profiles and contact fellow community members.
- 📸 **Secure Image Uploads:** Attach images—stored privately on Firebase.
- 🕒 **Realtime Updates:** See new messages and comments instantly.
- 📧 **Email Alerts:** Get notified if someone's post is near you!
- 📱 **Mobile-first Design:** Fast, beautiful UI that works everywhere.
- 🔒 **Safe & Secure:** Data and images are protected for authenticated users.

---

## 🛠️ Tech Stack

| Frontend        | Backend            | Other Services    |
| :-------------- | :----------------- | :----------------|
| HTML, Tailwind  | Firebase Firestore | Firebase Storage |
| JavaScript      | Firebase Auth      | EmailJS          |

---

## 🚀 Getting Started

1. **Clone the repository**  
git clone https://github.com/JS-Aakash/NearbyNow.git


2. **Set up Firebase**
- [Create a Firebase project](https://console.firebase.google.com/)
- Enable **Authentication**, **Firestore**, and **Storage**
- Copy your Firebase config into `firebase-config.js`

3. **Configure EmailJS**
- Sign up for [EmailJS](https://www.emailjs.com/)
- Create a service and email template
- Add your service/template IDs to the script

4. **Run the App**
- Open `index.html` in your browser  
- Or serve with any static server for the best results

---

## 📝 Usage Tips

- 🕹️ **Post a Message:** Use "Add Post" to submit your news, request, or food offer.
- 🎛️ **Filter Results:** Fine-tune what you see by category or distance slider.
- 💬 **Engage:** Like/comment on posts, or jump into a profile to reach out directly.
- 👀 **Mobile?:** Your feed and navigation are optimized for all screen sizes!

---

## 🛡️ Notes

- **Location access** is required to see and post messages.
- **Security rules**: Only authenticated users can post or upload. Be sure your [Firestore](https://console.firebase.google.com/) and Storage rules are set accordingly.
- **Images:** For best speed, stick to images under 2MB.
- **Performance:** The app loads incrementally for a smooth user experience—even with lots of posts!

---

## 🤝 Contributing

Love NearbyNow? [Open an issue or submit a pull request!](#)  
We welcome bug fixes, enhancements, and new ideas.

---

## 📖 License

MIT License

---

## 📬 Contact

**Questions or feedback?**  
Reach out at [nearbynow22@gmail.com](mailto:nearbynow22@gmail.com)

---

<sub>Built with ❤️ for real communities.</sub>
