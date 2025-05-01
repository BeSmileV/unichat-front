import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */
    webpack(config) {
        const fileLoaderRule = config.module.rules.find((rule: any) =>
            rule.test?.test?.(".svg")
        );

        if (fileLoaderRule) {
            // Добавляем обработку SVG как URL при ?url
            config.module.rules.push(
                {
                    ...fileLoaderRule,
                    test: /\.svg$/i,
                    resourceQuery: /url/, // import icon from './icon.svg?url'
                },
                {
                    test: /\.svg$/i,
                    issuer: fileLoaderRule.issuer,
                    resourceQuery: {not: [/url/]}, // import Icon from './icon.svg'
                    use: ["@svgr/webpack"],
                }
            );

            // Исключаем SVG из оригинального file loader
            fileLoaderRule.exclude = /\.svg$/i;
        }

        return config;
    },
    // reactStrictMode: false,
    output: 'standalone',
};

export default nextConfig;
