import { LoadRemoteModuleOptions } from '@angular-architects/module-federation-runtime';
export function interfaces(): string {
  return 'interfaces';
}

export interface MicroFrontendRuntime {
  path?: string;
  version?: string;
  appName?: string;
  remoteOptions: LoadRemoteModuleOptions
}




/**
 * export declare type LoadRemoteModuleOptions = {
    remoteEntry?: string;
    remoteName: string;
    exposedModule: string;
};
 */