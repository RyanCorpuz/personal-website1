const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 3000;
process.env.NODE_ENV = 'production';    
app.use(cors())    
    
    
app.use(express.static('client/dist'));    
    
app.get('*', (req, res) => {    
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))               
})    
app.listen(PORT);   
