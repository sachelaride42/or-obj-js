const user = {
    nome: 'Mateus',
    nascimento: '10/03/2000',
    ativo: true,
    email: 'mateus@gmail.com',
    curso: 'Engenharia de Software',
    exibirInfo: function () {
        console.log(`Nome: ${this.nome}, email: ${this.email}`);
    }
}

// console.log(typeof user.exibirInfo);
// const exibir = user.exibirInfo;
// console.log(typeof exibir);
// exibir();

const exibirNome = user.exibirInfo.bind(user);
//exibirNome();

// ou
function exibir () {
    console.log(this.nome, this.email);
}

const exibeNomeEmail = exibir.bind(user);
exibeNomeEmail();
