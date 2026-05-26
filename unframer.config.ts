// unframer configuration
// https://github.com/remorses/unframer

const config = {
  // Paste your Framer component URLs here to sync them into src/framer/.
  // Run: npm run framer:sync
  //
  // Example:
  // components: {
  //   Hero: "https://framer.com/projects/My-Site--abc123/Hero",
  //   Navbar: "https://framer.com/projects/My-Site--abc123/Navbar",
  // },
  components: {} as Record<string, string>,
  outputDir: "src/framer",
};

export default config;
