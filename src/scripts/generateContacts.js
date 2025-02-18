import {createFakeContact} from '../utils/createFakeContact.js';
import {writeContacts} from '../utils/writeContacts.js';
import {readContacts} from '../utils/readContacts.js';

const generateContacts = async (number) => {
    try {
        const oldContacts = await readContacts();
        const newContacts = Array.from({length:number}, ()=> createFakeContact());
        const plusNewContacts = [...oldContacts, ...newContacts];

        let newArrayContacts = await writeContacts(plusNewContacts);
        console.log(newArrayContacts);
    } catch(error) {
        console.error('Error generating contacts:', error);
    }

};

generateContacts(5);
