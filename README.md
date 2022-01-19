<h1 align="center">
    <img alt="app-delivery" title="" src="./src/assets/images/logo.jpg" width="250px" />
</h1>

<h4 align="center">
    :computer: Aplicação front-mobile para registro de pedidos de marmitas e bebidas
</h4>

<p align="center">
    <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#user-content-clipboard-instruções">Instruções</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-ajustes-e-melhorias">Melhorias</a>
</p>

<img alt="Interface" src="./src/assets/images/deviceframes.png" width="100%" align="center">
<br/>

## 💻 Projeto

Frontend App em Ionic e Angular. Aplicação frontend para para registro de pedidos de marmitas e bebidas

<br>

## :rocket: Tecnologias

- [Angular](https://angular.io/)
- [Ionic](https://ionicframework.com/docs)
- [Typescript](https://www.typescriptlang.org/)
- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/Guide/HTML/HTML5)
- [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [SCSS/SASS](https://sass-lang.com/)

## :clipboard: Instruções

---

### INTERFACE - FRONTEND

- Execute `$ yarn` para instalar todas as dependencias.
- Caso tenha alterado o endereço da API backend, navegue até `app-ionic-delivery\src\environments` a abra o arquivo `environment.ts`. Em `apiUrl: ;`, coloque o novo endereço.
- Após todas as dependencias serem instaladas, Pronto! Basta executar `yarn start` para iniciar a interface frontend.

## 📌 Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [ ] Bug opcionais de marmita - Os opcionais de marmita hora são puxados e hora não
- [ ] Ajustar corretamente a regras de produtos no carrinho pois ao clicar em continuar comprando, o produto anterior some
- [ ] Inserir todos os campos requisitados na tela de confirmar pedido
- [ ] Inserir loading ao clicar em confirmar pedido
- [ ] Informar o usuário se o produto que ele pediu ainda está disponível
- [ ] Inserir regra de horário de funcionamento do restaurante
