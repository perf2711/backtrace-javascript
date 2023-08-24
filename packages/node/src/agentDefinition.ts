import { SdkOptions } from '@backtrace-labs/sdk-core/lib/builder/SdkOptions';

// These variables will be set on compilation stage
declare const BACKTRACE_AGENT_NAME: string;
declare const BACKTRACE_AGENT_VERSION: string;

export const AGENT: SdkOptions = {
    langName: 'nodejs',
    langVersion: process.version,
    /**
     * To do - in the build stage, we can inject information
     * about our package name and agent version. Since we don't have
     * it now, I'm leaving it hardcoded, but in the future we want
     * to change it and use webpack to generate it
     */
    agent: BACKTRACE_AGENT_NAME,
    agentVersion: BACKTRACE_AGENT_VERSION,
};
