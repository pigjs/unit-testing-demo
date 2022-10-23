module.exports = {
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  // // 是否显示覆盖率报告
  // collectCoverage: true,
  // 告诉 jest 哪些文件需要经过单元测试测试
  collectCoverageFrom: ["components/**/*.{ts,tsx}", "!components/**/__test__/__snapshots__"],
  // 设置单元测试覆盖率阀值
  coverageThreshold: {
    global: {
      statements: 90, // 保证每个语句都执行了
      functions: 90, // 保证每个函数都调用了
      branches: 90, // 保证每个 if 等分支代码都执行了
    },
  },
};
