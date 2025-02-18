import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import path from 'node:path';

export const writeContacts = async (updatedContacts) => {
    const data = JSON.stringify(updatedContacts);
    await fs.writeFile(path.resolve(PATH_DB), data);
};