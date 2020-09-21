const dateTime = require('date-and-time');
require('date-and-time/locale/es');
dateTime.locale('es');
const helpers = {};

helpers.dateTime = (date)=>{
    return dateTime.format(date,'DD[ de ]MMMM[ del ]YYYY');
};

helpers.dateTime2 = (date)=>{
    return dateTime.format(date,'DD/MM/YYYY');
};

helpers.isEquals = (n1,n2,print)=>{
    return (n1==n2)?print:'';
};

helpers.isDiferent = (n1,n2)=>{
    return (n1!=n2);
};

module.exports = helpers;