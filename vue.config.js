module.exports = {
  devServer: {
    proxy: {
      "^/": {
        target: "http://localhost:8088/",
        // pathRewrite: { "^/": "/" },
        changeOrigin: true,
        logLevel: "debug",
      }
    }
  }
};