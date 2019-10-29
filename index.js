const db = require('./database');
const sensorData = require('./sensor')

let docRef = db.collection('outubro').doc('31-10');


sensorData().then(({temp,humidity})=>{
  let setData = docRef.set({
    temperature : temp,
    humidity : humidity
  }, {merge:true});
}).catch((err)=>console.log(err))

