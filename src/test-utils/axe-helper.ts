import { configureAxe } from "jest-axe";

// https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md

export const axe = configureAxe({
  rules: {
    // for demonstration only, don't disable rules that need fixing.
    "image-alt": { enabled: false },
  },
});
