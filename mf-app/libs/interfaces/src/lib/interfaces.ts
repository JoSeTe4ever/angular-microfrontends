export function interfaces(): string {
  return 'interfaces';
}


export interface MicroFrontendRuntime {
  appName: string;
  version: string;
  remoteName: string,
  remoteEntry: string,
  exposedModule: string,
}