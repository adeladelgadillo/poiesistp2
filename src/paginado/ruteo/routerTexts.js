import express from 'express'
import createTextsByPageFactory from '../negocio/CUFactory.js'

function createRouterTexts() {
  const routerTexts=express.Router()
  const CUFactory = createTextsByPageFactory();
  
  routerTexts.get('/', async (req, res, next) => {
      try {
        const p = parseInt(req.query.p);
        const categoria=req.query.categoria;
        const paginatedTexts = CUFactory.buscar(p,categoria);
          res.json({
                paginaNro: p,
                contenido: paginatedTexts
              });
    
      } catch (err) {
        next(err)
      }
    })
  routerTexts.use((error,req,res,next)=>{
      res.json({message:error.message})
  })

  return routerTexts
}

export default createRouterTexts