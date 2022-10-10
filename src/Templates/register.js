import { createUser } from "../lib/index.js";

export default () => {
  const container = document.createElement("div");

  const template = `
    <div>
        <img src="return.png" alt="voltar" id="voltar">

        <h1>Bem vinda!</h1>
        <img src="cookie.png" alt="logo-cookie" id="cookie">


        <form class="form">
            <div class="dados">

            <input id="name" placeholder="Nome Completo">

            <input type="date" id="date" placeholder="data de nascimento">

            <input type="email" class="btn-texto"  id="username" placeholder="example@gmail.com">

            <input type="password"  id="password" placeholder="Senha">

            <label id="termosUso" >Confirme os termos de uso</label>
            <input type="radio" id="termos" value="termos de uso"> 

            </div>
            <button>Cadastre-se</button>  
        </form>
     
    </div>
        `
  container.innerHTML = template;
  const form = container.querySelector(".form");
  const name = container.querySelector("#name");
  const date = container.querySelector("#date");
  const email = container.querySelector("#username");
  const senha = container.querySelector("#password");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log('submter o form')
    console.log(email.value);
    console.log(date.value);
    console.log(senha.value);
    createUser( email.value, senha.value)
        .then(user => {
        console.log(user);
      });
  });
  return container;
}