import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import { resolve as res } from 'path';

const p = process.env.NODE_ENV === 'production';

const include = [
  res('src/client')
];

const css = {
  loader: 'css-loader',
  query: {
    modules: true,
    importLoaders: 1,
    localIdentName: p ? '[hash:base64:5]' : '[name]__[local]__[hash:base64:5]',
    sourceMap: true
  }
};

const postcss = 'postcss-loader?sourceMap';

const sass = 'sass-loader?sourceMap';

const style = 'style-loader?sourceMap';

export const styles = {
  test: /\.(s[ca]|c)ss$/,
  include: include.concat(res('node_modules')),
  loader: p ?
    ExtractTextPlugin.extract({
      fallback: style,
      use: [ css, postcss, sass ]
    } as any) : [ style, css, postcss, sass ]
};

export const ts = {
  test: /\.tsx?$/,
  include,
  use: [
    {
      loader: 'awesome-typescript-loader',
      query: {
        transpileOnly: false,
        useBabel: true,
        useCache: true
      }
    }
  ]
};

export const tslint = {
  enforce: 'pre',
  test: /\.tsx?$/,
  include,
  use: [
    {
      loader: 'tslint-loader',
      options: {
        extends: res('tslint.json'),
        emitErrors: true,
        failOnHint: true,
        formatter: 'stylish'
      }
    }
  ]
};
