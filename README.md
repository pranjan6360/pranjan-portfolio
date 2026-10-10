# H K Pranjan | Electronics & Communication Engineering Portfolio

A polished, high-performance personal portfolio website for **H K Pranjan**, an Electronics and Communication Engineering undergraduate at **Srinivas Institute of Technology, Mangaluru**.

Built with semantic **HTML5**, **Vanilla CSS3**, and **Modern JavaScript (ES6+)**, inspired by modern engineering portfolio aesthetics with dark obsidian and navy backgrounds, electric-blue and cyan accents, PCB circuit trace animations, and microchip elements.

---

## ⚡ Highlights & Key Features

- **Theme & Aesthetics:**
  - Obsidian-navy background (`#040711`, `#070c1a`) with electric-blue (`#2563eb`) and glowing cyan (`#00e5ff`) accents.
  - Interactive background canvas rendering animated PCB circuit traces and microchip interconnects.
  - Dynamic scroll-reveal transitions (`IntersectionObserver`) and glassmorphic card designs.
- **Hero Section:**
  - Full personal introduction: **H K Pranjan**, ECE student at Srinivas Institute of Technology, Mangaluru.
  - Prominent portrait on the right using `images/pranjan-ece.png` with microchip pin accents and glowing halo.
  - Animated typewriter cycling through 4 roles:
    1. *Embedded Systems Developer*
    2. *IoT Enthusiast*
    3. *AI/ML Developer*
    4. *Electronics Engineer*
  - Direct CTAs: **Explore Projects**, **Contact Me**, and **Download Resume**.
  - Social quick links to **GitHub** and **LinkedIn**.
- **Portfolio Sections:**
  1. `Home` - Intro, animated roles, CTAs, and featured portrait.
  2. `About Me` - Background, engineering mindset, pillars (Embedded, IoT, Vision).
  3. `Technical Skills` - 5 dedicated categories: Programming, Hardware, IoT, AI/ML, and Tools.
  4. `Featured Projects` - 5 cards covering Machine Learning, Semiconductor AI, RISC-V hardware, and IoT telemetry.
  5. `Education` - Srinivas Institute of Technology (B.E. ECE - VTU) & Pre-University Science.
  6. `Hackathons & Achievements` - KLA SEMICON India Hackathon 2026, RISC-V design challenges, and college symposia.
  7. `Certifications` - Chip Design & Verilog, Computer Vision & MediaPipe, and IoT Telemetry.
  8. `Contact` - One-click email copy button and interactive contact form with validation.

---

## 📁 Project Structure

```text
pranjan/
├── index.html            # Semantic HTML5 layout and sections
├── style.css             # Design tokens, electric neon styling, responsive queries
├── script.js             # Typewriter effect, circuit canvas, scroll-spy, email copy
├── resume.pdf            # Downloadable resume document
├── images/
│   └── pranjan-ece.png   # Portrait of H K Pranjan with ECE styling
└── README.md             # Project documentation and deployment guide
```

---

## 🚀 Running Locally

You can run the portfolio locally using any static web server:

### Option 1: Python HTTP Server (Quick & Standard)
```bash
python -m http.server 3000
```
Then visit: `http://localhost:3000`

### Option 2: Node.js / npx serve
```bash
npx serve .
```

### Option 3: Direct Browser File
Double-click `index.html` in your file explorer to open it in Chrome, Edge, or Firefox.

---

## ☁️ Deploying to Vercel

### Method 1: Using the Vercel CLI
```bash
# 1. Install or run Vercel CLI
npx vercel

# 2. Deploy to Production
npx vercel --prod
```

### Method 2: Via GitHub & Vercel Dashboard
1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "Upgrade H K Pranjan ECE portfolio"
   git push origin main
   ```
2. Navigate to [vercel.com](https://vercel.com/) and click **"Add New..." &rarr; "Project"**.
3. Import your GitHub repository (`pranjan6360/...`).
4. Keep the Framework Preset as **Other** (Root directory: `./`), then click **Deploy**.

---

## 👤 Author Information

- **Name:** H K Pranjan
- **College:** Srinivas Institute of Technology, Mangaluru (VTU)
- **Branch:** Electronics and Communication Engineering (ECE)
- **GitHub:** [github.com/pranjan6360](https://github.com/pranjan6360)
- **LinkedIn:** [linkedin.com/in/pranjan](https://linkedin.com/in/pranjan)
- **Email:** pranjanpranjan052@gmail.com
