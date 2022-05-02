let myNotes = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")

inputBtn.addEventListener("click", function() {
  const inputValue = inputEl.value
  myNotes.push(inputValue)
})