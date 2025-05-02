function criaUser(nome, email) {
    return {
        nome,
        email,
        exibeInfos() {
        return `${nome}, ${email}`
        }
    }
}

const user1 = criaUser('mateu', 'giovando@');
console.log(user1);