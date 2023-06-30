export interface MetricsQueue<T> {
    readonly total: number;
    readonly submissionUrl: string;
    readonly maximumEvents: number;
    add(event: T): void;
    send(): Promise<void>;
}
