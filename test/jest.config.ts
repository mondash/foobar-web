import type { Config } from "@jest/types";
import { pathsToModuleNameMapper } from "ts-jest";
import nextJest from "next/jest";
import tsconfig from "../tsconfig.json";

const moduleNameMapper = pathsToModuleNameMapper(
  tsconfig.compilerOptions.paths
);

const initialConfig: Config.InitialOptions = {
  rootDir: "..",
  moduleDirectories: ["node_modules", "<rootDir>"],
  moduleNameMapper,
  setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts"],
  testEnvironment: "jsdom",
};

const createJestConfig = nextJest({ dir: "." });
const config = createJestConfig(initialConfig);

export default config;
