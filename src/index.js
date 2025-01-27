const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express(); 

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use('/api', apiRoutes);
// app.use('/flightsService/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    // const { City,Airport } = require('./models')
    
    // // const city = await City.findByPk(10);
    // // await city.createAirport({name : 'Kolkata International Airport', code : 'KOL'})
    // // await City.destroy({
    // //     where: {
    // //         id : 10
    // //     }
    // // })
});
