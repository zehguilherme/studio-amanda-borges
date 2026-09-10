---
name: ui-accessibility-check
description: >-
  Revise qualquer alteração de frontend no Studio Amanda Borges antes de
  considerá-la concluída. Use para componentes, páginas, layout, navegação,
  menu, carrossel, lightbox, responsividade ou correções visuais, mesmo quando
  o usuário não mencionar acessibilidade. Faça uma checagem contextual e
  registre como não aplicáveis os itens que a alteração não tocar.
---

# UI accessibility check

Use esta skill depois de alterar qualquer interface em `web/src/`. Inspecione
o fluxo real da tela e os componentes vizinhos; não crie abstrações ou estados
que a alteração não exige.

## Checklist

### Teclado e foco

- Percorra o fluxo com `Tab`, `Shift+Tab`, `Enter` e `Escape` quando aplicável.
- Confirme ordem de foco lógica, foco visível e ausência de armadilhas de foco.
- Ao abrir menu ou lightbox, mantenha o foco utilizável e devolva-o ao controle
  de origem ao fechar quando o componente controlar esse ciclo.
- Não esconda controles interativos apenas por CSS sem oferecer uma alternativa
  acessível.

### Nomes, semântica e estados

- Todo botão ou link de ícone tem nome acessível (`aria-label`, texto ou título
  adequado); não use apenas o desenho do SVG.
- Prefira elementos HTML nativos (`button`, `a`, headings, landmarks) e valide
  estados `hover`, `focus`, `active`, `disabled` e `error` quando existirem.
- Para menu, modal/lightbox e navegação, confira estado expandido/fechado,
  rótulos e relação entre controle e conteúdo.
- Para mudanças dinâmicas, confirme que atualização, erro, vazio e loading (se
  houver busca CMS ou outra operação assíncrona) são comunicados sem perder o
  foco do teclado.

### Visual e responsividade

- Use as cores nomeadas de `web/tailwind.config.js` (`black`, `white-white1`,
  `white-white2`, `green`, `pink`) e os estilos globais existentes; não adicione
  novas cores hardcoded sem atualizar o token correspondente.
- Verifique contraste de texto, controles e foco contra os fundos usados na
  tela. O projeto não possui tokens HSL nem a pasta `design-system/`.
- Teste viewport estreito e largo: conteúdo não deve transbordar, containers
  devem respeitar o layout existente e grades devem continuar utilizáveis.
- Para Swiper, confira navegação por teclado, nomes dos controles, paginação,
  overflow e comportamento em telas estreitas; não imponha `scroll-snap` onde o
  componente já controla a rolagem.
- Para `yet-another-react-lightbox`, confira abertura, fechamento, foco,
  `Escape`, controles e alternativa textual das imagens.

## Verificação

Execute a verificação proporcional à mudança:

- `npm run lint` para qualquer alteração de código.
- `npm test -- --runInBand` quando componentes ou interações forem alterados.
- `npm run build` quando houver mudança de página, configuração ou integração.
- Faça uma inspeção visual manual quando o layout, responsividade ou estados
  interativos mudarem.

Anote no resumo da tarefa quais itens foram verificados e quais ficaram como
não aplicáveis. Só declare a alteração concluída após resolver problemas
encontrados ou documentar um bloqueio concreto.

## Referências do projeto

- Componentes de navegação: `web/src/components/Header/` e `HeaderProject/`.
- Controles e links de ícone: `web/src/components/icons/`, `Footer/` e
  `ScrollUpButton/`.
- Carrossel e galeria: `web/src/styles/globals.css`, `Projects/` e
  `LightboxNextJsImage/`.
- Dados assíncronos e mocks: `web/src/infra/cms/`, `web/src/graphql/` e
  `web/src/mocks/`.

## Como usar

Carregue esta skill antes de marcar como concluída qualquer alteração
frontend. Adapte o checklist ao diff: itens sem correspondência no fluxo são
`não aplicáveis`, não motivo para inventar implementação.
