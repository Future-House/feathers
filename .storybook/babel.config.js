export default {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['>0.2%', 'not dead', 'not op_mini all']
        }
      }
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic'
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    // Only include React Compiler for stories, not for docgen
    [
      'babel-plugin-react-compiler',
      {
        runtimeModule: 'react-compiler-runtime'
      }
    ]
  ]
};