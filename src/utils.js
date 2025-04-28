import { fileURLToPath } from 'node:url';
import path from 'node:path';

export function getDirName(filePath = import.meta.url) {
  const __filename = fileURLToPath(filePath);
  const __dirname = path.dirname(__filename);

  return __dirname;
}
