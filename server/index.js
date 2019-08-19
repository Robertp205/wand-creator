const express = require('express');
const cors = require('cors');
const ctrl = require('./controller')



const app = express()

app.use(express.json())
app.use(cors())


app.get('/api/wands', ctrl.getWands);
app.post('/api/wands', ctrl.postWands);
app.put('/api/wands/:id', ctrl.updateWands);
app.delete('/api/wands/:id', ctrl.deleteWands);


app.listen(8080, () => {
    console.log("the server is runninggg")
})