import {readContacts} from '../utils/readContacts.js';
import {writeContacts} from '../utils/writeContacts.js';

export const removeLastContact = async () => {
    try{
        const arrayContacts = await readContacts();
        
        if (arrayContacts=== 0){
            console.log('did not find any contacts');
        };
        const newArrayContacts = arrayContacts.slice(0, -1);
        await writeContacts(newArrayContacts);
    }catch (err) {
        console.error("Error", err);
    }
};

removeLastContact();
