import { emojis } from '../data'
import { IProject } from '../entities'
import { options } from '../model/formRadio'

const getHashtag = (value: number, key: string) => {
    console.log('value', value)
    const caracteristicsDescriptionAndOptions = options[key]
    const caracteristicsOptions = caracteristicsDescriptionAndOptions.options
    const chosenOption = caracteristicsOptions.find(
        (option) => option.value >= value
    )
    console.log('chosenOption', chosenOption)
    const chosenOptionDescription = chosenOption?.description
    return chosenOptionDescription
}

export const getHashtagsArray = (project: IProject) => {
    const hashtagsArray = [
        getHashtag(project.height, 'height'),
        getHashtag(project.size, 'size'),
        getHashtag(project.elements, 'elements'),
        getHashtag(project.shape, 'shape'),
        getHashtag(project.materials, 'materials'),
        getHashtag(project.texture, 'texture'),
        getHashtag(project.tone, 'tone'),
        // getHashtag(project.primary_color, 'primary_color')
        // getHashtag(project.secondary_color, 'secondary_color'),
        // getHashtag(project.tertiary_color, 'tertiary_color'),
        getHashtag(project.opennings, 'opennings'),
        getHashtag(project.light, 'light'),
        getHashtag(project.contrast, 'contrast'),
        getHashtag(project.opacity, 'opacity'),
        getHashtag(project.movement, 'movement'),
        getHashtag(project.people, 'people'),
        getHashtag(project.context, 'context'),
        getHashtag(project.landmark, 'landmark'),
        getHashtag(project.context_interest, 'context_interest'),
        getHashtag(project.time, 'time'),
        getHashtag(project.weather, 'weather')
    ]
    return hashtagsArray
}

export const getEmoji = (evaluation: number) => {
    if (evaluation < 1 / 8) return emojis.negativeA
    if (evaluation < 2 / 8) return emojis.negativeB
    if (evaluation < 3 / 8) return emojis.negativeC
    if (evaluation < 4 / 8) return emojis.negativeD
    if (evaluation < 5 / 8) return emojis.positiveE
    if (evaluation < 6 / 8) return emojis.positiveF
    if (evaluation < 7 / 8) return emojis.positiveG
    return emojis.positiveH
}
