/*
    * Crie 2 arquivos JavaScript
    * O primeiro, irá exportar uma função chamada getFlagValue()
    * que receberá um argumento do tipo String.
    * Essa função deverá buscar dentro do array process.argv a flag deseja, que é a String 
    * e retorna o valor da flag. O segundo irá importar a função
    * e passar a flag desejada.
    * 
    * Iremos rodar no terminal o segundo arquivo passando as flags --name e 
    * --greeting para que seja impresso no terminal a saudação e o nome da pessoa. 
*/

function getFlagsValue(flag){
    const index = process.argv.indexOf(flag) + 1
    return process.argv[index]
};

module.exports = getFlagsValue;