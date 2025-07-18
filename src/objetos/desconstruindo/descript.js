






let pessoa = {
        nome: "João",
        idade: 30,
        profissao: "Desenvolvedor",
        empresa: "Tech Solutions",
        habilidades: ["JavaScript", "Python", "React", "Node.js", "HTML", "CSS", "Git", "SQL", "TypeScript", "Java"],
        idade: 18
    };
    //console.log(pessoa);
    //console.log(pessoa.nome);
    //console.log(pessoa.idade);
    let empresa = "Samsung";

    //tudo que eu colocar nessa const desta maneira quer dizer que estou descontruindo o objeto "pessoa", ou seja estou pegando as propriedades dele e colocando em variáveis separadas
    const {nome, profissao, habilidades} = pessoa; 
    console.log(nome);
    console.log(profissao);
 
    //se eu quiser reomear uma dessas variáveis em caso de conflito com uma var do mesmo nome posso fazer assim:
    const {empresa: empresaPessoa, idade: idadePessoa} = pessoa; 
    console.log(empresaPessoa);

    //agora vou desconstruir o array de habilidades
    console.log(habilidades[0]);
    let {0:javinha, 1:cobra, 2:reacao, 3:node, 4:estrutura, 5:estilo} = habilidades;
    console.log(javinha);
    console.log(cobra);
    console.log(reacao);    

    //outra maneira de desconstruir arrays ->
    //nesse modo eu classo as variáveis de acordo com a posição do array  
    let estagiarios = ["João", "Maria", "Pedro", "Ana"];
    let [primeiroti, mariaArquivo, pedroPascal, anaLaudo] = estagiarios;
    console.log(primeiroti);
