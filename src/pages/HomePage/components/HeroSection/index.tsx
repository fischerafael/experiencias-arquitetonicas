import { DefaultButton } from '../../../../components/Button/Default'
import { CustomLink } from '../../../../components/CustomLink'

export const HeroSection = () => {
    return (
        <section className="px-4 h-hero flex gap-6 flex-col items-start justify-center">
            <h1 className="text-6xl font-bold text-white max-w-lg leading-tight">
                Projete Experiências Arquitetônicas
            </h1>
            <h2 className="text-white max-w-xl">
                O UxArch permite que você preveja, ainda em estágios iniciais,
                como os usuários irão experenciar os espaços projetados com o
                auxílio da inteligência artificial
            </h2>
            <CustomLink href="/cadastrar">
                <DefaultButton>Criar Projeto</DefaultButton>
            </CustomLink>
        </section>
    )
}
