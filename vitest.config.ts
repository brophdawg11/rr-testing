import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // Note: happy-dom over jsdom due to https://github.com/vitest-dev/vitest/issues/7906
    environment: "happy-dom",
  },
});
