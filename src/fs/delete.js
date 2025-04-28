import path from 'node:path';
import fs from 'node:fs/promises';
import { FS_ERROR_TEXT } from '../constants.js';
import { getDirName } from '../utils.js';

const __dirname = getDirName(import.meta.url);

const remove = async () => {
    const filePath = path.resolve(__dirname, 'files', 'fileToRemove.txt');

    try{
        await fs.rm(filePath);
    } catch {
        throw new Error(FS_ERROR_TEXT);
    }
};

await remove();