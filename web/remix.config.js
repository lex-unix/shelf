/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ['**/.*'],
  future: {
    v2_errorBoundary: true,
    v2_routeConvention: true,
    v2_normalizeFormMethod: true
  },
  tailwind: true,
  postcss: true
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
}
