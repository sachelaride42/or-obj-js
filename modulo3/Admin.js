import User from './User.js';
class Admin extends User {
    constructor (nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }
}

const adm1 = new Admin('Roger', 'rp@gp', '2020-03-10');
console.log(adm1);
console.log(adm1.exibirInfos());