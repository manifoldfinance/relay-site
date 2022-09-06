module.exports = () => {
  // code from before omitted for brevity

  // https://stackoverflow.com/a/34518749/5323344
  const latestGitCommitHash =
    childProcess
    .execSync('git rev-parse --short HEAD')
    .toString()
    .trim();

  return {
    // ... other values here
    hash: latestGitCommitHash,
  }
}
