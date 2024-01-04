// c. Print the following details name, capital, flag, using forEach function.
const url = "https://restcountries.com/v3.1/all";

const xmlObject = new XMLHttpRequest();

xmlObject.open("GET", url);

xmlObject.send();

xmlObject.onload = function () {
  let responData = JSON.parse(xmlObject.response);
  responData.forEach((value, index) => {
    console.log(
      "country name is : " +
        value.name.common +
        ", capital name : " +
        value.capital +
        ", country flag : " +
        value.flags.png
    );
  });
};
