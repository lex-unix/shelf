/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ['**/.*'],
  future: {
    unstable_tailwind: true
  },
  server: process.env.NODE_ENV === 'development' ? undefined : './server.js',
  serverBuildPath: 'api/index.js'
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
}
