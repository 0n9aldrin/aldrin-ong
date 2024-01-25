const path = require('path');

module.exports = function override(config) {
    config.resolve.fallback = {
        ...config.resolve.fallback,
        'url': require.resolve('url/'),
        'util': require.resolve('util/'),
        'stream': require.resolve('stream-browserify'),
        'http': require.resolve('stream-http'),
        'https': require.resolve('https-browserify'),
        'os': require.resolve('os-browserify/browser'),
        'zlib': require.resolve('browserify-zlib'),
        'fs': false, // Usually, fs is not needed in the browser
        'net': false, // Usually, net is not needed in the browser
        'tls': false, // Usually, tls is not needed in the browser
        'dns': require.resolve('dns.js'),
        'path': require.resolve('path-browserify'),
        'buffer': require.resolve('buffer/'),
        'assert': require.resolve('assert/'),
        'http2': false,  // http2 is typically not used in the browser
        'dgram': false,
        'process': require.resolve('process/browser'),
    };
    const webpack = require('webpack');
    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ]);
    return config;
};
