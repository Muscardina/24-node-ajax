const express = require("express")
const calculadoraBackend = express()
const port = 3000

calculadoraBackend.use(express.static('static/front'))

calculadoraBackend.get("/hola", (req, res) =>{
    res.send("Hola Calculadora")
})
//La sumashion
const suma = (req, res) => {
    var sumando1 = Number(req.query.parametro1)
    var sumando2 = Number(req.query.parametro2)
    var resultado = sumando1 + sumando2
    
    res.send(`SUMA: ${sumando1} + ${sumando2} = ${resultado}`)
}

calculadoraBackend.get("/suma", suma)

//La multiplicashion
const multiplicacion = (req, res) => {
    var multiplicando1 = Number(req.query.parametro1)
    var multiplicando2 = Number(req.query.parametro2)
    var resultado2 = multiplicando1 * multiplicando2
    
    res.send(`MULTIPLICA: ${multiplicando1} * ${multiplicando2} = ${resultado2}`)
}

calculadoraBackend.get("/mult", multiplicacion)

//La restasion
const resta = (req, res) => {
   var restando1 = Number(req.query.parametro1)
    var restando2 = Number(req.query.parametro2)
    var resultado3 = restando1 + restando2
    
   res.send(`RESTA: ${restando1} - ${restando2} = ${resultado3}`)
}

calculadoraBackend.get("/resta", resta)

calculadoraBackend.listen(port, () => {
    console.log(`Calculadora escuchando en http://localhost:${port}`)
})
