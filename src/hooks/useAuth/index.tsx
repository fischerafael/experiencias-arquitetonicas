import { createContext, useContext, useEffect, useState } from 'react'
import Router from 'next/router'
import Cookie from 'js-cookie'
import { fetch } from '../../services/api'

interface AuthContextProps {
    handleLogin: (e: any, loginData: ILoginData) => void
    handleCreateProject: (e: any, registerData: IRegisterData) => void

    credentials: ICredentials
    setCredentials: (e: ICredentials) => void
}

const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }) => {
    const [credentials, setCredentials] = useState({} as ICredentials)

    console.log('auth provider - credentials', credentials)

    const handleLogin = async (e: any, loginData: ILoginData) => {
        e.preventDefault()

        try {
            const { response } = await fetch.login(loginData)

            setCredentials({
                user_name: response.user.architect_name,
                user_email: response.user.email,
                user_id: response.user.id,
                jwt: response.jwt,
                project_name: response.user.project_name
            })

            console.log('handleLoginResponse', response)

            Router.push('/app')
        } catch (error) {
            console.log('handleLoginError', error)
        }
    }

    const handleCreateProject = async (e: any, registerData: IRegisterData) => {
        e.preventDefault()
        try {
            const { response } = await fetch.createProject(registerData)

            setCredentials({
                user_name: response.user.architect_name,
                user_email: response.user.email,
                user_id: response.user.id,
                jwt: response.jwt,
                project_name: response.user.project_name
            })

            console.log('handleCreateProject', response)

            Router.push('/app')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        Cookie.set('UX-ARCH', credentials)
    }, [credentials])

    return (
        <AuthContext.Provider
            value={{
                handleLogin,
                handleCreateProject,
                credentials,
                setCredentials
            }}
        >
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
