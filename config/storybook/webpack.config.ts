import type { Configuration, RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        entry: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    // гарантируем, что resolve есть
    if (config.resolve) {
        config.resolve.modules = [
            ...(config.resolve.modules || []),
            paths.src,
        ];
        config.resolve.extensions = [
            ...(config.resolve.extensions || []),
            '.ts',
            '.tsx',
        ];
    }

    // гарантируем, что module.rules есть
    if (config.module?.rules) {
        config.module.rules = config.module.rules.map((rule) => {
            const ruleTest = (rule as RuleSetRule).test;
            if (ruleTest instanceof RegExp && ruleTest.test('svg')) {
                return { ...rule as RuleSetRule, exclude: /\.svg$/i };
            }
            return rule;
        });

        config.module.rules.push({
            test: /\.svg$/i,
            use: ['@svgr/webpack'],
        });

        config.module.rules.push(buildCssLoader(true));
    }

    return config;
};
