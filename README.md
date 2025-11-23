# 🔥 FLAMES Fun - Relationship Calculator

**FLAMES Fun** is a modern, interactive web application that predicts the relationship compatibility between two people using the classic "FLAMES" algorithm.

Built with **React + Vite**, this project features a premium **Glassmorphism UI**, smooth animations, and fun interactive elements.

![FLAMES Fun Preview](/public/vite.svg) <!-- You can replace this with a real screenshot later -->

## ✨ Features

- **💘 FLAMES Algorithm**: Calculates the relationship status (Friends, Lovers, Affection, Marriage, Enemies, Siblings).
- **❤️ Love Meter**: Displays a compatibility percentage alongside the result.
- **🌟 Zodiac Compatibility**: Optional inputs to check how your star signs align.
- **📜 History Tab**: Keeps track of your last 10 results (persisted locally).
- **📤 Share Results**: Share your fate with friends via the native share sheet or clipboard.
- **🔊 Sound Effects**: Fun audio feedback for interactions and results.
- **🎉 Celebration Effects**: Confetti animations for "Lovers" and "Marriage" results.
- **🎨 Premium UI**: A stunning interface with glassmorphism cards, animated backgrounds, and `framer-motion` transitions.
- **📱 Mobile Responsive**: Optimized for all screen sizes.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: CSS Modules, Vanilla CSS (Glassmorphism)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Effects**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Hooks (`useState`, `useEffect`)

## 🚀 Getting Started

Follow these steps to run the project locally:

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1.  **Clone the repository** (or download the source code):
    ```bash
    git clone <repository-url>
    cd flames-fun
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start the development server**:
    ```bash
    npm run dev
    ```

4.  **Open the app**:
    Click the link shown in the terminal (usually `http://localhost:5173`).

## 📂 Project Structure

```
flames-fun/
├── public/              # Static assets (GIFs, images)
├── src/
│   ├── components/      # Reusable components (Loader, HistoryModal, etc.)
│   ├── pages/           # Main pages (Home, Result)
│   ├── styles/          # CSS Modules for styling
│   ├── utils/           # Helper functions (flamesLogic, SoundManager)
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Entry point
├── package.json         # Dependencies and scripts
└── README.md            # Project documentation
```

## 🎮 How to Play

1.  **Enter Names**: Type your name and your crush's name.
2.  **Select Zodiac (Optional)**: Choose your star signs for an extra compatibility check.
3.  **Find Your Fate**: Click the button and watch the magic happen!
4.  **View Details**: Click "See How It Happened" to understand the calculation.
5.  **Share**: Show off your result to your friends!

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements or new features!

---

Made with ❤️ by **Antigravity** & **You**!
