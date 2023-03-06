// jest.config.js
module.exports = {
  rootDir: ".",
  clearMocks: true,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [
    "<rootDir>/jest.setup.js"
  ],
  moduleNameMapper: {
    "\.(css|less)$": "identity-obj-proxy"
  }
};

