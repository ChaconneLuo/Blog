export type ElementOfArray<T extends unknown[]> = T extends Array<infer P> ? P : never;
