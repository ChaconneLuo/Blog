export const deleteProperty = <T, R>(obj: any, property: string[]): R => {
  for (let p of property) {
    delete obj[p];
  }
  return obj;
};
