import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs/promises';

class DirExistError extends Error {
    constructor() {
      super();
      this.code = 'DIR_EXIST_ERROR';
    }
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    const filesFolderPath = path.resolve(__dirname, 'files');
    const filesCopyFolderPath = path.resolve(__dirname, 'files_copy');

    try{
        try {
            await fs.access(filesCopyFolderPath);
            throw new DirExistError();
        } catch(err) {
            if (err instanceof DirExistError) {
                throw err;
            }
        }

        await fs.cp(filesFolderPath, filesCopyFolderPath, { recursive: true, errorOnExist: true, force: false });
    } catch {
        throw new Error('FS operation failed');
    }
};

await copy();
