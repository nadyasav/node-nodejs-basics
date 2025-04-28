import fs from 'fs';
import path from 'path';
import { getDirName } from '../utils.js';
import { pipeline } from 'node:stream/promises';
import zlib from 'node:zlib';

const __dirname = getDirName(import.meta.url);

const decompress = async () => {
    const pathFile = path.resolve(__dirname, 'files', 'fileToCompress.txt');
    const pathArchive = path.resolve(__dirname, 'files', 'archive.gz');

    try {
      await pipeline(
        fs.createReadStream(pathArchive),
        zlib.createGunzip(),
        fs.createWriteStream(pathFile)
      );
    } catch (err) {
        console.error('Error decompress archive: ', err);
    }
};

await decompress();