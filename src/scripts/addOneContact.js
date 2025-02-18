import {createFakeContact} from '../utils/createFakeContact.js';
import {writeContacts} from '../utils/writeContacts.js';
import {readContacts} from '../utils/readContacts.js';

export const addOneContact = async () => {
    try {
        const oldContacts = await readContacts();
        const newContact = createFakeContact();
        const plusNewContacts = [...oldContacts, newContact] ;
        
        let newArrayContacts = await writeContacts(plusNewContacts);
        console.log(newArrayContacts);
    } catch(error) {
        console.error('Error generating contacts:', error);
    }
};

addOneContact();
