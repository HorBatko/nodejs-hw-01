import {readContacts} from '../utils/readContacts.js';

export const countContacts = async () => {
    const arrayContacts = await readContacts().length;
    return arrayContacts.length;
};

console.log(await countContacts());
