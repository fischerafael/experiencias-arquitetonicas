import { createContext, useContext } from 'react'
import { fetch } from '../../services/api'

interface AuthContextProps {
    handleLogin: (e: any, loginData: ILoginData) => void
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

    return (
        <AuthContext.Provider value={{ handleLogin }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)

    return context
}

interface ILoginData {
    identifier: string
    password: string
}
