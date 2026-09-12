console.log("Hello");
console.log(process);
// document.querySelector("button").addEventListener("click", () => {
//   console.log("clicked");
// });

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("button").addEventListener("click", () => {
    console.log(process.version);
  });
});
