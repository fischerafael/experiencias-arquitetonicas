import { createContext, useContext, useState } from 'react'
import { fetch } from '../../services/api'

interface AuthContextProps {
    handleLogin: (e: any, loginData: ILoginData) => void
    handleCreateProject: (e: any, registerData: IRegisterData) => void
}

const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }) => {
    const [credentials, setCredentials] = useState({} as ICredentials)

    const handleLogin = async (e: any, loginData: ILoginData) => {
        e.preventDefault()

        try {
            const { response } = await fetch.login(loginData)
            console.log('handleLoginResponse', response)
        } catch (error) {
            console.log('handleLoginError', error)
        }
    }

    const handleCreateProject = async (e: any, registerData: IRegisterData) => {
        e.preventDefault()
        try {
            const { response } = await fetch.createProject(registerData)
            console.log('handleCreateProject', response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider value={{ handleLogin, handleCreateProject }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}

interface ILoginData {
    identifier: string
    password: string
}

interface IRegisterData {
    email: string
    username: string
    password: string
    project_name: string
    architect_name: string
}

interface ICredentials {
    user_email: string
    user_id: string
    user_name: string
    project_name: string
    jwt: string
}
