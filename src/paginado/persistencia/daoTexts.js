const texts = [
  { id: 1, nombretexto: "ejemplo1", genero: "ficción", idGenero: "ficcion" },
  { id: 2, nombretexto: "ejemplo2", genero: "ficción", idGenero: "ficcion" },
  { id: 3, nombretexto: "ejemplo3", genero: "ficción", idGenero: "ficcion" },
  { id: 4, nombretexto: "ejemplo4", genero: "ficción", idGenero: "ficcion" },
  { id: 5, nombretexto: "ejemplo5", genero: "ficción", idGenero: "ficcion" },
  { id: 6, nombretexto: "ejemplo6", genero: "ficción", idGenero: "ficcion" },
  { id: 7, nombretexto: "ejemplo7", genero: "ficción", idGenero: "ficcion" },
  { id: 8, nombretexto: "ejemplo8", genero: "ficción", idGenero: "ficcion" },
  { id: 9, nombretexto: "ejemplo9", genero: "ficción", idGenero: "ficcion" },
  { id: 10, nombretexto: "ejemplo10", genero: "ficción", idGenero: "ficcion" },
  { id: 11, nombretexto: "ejemplo11", genero: "no ficción", idGenero: "no_ficcion" },
  { id: 12, nombretexto: "ejemplo12", genero: "no ficción", idGenero: "no_ficcion" },
  { id: 13, nombretexto: "ejemplo13", genero: "no ficción", idGenero: "no_ficcion" },
  { id: 14, nombretexto: "ejemplo14", genero: "no ficción", idGenero: "no_ficcion" },
  { id: 15, nombretexto: "ejemplo15", genero: "no ficción", idGenero: "no_ficcion" },
  { id: 16, nombretexto: "ejemplo16", genero: "no ficción", idGenero: "no_ficcion" },
  { id: 17, nombretexto: "ejemplo17", genero: "no ficción", idGenero: "no_ficcion" },
  { id: 18, nombretexto: "ejemplo18", genero: "no ficción", idGenero: "no_ficcion" },
  { id: 19, nombretexto: "ejemplo19", genero: "no ficción", idGenero: "no_ficcion" },
  { id: 20, nombretexto: "ejemplo20", genero: "no ficción", idGenero: "no_ficcion" },
  { id: 21, nombretexto: "ejemplo21", genero: "poesía", idGenero: "poesia" },
  { id: 22, nombretexto: "ejemplo22", genero: "poesía", idGenero: "poesia" },
  { id: 23, nombretexto: "ejemplo23", genero: "poesía", idGenero: "poesia" },
  { id: 24, nombretexto: "ejemplo24", genero: "poesía", idGenero: "poesia" },
  { id: 25, nombretexto: "ejemplo25", genero: "poesía", idGenero: "poesia" },
  { id: 26, nombretexto: "ejemplo26", genero: "poesía", idGenero: "poesia" },
  { id: 27, nombretexto: "ejemplo27", genero: "poesía", idGenero: "poesia" },
  { id: 28, nombretexto: "ejemplo28", genero: "poesía", idGenero: "poesia" },
  { id: 29, nombretexto: "ejemplo29", genero: "poesía", idGenero: "poesia" },
  { id: 30, nombretexto: "ejemplo30", genero: "poesía", idGenero: "poesia" }
];

function createDaoTexts() {
  const textsToShowByPage = 9;
  return {
    getByGenero: (numberPage, generoSeleccionado) => {
      let paginatedTexts = [];
      switch (generoSeleccionado) {
        case 'ficcion':
          for (let index = 0; index < texts.length; index++) {
            if (texts[index].idGenero == "ficcion") {
              paginatedTexts.push(texts[index])
            }
          }
          return [...paginatedTexts.slice(numberPage * textsToShowByPage - textsToShowByPage, numberPage * textsToShowByPage)]
        case 'no_ficcion':
          for (let index = 0; index < texts.length; index++) {
            if (texts[index].idGenero == "no_ficcion") {
              paginatedTexts.push(texts[index])
            }
          }
          return [...paginatedTexts.slice(numberPage * textsToShowByPage - textsToShowByPage, numberPage * textsToShowByPage)]
        case 'poesia':
          for (let index = 0; index < texts.length; index++) {
            if (texts[index].idGenero == "poesia") {
              paginatedTexts.push(texts[index])
            }
          }
          return [...paginatedTexts.slice(numberPage * textsToShowByPage - textsToShowByPage, numberPage * textsToShowByPage)]
        default:
          throw new Error("Género no encontrado")
      }
    }
  }
}




/*function getDaoTexts() {  
  return( 
    {
        getPoesia: (numberPage,textsToShowByPage) =>  {
          let newArray=new Array;
          for (let index = 0; index < texts.length; index++) {
              if(texts[index].idGenero=="poesia")
                {
                  newArray.push(texts[index]) 
                }
            }
            return [...newArray.slice(numberPage*textsToShowByPage-textsToShowByPage,numberPage*textsToShowByPage)]
        },
        getFiccion: (numberPage,textsToShowByPage) =>  {
          let newArray=new Array;
          for (let index = 0; index < texts.length; index++) {
              if(texts[index].idGenero=="ficcion")
                {
                  newArray.push(texts[index]) 
                }
            }
          return [...newArray.slice(numberPage*textsToShowByPage-textsToShowByPage,numberPage*textsToShowByPage)]
        },
        getNoFiccion: (numberPage,textsToShowByPage) =>  {
          let newArray=new Array;
          for (let index = 0; index < texts.length; index++) {
              if(texts[index].idGenero=="no_ficcion")
                {
                  newArray.push(texts[index]) 
                }
            }
          return [...newArray.slice(numberPage*textsToShowByPage-textsToShowByPage,numberPage*textsToShowByPage)]
        },
        getError:()=>{
        let error="género inexistente"
        return error;
        }
    
          

    })
}*/

//export default getDaoTexts

export default createDaoTexts
