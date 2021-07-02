import type { NextApiRequest, NextApiResponse } from 'next'

import brain from 'brain.js'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const net = new brain.NeuralNetwork({ hiddenLayers: [3] })

    const { value1, value2 } = req.body

    const trainingData = [
        { input: [0, 0], output: [0] },
        { input: [0, 1], output: [1] },
        { input: [1, 0], output: [1] },
        { input: [1, 1], output: [0] }
    ]

    net.train(trainingData)

    const result = net.run([value1, value2])

    res.status(200).json({ message: result })
}
