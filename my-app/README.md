todo: aniadir opcion para pedir pintura custom, terminar descripciones, que sea mobile first# 🌻 El diario de Arni 🌻

This project is a React-based art portfolio website showcasing Arni's artwork.

## Getting Started

These instructions will help you set up the project locally and deploy it to GitHub Pages.

### Prerequisites

- Node.js (v16 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/andresSaldanaAguilar/arnis_art_shop.git
   cd arnis_art_shop/my-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To start the development server:

```bash
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

## Deployment to GitHub Pages

This project is configured to deploy to GitHub Pages using the `gh-pages` package.

### Initial Setup (only needed once)

1. Make sure your `homepage` field in `package.json` points to your GitHub Pages URL:

   ```json
   "homepage": "https://andresSaldanaAguilar.github.io/arnis_art_shop"
   ```

2. Ensure you have the necessary GitHub permissions to push to the repository.

### Deploying

To deploy the latest version of your site to GitHub Pages:

```bash
npm run deploy
```

This command will:

1. Build the project (`npm run build`)
2. Push the built files to the `gh-pages` branch of your repository

After deployment, your site should be available at: https://andresSaldanaAguilar.github.io/arnis_art_shop

## Additional Commands

- `npm run build` - Builds the app for production to the `build` folder
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from create-react-app (one-way operation)

## Todo
