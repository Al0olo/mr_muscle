const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// module.exports = {
//   pwa: {
//     manifestOptions: {
//       name: "MR Muscle",
//       short_name: "MR Muscle",
//       start_url: "./",
//       display: "standalone",
//       theme_color: "#000000",
//       icons: [
//         {
//           src: "./favicon.svg",
//           sizes: "512x512",
//           type: "image/svg+xml",
//           purpose: "any maskable",
//         },
//       ],
//     },
//   },
// };