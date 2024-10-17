# Introdução
Este documento tem como objetivo apresentar a arquitetura, funcionalidades e o fluxo de trabalho da plataforma de agendamento e acompanhamento online desenvolvida para o Outubro Rosa. A plataforma visa simplificar o processo de agendamento de consultas e o acompanhamento dos resultados de exames para mulheres, contribuindo para a prevenção e detecção precoce do câncer de mama e outros exames.

![Imagem tela inicial sistema](https://github.com/JoaoIto/elaSaude/blob/developming/public/docs/home.png)
# Visão Geral
A plataforma é um sistema web que permite às usuárias:

- Criar um cadastro: Informando dados pessoais e de contato.
- Agendar consultas: Selecionando a data e o horário desejado para a consulta.
- Acompanhar o status da consulta: Verificar se a consulta foi confirmada ou remarcada.
- Visualizar resultados de exames: Acessar os resultados dos exames realizados.

# Fluxo de trabalho

Cadastro: A usuária se cadastra na plataforma, fornecendo informações como nome, data de nascimento, contato e histórico médico (opcional).
Agendamento: A usuária escolhe o tipo de consulta desejada (mamografia, consulta ginecológica, etc.) e seleciona um horário disponível na agenda.
Confirmação: A plataforma envia uma confirmação do agendamento por e-mail ou SMS para a usuária.
Realização da consulta: A usuária comparece à consulta na data e horário agendados.
Envio dos resultados: Os resultados dos exames são inseridos no sistema pelo profissional de saúde.
Notificação: A usuária é notificada por e-mail ou SMS sobre a disponibilidade dos resultados.
Acesso aos resultados: A usuária pode acessar os resultados de seus exames através de sua conta na plataforma.

## Rodar o projeto

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# Tecnologias

## Next.js
Framework React: Next.js é um framework React de produção que facilita a criação de aplicações web universais e de página única (SPA). Ele oferece funcionalidades como renderização do lado do servidor (SSR), roteamento, geração de sites estáticos e otimização para SEO.
Produtividade: Simplifica o desenvolvimento de aplicações React, fornecendo uma estrutura sólida e convenções para organizar o código.

## TypeScript
Tipagem Estática: TypeScript é uma superset do JavaScript que adiciona tipagem estática ao código. Isso ajuda a prevenir erros comuns em tempo de desenvolvimento, tornando o código mais seguro e fácil de manter.
Melhoria na Qualidade do Código: Ao definir os tipos de dados das variáveis, funções e componentes, você garante que o código seja mais previsível e menos propenso a bugs.

## JSON Server
Simulação de Back-end: JSON Server é um servidor JSON simples que permite criar rapidamente APIs RESTful falsas para o desenvolvimento frontend. Ele é ideal para simular dados durante o desenvolvimento, permitindo que você trabalhe no frontend de forma independente do backend.
Agilidade no Desenvolvimento: Ao simular uma API, você pode se concentrar no desenvolvimento da interface do usuário sem depender de uma API real ainda não implementada.

##Tailwind CSS
Framework CSS: Tailwind CSS é um framework de utilidade CSS que fornece classes pré-definidas para estilizar elementos da interface do usuário. Em vez de escrever CSS personalizado, você combina essas classes para criar layouts e componentes.
Flexibilidade: Permite criar designs personalizados com muito mais rapidez, pois você não precisa escrever CSS do zero.

## Material UI
Componentes UI: Material UI é um framework de componentes UI baseado no Google Material Design. Ele fornece um conjunto rico de componentes pré-construídos, como botões, cards, menus, etc., que seguem as diretrizes de design do Material Design.
Consistência Visual: Garante uma aparência consistente e profissional para sua aplicação, economizando tempo e esforço no desenvolvimento da interface do usuário.

