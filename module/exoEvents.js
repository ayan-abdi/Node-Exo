
// ce code permet de rendre juste les données de ma fonction getNextEventDate
/**
 * 
 * @param {number} date Journée du mois 
 * @param {number} month Valeur du mois (1 à 12)
 * @returns {Date} la prochaine date
 */

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
    }

    return new Date(year, indexMonth, date);

};

const getDiffDays = (targetDate) => {
    const today = new Date(2022, 11, 24, 1)

    const diff = targetDate.getTime() - today.getTime(); 
    const oneDay = 1000 * 60 * 60 * 24; 
    return Math.ceil(diff / oneDay);  
    // math.floor prend l'arroundi en - et inversement math.ceil prend en +
};

const evenDays = {
    fromChristmas: get
}
