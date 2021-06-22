export const CardsSection = () => {
    return (
        <section className="px-4 grid grid-cols-6 gap-5 py-10 ">
            <HeroArticle
                index="01"
                title="Cadastre o Usuário"
                description="Insira informações sobre o usuário do projeto para melhor entendê-lo"
            />
            <HeroArticle
                index="02"
                title="Cadastre Referências"
                description="Insira referências de projetos parecidos com o que você planeja projetar"
            />
            <HeroArticle
                index="03"
                title="Avalie as Referências"
                description="Peça para o usuário avaliar a experiência de cada referência cadastrada"
            />
            <HeroArticle
                index="04"
                title="Treino"
                description="O Ux Arch vai aprender a prever experiências com base na entrevista do usuário"
            />
            <HeroArticle
                index="05"
                title="Cadastre suas Propostas"
                description="Insira as alternativas de projeto que você tem em mente"
            />
            <HeroArticle
                index="06"
                title="Preveja as Experiências"
                description="O Ux Arch vai calcular e prever as experiências arquitetônicas das alternativas como se ele fosse o usuário"
            />
        </section>
    )
}

interface HeroArticleProps {
    title: string
    description: string
    index: string
}

const HeroArticle = ({ title, description, index }: HeroArticleProps) => {
    return (
        <article className="border-2 p-5 cursor-pointer rounded-md flex flex-col gap-6 items-center transition duration-500 hover:border-primary">
            <h1 className="text-6xl font-bold font-poppins text-white">
                {index}
            </h1>
            <div>
                <h2 className="text-lg font-bold text-white font-poppins">
                    {title}
                </h2>
                <p className="text-xs font-poppins text-white">{description}</p>
            </div>
        </article>
    )
}
