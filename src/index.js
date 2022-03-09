const app = require('express')();

app.get('/', (req, res ) => 
    res.sendFile(__dirname+'/index.html')
    // res.json({ message: 'This is running on Docker 🐳' }) 
);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`) );