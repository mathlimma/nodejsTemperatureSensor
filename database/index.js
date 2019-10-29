var admin = require('firebase-admin');

var serviceAccount = require('../../../../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://temperaturesensor-mathlimma.firebaseio.com'
});

const db = admin.firestore();
module.exports = db;