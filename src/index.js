const rangeChange = document.querySelector("#range-update");

function handleUpdae() {
  let labelUpdate = document.querySelector("#update");
  let value = this.value;
  labelUpdate.innerHTML = value + " K";
}

rangeChange.addEventListener("change", handleUpdae);
