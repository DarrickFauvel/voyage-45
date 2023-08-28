//Selecting all checboxes
function handleCheckboxes() {
  const allCheckbox = document.getElementById("all-checkbox")

  allCheckbox.addEventListener("change", () => {
    const checkboxList = document.getElementsByName("id-number")
    for (i of checkboxList) {
      allCheckbox.checked ? (i.checked = true) : (i.checked = false)
    }
  })
}

export default handleCheckboxes