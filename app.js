const url = "https://api.chucknorris.io/jokes/random";
const btn = document.querySelector(".btn");
const content = document.querySelector(".content");

btn.addEventListener("click", async () => {
  try {
    const data = await fetch(url);
    const response = await data.json();
    displayData(response);
  } catch (error) {
    console.log(error);
  }
});

function displayData({ value: joke }) {
  //   const { value: joke } = data;
  content.textContent = joke;
}
