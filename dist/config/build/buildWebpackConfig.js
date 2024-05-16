import { buildLoaders } from "./buildLoaders";
import { buildResolve } from "./buildResolve";
import { buildPlugins } from "./buildPlugins";
export function buildWebpackConfig(options) {
    var mode = options.mode, paths = options.paths;
    return {
        mode: mode,
        entry: paths.entry,
        devtool: 'inline-source-map',
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolve(),
        plugins: buildPlugins(options),
    };
}
