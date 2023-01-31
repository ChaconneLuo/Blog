export function toggle<T>(callback: (cur: T) => void, ...options: T[]): () => void {
  return function () {
    let current = options.shift()!;
    callback(current);
    options.push(current);
  };
}
