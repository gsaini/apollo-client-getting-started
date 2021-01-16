// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
import { setDefaultOptions } from "jsdom-screenshot";
import { toMatchImageSnapshot } from "jest-image-snapshot";
import { toHaveNoViolations } from "jest-axe";

setDefaultOptions({
  serve: ["src"],
});

expect.extend({ toMatchImageSnapshot });
expect.extend(toHaveNoViolations);

// give tests more time as taking screenshots takes a while
jest.setTimeout(10000);
