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
    }
}
