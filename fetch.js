// const form = document.getElementById("formmm");
// const button = document.getElementById("button");
// form.addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const name = document.getElementById("name").value;
//   const email_phone = document.getElementById("email_phone").value;
//   const password = document.getElementById("password").value;
//   console.log(name, email_phone, password);
//   const response = await fetch("http://localhost:5000/api/users/register", {
//     method: "POST",
//     headers: {
//       append: "Access-Control-Allow-Origin",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(name, email_phone, password),
//   });
//   console.log(response);
// });
const fo = () => {
  let x = 1;
  if (true) {
    x = 2;
  }
  console.log(x);
};
fo();
