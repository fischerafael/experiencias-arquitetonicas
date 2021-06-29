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
    }
}
