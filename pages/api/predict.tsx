import type { NextApiRequest, NextApiResponse } from 'next'
import { fetch } from '../../src/services/api'

export default async (req: NextApiRequest, res: NextApiResponse) => {
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
    } = req.body

    const { architect_id } = req.headers

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
        architect_id as string
    )

    const formatedTrainningData = formatTrainningData(
        rawReferencesData.response
    )

    res.status(200).json({
        message: {
            height,
            size,
            elements,
            shape,
            formatedTrainningData
        }
    })
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
