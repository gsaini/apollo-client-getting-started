import { configureAxe } from "jest-axe";

export const axe = configureAxe({
  rules: {
    // for demonstration only, don't disable rules that need fixing.
    "image-alt": { enabled: false },
  },
});
