const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: 'http://localhost:8000',
    client: {
      webSocketURL: 'wss://stunning-space-palm-tree-97j9wxg7gx4ph6vx-8080.app.github.dev/ws',
    },
  },
});
