const url = "https://jsonplaceholder.typicode.com/posts";
const search = document.getElementById("p_1");
const content = document.getElementById("p_2");
const inp = document.getElementById("input");

console.log(inp);
// const cutySearch = inp.value;
search.onclick = async function () {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const filteredData = data.filter((post) => post.userId == inp.value);
      console.log(data);
      let text = "";
      filteredData.forEach((post) => {
        text += `<div>${post.body}</div>`;
      });
      document.querySelector("#p_2").innerHTML = text;
    })
    .catch((error) => {
      console.error(error);
    });
};
