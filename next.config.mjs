/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/react-test',
    images: {
        unoptimized: true,
        loader: 'custom',
        loaderFile: './image-loader.js',
    },
    assetPrefix: '/react-test',
    trailingSlash: true,
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            type: 'asset/resource',
        });
        return config;
    },
};

export default nextConfig;
