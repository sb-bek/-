const getUsers = async () => {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await users.json();
  for (key in data) {
    document.getElementById("ulist").innerHTML += `
  <div class = "global">
  <div class = "one">
   <h2>${key}</h2>
    <ul class ="main_info">
    <li><b>Name:</b> <span>${data[key].name}</span></li>
    <li><b>Phone:<b/> ${data[key].phone}</li>
    <li><b>username:</b> <span>${data[key].username}</span></li> 
    <li><b>Website:</b><span>${data[key].website}</span></li>
    <li><b>email:<b/> <span>${data[key].email}</span></li>
    </ul><div/>
   </div>
    `;
  }
  //   console.log(data[9].name);
  return data;
};

getUsers();


