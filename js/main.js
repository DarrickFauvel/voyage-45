// Load modules
import darkMode from "./darkMode.js"
import fetchData from "./fetchData.js"
import displayTable from "./displayTable.js"
import clearInputs from "./clearInputs.js"

const API_URL = "https://data.nasa.gov/resource/gh4g-9sfh.json"

// Application state
const state = {
  meteorites: [],
  loading: false,
  error: {
    isError: false,
    message: "",
  },
}

async function main() {
  // Run dark mode module
  darkMode()

  // Fetch meteorites data and display populated table
  state.meteorites = await fetchData(state, API_URL)
  displayTable(state, document.querySelector("table"))

  // Run clear inputs module
  clearInputs()
}

//Clear all input fields
const clearBtn = document.getElementById("clear-btn");
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementsByTagName("input");

clearBtn.addEventListener("click", () => {
  for (i in searchInput) {
    i.value = "";
  }
});

//Input Validation and Error Message
