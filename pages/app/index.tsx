import { GetServerSideProps } from 'next'
import React from 'react'

import { AppPage } from '../../src/pages/App/App'

const index = () => {
    return <AppPage />
}

export default index

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const { UX_ARCH } = req.cookies
    const credentials = JSON.parse(UX_ARCH)

    console.log('credentials', credentials)

    if (!credentials.jwt) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    return {
        props: {}
    }
}
