import { createInvalidDataError } from './InvalidDataError.js';

function createErrorFactory(){
    return{
        createInvalidDataError: (message) => {
            throw createInvalidDataError(message);
        }
    }
}

export default createErrorFactory;