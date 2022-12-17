import admin from 'firebase-admin';
const firebasePrivateKey = process.env.FIREBASE_PRIVATE_KEY

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
        client_email: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: firebasePrivateKey.replace(/\\n/g, '\n'),
        project_id: process.env.FIREBASE_PROJECT_ID
    }),
    databaseURL: 'https://sarmad-gardezi-com-default-rtdb.firebaseio.com'
});
}

export default admin.database();