function Livro (nome, genero, autor, quantidade) {
    this.nome = nome;
    this.genero = genero;
    this.autor = autor;
    this.quantidade = quantidade;

    this.comprarLivro = function (numero) {
        this.quantidade = this.quantidade - numero;
    }

    this.exibirInfo = function () {
        return `${this.nome}, ${this.genero}, ${this.autor}, ${this.quantidade}`;
    }
}

const livro1 = new Livro ('2001', 'SciFi', 'Clarke', 12);
console.log(livro1.exibirInfo());
livro1.comprarLivro(4);
console.log(livro1.exibirInfo());