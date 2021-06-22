import { DefaultButton } from '../../../../components/Button/Default'
import { CustomLink } from '../../../../components/CustomLink'

export const HeroSection = () => {
    return (
        <section className="py-20 px-4 h-full flex gap-6 flex-col items-center justify-center">
            <h1 className="text-6xl font-bold text-center text-white max-w-2xl leading-tight">
                Projete Experiências Arquitetônicas
            </h1>
            <h2 className="text-white max-w-xl text-center">
                O UxArch permite que você preveja, ainda em estágios iniciais,
                como os usuários irão experenciar os espaços projetados com o
                auxílio da inteligência artificial
            </h2>
            <CustomLink href="/register">
                <DefaultButton>Criar Projeto</DefaultButton>
            </CustomLink>
        </section>
    )
}
