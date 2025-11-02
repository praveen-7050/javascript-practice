document.querySelector(".garndparent").addEventListener("click", () => {
  console.log("garndparent clicked");
  alert("grandparent clicked");
});
document.querySelector(".parent").addEventListener("click", () => {
  console.log("parent clicked");
  alert("parent clicked");
});
document.querySelector(".child").addEventListener("click", () => {
  console.log("child clicked");
  alert("child clicked");
});
