function getRequest(body, callback = (response) => {}) {
    let xhr = new XMLHttpRequest();

  xhr.open("POST", "https://jscp-diplom.netoserver.ru/", true);
  xhr.responseType = "json";
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send(body);
  xhr.onload = () => {
    callback(xhr.response);
  };
}