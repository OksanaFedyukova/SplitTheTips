interface ProcessEnv {
    readonly BASE_URL: string;
  }
  
  interface Process {
    env: ProcessEnv;
  }
  
  declare const process: Process;
  