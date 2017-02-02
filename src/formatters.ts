export const b: string = '\x1B[1m';
export const cols: number = Math.min((process as any).stdout.columns - 4, 80);
export const hr: string = '-'.repeat(cols);
export const r: string = '\x1B[0m';
export const red: string = '\x1B[31m';
