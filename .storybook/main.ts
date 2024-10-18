import { dirname, join } from 'path'

import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
    stories: [
        '../src/components/common/docs/*.mdx',

        '../src/components/common/foundation/**/*.mdx',
        '../src/components/common/foundation/**/*.stories.@(js|jsx|ts|tsx)',
        '../src/components/common/atoms/**/*.mdx',
        '../src/components/common/atoms/**/*.stories.@(js|jsx|ts|tsx)',
        '../src/components/common/molecules/**/*.mdx',
        '../src/components/common/molecules/**/*.stories.@(js|jsx|ts|tsx)',
        '../src/components/common/organisms/**/*.mdx',
        '../src/components/common/organisms/**/*.stories.@(js|jsx|ts|tsx)',
        '../src/components/common/pages/**/*.mdx',
        '../src/components/common/pages/**/*.stories.@(js|jsx|ts|tsx)',
        '../src/components/common/sandbox/**/*.mdx',
        '../src/components/common/sandbox/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        getAbsolutePath('@storybook/addon-links'),
        getAbsolutePath('@storybook/addon-essentials'),
        getAbsolutePath('@storybook/addon-interactions'),
    ],
    framework: {
        name: getAbsolutePath('@storybook/vue3-vite'),
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    async viteFinal(config) {
        return config
    },
    core: {
        disableTelemetry: true,  
    },
}
export default config

function getAbsolutePath(value: string): any {
    return dirname(require.resolve(join(value, 'package.json')))
}
