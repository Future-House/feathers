const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const babel = require('@rollup/plugin-babel');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const terser = require('@rollup/plugin-terser');
const postcss = require('rollup-plugin-postcss');
const visualizer = require('rollup-plugin-visualizer').visualizer;
const ignore = require('rollup-plugin-ignore');
const copy = require('rollup-plugin-copy');

module.exports = {
    // NOTE: this is to ignore all warnings from node_modules but since chakra-ui is such a large part of this lib I don't want to omit it entirely
    onwarn(warning, warn) {
        if (warning.code === 'THIS_IS_UNDEFINED' || warning.message.includes('use client')) {
            return;
        } else if (/node_modules/.test(warning.loc)) {
            return;
        }
        warn(warning);
    },
    external: [
        // '@chakra-ui/react'
        'react',
        'react-dom',
        'prop-types'
    ],
    input: 'src/index.js',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs',
            sourcemap: true,
        }
    ],
    plugins: [
        ignore(['*.stories.js']),
        copy({
            targets: [
                { src: "src/assets/fonts", dest: "dist" },
            ],
        }),
        peerDepsExternal(),
        postcss({
            extract: true,
            sourceMap: process.env.NODE_ENV === 'development',
        }),
        resolve(),
        commonjs(),
        babel({
            babelHelpers: 'bundled',
            presets: ['@babel/preset-env', '@babel/preset-react'],
            exclude: 'node_modules/**'
        }),
        terser(),
        visualizer({
            filename: './bundle-analysis.html',
            open: false,
            gzipSize: true,
            brotliSize: true,
        }),
    ],
};
