# Introdução
Este documento tem como objetivo apresentar a arquitetura, funcionalidades e o fluxo de trabalho da plataforma de agendamento e acompanhamento online desenvolvida para o Outubro Rosa. A plataforma visa simplificar o processo de agendamento de consultas e o acompanhamento dos resultados de exames para mulheres, contribuindo para a prevenção e detecção precoce do câncer de mama e outros exames.

![Imagem tela inicial sistema](/docs/home.png)
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
