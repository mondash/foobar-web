import nextJest from "next/jest";
import type { Config } from "@jest/types";

const initialConfig: Config.InitialOptions = {
  setupFilesAfterEnv: ["./jest.setup.ts"],
  testEnvironment: "jsdom",
};
const createJestConfig = nextJest({ dir: "." });
const config = createJestConfig(initialConfig);

export default config;
