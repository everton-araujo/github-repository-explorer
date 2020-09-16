import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories, Error } from './styles';
import Repository from '../Repository';

interface Repository {
    full_name: string;
    description: string;
    html_url: string;
    owner: {
        login: string;
        avatar_url: string;
    };
}

const Dashboard: React.FC = () => {
    const storageRepositories = localStorage.getItem('@GithubExplorer:repositories');

    const [newRepo, setNewRepo] = useState('');
    const [repositories, setRepositories] = useState<Repository[]>(() => {
        if (storageRepositories) {
            return JSON.parse(storageRepositories);
        }

        return [];
    });
    const [inputError, setInputError] = useState('');

    useEffect(() => {
        localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories));
    }, [repositories]);

    //     Adição de um novo repositório
    //     Consumir API do Github
    //     Salvar novo repositório no estado
    async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        if (!newRepo) {
            setInputError('Digite o autor/nome-do-repositório');
            return;
        }

        if (storageRepositories?.includes(newRepo) && newRepo.replace(/\s/g, '').length > 0) {
            setInputError('Repositório já adicionado');
            return;
        }

        try {
            const response = await api.get<Repository>(`repos/${newRepo}`);

            const repository = response.data;

            setRepositories([...repositories, repository]);
            setNewRepo('');
            setInputError('');
        } catch (err) {
            setInputError('Erro na busca por este repositório');
        }
    }

    return (
        <>
            <img src={logoImg} alt='Github Explorer' />
            <Title>Explore repositórios no Github</Title>

            <Form hasError={!!inputError} onSubmit={handleAddRepository}>
                <input
                    value={newRepo}
                    onChange={(e) => setNewRepo(e.target.value)}
                    placeholder='Digite o nome do repositório'
                />
                <button type='submit'>Pesquisar</button>
            </Form>

            {inputError && <Error>{inputError}</Error>}

            <Repositories>
                {repositories.map(repository => (
                    <a key={repository.full_name} href={repository.html_url}>
                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}
                        />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>

                        <FiChevronRight size={20} />
                    </a>
                ))}
            </Repositories>
        </>
    );
};

export default Dashboard;
