import {BuildOptions} from "./types/config";
import type {Configuration as DevServerConfiguration} from 'webpack-dev-server'
import path from "path";

export function buildDevServer(options: BuildOptions): DevServerConfiguration{
    const {paths} = options
    return {
        port:options.port,
        open: {
            app: {
                name: '/Applications/Google Chrome.app',
            },
        },
        historyApiFallback: true,
        static: [
            {
                directory: paths.public,
            },
            {
                directory: paths.assert,
            },
        ]
    }
}