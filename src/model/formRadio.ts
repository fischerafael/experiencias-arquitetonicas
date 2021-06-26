export interface IOptions {
    height: IOption
    size: IOption
    elements: IOption
    shape: IOption
    materials: IOption
    texture: IOption
    tone: IOption
    primary_color: IOption
    secondary_color: IOption
    tertiary_color: IOption
    opennings: IOption
    light: IOption
    contrast: IOption
    opacity: IOption
    movement: IOption
    people: IOption
    context: IOption
    landmark: IOption
    context_interest: IOption
    time: IOption
    weather: IOption
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
                description: '1 elemento',
                value: 0
            },
            {
                type: 'elements',
                id: 'el2',
                text: 'B',
                description: '2 a 3 elementos',
                value: 0.33
            },
            {
                type: 'elements',
                id: 'el3',
                text: 'C',
                description: '3 a 7 elementos',
                value: 0.66
            },
            {
                type: 'elements',
                id: 'el4',
                text: 'D',
                description: 'mais de 7 elementos',
                value: 1
            }
        ]
    },
    shape: {
        title: 'Forma',
        description: 'As formas do espaço são predominantemente:',
        options: [
            {
                type: 'shape',
                id: 'sh1',
                text: 'A',
                description: 'Orgânicas',
                value: 0
            },
            {
                type: 'shape',
                id: 'sh2',
                text: 'B',
                description: 'Maioria orgânicas',
                value: 0.33
            },
            {
                type: 'shape',
                id: 'sh3',
                text: 'C',
                description: 'Maioria ortogonais',
                value: 0.66
            },
            {
                type: 'shape',
                id: 'sh4',
                text: 'D',
                description: 'Ortogonais',
                value: 1
            }
        ]
    },
    materials: {
        title: 'Materiais',
        description:
            'Os materiais utilizados no espaço são predominantemente de origem:',
        options: [
            {
                type: 'materials',
                id: 'sh1',
                text: 'A',
                description: 'Naturais',
                value: 0
            },
            {
                type: 'materials',
                id: 'sh2',
                text: 'B',
                description: 'Maioria Naturais',
                value: 0.33
            },
            {
                type: 'materials',
                id: 'sh3',
                text: 'C',
                description: 'Maioria Artificiais',
                value: 0.66
            },
            {
                type: 'materials',
                id: 'sh4',
                text: 'D',
                description: 'Artificiais',
                value: 1
            }
        ]
    },
    texture: {
        title: 'Texturas',
        description: 'A textura predominante dos materiais do espaço é:',
        options: [
            {
                type: 'texture',
                id: 'sh1',
                text: 'A',
                description: 'lisas',
                value: 0
            },
            {
                type: 'texture',
                id: 'sh2',
                text: 'B',
                description: 'maioria lisas',
                value: 0.33
            },
            {
                type: 'texture',
                id: 'sh3',
                text: 'C',
                description: 'maioria rugosas',
                value: 0.66
            },
            {
                type: 'texture',
                id: 'sh4',
                text: 'D',
                description: 'rugosas',
                value: 1
            }
        ]
    },
    tone: {
        title: 'Tons',
        description: 'O tom de cor predominante do espaço é:',
        options: [
            {
                type: 'tone',
                id: 'to1',
                text: 'A',
                description: 'tons de cinza',
                value: 0
            },
            {
                type: 'tone',
                id: 'to2',
                text: 'B',
                description: 'tons pastéis',
                value: 0.5
            },
            {
                type: 'tone',
                id: 'to3',
                text: 'C',
                description: 'tons vibrantes',
                value: 1
            }
        ]
    },
    primary_color: {
        title: 'Cor Primária',
        description: 'A cor mais predominante do espaço é:',
        options: [
            {
                type: 'primary_color',
                id: 'pc1',
                text: 'A',
                description: 'branca',
                value: 0 / 9
            },
            {
                type: 'primary_color',
                id: 'pc2',
                text: 'B',
                description: 'preta',
                value: 1 / 9
            },
            {
                type: 'primary_color',
                id: 'pc3',
                text: 'C',
                description: 'vermelha',
                value: 2 / 9
            },
            ,
            {
                type: 'primary_color',
                id: 'pc4',
                text: 'D',
                description: 'laranja',
                value: 3 / 9
            },
            {
                type: 'primary_color',
                id: 'pc5',
                text: 'E',
                description: 'amarela',
                value: 4 / 9
            },
            {
                type: 'primary_color',
                id: 'pc6',
                text: 'F',
                description: 'verde',
                value: 5 / 9
            },
            {
                type: 'primary_color',
                id: 'pc7',
                text: 'G',
                description: 'azul',
                value: 6 / 9
            },
            {
                type: 'primary_color',
                id: 'pc8',
                text: 'H',
                description: 'rosa',
                value: 7 / 9
            },
            {
                type: 'primary_color',
                id: 'pc9',
                text: 'I',
                description: 'roxa',
                value: 8 / 9
            },
            {
                type: 'primary_color',
                id: 'pc10',
                text: 'J',
                description: 'marrom',
                value: 9 / 9
            }
        ]
    },
    secondary_color: {
        title: 'Cor Secundária',
        description: 'A segunda cor mais predominante do espaço é:',
        options: [
            {
                type: 'secondary_color',
                id: 'pc1',
                text: 'A',
                description: 'branca',
                value: 0 / 9
            },
            {
                type: 'secondary_color',
                id: 'pc2',
                text: 'B',
                description: 'preta',
                value: 1 / 9
            },
            {
                type: 'secondary_color',
                id: 'pc3',
                text: 'C',
                description: 'vermelha',
                value: 2 / 9
            },
            ,
            {
                type: 'secondary_color',
                id: 'pc4',
                text: 'D',
                description: 'laranja',
                value: 3 / 9
            },
            {
                type: 'secondary_color',
                id: 'pc5',
                text: 'E',
                description: 'amarela',
                value: 4 / 9
            },
            {
                type: 'secondary_color',
                id: 'pc6',
                text: 'F',
                description: 'verde',
                value: 5 / 9
            },
            {
                type: 'secondary_color',
                id: 'pc7',
                text: 'G',
                description: 'azul',
                value: 6 / 9
            },
            {
                type: 'secondary_color',
                id: 'pc8',
                text: 'H',
                description: 'rosa',
                value: 7 / 9
            },
            {
                type: 'secondary_color',
                id: 'pc9',
                text: 'I',
                description: 'roxa',
                value: 8 / 9
            },
            {
                type: 'secondary_color',
                id: 'pc10',
                text: 'J',
                description: 'marrom',
                value: 9 / 9
            }
        ]
    },
    tertiary_color: {
        title: 'Cor Terciária',
        description: 'A terceira cor mais predominante do espaço é:',
        options: [
            {
                type: 'tertiary_color',
                id: 'pc1',
                text: 'A',
                description: 'branca',
                value: 0 / 9
            },
            {
                type: 'tertiary_color',
                id: 'pc2',
                text: 'B',
                description: 'preta',
                value: 1 / 9
            },
            {
                type: 'tertiary_color',
                id: 'pc3',
                text: 'C',
                description: 'vermelha',
                value: 2 / 9
            },
            ,
            {
                type: 'tertiary_color',
                id: 'pc4',
                text: 'D',
                description: 'laranja',
                value: 3 / 9
            },
            {
                type: 'tertiary_color',
                id: 'pc5',
                text: 'E',
                description: 'amarela',
                value: 4 / 9
            },
            {
                type: 'tertiary_color',
                id: 'pc6',
                text: 'F',
                description: 'verde',
                value: 5 / 9
            },
            {
                type: 'tertiary_color',
                id: 'pc7',
                text: 'G',
                description: 'azul',
                value: 6 / 9
            },
            {
                type: 'tertiary_color',
                id: 'pc8',
                text: 'H',
                description: 'rosa',
                value: 7 / 9
            },
            {
                type: 'tertiary_color',
                id: 'pc9',
                text: 'I',
                description: 'roxa',
                value: 8 / 9
            },
            {
                type: 'tertiary_color',
                id: 'pc10',
                text: 'J',
                description: 'marrom',
                value: 9 / 9
            }
        ]
    },
    opennings: {
        title: 'Aberturas',
        description: 'Quão aberto em relação ao exterior o espaço é:',
        options: [
            {
                type: 'opennings',
                id: 'sh1',
                text: '25%',
                description: 'poucas aberturas',
                value: 0
            },
            {
                type: 'opennings',
                id: 'sh2',
                text: '50%',
                description: 'algumas aberturas',
                value: 0.33
            },
            {
                type: 'opennings',
                id: 'sh3',
                text: '75%',
                description: 'várias aberturas',
                value: 0.66
            },
            {
                type: 'opennings',
                id: 'sh4',
                text: '100%',
                description: 'totalmente aberto',
                value: 1
            }
        ]
    },
    light: {
        title: 'Luz',
        description: 'Quão iluminado o espaço é:',
        options: [
            {
                type: 'light',
                id: 'sh1',
                text: '25%',
                description: 'muito pouco iluminado',
                value: 0
            },
            {
                type: 'light',
                id: 'sh2',
                text: '50%',
                description: 'pouco iluminado',
                value: 0.33
            },
            {
                type: 'light',
                id: 'sh3',
                text: '75%',
                description: 'iluminado',
                value: 0.66
            },
            {
                type: 'light',
                id: 'sh4',
                text: '100%',
                description: 'muito iluminado',
                value: 1
            }
        ]
    },
    contrast: {
        title: 'Contraste',
        description:
            'Quanto contraste entre luz/escuridão, materiais e/ou cores existe no espaço:',
        options: [
            {
                type: 'contrast',
                id: 'sh1',
                text: '25%',
                description: 'muito pouco contraste',
                value: 0
            },
            {
                type: 'contrast',
                id: 'sh2',
                text: '50%',
                description: 'pouco contraste',
                value: 0.33
            },
            {
                type: 'contrast',
                id: 'sh3',
                text: '75%',
                description: 'algum contraste',
                value: 0.66
            },
            {
                type: 'contrast',
                id: 'sh4',
                text: '100%',
                description: 'muito contraste',
                value: 1
            }
        ]
    },
    opacity: {
        title: 'Transparência e Opacidade',
        description:
            'Quão transparente ou opaco é o espaço (possibilidade de enxergar através dele)',
        options: [
            {
                type: 'opacity',
                id: 'sh1',
                text: '25%',
                description: 'transparente',
                value: 0
            },
            {
                type: 'opacity',
                id: 'sh2',
                text: '50%',
                description: 'transparente',
                value: 0.33
            },
            {
                type: 'opacity',
                id: 'sh3',
                text: '75%',
                description: 'transparente',
                value: 0.66
            },
            {
                type: 'opacity',
                id: 'sh4',
                text: '100%',
                description: 'transparente',
                value: 1
            }
        ]
    },
    people: {
        title: 'Ocupação',
        description: 'Quão ocupado por pessoas é o espaço',
        options: [
            {
                type: 'people',
                id: 'sh1',
                text: 'A',
                description: 'uma pessoa',
                value: 0
            },
            {
                type: 'people',
                id: 'sh2',
                text: 'B',
                description: 'poucas pessoas',
                value: 0.33
            },
            {
                type: 'people',
                id: 'sh3',
                text: 'C',
                description: 'algumas pessoas',
                value: 0.66
            },
            {
                type: 'people',
                id: 'sh3',
                text: 'C',
                description: 'várias pessoas',
                value: 1
            }
        ]
    },
    movement: {
        title: 'Movimento',
        description: 'Quão movimentado é o espaço',
        options: [
            {
                type: 'movement',
                id: 'sh1',
                text: 'A',
                description: 'pouco movimento',
                value: 0
            },
            {
                type: 'movement',
                id: 'sh2',
                text: 'B',
                description: 'algum movimento',
                value: 0.5
            },
            {
                type: 'movement',
                id: 'sh3',
                text: 'C',
                description: 'bastante movimento',
                value: 1
            }
        ]
    },
    time: {
        title: 'Movimento',
        description: 'Em qual momento do dia o espaço está sendo utilizado',
        options: [
            {
                type: 'time',
                id: 'sh1',
                text: 'A',
                description: 'Dia',
                value: 0
            },
            {
                type: 'time',
                id: 'sh2',
                text: 'B',
                description: 'Noite',
                value: 0.5
            },
            {
                type: 'time',
                id: 'sh3',
                text: 'C',
                description: 'Amanhecer ou Entardecer',
                value: 1
            }
        ]
    },
    weather: {
        title: 'Clima',
        description: 'Qual é a condição meteorológica',
        options: [
            {
                type: 'weather',
                id: 'sh1',
                text: 'A',
                description: 'Céu Aberto',
                value: 0
            },
            {
                type: 'weather',
                id: 'sh2',
                text: 'B',
                description: 'Nublado',
                value: 0.25
            },
            {
                type: 'weather',
                id: 'sh3',
                text: 'C',
                description: 'Chuva',
                value: 0.5
            },
            {
                type: 'weather',
                id: 'sh3',
                text: 'D',
                description: 'Neve',
                value: 0.75
            },
            {
                type: 'weather',
                id: 'sh3',
                text: 'E',
                description: 'Neblina',
                value: 1
            }
        ]
    },
    context: {
        title: 'Contexto Físico',
        description: 'Em qual contexto o espaço está inserido',
        options: [
            {
                type: 'context',
                id: 'sh1',
                text: 'A',
                description: 'Selvagem',
                value: 0
            },
            {
                type: 'context',
                id: 'sh2',
                text: 'B',
                description: 'Rural',
                value: 0.33
            },
            {
                type: 'context',
                id: 'sh3',
                text: 'C',
                description: 'Urbano de Baixa Densidade',
                value: 0.66
            },
            {
                type: 'context',
                id: 'sh3',
                text: 'D',
                description: 'Urbano de Alta Densidade',
                value: 1
            }
        ]
    },
    context_interest: {
        title: 'Interesse do Contexto',
        description:
            'Há algum ponto de interesse coletivo no contexto onde o espaço está inserido? ex: cachoeira, edifício histórico ou praia',
        options: [
            {
                type: 'context_interest',
                id: 'sh1',
                text: 'A',
                description: 'Ponto de interesse natural',
                value: 0
            },
            {
                type: 'context_interest',
                id: 'sh2',
                text: 'B',
                description: 'Ponto de interesse arquitetônico',
                value: 0.5
            },
            {
                type: 'context_interest',
                id: 'sh3',
                text: 'C',
                description: 'Nenhum ponto de interesse específico',
                value: 1
            }
        ]
    },
    landmark: {
        title: 'Interesse do Espaço',
        description:
            'O espaço é, por si só, um ponto de interesse coletivo? ex: museu conhecido, edifício histórico ou ponto de referência',
        options: [
            {
                type: 'landmark',
                id: 'sh1',
                text: 'A',
                description: 'Ponto de Interesse Nacional / Mundial',
                value: 0
            },
            {
                type: 'landmark',
                id: 'sh2',
                text: 'B',
                description: 'Ponto de Interesse Local',
                value: 0.5
            },
            {
                type: 'landmark',
                id: 'sh3',
                text: 'C',
                description: 'Não é Ponto de Interesse',
                value: 1
            }
        ]
    }
}
