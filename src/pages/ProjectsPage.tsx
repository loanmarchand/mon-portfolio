import GithubProjects from "../components/GithubProjects.tsx";

export default function Projects()
{
    return (
        <>
            <div className="bg-gray-100 py-16">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold text-center mb-12">
                        Mes Projets
                    </h1>
                    <p className="text-center text-lg mb-10 text-gray-700">
                        Voici quelques projets récents que j'ai réalisés. Vous pouvez cliquer sur chacun d'eux pour voir
                        plus de détails sur GitHub.
                    </p>
                    <GithubProjects/>
                </div>
            </div>
        </>
    );
}
