export default class User {
    constructor (nome, email, nascimento, role, ativo = true) {
        this.nome = nome;
        this.email = email;
        this.nascimento = nascimento;
        this.role = role || 'estudante';
        this.ativo = ativo;
    }

    exibirInfos () {
        return `${this.nome}, ${this.email}, ${this.nascimento}`;
    }
}

// const usuario = new User ('lucas', 'l@g.com', '06-12-2010');
// console.log(usuario);
// console.log(usuario.exibirInfos());
// console.log(typeof User);