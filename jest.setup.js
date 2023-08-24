// jest.setup.js

// Mock Next.js image loader
jest.mock("next/image", () => ({
  __esModule: true,
  default: () => {
    return {
      render: () => null,
    };
  },
}));

// Configure Testing Library
require("@testing-library/jest-dom");
