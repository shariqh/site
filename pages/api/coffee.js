// Next.js API route support: https://nextjs.org/diocs/api-routes/introduction

import db, {postToJSON} from "../../lib/firebase"
import * as admin from "firebase-admin/lib/firestore"

export default async function userHandler(req, res) {
    const {
        method
    } = req

    console.log("BODY BODY BODY" + req.body)

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
            const {id} = await db.collection('coffees').add({
                ...req.body,
                purchase_date: admin.firestore.Timestamp.fromDate(new Date(req.body.purchase_date)),
                roast_date: admin.firestore.Timestamp.fromDate(new Date(req.body.roast_date))
            })
            res.status(201).json({id})
            break
        default:
            res.setHeader('Allow', ['GET', 'PUT'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}
