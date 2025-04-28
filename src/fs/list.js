import path from 'node:path';
import fs from 'node:fs/promises';
import { FS_ERROR_TEXT } from '../constants.js';
import { getDirName } from '../utils.js';

const __dirname = getDirName(import.meta.url);

const list = async () => {
    const filesFolderPath = path.resolve(__dirname, 'files');

    try{
        const filesArr = await fs.readdir(filesFolderPath);
        filesArr.forEach((fileName) => {
            console.log(fileName);
        })
    } catch {
        throw new Error(FS_ERROR_TEXT);
    }
};

await list();