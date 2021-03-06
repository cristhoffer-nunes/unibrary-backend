'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Acervos', [
      {
        titulo: 'Introdução à Programação com Python: Algoritmos e Lógica de Programação Para Iniciantes',
        autor: 'Nilo Ney',
        editora: 'novatec',
        ano: 1994,
        tipo: 'científico',
        categoria: 'exatas',
        qtd_paginas: 384,
        qtd_obras: 100,
        disponibilidade: true,
        codigo_obra: 8575227181,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Algoritmos E Lógica Da Programação',
        autor: 'Nilo Ney',
        editora: 'novatec',
        ano: 1994,
        tipo: 'científico',
        categoria: 'exatas',
        qtd_paginas: 384,
        qtd_obras: 100,
        disponibilidade: true,
        codigo_obra: 8575227181,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Fundamentos da Programação de Computadores: Algoritmos, Pascal, C, C++ e Java',
        autor: 'Nilo Ney',
        editora: 'novatec',
        ano: 1994,
        tipo: 'científico',
        categoria: 'exatas',
        qtd_paginas: 384,
        qtd_obras: 100,
        disponibilidade: true,
        codigo_obra: 8575227181,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Código limpo: Habilidades práticas do Agile Software',
        autor: 'Nilo Ney',
        editora: 'novatec',
        ano: 1994,
        tipo: 'científico',
        categoria: 'exatas',
        qtd_paginas: 384,
        qtd_obras: 100,
        disponibilidade: true,
        codigo_obra: '8575227181',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'O Poder dos Quietos – Como os Tímidos e Introvertidos Podem Mudar um Mundo Que Não Para de Falar Susan Cain',
        autor: 'Nilo Ney',
        editora: 'novatec',
        ano: 1994,
        tipo: 'científico',
        categoria: 'exatas',
        qtd_paginas: 384,
        qtd_obras: 100,
        disponibilidade: true,
        codigo_obra: '8575227181',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'The 11 Secrets of Highly Influential IT Leaders',
        autor: 'Nilo Ney',
        editora: 'novatec',
        ano: 1994,
        tipo: 'científico',
        categoria: 'exatas',
        qtd_paginas: 384,
        qtd_obras: 100,
        disponibilidade: true,
        codigo_obra: '8575227181',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Engenharia de Software: Uma Abordagem Profissional',
        autor: 'Nilo Ney',
        editora: 'novatec',
        ano: 1994,
        tipo: 'científico',
        categoria: 'exatas',
        qtd_paginas: 384,
        qtd_obras: 100,
        disponibilidade: true,
        codigo_obra: '8575227181',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Big Data: Como extrair volume, variedade, velocidade e valor da avalanche de informação cotidiana',
        autor: 'Nilo Ney',
        editora: 'novatec',
        ano: 1994,
        tipo: 'científico',
        categoria: 'exatas',
        qtd_paginas: 384,
        qtd_obras: 100,
        disponibilidade: true,
        codigo_obra: '8575227181',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'O Verdadeiro Valor de TI: Como Transformar TI de um Centro de Custos em um Centro de Valor e Competitividade Richard Hunter',
        autor: 'Nilo Ney',
        editora: 'novatec',
        ano: 1994,
        tipo: 'científico',
        categoria: 'exatas',
        qtd_paginas: 384,
        qtd_obras: 100,
        disponibilidade: true,
        codigo_obra: '8575227181',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'UM BATE-PAPO SOBRE T.I.',
        autor: 'Nilo Ney',
        editora: 'novatec',
        ano: 1994,
        tipo: 'científico',
        categoria: 'exatas',
        qtd_paginas: 384,
        qtd_obras: 100,
        disponibilidade: true,
        codigo_obra: '8575227181',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Implantando a Governança de TI - 4ª Ed.: Da estratégia à Gestão de Processos e Serviços',
        autor: 'Nilo Ney',
        editora: 'novatec',
        ano: 1994,
        tipo: 'científico',
        categoria: 'exatas',
        qtd_paginas: 384,
        qtd_obras: 100,
        disponibilidade: true,
        codigo_obra: '8575227181',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'A Startup Enxuta',
        autor: 'Nilo Ney',
        editora: 'novatec',
        ano: 1994,
        tipo: 'científico',
        categoria: 'exatas',
        qtd_paginas: 384,
        qtd_obras: 100,
        disponibilidade: true,
        codigo_obra: '8575227181',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'A Segunda Era das Máquinas',
        autor: 'Nilo Ney',
        editora: 'novatec',
        ano: 1994,
        tipo: 'científico',
        categoria: 'exatas',
        qtd_paginas: 384,
        qtd_obras: 100,
        disponibilidade: true,
        codigo_obra: '8575227181',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Governança de TI - Tecnologia da Informação',
        autor: 'Nilo Ney',
        editora: 'novatec',
        ano: 1994,
        tipo: 'científico',
        categoria: 'exatas',
        qtd_paginas: 384,
        qtd_obras: 100,
        disponibilidade: true,
        codigo_obra: '8575227181',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Manual De DevOps: Como obter agilidade, confiabilidade e segurança em organizações tecnológicas',
        autor: 'Nilo Ney',
        editora: 'novatec',
        ano: 1994,
        tipo: 'científico',
        categoria: 'exatas',
        qtd_paginas: 384,
        qtd_obras: 100,
        disponibilidade: true,
        codigo_obra: '8575227181',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Arquitetura de TI como estratégia empresarial',
        autor: 'Nilo Ney',
        editora: 'novatec',
        ano: 1994,
        tipo: 'científico',
        categoria: 'exatas',
        qtd_paginas: 384,
        qtd_obras: 100,
        disponibilidade: true,
        codigo_obra: '8575227181',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Python para análise de dados: Tratamento de dados com Pandas, NumPy e IPython',
        autor: 'Nilo Ney',
        editora: 'novatec',
        ano: 1994,
        tipo: 'científico',
        categoria: 'exatas',
        qtd_paginas: 384,
        qtd_obras: 100,
        disponibilidade: true,
        codigo_obra: '8575227181',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'To Save Everything, Click Here',
        autor: 'Nilo Ney',
        editora: 'novatec',
        ano: 1994,
        tipo: 'científico',
        categoria: 'exatas',
        qtd_paginas: 384,
        qtd_obras: 100,
        disponibilidade: true,
        codigo_obra: '8575227181',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Scrum: a arte de fazer o dobro do trabalho na metade do tempoe',
        autor: 'Nilo Ney',
        editora: 'novatec',
        ano: 1994,
        tipo: 'científico',
        categoria: 'exatas',
        qtd_paginas: 384,
        qtd_obras: 100,
        disponibilidade: true,
        codigo_obra: '8575227181',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Métodos Ágeis e Gestão de Serviços de TI Bruno Souza de Oliveira',
        autor: 'Nilo Ney',
        editora: 'novatec',
        ano: 1994,
        tipo: 'científico',
        categoria: 'exatas',
        qtd_paginas: 384,
        qtd_obras: 100,
        disponibilidade: true,
        codigo_obra: '8575227181',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Acervos', null, {})
  }
}
