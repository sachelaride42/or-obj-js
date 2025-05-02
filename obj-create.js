const pessoa = {
    nome: '',
    ePessoa: false,
    exibir: function () {
        console.log(this.nome, this.ePessoa);
    }
}

const mateus = Object.create(pessoa);
mateus.nome = 'Mateus';
mateus.ePessoa = true;
// mateus.exibir();

//

function Produto (nome, preco)  {
    this.nome = nome;
    this.preco = preco;
    this.exibeInfo = function () {
        console.log(this.nome, this.preco);
    }
}

function Livro (nome, preco, autor) {
    Produto.call(this, nome, preco);
    this.autor = autor;
    this.exibeAutor = function () {
        console.log(this.autor);
    }
}

const a = new Livro('vida e morte', 30, 'mateus');
a.exibeInfo();
a.exibeAutor();

console.log(a);