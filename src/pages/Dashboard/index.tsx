import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';


const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt='Github Explorer' />
            <Title>Explore repositórios no Github</Title>

            <Form>
                <input placeholder='Digite o nome do repositório' />
                <button type='submit'>Pesquisar</button>
            </Form>

            <Repositories>
                <a href="">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuzEnMg_fWcQPFPxap3hKwYH7HYnsJLv2n3Q&usqp=CAU"
                        alt="Foto Github"
                    />
                    <div>
                        <strong>gatito/miau-miau</strong>
                        <p>Como validar os melhores sabores de sachê que existem 😻</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
                <a href="">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuzEnMg_fWcQPFPxap3hKwYH7HYnsJLv2n3Q&usqp=CAU"
                        alt="Foto Github"
                    />
                    <div>
                        <strong>gatito/miau-miau</strong>
                        <p>Como validar os melhores sabores de sachê que existem 😻</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
                <a href="">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuzEnMg_fWcQPFPxap3hKwYH7HYnsJLv2n3Q&usqp=CAU"
                        alt="Foto Github"
                    />
                    <div>
                        <strong>gatito/miau-miau</strong>
                        <p>Como validar os melhores sabores de sachê que existem 😻</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
};

export default Dashboard;
