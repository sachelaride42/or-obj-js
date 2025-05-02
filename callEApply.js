const usuario = {
    nome: 'Mariano',
    email: 'mari@gmail.com'
}

function exibeInfos() {
    console.log(this.nome, this.email);
}

// exibeInfos.call(usuario);

function User (nome, email) {
    this.nome = nome,
    this.email = email,
    this.exibir = function () {
        console.log(this.nome, this.email);
    }
}

const newUser = new User('ameinda', 'a@gmail.com');
const newUser2 = new User('gisele', 'gasele@gmail.com');

// newUser.exibir();
// newUser.exibir.call(newUser2);

const usueiro = {
    nome: 'amario',
    email: 'amario@gmail.com',
    executaFuncao: function (fn) {
        fn.call(usueiro, this.nome, this.email);
    },
    fn: (nome) => {
        console.log(nome);
    }
}

usueiro.fn('aro'); 

function exibir (nome, email) {
    console.log(nome, email);
}



const usueiro2 = {
    nome: 'amario2',
    email: 'amario2@gmail.com',
    executaFuncao: function (fn) {
        fn.apply(usueiro, [this.nome, this.email]);
    }
}

console.log(typeof exibir);
//usueiro.executaFuncao(exibir);
// usueiro2.executaFuncao(exibir);




