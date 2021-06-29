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

    console.log('auth provider - credentials', credentials)

    const login = async (loginData: ILoginData) => {
        try {
            const { response } = await fetch.login(loginData)

            Cookie.set('UX_ARCH', {
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

    const newProject = async (registerData: IRegisterData) => {
        try {
            const { response } = await fetch.createProject(registerData)

            console.log('reponse', response)

            Cookie.set('UX_ARCH', {
                user_name: response.user.architect_name,
                user_email: response.user.email,
                user_id: response.user.id,
                jwt: response.jwt,
                project_name: response.user.project_name
            })

            Router.push('/app')
        } catch (error) {
            console.log(error)
        }
    }

    // useEffect(() => {
    //     // if (credentials.jwt !== '') return

    //     // const existingCookies = Cookie.get('UX_ARCH')
    //     // if (JSON.parse(existingCookies) !== '') return

    //     Cookie.set('UX_ARCH', credentials)
    //     // console.log('existingCookies', existingCookies)
    // }, [credentials])

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
