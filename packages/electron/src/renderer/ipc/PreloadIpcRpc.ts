import { IpcRpc, SyncIpcRpcCaller } from '../../common/ipc/IpcRpc';

declare global {
    interface Window {
        BACKTRACE_IPC_RPC: IpcRpc & SyncIpcRpcCaller;
    }
}

export const PreloadIpcRpc = window.BACKTRACE_IPC_RPC;
