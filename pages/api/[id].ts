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
    // get projectData via id
    const { id } = req.query

    try {
        const rawProjectData = await fetch.getReferenceData(id as string)
        if (!rawProjectData)
            return res.status(200).json({ architect: 'Not found' })

        const {
            height,
            size,
            elements,
            shape,
            materials,
            texture,
            tone,
            primary_color,
            secondary_color,
            tertiary_color,
            opennings,
            light,
            contrast,
            opacity,
            movement,
            people,
            context,
            landmark,
            context_interest,
            time,
            weather
        } = rawProjectData?.response

        const formatedProjectData = [
            height,
            size,
            elements,
            shape,
            materials,
            texture,
            tone,
            primary_color,
            secondary_color,
            tertiary_color,
            opennings,
            light,
            contrast,
            opacity,
            movement,
            people,
            context,
            landmark,
            context_interest,
            time,
            weather
        ]

        const rawReferencesData = await fetch.getAllReferences(
            rawProjectData.response.architect.id
        )
        const formatedTrainningData = formatTrainningData(
            rawReferencesData?.response
        )

        net.train(formatedTrainningData)
        const result = net.run(formatedProjectData)[0]

        console.log(result)

        res.status(200).json({
            predicted_evaluation: result,
            project_data: formatedProjectData,
            trainning_data: formatedTrainningData
        })
    } catch (e) {
        res.status(200).json({ error: 'Error fetching data' })
    }
}

const getFormattedProjectData = (projectData: any) => {
    const { height } = projectData

    return [height]
}

const formatTrainningData = (data: any[]) => {
    const formatedData = data.map((reference) => {
        return {
            input: [
                reference.height,
                reference.size,
                reference.elements,
                reference.shape,
                reference.materials,
                reference.texture,
                reference.tone,
                reference.primary_color,
                reference.secondary_color,
                reference.tertiary_color,
                reference.opennings,
                reference.light,
                reference.contrast,
                reference.opacity,
                reference.movement,
                reference.people,
                reference.context,
                reference.landmark,
                reference.context_interest,
                reference.time,
                reference.weather
            ],
            output: [reference.client_evaluation]
        }
    })
    return formatedData
}
