module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-acme`
  extends: ["jacksgreen"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
