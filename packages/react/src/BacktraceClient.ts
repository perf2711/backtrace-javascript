import {
    BacktraceClientSetup,
    BacktraceConfiguration,
    BacktraceClient as BrowserClient,
    getStackTraceConverter,
} from '@backtrace-labs/browser';
import { AGENT } from './agentDefinition';
import { BacktraceReactClientBuilder } from './builder/BacktraceReactClientBuilder';
import { ReactStackTraceConverter } from './converters/ReactStackTraceConverter';

export class BacktraceClient extends BrowserClient<BacktraceConfiguration> {
    constructor(clientSetup: BacktraceClientSetup) {
        super({
            sdkOptions: AGENT,
            stackTraceConverter: new ReactStackTraceConverter(getStackTraceConverter()),
            ...clientSetup,
        });
    }

    public static builder(options: BacktraceConfiguration): BacktraceReactClientBuilder {
        return new BacktraceReactClientBuilder({ options });
    }
    /**
     * Initializes the client. If the client already exists, the available instance
     * will be returned and all other options will be ignored.
     * @param options client configuration
     * @param build builder
     * @returns backtrace client
     */
    public static initialize(
        options: BacktraceConfiguration,
        build?: (builder: BacktraceReactClientBuilder) => void,
    ): BacktraceClient {
        if (this.instance) {
            return this.instance;
        }
        const builder = this.builder(options);
        build && build(builder);
        this._instance = builder.build();
        return this._instance as BacktraceClient;
    }

    /**
     * Returns created BacktraceClient instance if the instance exists.
     * Otherwise undefined.
     */
    public static get instance(): BacktraceClient | undefined {
        return this._instance as BacktraceClient;
    }
}
