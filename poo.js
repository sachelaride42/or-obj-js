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