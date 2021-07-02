import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { height, size, elements, shape } = req.body

    res.status(200).json({
        message: {
            height,
            size,
            elements,
            shape
        }
    })
}
