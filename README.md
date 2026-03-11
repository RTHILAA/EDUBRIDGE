# EduBridge - Educational Platform

A modern, responsive React application for an educational platform with courses, pricing plans, and learning resources.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![React](https://img.shields.io/badge/react-19.0+-61dafb.svg)

---

## 🎯 Live Demo

🔗 [EduBridge](https://rth-edubridge.netlify.app/)

We would appreciate it if you decide to use this project. Please include credit when using it. Thank you! 🙏

---

## 🚀 Features

- **Responsive Design** - Fully responsive layout for mobile, tablet, and desktop
- **Dark/Light Mode** - Theme toggle with persistent preference using localStorage
- **Smooth Animations** - Page transitions with Framer Motion and scroll animations with AOS
- **Mobile Navigation** - Hamburger menu with smooth overlay transitions
- **Course Showcase** - Display of featured courses with ratings, pricing, and details
- **Pricing Plans** - Tiered subscription options with feature comparison
- **Testimonials** - Student success stories with star ratings
- **Contact Page** - Contact form with validation and location map
- **Loading States** - Custom loading spinner for better UX
- **Scroll to Top** - Progress-based scroll-to-top button

---

## 🛠️ Technologies

| Technology | Purpose |
|---|---|
| **React 19** | UI library |
| **React Router 7** | Navigation and routing |
| **CSS3** | Styling with CSS variables and media queries |
| **Framer Motion** | Page transition animations |
| **AOS** | Scroll animations |
| **Lucide React** | Icon library |
| **React Icons** | Social media icons |

---

## 📁 Project Structure

```
EDUBRIDGE/
├── public/
├── src/
│   ├── assets/
│   │   └── images/          # Course and person images
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header/      # Navigation header
│   │   │   └── Footer/      # Page footer
│   │   ├── LoadingSpinner.js
│   │   ├── PageTransition.js
│   │   ├── ScrollToTop.js
│   │   ├── ScrollToTopOnRoute.js
│   │   ├── ThemeContext.js
│   │   └── ThemeToggle.js
│   ├── pages/
│   │   ├── Home/
│   │   ├── Product/
│   │   ├── Pricing/
│   │   ├── Contact/
│   │   └── PageNotFound/
│   ├── sections/
│   │   ├── Courses/
│   │   ├── Reviews/
│   │   └── JoinUs/
│   ├── styles/
│   │   └── App.css           # Global styles
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

---

## 🚦 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/RTHILAA/EDUBRIDGE.git
cd EDUBRIDGE
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Start the development server**

```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 🎨 Color Palette

| Color Name | Hex Code | Usage |
|---|---|---|
| Dark Blue | `#252B42` | Primary background, headers |
| Red | `#E74040` | Accent, buttons, highlights |
| Light Gray | `#737373` | Text, secondary elements |
| Light Sky Blue | `#B2E3FF` | Icon backgrounds |
| Yellow | `#FACC15` | Star ratings |
| Green | `#2DC071` | Discount prices, success indicators |

---

## 📱 Responsive Breakpoints

| Breakpoint | Range |
|---|---|
| Mobile | up to 480px |
| Tablet | 481px – 949px |
| Desktop | 950px and above |

---

## 🔧 Available Scripts

| Script | Description |
|---|---|
| `npm start` | Runs the app in development mode |
| `npm build` | Builds the app for production |
| `npm test` | Launches the test runner |
| `npm eject` | Ejects from Create React App |

---

## 🌙 Dark Mode

The application supports dark/light theme toggle with:

- Persistent theme selection using localStorage
- Smooth transitions between themes
- Optimized color schemes for all components

---

## 📄 Pages

| Page | Description |
|---|---|
| **Home** | Landing page with hero section, feature cards, courses, testimonials, and newsletter signup |
| **Product** | Showcases platform features and learning paths |
| **Pricing** | Subscription plans with feature comparison |
| **Contact** | Contact form and business information |
| **404** | Custom not found page with helpful links |

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

## 📞 Contact

Have questions or suggestions? Feel free to reach out:

- **Developer**: ANASS EL HARAZI
- **Email**:  [anaswins35@gmail.com](mailto:anaswins35@gmail.com)
- **LinkedIn**: [ANASS EL HARAZI](https://www.linkedin.com/in/anasselharazi/)
- Instagram: [@a.elharazi](https://instagram.com/a.elharazi)