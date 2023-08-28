function clearInputs() {
  //Clear all input fields
  const clearBtn = document.getElementById("clear-btn")
  const searchForm = document.getElementById("search-form")
  const searchInput = document.getElementsByTagName("input")

  clearBtn.addEventListener("click", () => {
    for (i in searchInput) {
      i.value = ""
    }
  })
}

export default clearInputs
