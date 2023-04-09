module.exports = {
  apps: [
    {
      name: 'joongsint',
      script: './node_modules/@vue/cli-service/bin/vue-cli-service.js',
      args: 'serve --port 3000',
      instances: 0,
      exec_mode: 'fork',
    },
  ],
};
