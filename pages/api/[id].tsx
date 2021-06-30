import type { NextApiRequest, NextApiResponse } from 'next'
import brain from 'brain.js'
import { fetch } from '../../src/services/api'

const net = new brain.NeuralNetwork({ hiddenLayers: [3] })

const trainingData = [
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] }
]

net.train(trainingData)

const result = net.run([0, 1])

export default async (req: NextApiRequest, res: NextApiResponse) => {
    // get projectId
    const { id } = req.query

    try {
        const { response: resProject } = await fetch.getReferenceData(
            id as string
        )
        if (!resProject) return res.status(200).json({ architect: 'Not found' })

        const { response: resReferences } = await fetch.getAllReferences(
            '60d6057e04c0fc9490dee351'
        )

        const projectData = resProject
        const referencesData = resReferences

        const { predicted_evaluation } = projectData

        console.log('predicted_evaluation', predicted_evaluation)

        res.status(200).json({
            project_data: projectData,
            references_data: referencesData,
            result: result[0]
        })
    } catch (e) {
        res.status(200).json({ error: 'Error fetching data' })
    }
}

const getFormattedProjectData = (projectData: any) => {
    const { height } = projectData

    return [height]
}
