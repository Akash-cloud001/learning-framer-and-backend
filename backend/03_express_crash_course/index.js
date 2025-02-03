import 'dotenv/config'
import express from 'express'

const app = express();
const port = process.env.PORT || 3000
app.use(express.json())


const teaData = [] //to store the teas
let id = 0;

//create a tea
app.post('/teas', (req, res)=>{
    console.log(req.body)
    const {name, price} = req.body
    const newTea = {id:id++, name, price}
    teaData.push(newTea)
    res.status(201).send(newTea)
})

// get all tea
app.get('/teas', (req, res)=>{
    res.status(200).send(teaData)
})

//find a tea using with id
app.get('/teas/:id', (req,res)=>{
    const id = req.params.id
    const tea = teaData.find(t => t.id === parseInt(id))
    if(!tea){
        return res.status(404).send("Couldn't find the tea")
    }
    res.status(200).send(tea)
})

//update tea
app.put('/teas/:id', (req, res)=>{
    const id = req.params.id
    const tea = teaData.find(t => t.id === parseInt(id))
    if(!tea){
        return res.status(404).send("Couldn't find the tea")
    }
    const {name, price} = req.body;
    tea.name = name;
    tea.price = price;
    res.status(200).send(tea)
})


//delete tea
app.delete('/teas/:id', (req, res)=>{
    const idx = teaData.findIndex(t => t.id === parseInt(req.params.id))
    if(idx === -1){
        return res.status(404).send('tea not found')
    }
    teaData.splice(idx, 1)
    return res.status(204).send('tea Data updated')

})

app.listen(port, () => {
    console.log(`server is running at port: ${port}...`)
})