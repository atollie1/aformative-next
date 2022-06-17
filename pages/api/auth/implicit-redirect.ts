import {NextApiRequest, NextApiResponse} from "next";

export default function handle(req: NextApiRequest, res: NextApiResponse) {
    const {code, access_token, token_type, expires_in, scope, id_token, state} = req.body

    res.status(200).json({
        code: 200,
        message: 'not implemented yet'
    })
}