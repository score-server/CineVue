export default class ApiService {

}

export function get(apiPath, sessionid) {
  var returnVal = $.ajax({
    url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
    method: 'GET',
    error: function (error) {
      alert(error);
    }
  }).responseText;

  console.log(returnVal);

  return returnVal;
}
