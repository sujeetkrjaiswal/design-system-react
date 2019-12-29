import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';

import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import svgr from '@svgr/rollup';
import autoprefixer from 'autoprefixer';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: {
    file: 'build/index.js',
    format: 'esm',
    sourcemap: true,
  },
  external: [
    ...Object.keys(pkg.dependencies),
    ...Object.keys(pkg.peerDependencies),
  ],
  plugins: [
    url(),
    svgr(),
    resolve({
      browser: true,
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx', '.md'],
    }),
    postcss({
      extract: true,
      // inject: true,
      module: true,
      use: ['sass'],
      plugins: [autoprefixer()],
    }),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: ['**/__tests__/**', '*.stories.tsx?', '*.test.tsx?'],
      clean: true,
      useTsconfigDeclarationDir: true,
    }),
    commonjs({
      // extensions: ['.js', '.jsx', '.ts', '.tsx'],
      include: ['node_modules/**'],
      // exclude: ['**/*.stories.js'],
      namedExports: {
        'node_modules/react/react.js': ['Children', 'Component', 'PropTypes', 'createElement'],
        'node_modules/react-dom/index.js': ['render'],
      },
    }),
  ],
};
