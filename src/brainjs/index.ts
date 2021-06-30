import { NeuralNetwork } from 'brain.js'

const net = new NeuralNetwork({ hiddenLayers: [3] })

const trainingData = [
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] }
]

net.train(trainingData)

console.log(net.run([0, 0]))

export const getPrediction = (projectData: any) => {
    console.log('brain.js')
}
