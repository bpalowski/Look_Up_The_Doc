export class Doctor {


  static user(name,toFind,no){
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=or&user_location=45.5122%2C%20122.6587&skip=0&limit=5&user_key=${process.env.exports.apiKey}`)
    .then(function(sort){
      toFind(sort);
    }).catch(function(){
      no();
    });
  }

  static mix(query,input,why){
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${query}&location=or&skip=0&limit=5&user_key=${process.env.exports.apiKey}`)

    .then(function(show){
      input(show);
    }).catch(function(){
      why();
    });
  }



}
