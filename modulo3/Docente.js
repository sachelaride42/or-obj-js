import User from './User.js';
class Docente extends User {
    constructor (nome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }

    aprovarAluno (nomeAluno, curso) {
        return `${nomeAluno} aprovado no curso ${curso}, por docente ${this.nome}`;
    }
}

const doc1 = new Docente('Solaris', 'sol@gmail.com', '2030-13-23');
console.log(doc1);
console.log(doc1.aprovarAluno('Marta', 'Python'));