import prisma from '../database/client.js'

const controller = {} //objeto vazio

controller.create = async function(req,res) {
    try{
        await prisma.cliente.create({data: req.body})
        //Envia uma resposta de sucessoao front-end
        //HTTP 201: Created
        res.status(201).end()
    }
    catch(error){
        console.error(error)
        //HTTP 500: Internal Server Error
        res.status(500).end()
    }
}

export default controller