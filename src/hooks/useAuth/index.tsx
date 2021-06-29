import { createContext, useContext } from 'react'
import { fetch } from '../../services/api'

interface AuthContextProps {
    handleLogin: (e: any, loginData: ILoginData) => void
    handleCreateProject: (e: any, registerData: IRegisterData) => void
}

const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }) => {
    // const handleCreateProject = async (e: any) => {
    //     e.preventDefault()
    //     try {
    //         const { response } = await fetch.createProject({
    //             ...registerInfo,
    //             username: registerInfo.email
    //         })
    //         console.log('handleCreateProject', response)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

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
