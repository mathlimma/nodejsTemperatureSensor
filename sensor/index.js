const sensor = require('node-dht-sensor').promises;

var temp;
var humidity;
 
module.exports = async function exec() {

  if(process.env.NODE_ENV=='development'){
  
    sensor.initialize({
      test: {
        fake: {
          temperature: Math.random(100),
          humidity: Math.random(100.00)
        }
      }
  });
  }
  
  try {
    const res = await sensor.read(22, 4);
    
    temp =  res.temperature.toFixed(1);
    humidity = res.humidity.toFixed(1);

    const resp = {temp,humidity};
    return resp;
    
  } catch (err) {
    console.error("Failed to read sensor data:", err);
  }
}