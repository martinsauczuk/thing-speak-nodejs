const superagent = require('superagent'); // Librería para realizar el llamado HTTP a ThingSpeak

const CHANNEL_ID = '938801';
const url = `https://api.thingspeak.com/channels/${CHANNEL_ID}/fields/1.json`;


console.log(`Chequeando conexion a ${url}...`);
superagent
  .get(url)
  .end((err, res ) => {
    
    if(err) {
      console.log(`Sin conexion con ${url}`);
      console.log(err);
      
      return
    }

    if (res.statusCode == 200) {
      
      let data = res.body;
      console.log(`Datos en crudo: ${JSON.stringify(data)}`);
      
      data.feeds.forEach( feed => {
        console.log(`Muestra: ${feed.entry_id} - valor: ${feed.field1}`);
      });

    }
  });