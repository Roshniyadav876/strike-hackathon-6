# ⚡ STRIKE — Thunder Hackathon 6.0

A modern, responsive **STRIKE-inspired learning platform** recreated for **Thunder Hackathon 6.0**, with a creative interactive sale experience integrated into the homepage.

The project focuses on recreating the STRIKE visual style while adding an engaging offer discovery experience with an AI-style signal, exclusive coupon, countdown timer, and membership perks.

---

## 🚀 Project Highlights

- STRIKE-inspired dark modern homepage
- Responsive navigation with desktop and mobile menu
- Hero section with CTA
- Strike Plus membership plan
- Strike Ultra membership plan
- Interactive AI-style Sale Experience
- Member Perk unlock interaction
- Exclusive coupon code
- Countdown timer
- Timer persistence using `localStorage`
- Copy-to-clipboard coupon functionality
- Offer close/dismiss interaction
- Responsive desktop and mobile layouts
- Courses section
- Features section
- Companies section
- Mentors section
- Reviews section
- FAQ section
- Footer section
- Smooth animations and interactive UI

---

## ✨ Creative Sale Experience

The main creative feature of the project is an interactive sale experience designed to feel like a system detecting and revealing a special offer.

### Experience Flow

```text
STRIKE Homepage
      ↓
AI-style Signal
      ↓
Scanning / Detection
      ↓
Offer Revealed
      ↓
Exclusive Discount
      ↓
Coupon Code
      ↓
Countdown Timer
      ↓
Claim / Get Offer
```

### Sale Experience Features

- AI-style signal trigger
- Scanning animation
- Detection state
- Interactive offer reveal
- Exclusive discount display
- Coupon code
- Copy coupon button
- Countdown timer
- Offer expiry state
- Close/dismiss button
- Responsive mobile experience
- Reduced-motion support

The sale experience is designed as an interactive discovery element rather than a traditional static sale banner.

---

## 🎁 Member Perk

The **Strike Plus** membership includes an interactive Member Perk experience.

### Offer Details

```text
Extra 15% OFF
Coupon: MONSOON15
```

### User Flow

1. Click **Unlock Member Perk**
2. Reveal the exclusive offer
3. View the discount
4. Copy the coupon code
5. View the remaining countdown
6. Close the offer when finished

The countdown uses browser `localStorage` so the remaining time persists across page refreshes in the same browser.

---

## 💳 Membership Plans

### Strike Plus

Includes:

- All current courses
- HD recordings
- Live class access during plan
- Notes
- Resume Review
- Certificates
- System Design Platform
- DSA Platform
- Coder Arena Platform
- Member Perk offer

### Strike Ultra

Includes:

- Everything in Strike Plus
- Upcoming batches included
- Coder Arena Platform
- Certificates
- Resume Review
- Notes
- System Design Platform
- DSA Platform

---

## 🎨 Design

The website follows a dark, modern and premium visual style inspired by the STRIKE platform.

### Design Focus

- Dark background
- High-contrast typography
- Purple accent styling for interactive sale experiences
- Modern membership cards
- Rounded UI elements
- Interactive hover states
- Reveal animations
- Responsive layouts
- Mobile-friendly interface

---

## 📱 Responsive Design

The website is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile

Responsive styling has been implemented for:

- Navigation
- Mobile menu
- Sale experience
- Offer panels
- Membership cards
- Countdown
- Buttons
- Typography
- Spacing

---

## 🛠️ Tech Stack

- **React**
- **Vite**
- **JavaScript**
- **HTML5**
- **CSS3**
- **LocalStorage**
- **Git**
- **GitHub**

---

## 📁 Project Structure

```text
strike-hackathon-6/
│
├── public/
│   ├── Aditya_sir.jpg
│   ├── DSA.png
│   ├── Data_structure.png
│   ├── Devops.png
│   ├── GenAI.jpg
│   ├── Img.jpg
│   ├── Rohit_sir.jpg
│   ├── Thunder.png
│   ├── strike_plus.png
│   └── strike_ultra.png
│
├── src/
│   │
│   ├── components/
│   │   │
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   │
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   │
│   │   ├── Membership.jsx
│   │   ├── Membership.css
│   │   │
│   │   ├── MemberOffer/
│   │   │   ├── MemberOffer.jsx
│   │   │   └── MemberOffer.css
│   │   │
│   │   ├── Courses.jsx
│   │   ├── Courses.css
│   │   │
│   │   ├── CourseOffer/
│   │   │   ├── CourseOffer.jsx
│   │   │   └── CourseOffer.css
│   │   │
│   │   ├── Features.jsx
│   │   ├── Features.css
│   │   │
│   │   ├── Companies.jsx
│   │   ├── Companies.css
│   │   │
│   │   ├── Mentors.jsx
│   │   ├── Mentors.css
│   │   │
│   │   ├── Reviews.jsx
│   │   ├── Reviews.css
│   │   │
│   │   ├── Faq.jsx
│   │   ├── Faq.css
│   │   │
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   │
│   │   └── SaleExperience/
│   │       ├── SaleExperience.jsx
│   │       └── SaleExperience.css
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## 💻 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Roshniyadav876/strike-hackathon-6.git
```

### 2. Open the Project

```bash
cd strike-hackathon-6
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL shown in the terminal.

---

## 📦 Production Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 🧩 Technical Implementation

### Component-Based Architecture

The application is divided into reusable React components for different homepage sections and interactive experiences.

### LocalStorage

The membership offer countdown uses browser `localStorage` to preserve the countdown state across page refreshes in the same browser.

### Interactive States

The creative sale experience uses multiple UI states:

```text
Signal
  ↓
Scanning
  ↓
Detected
  ↓
Offer Panel
  ↓
Coupon + Countdown
  ↓
Claim Offer
```

### Responsive CSS

Dedicated responsive CSS rules are used to adapt the interface across desktop and mobile screen sizes.

### Accessibility & UX

The interface includes:

- Button-based interactions
- Accessible navigation labels
- Close controls
- Reduced-motion support
- Responsive touch-friendly controls

---

## 🏆 Thunder Hackathon 6.0

This project was created as a submission for **Thunder Hackathon 6.0**.

### Hackathon Goals Addressed

- STRIKE homepage recreation
- Creative sale experience
- Interactive offer discovery
- Discount and coupon communication
- Countdown timer
- Timer persistence
- Responsive design
- Desktop and mobile experience
- Interactive UI
- Component-based React architecture

---

## 🔗 Repository

GitHub:

https://github.com/Roshniyadav876/strike-hackathon-6

---

## 👩‍💻 Author

**Roshni Yadav**

B.Tech — Computer Science & Engineering (Data Science)

---

## ⚡ Built with React + Vite

Made for **Thunder Hackathon 6.0**