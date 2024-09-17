import React, { useEffect, useState } from "react";
import axios from "axios";

// Définition de l'interface pour un projet GitHub
interface GithubRepo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
}

const GithubProjects: React.FC = () => {
    const [repos, setRepos] = useState<GithubRepo[]>([]);

    useEffect(() => {
        // Remplacer 'votre_nom_d'utilisateur_github' par ton nom d'utilisateur GitHub
        axios
            .get<GithubRepo[]>("https://api.github.com/users/loanmarchand/repos?sort=updated")
            .then((response) => {
                setRepos(response.data);
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération des projets GitHub :", error);
            });
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo) => (
                <div
                    key={repo.id}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-1"
                >
                    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                        <h3 className="text-2xl font-bold mb-2">{repo.name}</h3>
                        <p className="text-gray-600 mb-4">
                            {repo.description || "Pas de description disponible."}
                        </p>
                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-lg"
                        >
                            Voir sur GitHub
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GithubProjects;
