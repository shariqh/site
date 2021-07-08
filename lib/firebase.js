import admin from 'firebase-admin';
import serviceAccount from '../serviceAccountKey.json';

if (!admin.apps.length) {
    try {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        });
    } catch (error) {
        console.log('Firebase admin initialization error', error.stack);
    }
}
export default admin.firestore();

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
    const data = doc.data()
    return {
        id: doc.id,
        ...data,
        // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
        purchase_date: data?.purchase_date.toMillis() || 0,
        roast_date: data?.roast_date.toMillis() || 0,
    }
}
