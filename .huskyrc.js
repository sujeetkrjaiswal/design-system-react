module.exports = {
  hooks: {
    'pre-commit': "lint-staged",
    'pre-push': 'npm run check:errors && npm run build'
  }
}