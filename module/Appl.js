
// ce code permet de rendre juste les données de ma fonction getNextEventDate
/**
 * 
 * @param {number} date Journée du mois 
 * @param {number} month Valeur du mois (1 à 12)
 * @returns {Date} la prochaine date
 */
// la methhode getNextEventDate permet d'obtenir la date de l'event
const getNextEventDate = (date, month) => {
    const today = new Date();
    let year = today.getFullYear();
    // faut mieux prendre fullYear que year car 
    
    const indexMonth = month - 1;
    // indexMonth veut signifier 0 a 11 mois qui est la façon dont js 
    // month est la valeur indexMonth modifier de 1 à 12 mois 
    if (today.getMonth() > indexMonth
        || (today.getMonth() === indexMonth && today.getDate() > date)) {
        year++;
        // si ce mois est + grand que le mois de l'event ou que 
        // si ce mois est strictement egale au mois de l'event et qu'aujourdhui est plus grand que le jour de l'event 
    }

    return new Date(year, indexMonth, date);
    // return 

};
/**
 * 
 * @param {Date} targetDate Date cible
 * @param {number} NbDay Nombre de journée calculé
 * @returns 
 */

const getDiffDays = (targetDate) => {
    const today = new Date(2022, 11, 24, 1)

    const diff = targetDate.getTime() - today.getTime(); 
    const oneDay = 1000 * 60 * 60 * 24; 
    return Math.ceil(diff / oneDay);  
    // math.floor prend l'arroundi en - et inversement math.ceil prend en +
    // math.round prend la date la + proche
};

const evenDays = {
    fromChristmas: function() {
        const nexChristmas = getNextEventDate(25, 12); 
        const nbrDiffdays = getDiffDays(nexChristmas); 
        return nbrDiffdays;
    }
};
    // connaitre le nbre de jour avant le prochain birthday

const nexFriday = {
    
fromNextFriday: () => {
    consttoday = new Date(); 

    // permet d'obtenir le prochaine 13e du mois
    let targetMonth = today.getMonth(); 
    if(today.getDate() >=13){
        indexMonth++;
    }
    // recup le prochain 13 du mois
    const nexFriday = new Date(today.getFullYear(), indexMonth, 13);
    // const nexFriday = getNextEventDate(13, indexMonth+1)

    // Test si un vendredi -> si ce n'est pas le cas, on passe au mois suivant
  
}

}