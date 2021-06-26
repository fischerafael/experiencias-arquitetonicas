export interface IOptions {
    height: IOption
    size: IOption
    elements: IOption
}

export interface IOption {
    title: string
    description: string
    options: IRadioOption[]
}

export interface IRadioOption {
    type: string
    id: string
    text: string
    description: string
    value: number
}

export const options: IOptions = {
    height: {
        title: 'Altura',
        description: 'Qual é a altura aproximada do espaço?',
        options: [
            {
                type: 'height',
                id: 'he1',
                text: 'P',
                description: 'até 3 m',
                value: 0
            },
            {
                type: 'height',
                id: 'he2',
                text: 'M',
                description: 'de 3m a 6m',
                value: 0.33
            },
            {
                type: 'height',
                id: 'he3',
                text: 'G',
                description: 'de 6m a 24m',
                value: 0.66
            },
            {
                type: 'height',
                id: 'he4',
                text: 'GG',
                description: 'mais de 24m',
                value: 1
            }
        ]
    },
    size: {
        title: 'Tamanho',
        description: 'Qual é o tamanho aproximado do espaço?',
        options: [
            {
                type: 'size',
                id: 'si1',
                text: 'P',
                description: 'até 10 m²',
                value: 0
            },
            {
                type: 'size',
                id: 'si1',
                text: 'M',
                description: 'até 50 m²',
                value: 0.33
            },
            {
                type: 'size',
                id: 'si1',
                text: 'G',
                description: 'até 200 m²',
                value: 0.66
            },
            {
                type: 'size',
                id: 'si1',
                text: 'GG',
                description: 'mais de 200',
                value: 1
            }
        ]
    },
    elements: {
        title: 'Elementos Compositivos',
        description:
            'Quantos elementos (volumes diferentes) compositivos existem no espaço?',
        options: [
            {
                type: 'elements',
                id: 'el1',
                text: 'A',
                description: '01',
                value: 0
            },
            {
                type: 'elements',
                id: 'el2',
                text: 'B',
                description: '02 à 03',
                value: 0.33
            },
            {
                type: 'elements',
                id: 'el3',
                text: 'C',
                description: '03 à 07',
                value: 0.66
            },
            {
                type: 'elements',
                id: 'el4',
                text: 'D',
                description: '+ de 07',
                value: 1
            }
        ]
    }
}
