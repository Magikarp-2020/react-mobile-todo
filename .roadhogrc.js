export default {
  'entry': 'src/index.js',
  'env': {
    'development': {
      'extraBabelPlugins': [
        'dva-hmr',
        'transform-runtime',
        ['import', { libraryName: 'antd-mobile', style: 'css' }],
        'transform-decorators-legacy'
      ]
    },
    'production': {
      'extraBabelPlugins': [
        'transform-runtime',
        ['import', { libraryName: 'antd-mobile', style: 'css' }],
        'transform-decorators-legacy'
      ]
    }
  },
  'publicPath': '/react-mobile-todo/dist/',
  'hash': true
};
