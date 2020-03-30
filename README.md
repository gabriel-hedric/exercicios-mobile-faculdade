<hr style="height:1px; border:none; color:#000; background-color:#000; margin-top: 0px; margin-bottom: 0px;"/>

<h1 align="center"> Exercícios de JavaScript para a matéria de Desenvolvimento Mobile </h1>

<h3>🚀 Sobre o desafio: </h3> <p> Crie uma aplicação para armazenar projetos e suas tarefas do zero utilizando <a href="https://expressjs.com/pt-br/"> Express. </a> </p>
<hr style="height:0.5px; border:none; color:#000; background-color:#000; margin-top: 0px; margin-bottom: 0px;"/>

<h3>🚀 Tecnologias e ferramentas: </h3> 

<ul>
  <li> <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"> JavaScript </a> </li>
  <li> <a href="https://expressjs.com/pt-br/"> Express </a> </li>
  <li> <a href="https://nodejs.org/en/"> Node.js </a> </li>
  <li> <a href="https://nodemon.io/"> Nodemon </a> </li>
  <li> <a href="https://code.visualstudio.com/"> Visual Studio Code </a></li>
</ul>
<hr style="height:0.5px; border:none; color:#000; background-color:#000; margin-top: 0px; margin-bottom: 0px;"/>
    
<h3 align="center"> ℹ️ Este exercício pertence a Rocketseat, o exercício consiste em um desafio contido no Bootcamp - GoStack, portanto todos os créditos e licença são do mesmo. </h3> 

<hr style="height:0.5px; border:none; color:#000; background-color:#000; margin-top: 0px; margin-bottom: 0px;"/>

<h3> Desafio: </h3>

<h3> Rotas </h3> 
<ul>
  <li> <code> POST /projects:</code>  A rota deve receber id e title dentro do corpo e cadastrar um novo projeto dentro de um array no seguinte formato: <code> { id: "1", title: 'Novo projeto', tasks: [] };</code> Certifique-se de enviar tanto o ID quanto o título do projeto no formato string com aspas duplas. </li>
  <li> <code>GET /projects:</code> Rota que lista todos projetos e suas tarefas; </li>
  <li> <code>PUT /projects/:id:</code> A rota deve alterar apenas o título do projeto com o <code>id</code> presente nos parâmetros da rota; </li>
  <li> <code>DELETE /projects/:id:</code> A rota deve deletar o projeto com o <code>id</code> presente nos parâmetros da rota;</li>
  <li> <code>POST /projects/:id/tasks:</code> A rota deve receber um campo <code>title</code> e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do id presente nos parâmetros da rota;
</ul>

<h3> Exemplo </h3> 

<p> Se eu chamar a rota <code>POST /projects</code> repassando <code>{ id: 1, title: 'Novo projeto' }</code> e a rota <code>POST /projects/1/tasks</code> com <code>{ title: 'Nova tarefa' }</code>, meu array de projetos deve ficar assim:</p>

<pre>
[
  {
    id: "1",
    title: "Novo projeto",
    tasks: ["Nova tarefa"]
  }
];
</pre>

<h3> Middlewares </h3> 
<ul>
  <li> Crie um middleware que será utilizado em todas rotas que recebem o ID do projeto nos parâmetros da URL que verifica se o projeto com aquele ID existe. Se não existir retorne um erro, caso contrário permita a requisição continuar normalmente; </li>

  <li> Crie um middleware global chamado em todas requisições que imprime (console.log) uma contagem de quantas requisições foram feitas na aplicação até então. </li>
</ul>

<hr style="height:0.5px; border:none; color:#000; background-color:#000; margin-top: 0px; margin-bottom: 0px;"/>

<h3> 📝 Licença </h3> 

<p> Esse projeto está sob a licença MIT. Veja o arquivo <a href="https://github.com/gabrielhedric/bootcamp-gostack-desafio01/blob/master/LICENSE.md"> LICENSE </a> para mais detalhes. </p>
