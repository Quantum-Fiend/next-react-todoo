# ⚡ Cyber Todo: C++ Powered & Futuristic

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15.3-black)
![React](https://img.shields.io/badge/React-19.0-blue)
![C++](https://img.shields.io/badge/C++-20-red)
![SCSS](https://img.shields.io/badge/Style-SCSS-pink)

> **"Where high-performance C++ logic meets Cyberpunk aesthetics."**

A next-generation Todo application built with **Next.js 15**, styled with custom **Futuristic SCSS**, and driven by **C++ 20** core logic (via simulated WebAssembly integration).

---

## 🌌 Features

### 🎨 Visuals (Cyberpunk / Futuristic)
-   **Neon Aesthetics**: Hand-crafted SCSS variables and glowing effects (Cyan/Pink).
-   **Glassmorphism**: Translucent panels with background blurs.
-   **Animations**: Custom keyframes (`fadeInUp`, `glitchShake`, `neonPulse`) for a living, breathing UI.
-   **No Tailwind**: Pure, semantic SCSS modules.

### ⚙️ Core Engineering
-   **C++ Logic**: Task management nodes (`addTask`, `deleteTask`) are written in highly efficient C++.
-   **WebAssembly Architecture**: Designed to compile C++ logic to `.wasm` for browser-native performance.
-   **TypeScript**: Full strict-mode type safety across React components and hooks.

---

## 🎥 Walkthrough

The interface features a **"System Initialization"** sequence followed by a holographic task board. Interactions are instant, with visual feedback for every action.

```scss
// Example from our SCSS Architecture
@mixin hover-neon {
  transition: all 0.3s ease;
  &:hover {
    box-shadow: $shadow-neon-cyan;
    text-shadow: 0 0 8px $color-primary;
    transform: scale(1.05);
  }
}
```

---

## 🛠️ Installation & Setup

### Prerequisites
-   Node.js 18+
-   `yarn` or `npm`
-   (Optional) Emscripten SDK for compiling C++

### Quick Start

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/yourusername/cyber-todo.git
    cd cyber-todo
    ```

2.  **Install Dependencies**
    ```bash
    yarn install
    # or
    npm install
    ```

3.  **Run the Cyber Deck**
    ```bash
    yarn dev
    ```

4.  Open `http://localhost:3000` to access the neural link.

---

## 🔧 C++ Compilation (Advanced)

To re-compile the C++ logic (`cpp/logic.cpp`) into WebAssembly:

1.  Ensure **Emscripten** is installed.
2.  Run the complier command:
    ```bash
    emcc cpp/logic.cpp -o public/logic.wasm \
      -s EXPORTED_FUNCTIONS='["_addTask","_deleteTask","_getTaskCount"]' \
      -s EXTRA_EXPORTED_RUNTIME_METHODS='["cwrap"]'
    ```

---

## 📂 Project Structure

```bash
├── app/
│   ├── hooks/           # useWasmTodo (C++ Bridge)
│   ├── styles/          # SCSS Architecture (_variables, _animations)
│   ├── layout.tsx       # Root Layout with types
│   └── page.tsx         # Main UI Controller
├── cpp/
│   └── logic.cpp        # C++ Core Implementation
├── public/              # Static Assets & Wasm Binaries
└── tsconfig.json        # Strict Type Configuration
```

---

## 🤝 Contributing

Protocol: **OPEN**.
Pull requests are welcome. For major changes (especially to the C++ core), please open an issue first to discuss what you would like to change.

1.  Fork the Project
2.  Create your Feature Branch via Neural Link
3.  Commit your Changes
4.  Push to the Branch
5.  Open a Pull Request

---

*Engineered with 💻 & ☕ by [Your Name]*
