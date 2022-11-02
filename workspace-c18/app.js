var moment = require('moment');

moment.locale('fr');

moment.weekdays(true).forEach(function(dia){
   console.log(dia);
});
