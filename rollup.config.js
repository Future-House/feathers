import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import alias from '@rollup/plugin-alias';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs',
            sourcemap: true
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm',
            sourcemap: true
        }
    ],
    external: [
        'react',
        'react-dom',
        '@chakra-ui/react',
        'next-themes',
        /^@chakra-ui\/.*/,
        /^@emotion\/.*/,
    ],
    plugins: [
        peerDepsExternal(),
        {
            name: 'remove-use-client',
            transform(code) {
                return code.replace(/"use client";?/g, '').replace(/'use client';?/g, '');
            }
        },
        alias({
            entries: [
                { find: '@', replacement: path.resolve(__dirname, 'src') }
            ]
        }),
        postcss({
            minimize: true,
            modules: true,
            extract: false
        }),
        resolve({
            extensions: ['.js', '.jsx']
        }),
        commonjs(),
        babel({
            babelHelpers: 'bundled',
            presets: ['@babel/preset-react'],
            extensions: ['.js', '.jsx'],
            exclude: 'node_modules/**'
        })
    ]
};
