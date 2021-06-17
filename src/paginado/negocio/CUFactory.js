import  createDaoTexts  from '../persistencia/daoTexts.js'
import getTextosPorPagina from './CU_TextsByPage.js'

const daoText = createDaoTexts();

function createTextsByPageFactory() {
   const CU_texts = getTextosPorPagina(daoText);
   return CU_texts
}


export default createTextsByPageFactory