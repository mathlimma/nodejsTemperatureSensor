const db = require('./database');
const sensorData = require('./sensor')

const saveData = async ()=>{

  try{
    var date =  new Date(Date.now());
    var month = date.getMonth()+Number(1)
    var day = date.getDate();

    let docRef = db.collection(month.toString()).doc(day.toString());
    var {temp,humidity} = await sensorData();

    let setData = docRef.set({
      temperature : temp,
      humidity : humidity
    }, {merge:true});

  }catch(err){
    console.log(err)
  }

}

saveData();

