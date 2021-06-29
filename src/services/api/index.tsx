import { api } from './config'

export const fetch = {
    async wakeUp() {
        try {
            const { status } = await api.get('/')
            return status
        } catch (error) {
            return error
        }
    }
}
