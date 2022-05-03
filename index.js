let myNotes = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

const notesFromLocalStorage = JSON.parse(localStorage.getItem("myNotes"))

if(notesFromLocalStorage) {
  myNotes = notesFromLocalStorage
  renderListItems()
}

deleteBtn.addEventListener("dblclick", function() {
  localStorage.clear()
  myNotes = []
  renderListItems()
})

inputBtn.addEventListener("click", function() {
  myNotes.push(inputEl.value)
  inputEl.value = ""

  localStorage.setItem("myNotes", JSON.stringify(myNotes))
  renderListItems()
})

function renderListItems() {
  let listItems = ""
  for(let i = 0; i < myNotes.length; i++) {
    listItems += `
    <li>
      <a target='_blank' href='https://${myNotes[i]}'>
        ${myNotes[i]}
      </a>
    </li>`
  }
  
  ulEl.innerHTML = listItems
}

