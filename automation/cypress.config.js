import { defineConfig } from "cypress";
export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    supportFile: "cypress/support/e2e.js",
    // specPattern: "cypress/e2e/**/*.spec.cy.{js,jsx,ts,tsx}",
    specPattern: "cypress/component/**/*.cy.{js,jsx,ts,tsx}", // or adjust as needed
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
