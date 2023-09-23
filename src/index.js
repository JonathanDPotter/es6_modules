import Wishlist from "./wishlist";

console.log("Hello World");

// TODO

const form = document.forms[0];
const makeInput = document.getElementById("makeInput");
const modelInput = document.getElementById("modelInput");
const yearInput = document.getElementById("yearInput");
const carMakeP = document.getElementById("car-make");
const carModelP = document.getElementById("car-model");
const carYearP = document.getElementById("car-year");
const submitButton = document.getElementById("submitBtn");
const removeButton = document.getElementsByClassName("removeBtn")[0];
const wishlistUL = document.getElementsByTagName("ul")[0];

const wishlist = new Wishlist();

const showCarDetails = (car) => {
  carMakeP.textContent = car.make;
  carModelP.textContent = car.model;
  carYearP.textContent = car.year;
  removeButton.disabled = false;
  removeButton.setAttribute("data-carId", car.id);
};

const updateDOMList = () => {
  while (wishlistUL.firstChild) {
    wishlistUL.removeChild(wishlistUL.lastElementChild);
  }

  wishlist.list.forEach((listItem) => {
    const newLI = document.createElement("li");

    newLI.textContent = `${listItem.make}, ${listItem.model}`;
    newLI.addEventListener("click", () => showCarDetails(listItem));

    wishlistUL.appendChild(newLI);
  });
};

const addCar = (event) => {
  event.preventDefault();
  wishlist.add(makeInput.value, modelInput.value, yearInput.value);
  updateDOMList();
  form.reset();
};

submitButton.addEventListener("click", addCar);

const removeCar = () => {
  const carId = Number(removeButton.getAttribute("data-carId"));
  wishlist.remove(carId);
  updateDOMList();
  form.reset();
  removeButton.disabled = true;
};

removeButton.addEventListener("click", removeCar);
