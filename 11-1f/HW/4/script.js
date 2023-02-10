// let ulist = document.getElementById("ulist");

// console.log(ulist);

const getUsers = async () => {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await users.json();
  for (key in data) {
    document.getElementById("ulist").innerHTML += `
    <li>Name: ${data[key].name}; Phone:  ${data[key].phone}</li>
    `;
  }
  //   console.log(data[9].name);
  return data;
};
getUsers();
