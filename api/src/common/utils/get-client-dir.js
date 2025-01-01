import path from 'node:path';
export const getClientDir = () =>
  path.join(path.resolve(), '..', 'client', 'dist');
