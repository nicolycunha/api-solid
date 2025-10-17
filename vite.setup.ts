if (process.env.CI) {
  process.once('SIGTERM', () => {
    process.exit(0)
  })
}
