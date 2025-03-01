# Reactham - `react router framework startter`

Reactham is a blend of "React" and "Adham"—an epic fusion of powerful React and the creative spark of its creator, Adham! ⚡️✨

A modern full-stack React application template packed with:
- React Router 🌐
- Lingui for i18n 🌍
- Tailwind CSS for styling 🎨
- TypeScript for type safety 🔒

## Project Structure 📁

```
├── package.json
├── build/
│   ├── client/       // Static client assets 📄
│   └── server/       // Server-side rendering code ⚙️
└── src/
    ├── components/   // Reusable UI components 🔧
    ├── routes/       // File-based routing with React Router 🛣️
    └── styles/       // Tailwind CSS configurations & custom styles 🎨
```

## Tools & Features 🛠️

- 🚀 Server-side rendering with React Router
- ⚡️ Lightning-fast development with HMR
- 🔒 TypeScript by default for robust code
- 📦 Asset bundling and optimization
- 📖 [React Router docs](https://reactrouter.com/)
- 🌐 Lingui for internationalization
- 🎨 Tailwind CSS for sleek styling
- 🔍 ESLint & Prettier for impeccable code quality
- 🐶 Git hooks with Husky – keeping your commits as cool as you are!

## Getting Started 👣

### Installation

Install dependencies:

```bash
pnpm install
```

### Development

Fire up the development server:

```bash
pnpm run dev
```

Your project will light up with Hot Module Replacement! 🔥

### Building for Production

Craft a production-ready build:

```bash
pnpm run build
```

### Running in Production

Start the production server:

```bash
pnpm run start
```

## Docker Deployment 🐳

Three Dockerfiles are provided for different package managers:

- `Dockerfile` - for npm
- `Dockerfile.pnpm` - for pnpm
- `Dockerfile.bun` - for bun

Example command for pnpm:

```bash
docker build -f Dockerfile.pnpm -t reactham .
docker run -p 3000:3000 reactham
```

## Additional Scripts ⚙️

- `pnpm run typecheck` – Run TypeScript type checking ✅
- `pnpm run lint` – Lint your codebase 🧹
- `pnpm run format` – Prettify your files with Prettier 🎯
- `pnpm run lingui:extract` & `pnpm run lingui:compile` – Manage translations with Lingui 🌍
- `pnpm run prepare` – Install Husky git hooks to guard your commits 🐶

## Collaboration 🤝

We welcome contributions!  
- Fork the repo, create a branch, and submit a pull request.  
- Join our mailing list or chat on our community channel for ideas and feedback.  
- Feel free to open issues for bugs or feature requests.

---

Built with ❤️ using React Router and modern full-stack tooling. Let's build something awesome! 🤘
