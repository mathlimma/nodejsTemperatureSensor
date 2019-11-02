const db = require('./database');
const sensorData = require('./sensor')
let FieldValue = require('firebase-admin').firestore.FieldValue;

const interval = 3000
var count = 0;

const saveData = async () => {

  (count ==24)?count = 0:count;

  try {
    var date = new Date(Date.now());
    var month = date.getMonth() + Number(1)
    var day = date.getDate();

    let docRef = db.collection(month.toString()).doc(day.toString());
    var { temp, humidity } = await sensorData();

    let setData = docRef.set({
      [count++] : {
        temperature: temp,
        humidity: humidity,
        timestamp: FieldValue.serverTimestamp()
      }
    }, {merge:true});

  } catch (err) {
    console.log(err)
  }

}

setInterval(saveData, 1000 * 60 * 60)

