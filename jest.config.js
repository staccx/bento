/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  coverageReporters: [["lcov", { projectRoot: "." }], "text-summary", "json"],
  roots: ["<rootDir>/src/"]
}
