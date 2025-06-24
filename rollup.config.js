import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import dts from 'rollup-plugin-dts';
import copy from 'rollup-plugin-copy';
import { readFileSync, readdirSync } from 'fs';

const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8'));

// Get all component files
const componentsDir = 'src/components/ui';
const componentFiles = readdirSync(componentsDir)
  .filter(file => file.endsWith('.tsx') && !file.includes('.stories') && !file.includes('.test'))
  .map(file => file.replace('.tsx', ''));

// Common plugin configurations
const getCommonPlugins = (useESModules = false) => [
  peerDepsExternal(),
  resolve({
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  }),
  commonjs(),
  typescript({
    tsconfig: './tsconfig.json',
    declaration: false,
    declarationMap: false,
    sourceMap: true,
    inlineSources: true,
  }),
  babel({
    babelHelpers: 'runtime',
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    exclude: 'node_modules/**',
    presets: [
      [
        '@babel/preset-env',
        {
          bugfixes: true,
          modules: false,
          targets: {
            browsers: ['last 2 versions', 'ie >= 11'],
            node: '14',
          },
        },
      ],
      ['@babel/preset-react', { runtime: 'automatic' }],
      '@babel/preset-typescript',
    ],
    plugins: [['@babel/plugin-transform-runtime', { useESModules }]],
  }),
];

const externalDeps = [
  'react',
  'react-dom',
  'react/jsx-runtime',
  'class-variance-authority',
  'class-variance-authority/types',
];

export default [
  // Main bundle - CommonJS build
  {
    input: 'src/index.ts',
    output: {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    plugins: [
      ...getCommonPlugins(false),
      postcss({
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css'],
        minimize: true,
        inject: {
          insertAt: 'top',
        },
        sourceMap: true,
      }),
      copy({
        targets: [{ src: 'src/lib/styles/index.css', dest: 'dist' }],
      }),
    ],
    external: externalDeps,
  },
  // Main bundle - ESM build
  {
    input: 'src/index.ts',
    output: {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
      exports: 'named',
    },
    plugins: [
      ...getCommonPlugins(true),
      postcss({
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css'],
        minimize: true,
        inject: {
          insertAt: 'top',
        },
        sourceMap: true,
      }),
      copy({
        targets: [{ src: 'src/lib/styles/index.css', dest: 'dist/esm', rename: 'globals.css' }],
      }),
    ],
    external: externalDeps,
  },
  // Individual component builds - CommonJS
  ...componentFiles.map(componentName => ({
    input: `src/components/ui/${componentName}.tsx`,
    output: {
      file: `dist/${componentName}.js`,
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    plugins: getCommonPlugins(false),
    external: [...externalDeps, '../lib/utils', '../../lib/utils'],
  })),
  // Individual component builds - ESM
  ...componentFiles.map(componentName => ({
    input: `src/components/ui/${componentName}.tsx`,
    output: {
      file: `dist/esm/${componentName}.js`,
      format: 'esm',
      sourcemap: true,
      exports: 'named',
    },
    plugins: getCommonPlugins(true),
    external: [...externalDeps, '../lib/utils', '../../lib/utils'],
  })),
  // Main TypeScript declarations for CommonJS
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/, ...externalDeps],
  },
  // Main TypeScript declarations for ESM
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/esm/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/, ...externalDeps],
  },
  // Individual component TypeScript declarations - CommonJS
  ...componentFiles.map(componentName => ({
    input: `src/components/ui/${componentName}.tsx`,
    output: [{ file: `dist/${componentName}.d.ts`, format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/, '../lib/utils', '../../lib/utils', ...externalDeps],
  })),
  // Individual component TypeScript declarations - ESM
  ...componentFiles.map(componentName => ({
    input: `src/components/ui/${componentName}.tsx`,
    output: [{ file: `dist/esm/${componentName}.d.ts`, format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/, '../lib/utils', '../../lib/utils', ...externalDeps],
  })),
];
