import {
    PageAppWrapper,
    PageHeaderWrapper,
    PageMainWrapper,
    PageFooterWrapper
} from '../../../styles/components/Layout'
import { DefaultButton } from '../../components/Button/style'

export const LoginPage = () => {
    return (
        <PageAppWrapper>
            <PageHeaderWrapper>
                <section className="h-2/3 flex w-full items-center justify-center">
                    <img src="/icons/logo-black.svg" alt="" className="h-5" />
                </section>
            </PageHeaderWrapper>

            <PageMainWrapper>
                <h1>login form</h1>
            </PageMainWrapper>

            <PageFooterWrapper>
                <DefaultButton disabled={false}>Acessar Projeto</DefaultButton>
            </PageFooterWrapper>
        </PageAppWrapper>
    )
}
