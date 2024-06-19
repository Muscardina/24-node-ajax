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
    var multiplicando1 = Number(req.query.parametro2)
    var multiplicando2 = Number(req.query.parametro3)
    var resultado2 = multiplicando1 * multiplicando2
    
    res.send(`MULTIPLICA: ${sumando1} + ${msumando2} = ${resultado2}`)
}

calculadoraBackend.get("/mult", multiplicacion)

//La divishion
//const suma = (req, res) => {
   // var sumando1 = Number(req.query.parametro1)
    //var sumando2 = Number(req.query.parametro2)
    //var resultado = sumando1 + sumando2
    
   // res.send(`SUMA: ${sumando1} + ${sumando2} = ${resultado}`)
//}

//calculadoraBackend.get("/calculo", suma)

calculadoraBackend.listen(port, () => {
    console.log(`Calculadora escuchando en http://localhost:${port}`)
})
