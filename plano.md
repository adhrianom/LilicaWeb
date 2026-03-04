1 - [feito] Estruturar pastas e mocks base
Arquivos: src/data/mocks.ts, src/types/product.ts, src/components, src/pages (se quiser separar).
Pronto quando: existir tipagem de Product, listas mockadas de banners/categorias/produtos/destaques.

2 - [feito] Limpar CSS global padr�o do Vite
Arquivos: src/index.css.
Pronto quando: remover estilos default (dark mode/system) e manter base do Tailwind + reset simples.

3 - [feito] Definir tema visual único (tokens de cor/spacing)
Arquivos: src/index.css (ou arquivo de tema).
Pronto quando: classes utilitárias/variáveis com cores principais (pink-300, blue-200, branco) e padrões de animação leve.

4 - [feito] Criar fluxo de telas no frontend (sem backend)
Arquivos: src/App.tsx.
Pronto quando: controlar tela atual (onboarding, login, home) por estado local e navegação simples.

5 - [feito] Implementar Onboarding
Arquivos: src/components/Onboarding.tsx.
Pronto quando: animação curta com texto “Lilica Empadas”, usando paleta do site, e transição para login/home.

6 - [feito] Implementar Login (mock)
Arquivos: src/components/Login.tsx.
Pronto quando: formulário email/senha, botão Google (visual), botão registrar discreto, e “entrar” apenas mudando estado local.

7 - [feito] Refatorar Header para estado logado/deslogado
Arquivos: src/components/Header.tsx.
Pronto quando: mostrar botão “Entrar” se deslogado e ícone de perfil se logado.

8 - [feito] Ajustar Banner (carrossel ja existente)
Arquivos: src/components/Banner.tsx.
Pronto quando: usar dados mock, responsivo, com altura consistente e sem fixed quebrando layout.

9 - [feito] Implementar Featured Products (carrossel)
Arquivos: src/components/Featured.tsx.
Pronto quando: carrossel horizontal dos mais vendidos, ordenado do mais vendido para a esquerda.

10 - [feito] Implementar Categories com filtro ativo
Arquivos: src/components/Categories.tsx.
Pronto quando: seleção visual da categoria ativa e callback para filtrar produtos.

11 - [feito] Implementar Products grid/lista
Arquivos: src/components/Products.tsx (novo), src/App.tsx.
Pronto quando: listar todos produtos e aplicar filtro por categoria selecionada.

12 - [feito] Implementar Footer
Arquivos: src/components/Footer.tsx.
Pronto quando: exibir redes sociais e telefone de contato com layout responsivo.

13 - [feito] Compor Home final
Arquivos: src/App.tsx.
Pronto quando: ordem final Header > Banner > Featured > Categories > Products > Footer, com espaçamentos corretos.

14 - [feito] Responsividade + animações finais
Arquivos: componentes da Home.
Pronto quando: boa navegação mobile/desktop, transições suaves e sem sobreposição de blocos.

15 - [feito] QA de frontend
Comandos: npm run lint, npm run build.
Pronto quando: sem erro de lint/build e fluxo completo funcionando com mocks.

