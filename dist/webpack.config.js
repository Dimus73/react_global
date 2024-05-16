import path from 'path';
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
var paths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
};
var mode = "development";
var isDev = mode == "development";
var config = buildWebpackConfig({
    mode: 'development',
    paths: paths,
    isDev: isDev,
});
export default config;
