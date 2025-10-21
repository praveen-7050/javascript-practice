function copy() {
  let textarea = document.querySelector("textarea");
  let text = textarea.value.trim();

  if (text === "") {
    alert("falied to copy");
    return;
  }
  navigator.clipboard
    .writeText(textarea.value)
    .then(() => {
      alert("text copied " + textarea.value);
    })
    .catch(() => {
      alert("falied to copy");
    });
}
