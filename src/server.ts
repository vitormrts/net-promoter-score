import 'reflect-metadata'
import express, { request, response } from 'express'
import"./database"

const app = express()

/*
   * GET => Buscar
   * POST => Adicionar
   * PUT => Alterar
   * DELET => Deletar
   * PATCH => Alteracao especifica
*/

app.get("/", (request, response) => {
    
    return response.json({message: "Hello World"})
})

app.post("/", (request, response) => {
    return response.json({message: "Os dados foram salvos com sucesso"})
})

app.listen(3000, () => {
    console.log("Server is running!")
})