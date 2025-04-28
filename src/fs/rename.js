import path from 'node:path';
import fs from 'node:fs/promises';
import { FS_ERROR_TEXT } from '../constants.js';
import { getDirName } from '../utils.js';

const __dirname = getDirName(import.meta.url);

const rename = async () => {
    const oldFilePath = path.resolve(__dirname, 'files', 'wrongFilename.txt');
    const newFilePath = path.resolve(__dirname, 'files', 'properFilename.md');

    try{
        await fs.rename(oldFilePath, newFilePath);
    } catch {
        throw new Error(FS_ERROR_TEXT);
    }
};

await rename();