import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import path from 'node:path';

export const readContacts = async () => {
     const data = await fs.readFile(path.resolve(PATH_DB), {encoding:'utf8'});
     return JSON.parse(data);
};

readContacts()
  .then(data => console.log(data))
  .catch(err => console.error(err));

