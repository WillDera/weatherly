/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable quotes */
function globality() {
  // const reverseGeoc = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`

  const IP_URL = "https://api.ipify.org?format=json";
  const IP_API_Key = `${process.env.GEOLOCATOR_API_KEY}`;
  const IP = "";
  const query = `http://api.ipstack.com/${IP}?access_key=${IP_API_Key}`;

  function getIP() {
    return fetch(IP_URL)
      .then((response) => response.json())
      .then((result) => {
        window.IP = result;
      });
  }
  getIP();
  console.log(window.IP);

  function queryIP() {
    return fetch(query)
      .then((response) => response.json())
      .then((result) => result);
  }
}
export default {
  globality,
};
