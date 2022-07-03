function postMessage(author, message) {
  fetch("http://localhost:3000/messages", {
    method: "POST",
    body: JSON.stringify({
      author,
      message,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let authorVal = document.querySelector(".author").value;
  let messageVal = document.querySelector(".message").value;
  postMessage(authorVal, messageVal);
});
