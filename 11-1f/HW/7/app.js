const postContainerEl = document.getElementById("posts-container");
const filterEl = document.getElementById("filter");
const loaderEl = document.getElementById("loader");

let limit = 10;
let page = 1;
let loaderIndicator = false;
let dataFromBack = [];

const renderItem = (post) => {
  const { id, title, body } = post;
  return `
          <div class="post">
                <div class="number">${id}</div>
                <div class="post_info">
                <h2>${title}</h2>
                <p class="post_body">${body}</p>
                </div>
          </div>
    `;
};

const getData = async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );
  const data = await response.json();
  page += 1;
  dataFromBack = [...dataFromBack, ...data];
  return data;
};
getData();

const renderPosts = async () => {
  loaderEl.classList.add("show");
  loaderIndicator = true;
  const data = await getData();

  // let text = ""
  // for(let key in data){
  //     text += renderItem(data[key]);

  // }
  // postContainerEl.innerHTML += text;

  const postTemplate = data.reduce(
    (text, element) => (text += renderItem(element)),
    ""
  );
  postContainerEl.innerHTML += postTemplate;
  loaderEl.classList.remove("show");
  loaderIndicator = false;
};

const setScrollPagination = () => {
  if (loaderIndicator === true) return;

  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight + 1 >= scrollHeight) {
    renderPosts();
  }
};

filterEl.addEventListener("input", () => {
  fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  )
    .then((response) => response.json())
    .then((data) => {
      // Поиск значений в данных, соответствующих введённому тексту
      const searchTerm = filterEl.value;
      const searchResults = data.filter(
        (item) =>
          item.id.toString().includes(searchTerm) ||
          item.title.includes(searchTerm) ||
          item.body.includes(searchTerm)
      );

      postContainerEl.innerHTML = searchResults.reduce(
        (text, element) => (text += renderItem(element)),
        ""
      );
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});

renderPosts();

window.addEventListener("scroll", setScrollPagination);
