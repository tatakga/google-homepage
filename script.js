const inputContainer = document.querySelector(".input__container");
const input = inputContainer.querySelector("input");
const googleProducts = document.querySelector(".google__application__toggle");
const googleModal = document.querySelector(".google__modal");

input.addEventListener("input", function () {
  const deleteButton = inputContainer.querySelector(".delete__text__icon");
  if (this.value.length > 0) {
    deleteButton.classList.add("show");
  } else {
    deleteButton.classList.remove("show");
  }

  deleteButton.addEventListener("click", function () {
    input.value = "";
    this.classList.remove("show");
  });
});

document.body.addEventListener("click", function (e) {
  if (e.target.matches(".google__modal__btn__image") || e.target.matches(".google__application__toggle")) {
    googleModal.classList.toggle("show");
  } else {
    googleModal.classList.remove("show");
  }
});
