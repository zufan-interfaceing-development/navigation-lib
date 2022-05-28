import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss';
import scss from 'rollup-plugin-scss'
import autoprefixer from 'autoprefixer';
import commonjs from '@rollup/plugin-commonjs';

export default [
    {
        input: './src/index.js', //entry point
        output: [
            
            {
                file: 'dist/index.es.js',
                format: 'es',
                exports: 'named',
            }
        ],
        plugins: [
            scss(),
            postcss({
                plugins: [autoprefixer],
                minimize: false,
              }),
            babel({
                exclude: 'node_modules/**',
                presets: ["@babel/preset-react"]
            }),
            commonjs({ include: ["./index.js", "node_modules/**"] }),
            external(),
            resolve({}),
        ]
    }
]