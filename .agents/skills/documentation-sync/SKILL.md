---
name: documentation-sync
description: >-
  Revise e sincronize a documentação viva do Studio Amanda Borges após
  alterações em web/, antes de considerar o trabalho concluído. Use para
  mudanças de frontend, GraphQL/DatoCMS, mocks, configuração, testes ou
  infraestrutura local; não use para planos e histórico em docs/superpowers/.
---

# Documentation sync

Use esta skill depois de alterar código, configuração ou dados do projeto e
antes de concluir a tarefa. Revise apenas os documentos cujo conteúdo possa
ter ficado desatualizado pela alteração atual.

## Fluxo

1. Identifique os arquivos realmente alterados pela tarefa e leia o código
   relacionado. Preserve mudanças existentes do usuário e não trate todo o
   diff da árvore como parte da tarefa.
2. Consulte somente as fontes aplicáveis:
   - fatos globais, arquitetura e setup: `AGENTS.md`, `README.md` e
     `README-en.md`;
   - mocks, handlers ou contratos simulados: `web/src/mocks/mocks.md`;
   - regras e documentação do módulo alterado: o documento `.md` existente
     no próprio módulo, quando houver;
   - escopo, status, verificação ou milestone rastreado:
     `feature_list.json` e `progress.md`;
   - estado atual, próximos passos, arquivos relevantes e evidências:
     `session-handoff.md`.
3. Atualize somente fatos tornados incorretos pela tarefa. Não crie
   documentação ausente apenas porque um plano a menciona.
4. Não atualize `docs/superpowers/` ou outro material explicitamente histórico
   ou de planejamento.
5. Revise o diff da documentação comparando-o com a implementação. Valide
   todo JSON alterado e confirme que a documentação não descreve arquivos,
   comandos ou arquitetura inexistentes.

## Roteamento por alteração

- Alterações em páginas, componentes, estilos, navegação ou comportamento de
  UI: revise `AGENTS.md`, o README afetado e a documentação do módulo; use
  também a skill `ui-accessibility-check` quando a mudança for de frontend.
- Alterações em queries, integrações DatoCMS ou GraphQL: revise o módulo
  afetado e `web/src/mocks/mocks.md` quando os mocks ou seus contratos mudarem.
- Alterações em configuração, scripts, dependências, testes ou execução local:
  revise `README.md`/`README-en.md` e `AGENTS.md` somente se os comandos ou
  instruções documentados mudarem.
- Alterações em uma feature rastreada: atualize `feature_list.json` quando o
  comportamento, status, escopo, evidência ou verificação mudar; atualize
  `progress.md` e `session-handoff.md` apenas quando o estado atual, próximos
  passos ou continuidade realmente mudarem.

## Resultado

Ao concluir, registre no resumo quais documentos foram atualizados. Se nenhum
documento vivo ficou desatualizado, declare explicitamente que a revisão foi
feita e não exigiu edição documental.
