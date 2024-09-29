import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
              <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-1 transition-all duration-300 hover:scale-105"
              >
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl">
                  <h3 className="text-2xl font-bold mb-2">{repo.name}</h3>
                    </div>
              </a>
            ))}
        </div>
    );
};

export default GithubProjects;
