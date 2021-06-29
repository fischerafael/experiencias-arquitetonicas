import { GetServerSideProps } from 'next'
import React from 'react'

import { AppPage } from '../../src/pages/App/App'

const index = () => {
    return <AppPage />
}

export default index

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const { UX_ARCH } = req.cookies

    if (!UX_ARCH) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    const credentials = JSON.parse(UX_ARCH)

    if (credentials.jwt === '') {
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
