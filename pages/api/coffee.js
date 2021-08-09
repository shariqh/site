// Next.js API route support: https://nextjs.org/diocs/api-routes/introduction

import {db, auth, postToJSON} from "../../lib/firebase"
// import * as admin from "firebase-admin/lib/firestore"

export default async function userHandler(req, res) {
    const {method} = req

    switch (method) {
        case 'GET':
            db.collection('coffees').get().then((resp) => {
                res.status(200).json(resp.docs.map(postToJSON))
            })
                .catch((error) => {
                    res.json({error})
                })
            break
        case 'PUT':
            // deconstruct auto header to authenticate request
            const email = (Buffer.from(req.headers.authorization.split(" ")[1], 'base64').toString()).split(":")[0]
            const password = (Buffer.from(req.headers.authorization.split(" ")[1], 'base64').toString()).split(":")[1]

            auth.signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });

            const {id} = await db.collection('coffees').add({
                ...req.body,
                // purchase_date: db.Timestamp.fromDate(new Date(req.body.purchase_date)),
                // roast_date:  admin.firestore.Timestamp.fromDate(new Date(req.body.roast_date))
                purchase_date: new Date(req.body.purchase_date)
            })
            res.status(201).json({id})
            break
        default:
            res.setHeader('Allow', ['GET', 'PUT'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}
