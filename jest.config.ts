import nextJest from "next/jest";
import type { Config } from "@jest/types";

const initialConfig: Config.InitialOptions = {
  testEnvironment: "jsdom",
};
const createJestConfig = nextJest({ dir: "." });
const config = createJestConfig(initialConfig);

export default config;
