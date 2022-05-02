let myNotes = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
  myNotes.push(inputEl.value)
  inputEl.value = ""
  renderListItems()
})

function renderListItems() {
  let listItems = ""
  for(let i = 0; i < myNotes.length; i++) {
    listItems += "<li>" + myNotes[i] + "</li>"
  }
  
  ulEl.innerHTML = listItems
}

