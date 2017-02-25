const grunt = require('grunt')
require('load-grunt-tasks')(grunt)
grunt.loadNpmTasks('grunt-contrib-uglify')

grunt.initConfig({
  babel: {
    options: {
      sourceMap: true,
      presets: ['babel-preset-es2015']
    },
    dist: {
      files: [{
        expand: true,
        cwd: 'src/',
        src: ['**/*.js'],
        dest: 'dist/',
        ext: '.js',
        extDot: 'first'
      }]
    }
  },
  exec: {
    package: {
      command: 'npm install -g'
    }
  },
  uglify: {
    target: {
      files: [{
        expand: true,
        cwd: 'dist/',
        src: '**/*.js',
        dest: 'dist/'
      }]
    }
  }
})

grunt.registerTask('default', ['babel'])
grunt.registerTask('package', ['babel', 'uglify', 'exec'])
