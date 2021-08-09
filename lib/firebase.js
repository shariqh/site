import serviceAccount from '../serviceAccountKey.json';
import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "shariq-dev.firebaseapp.com",
    projectId: "shariq-dev",
    storageBucket: "shariq-dev.appspot.com",
    messagingSenderId: "863677713346",
    appId: "1:863677713346:web:83c630f0bf232b8684245b",
    measurementId: "G-H330VRRET1"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
export const auth = firebase.auth()

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
    const data = doc.data()
    return {
        id: doc.id,
        ...data,
        // firestore timestamp NOT serializable to JSON. Must convert to milliseconds
        purchase_date: data?.purchase_date.toMillis() || 0,
        roast_date: data?.roast_date.toMillis() || 0,
    }
}
