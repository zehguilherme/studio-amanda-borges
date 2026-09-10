# AGENTS.md — Studio Amanda Borges

## Projeto

- Aplicação Next.js 16.3.4 com React 19, JavaScript e Tailwind CSS.
- O código da aplicação fica em `web/`; execute os comandos do projeto nesse diretório.
- Use o alias `@/` para imports internos quando ele tornar o caminho mais claro.

## Comandos

```bash
npm run dev       # desenvolvimento
npm run lint      # ESLint
npm test          # Jest
npm run build     # build de produção
npm start         # servidor de produção
```

## Regras globais

- Não commite segredos; variáveis expostas ao cliente usam o prefixo `NEXT_PUBLIC_`.
- Não execute operações Git que alterem ou descartem histórico, arquivos ou trabalho do usuário sem autorização explícita.
- Preserve as configurações existentes de ESLint, Prettier, Jest, Next.js e Tailwind; consulte os arquivos de configuração antes de alterá-las.
- Corrija a causa do problema no ponto compartilhado apropriado e mantenha a mudança mínima ao escopo solicitado.
- Valide alterações com os comandos relevantes e só declare sucesso com evidência do resultado.

## Escopo e documentação

- Regras específicas devem viver no documento do módulo ou em uma skill carregada sob demanda, não neste arquivo.
- Em alterações de UI/frontend, carregue `.agents/skills/ui-accessibility-check/SKILL.md` antes de concluir.
- Para tarefas de uma feature rastreada, consulte `progress.md`, `feature_list.json` e o `*.md` do módulo aplicável antes de editar.
- O módulo de mocks é documentado em `web/src/mocks/mocks.md`; seus mocks devem permanecer compatíveis com as queries em `web/src/graphql/`.
- `init.sh` é o entrypoint de verificação do harness quando o ambiente tiver Bash; no Windows, use os comandos equivalentes em `web/`.

## Estrutura de referência

- `web/src/components/` — componentes reutilizáveis
- `web/src/pages/` — páginas e rotas de API
- `web/src/graphql/` — queries GraphQL
- `web/src/infra/` — integrações externas
- `web/src/mocks/` — mocks usados pelos testes
