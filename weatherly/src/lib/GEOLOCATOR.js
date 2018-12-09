function globality() {
  //const reverseGeoc = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`

  const IP_URL = 'https://api.ipify.org?format=json';
  var ipAPI_Key = 'ffa069d2fb41dc1d967ce6024410af1e';
  var IP = '';
  var query = `http://api.ipstack.com/${IP}?access_key=${ipAPI_Key}`;

  function getIP() {
    return fetch(IP_URL)
    .then(response => response.json())
    .then(result => {
      window.IP = result;
    });
  }
  getIP()
  console.log(window.IP);

  function queryIP() {
    return fetch(query)
    .then(response => response.json())
    .then(result => {
      return result;
    });
  }

}
export default{
  globality
};
