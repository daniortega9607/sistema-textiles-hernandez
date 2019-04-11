module.exports = {
  devServer: {
    proxy: 'http://localhost',
  },
  outputDir: '../public',
  indexPath:
        process.env.NODE_ENV === 'production'
          ? '../resources/views/index.blade.php'
          : 'index.html',
  pwa: {
    name: 'Textiles Hernandez',
    themeColor: '#b3d4fc',
    msTileColor: '#b3d4fc',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
    },
  }
}