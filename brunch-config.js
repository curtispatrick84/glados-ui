module.exports = {
  // npm: {
  //   enabled: true,
  //   styles: {
  //   }
  // },
  files: {
    javascripts: {
      joinTo: {
        'js/app.js': /^src/,
        'js/vendor.js': /^node_modules/
      }
    },
    stylesheets: {
      joinTo: {
        'css/vendor.css': /^node_modules/
      }
    }
  },
  conventions: {
    ignored: () => false
  },
  paths: {
    watched: ['src']
  },
  plugins: {
    babel: {
      presets: ['env', 'stage-1', 'react'],
      plugins: ['transform-runtime']
    },
    postcss: {
      processors: [
        require('autoprefixer')(['last 8 versions'])
      ]
    }
  },
  modules: {
    autoRequire: {
      'js/app.js': ['src/init']
    }
  },
  server: {
    hostname: '0.0.0.0',
    port: 8600
  }
}
