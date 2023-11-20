<<<<<<< HEAD
new window.EventSource("/sse").onmessage = function (event) {
  window.messages.innerHTML += `<p>${event.data}</p>`;
};
window.form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  window.fetch(`/chat?message=${window.input.value}`);
  window.input.value = "";
});
=======
new window.EventSource("/sse").onmessage = function(event) {
    window.messages.innerHTML += `<p>${event.data}</p>`;
};
window.form.addEventListener("submit", function(evt) {
    evt.preventDefault();
    window.fetch(`/chat?message=${window.input.value}`);
    window.input.value = "";
});
>>>>>>> d18f29633c4e9f6be255708a09e501ff68dc2d7e
