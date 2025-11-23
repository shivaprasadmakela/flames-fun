# 📘 FLAMES Fun - Technical Documentation

This document provides a comprehensive deep-dive into the **FLAMES Fun** application. It explains the architecture, component breakdown, core logic, and styling decisions to help you understand exactly how the project is built.

---

## 🏗️ Architecture Overview

The application is a **Single Page Application (SPA)** built with:
-   **React 19**: For building the user interface components.
-   **Vite**: For fast development and optimized production builds.
-   **State Management**: Local component state (`useState`) and `localStorage` for persistence.

### Data Flow
1.  **User Input**: Data is collected in `Home.jsx`.
2.  **Processing**: Data is passed to `App.jsx`, where the FLAMES logic is executed.
3.  **Display**: The result is passed to `Result.jsx` for rendering.
4.  **Persistence**: The result is saved to `localStorage` via `App.jsx`.

---

## 📂 File Structure & Component Breakdown

### 1. Root Component: `App.jsx`
This is the "brain" of the application. It orchestrates the flow between screens.
-   **State**:
    -   `data`: Holds the current result (if any). If `null`, shows Home. If present, shows Result.
    -   `loading`: Controls the display of the `Loader` component.
    -   `history`: An array of past results, loaded from `localStorage` on mount.
-   **Key Functions**:
    -   `handleStart()`: Triggered by the Home form. It sets `loading` to true, waits 2 seconds (for effect), calculates the result, updates the state, and saves to history.
    -   `saveToHistory()`: Appends the new result to the history array (capped at 10 items) and saves it to the browser's local storage.

### 2. Input Screen: `Home.jsx`
The entry point for the user.
-   **Features**:
    -   Glassmorphism card UI using `Home.module.css`.
    -   Animated entrance using `framer-motion`.
    -   Form validation (ensures names are entered).
    -   Sound effects on button clicks via `SoundManager`.
-   **Props**: Receives `onStart` to initiate the calculation and `onOpenHistory` to show the modal.

### 3. Result Screen: `Result.jsx`
Displays the outcome of the calculation.
-   **Features**:
    -   **Confetti**: Triggers `canvas-confetti` if the result is positive (Lovers, Marriage, Affection).
    -   **Love Meter**: An animated progress bar showing the percentage match.
    -   **Share**: Uses the Web Share API (mobile) or Clipboard API (desktop) to share results.
    -   **Step-by-Step**: A collapsible section showing how the FLAMES algorithm eliminated letters.
-   **Logic**: Maps the result string (e.g., "Lovers") to specific emojis and messages.

### 4. Loading Screen: `Loader.jsx`
A visual transition state.
-   **Design**: A pulsing heart animation inside a glass card.
-   **Tech**: Uses `framer-motion` for the infinite pulsing and rotation effects.

### 5. History Modal: `HistoryModal.jsx`
An overlay showing past results.
-   **Tech**: Uses `AnimatePresence` from `framer-motion` for smooth enter/exit animations.
-   **Functionality**: Displays a list of results and offers a "Clear History" button.

---

## 🧠 Core Logic: `utils/flamesLogic.js`

This file contains the pure functions that power the app.

### `getFlamesResult(name1, name2)`
1.  **Normalization**: Converts names to lowercase and removes spaces.
2.  **Common Letters**: Iterates through the names to find and remove common characters.
3.  **Counting**: Counts the remaining characters (`totalCount`).
4.  **Elimination**:
    -   Starts with the array `["F", "L", "A", "M", "E", "S"]`.
    -   Iteratively removes the letter at the calculated index position until one remains.
    -   **Formula**: `index = (index + totalCount - 1) % flames.length`.
5.  **Return**: Returns the result, the step-by-step log, and the common letters.

### `calculateLovePercentage(name1, name2)`
A fun, pseudo-random algorithm to generate a percentage.
-   **Logic**: Sums the ASCII values of all characters in both names and performs a modulo `101` operation. This ensures the same pair of names always gets the same percentage.

### `getZodiacCompatibility(sign1, sign2)`
A simple lookup table that returns a compatibility string ("High", "Good", or "Interesting") based on the selected signs.

---

## 🔊 Utilities: `utils/SoundManager.js`

A singleton class to handle audio.
-   **Preloading**: Loads audio files on instantiation to prevent lag.
-   **Methods**: `play(soundName)` plays the requested sound effect (click, success, fail, celebration).

---

## 🎨 Styling & UI Design

### Global Styles (`index.css`)
-   **Variables**: Defines CSS variables for glassmorphism (`--glass-bg`, `--glass-border`) and theme colors.
-   **Background**: A global animated gradient background that shifts colors over time.

### CSS Modules (`*.module.css`)
We use CSS Modules to scope styles to specific components, preventing class name collisions.
-   **Glassmorphism**: Achieved using `backdrop-filter: blur(16px)`, semi-transparent backgrounds, and white borders.

### Animations
-   **Framer Motion**: Used for complex animations (entering screens, modals, pulsing hearts).
-   **CSS Keyframes**: Used for the background gradient animation.

---

## 📦 Key Libraries

| Library | Purpose |
| :--- | :--- |
| **React** | UI Framework |
| **Vite** | Build Tool |
| **Framer Motion** | Animations (Enter/Exit, Gestures) |
| **Canvas Confetti** | Celebration particle effects |
| **Lucide React** | Modern, clean icons |

---

This documentation covers the entire lifecycle of the application, from the code structure to the user experience. 🚀
