import path from 'node:path';
import fs from 'node:fs/promises';
import { FS_ERROR_TEXT } from '../constants.js';
import { getDirName } from '../utils.js';

class DirExistError extends Error {
    constructor() {
      super();
      this.code = 'DIR_EXIST_ERROR';
    }
}

const __dirname = getDirName(import.meta.url);

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
        throw new Error(FS_ERROR_TEXT);
    }
};

await copy();
