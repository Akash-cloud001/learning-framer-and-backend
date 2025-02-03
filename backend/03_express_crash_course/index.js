import express from 'express'

const app = express();
const port = 3000
app.use(express.json())


const teaData = [] //to store the teas
let id = 0;
app.post('/teas', (req, res)=>{
    console.log(req.body)
    const {name, price} = req.body
    const newTea = {id:id++, name, price}
    teaData.push(newTea)
    res.status(201).send(newTea)
})


app.get('/teas', (req, res)=>{
    res.status(200).send(teaData)
})


app.listen(port, () => {
    console.log(`server is running at port: ${port}...`)
})