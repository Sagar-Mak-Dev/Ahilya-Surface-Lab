# Ahilya Surface Lab — Dummy Website.

> Premium stone surface manufacturing & custom fabrication solutions for luxury architecture and interiors.

![Tech Stack](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.x-06B6D4?style=flat-square&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite)
![License](https://img.shields.io/badge/License-Apache--2.0-green?style=flat-square)

---

## About the Project

**AHILYA SURFACE LAB LLP** is a premier stone surface manufacturing company based in Ahmedabad, Gujarat. This repository contains the official marketing website built to showcase their services, product catalogue, and brand presence to architects, interior designers, and luxury real estate developers.

The website is crafted for performance and aesthetics — built with a modern React + TypeScript stack, animated with Framer Motion, and styled with Tailwind CSS v4.

---

## Live Sections

| Section | Description |
|---|---|
| **Hero** | Full-screen immersive landing with key stats |
| **About** | Company story, mission & vision |
| **Services** | 8 core stone processing services |
| **Products** | Curated stone catalogue with material specs |
| **Why Us** | Differentiators and trust signals |
| **Contact** | Quote request form with project type selector |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Language | TypeScript 5.8 |
| Styling | Tailwind CSS v4 |
| Animations | Motion (Framer Motion v12) |
| Build Tool | Vite 6 |
| Icons | Lucide React |
| Server | Express (for API layer) |

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run TypeScript type checks |
| `npm run clean` | Remove build artifacts (`dist/`, `server.js`) |

---

## Project Structure

```
ahilya-surface-lab/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Services.tsx
│   │       ├── Products.tsx
│   │       ├── WhyUs.tsx
│   │       ├── MoreSections.tsx
│   │       └── Contact.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
├── tsconfig.json
├── package.json
└── .env.example
```

---

## Deployment

This project is production-ready and can be deployed to any Node.js-compatible platform.

### Recommended Platforms
- **Vercel** — zero-config React deployment
- **Netlify** — drag & drop or Git-connected
- **Google Cloud Run** — for containerized deployments

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

---

## Services Offered

Ahilya Surface Lab specializes in:

- **Precision Stone Cutting** — CNC waterjet laser technology
- **Advanced Stone Shaping** — Natural stones, quartz, and heavy marbles
- **Custom Edge Profiling** — 15+ luxury edge styles
- **Premium Surface Finishing** — Mirror-polished, honed, leather, acid-washed
- **Custom Fabrication** — Countertops, vanities, fireplace surrounds
- **Architectural Stone Solutions** — Panels, claddings, staircase treads
- **Commercial Processing** — Hotels, corporate lobbies, large-scale projects
- **Luxury Residential Solutions** — Elite homeowner bespoke installations

---

## Contact

📍 **Location:** Ahmedabad, Gujarat, India  
📧 **Inquiries:** Use the [contact form](./src/components/sections/Contact.tsx) on the website

---

## License

This project is licensed under the **Apache License 2.0**. See the [LICENSE](./LICENSE) file for details.

---

<div align="center">
  <strong>AHILYA SURFACE LAB LLP</strong><br/>
  <em>Crafting Architectural Excellence, One Surface at a Time.</em>
</div>
