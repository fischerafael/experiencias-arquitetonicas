import axios from 'axios'
import { env } from '../../env'
import { api } from './config'

interface ICreateProject {
    username: string
    email: string
    password: string
    architect_name: string
    project_name: string
}

interface ILogin {
    identifier: string
    password: string
}

interface ICreateUser {
    name: string
    profession: string
    birth_year: number
    gender: string
    description?: string
    architect: string
}

interface IUpdateUser {
    name?: string
    profession?: string
    birth_year?: number
    gender?: string
    description?: string
}

export const fetch = {
    async wakeUp() {
        try {
            const { status } = await api.get('/')
            return status
        } catch (error) {
            return error
        }
    },
    async createProject(data: ICreateProject) {
        try {
            const { data: response, status } = await api.post(
                '/auth/local/register',
                data
            )
            return { response, status }
        } catch (error) {
            return { error }
        }
    },
    async login(data: ILogin) {
        try {
            const { data: response, status } = await api.post(
                '/auth/local',
                data
            )
            return { response, status }
        } catch (error) {
            return { error }
        }
    },
    async createUser(data: ICreateUser, jwt: string) {
        try {
            const { data: response, status } = await api.post(
                '/clients',
                data,
                {
                    headers: { Authorization: `Bearer ${jwt}` }
                }
            )
            return { response, status }
        } catch (error) {
            return { error }
        }
    },
    async updateUser(data: IUpdateUser, jwt: string, clientId: string) {
        try {
            const { data: response, status } = await api.put(
                `/clients/${clientId}`,
                data,
                {
                    headers: { Authorization: `Bearer ${jwt}` }
                }
            )
            return { response, status }
        } catch (error) {
            return { error }
        }
    },
    async getArchitectData(architectId: string) {
        try {
            const { data: response, status } = await api.get(
                `/users/${architectId}`
            )
            return { response, status }
        } catch (error) {
            return { error }
        }
    },
    async getAllReferences(architectId: string) {
        try {
            const { data: response, status } = await api.get(
                `projects?architect=${architectId}&project_type=reference`
            )
            return { response, status }
        } catch (error) {
            return { error }
        }
    },
    async getAllProjects(architectId: string) {
        try {
            const { data: response, status } = await api.get(
                `projects?architect=${architectId}&project_type=design`
            )
            return { response, status }
        } catch (error) {
            return { error }
        }
    },
    async getReferenceData(referenceId: string) {
        try {
            const { data: response, status } = await api.get(
                `/projects/${referenceId}`
            )
            return { response, status }
        } catch (error) {
            return { error }
        }
    },

    async removeReference(referenceId: string, jwt: string) {
        try {
            const { data: response, status } = await api.delete(
                `/projects/${referenceId}`,
                {
                    headers: { Authorization: `Bearer ${jwt}` }
                }
            )
            return { response, status }
        } catch (error) {
            return { error }
        }
    },
    async updateReference(
        referenceId: string,
        predictedEval: number,
        jwt: string
    ) {
        try {
            const { data: response, status } = await api.put(
                `/projects/${referenceId}`,
                { predicted_evaluation: predictedEval },
                {
                    headers: { Authorization: `Bearer ${jwt}` }
                }
            )
            return { response, status }
        } catch (error) {
            return { error }
        }
    },
    async createReference(data: ICreateReference, jwt: string) {
        try {
            const { data: response, status } = await api.post(
                '/projects',
                data,
                {
                    headers: { Authorization: `Bearer ${jwt}` }
                }
            )
            return { response, status }
        } catch (error) {
            return { error }
        }
    },
    async updatedReference(
        projectId: string,
        clientEvaluation: number,
        jwt: string
    ) {
        try {
            const { data: response, status } = await api.put(
                `/projects/${projectId}`,
                { client_evaluation: clientEvaluation },
                {
                    headers: { Authorization: `Bearer ${jwt}` }
                }
            )
            return { response, status }
        } catch (error) {
            return { error }
        }
    },
    async predictExperience(projectId: string) {
        try {
            const { data: response, status } = await axios.get(
                `${env.local}/${projectId}`
            )
            return { response, status }
        } catch (error) {
            return { error, projectId }
        }
    }
}

interface ICreateReference {
    project_name: string
    project_location: string
    project_thumbnail: string
    architect: string
    height: number
    size: number
    elements: number
    shape: number
    materials: number
    texture: number
    tone: number
    primary_color: number
    secondary_color: number
    tertiary_color: number
    opennings: number
    light: number
    contrast: number
    opacity: number
    movement: number
    people: number
    context: number
    landmark: number
    context_interest: number
    time: number
    weather: number
}
