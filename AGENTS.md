# Observações do projeto

## Contexto

- Este repositório implementa o TabNews como projeto do curso.dev, com apoio de agentes de IA.
- A aplicação usa Next.js com App Router, React e JavaScript.
- A interface e os textos do projeto estão em português brasileiro.

## Organização

- `app/` contém as rotas e a apresentação da aplicação.
- `app/page.js` implementa a página inicial.
- `app/layout.js` define o layout raiz e os metadados globais.
- `app/globals.css` contém os estilos globais.

## Convenções de trabalho

- Prefira os recursos nativos do Next.js e mantenha a estrutura simples enquanto o projeto for pequeno.
- Mantenha componentes de página no servidor por padrão; adicione comportamento de cliente apenas quando necessário.
- Preserve `lang="pt-BR"` e escreva conteúdo voltado ao usuário em português brasileiro.
- Evite adicionar dependências para funcionalidades que podem ser resolvidas com a plataforma ou com as dependências já instaladas.

## Comandos

- `npm run dev`: inicia o servidor de desenvolvimento.
- `npm run build`: gera a compilação de produção.
- `npm start`: inicia a aplicação compilada.

