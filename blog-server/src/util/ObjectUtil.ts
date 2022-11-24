export const deleteProperty = <T, R>(obj: T | R, property: string[]): R => {
  for (let p of property) {
    delete obj[p];
  }
  return obj as R;
};
