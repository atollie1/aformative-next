import {NextApiRequest, NextApiResponse} from "next";

export default function handle(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({
        code: 200,
        message: req.body
    })
}