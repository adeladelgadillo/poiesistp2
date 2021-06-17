function getTextosPorPagina(daoTexts) {
  return({
      buscar:(p,generoSeleccionado) =>  {
        return daoTexts.getByGenero(p,generoSeleccionado);
      }
    })
  }
export default  getTextosPorPagina
