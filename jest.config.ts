import type {Config} from 'jest';
import {defaults} from 'jest-config';

const config: Config = {
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
    transform: {
        "^.+\\.(t|j)s$": ['ts-jest', { diagnostics: { ignoreCodes: ['TS151001'] } }],
    },
};

export default config;