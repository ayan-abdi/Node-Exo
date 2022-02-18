// Pour pouvoir utiliser le module dans Nodejs il faut avant tout creer la fonction require
const { resolve } = require('path');
const readline = require ('readline'); 

const reader = readline.createInterface ({
    input : process.stdin, 
    output : process.stdout, 

}); 
let noel = new Date("Decembre 25, 2022 23:15:00"); 
let date = noel.getDate();
console.log(date);
let birthday = new Date('1989, 04, 08')
// let date = birthday.getDate(); 
console.log(birthday);

// reader.write('Entrez la date du noel cet annee'); 

// reader.write('Quelle est votre date d \anniversaire'); 

const dateNoel =() => {
    return new Promise((resolve, reject) =>{
        reader.question('Noel sera quel jour de l\ annee?' , (reponse) =>{
            console.log(`Le jour de noel est: ${reponse}`)
            resolve()
        })
    })
}
const birthdate = () => {
    return new Promise((resolve, reject) => {
        reader.question('Ceci est ma date d \anniversaire', (reponse) =>{
            console.log(`Ma date d \anniversaire est: ${reponse}`)
            resolve()
        })
    })
}
const main = async () => {
    await dateNoel()
    await birthdate()
    reader.close()
}
main()