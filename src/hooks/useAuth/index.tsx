import { createContext, useContext, useEffect, useState } from 'react'
import Router from 'next/router'
import Cookie from 'js-cookie'
import { fetch } from '../../services/api'

interface AuthContextProps {
    login: (loginData: ILoginData) => void
    newProject: (registerData: IRegisterData) => void

    credentials: ICredentials
    setCredentials: (e: ICredentials) => void
}

const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }) => {
    const [credentials, setCredentials] = useState({
        user_name: '',
        user_email: '',
        user_id: '',
        jwt: '',
        project_name: ''
    })

    const login = async (loginData: ILoginData) => {
        try {
            const { response } = await fetch.login(loginData)

            const credentialsData = {
                user_name: response.user.architect_name,
                user_email: response.user.email,
                user_id: response.user.id,
                jwt: response.jwt,
                project_name: response.user.project_name
            }

            setCredentials(credentialsData)

            Cookie.set('UX_ARCH', credentialsData)

            Router.push('/app')
        } catch (error) {
            console.log('handleLoginError', error)
        }
    }

    const newProject = async (registerData: IRegisterData) => {
        try {
            const { response } = await fetch.createProject(registerData)

            const credentialsData = {
                user_name: response.user.architect_name,
                user_email: response.user.email,
                user_id: response.user.id,
                jwt: response.jwt,
                project_name: response.user.project_name
            }

            setCredentials(credentialsData)

            Cookie.set('UX_ARCH', credentialsData)

            Router.push('/app')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const cookies = Cookie.get('UX_ARCH')
        if (cookies) {
            const parsedCookies = JSON.parse(cookies)
            setCredentials(parsedCookies)
        }
    }, [])

    return (
        <AuthContext.Provider
            value={{
                login,
                newProject,
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
