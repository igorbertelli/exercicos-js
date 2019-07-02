const escola = "Cod3r"

console.log(escola.charAt(4)) //pega a letra em funcao do numero//
console.log(escola.charAt(5)) //entraga valor em branco por n ter 5 letras//
console.log(escola.charCodeAt(3)) //tabela unicode//
console.log(escola.indexOf('3')) //retorna letra refente ao numero//

console.log(escola.substring(1)) //mostra apartir da primeira letra//
console.log(escola.substring(0, 3)) // mostra do indice 0 ate o indice 3, sem mostrar o 3//

console.log('Escola '.concat(escola).concat("!")) //acrescenta um valor sem estar armazenado//
console.log('Escola ' + escola + "!") //mesma funcao do concat, pore, com +//
console.log(escola.replace(3, 'e')) // troca a letra referente ao numero//