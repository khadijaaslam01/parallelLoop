//Get

// axios
//   .get("https://reqres.in/api/users/2")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
//post
// axios
//   .post("https://reqres.in/api/users", {
//     name: "khadija",
//     job: "developer",
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

//put
// axios
//   .put("https://reqres.in/api/users/2", {
//     name: "aiza",
//     job: "teacher",
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// //delete

axios
  .delete("https://reqres.in/api/users/2")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
