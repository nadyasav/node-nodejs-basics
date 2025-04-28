import path from 'node:path';
import fs from 'node:fs/promises';
import { FS_ERROR_TEXT } from '../constants.js';
import { getDirName } from '../utils.js';

const __dirname = getDirName(import.meta.url);

const create = async () => {
    const FILE_TEXT = 'I am fresh and young';
    const filePath = path.resolve(__dirname, 'files', 'fresh.txt');

    try{
        await fs.writeFile(filePath, FILE_TEXT, { flag: 'wx', encoding: 'utf-8' });
    } catch {
        throw new Error(FS_ERROR_TEXT);
    }
};

await create();