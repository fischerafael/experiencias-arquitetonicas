import { GetServerSideProps } from 'next'
import React from 'react'
import { EvaluationsEdit } from '../../../../src/pages/App/EvaluationsEdit'
import { fetch } from '../../../../src/services/api'

const index = ({ project }) => {
    return <EvaluationsEdit project={project} />
}

export default index

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const id = params.id as string

    const { response } = await fetch.getReferenceData(id)

    if (!response) {
        return {
            redirect: {
                destination: '/app/evaluations',
                permanent: false
            }
        }
    }

    return {
        props: {
            project: response
        }
    }
}
