btn.addEventListener("click", () => {
  getData(url)
    .then((response) => displayData(response))
    .catch((err) => console.log(err));
});

function getData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject({
          status: xhr.status,
          text: xhr.statusText,
        });
      }
    };
  });
}

function displayData(data) {
  const { value: joke } = JSON.parse(data);
  content.textContent = joke;
}
