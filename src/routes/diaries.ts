import express  from "express";

const router = express.Router();

router.get('/', (_req, res) => {
    res.send('Fetching all entry diaries')
})

router.post('/', (_req, res) => {
    res.send('Saving a diary!')
})

export default router;

/*entiendo que esta carpeta es distinta a index porque se guarda (o la accion que sea) la info de router, en cambio, en index.ts se guarda otra info.

en index se USA a las otras funciones con el app.use(), los otros archivos sólo tienen funciones dentro que van a ser llamadas. 

//entiendo que se diferencian por la función: en index.ts es
const app = express()
app.use(express.json()) 

y acá es


const router = express.Router();

y cuando son llamadas las acciones, se llaman por su nombre de función, en app es app.get
(o post, send) y acá es router.get 

*/