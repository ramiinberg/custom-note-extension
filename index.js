let myNotes = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

const notesFromLocalStorage = JSON.parse(localStorage.getItem("myNotes"))

if(notesFromLocalStorage) {
  myNotes = notesFromLocalStorage
  renderDom(myNotes)
}

// tabBtn.addEventListener("click", function() {
//   chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//     myNotes.push(tabs[0].url)
//     localStorage.setItem("myNotes", JSON.stringify(myNotes))
//     renderDom(myNotes)
//   })
 
// })

// deleteBtn.addEventListener("dblclick", function() {
//   localStorage.clear()
//   myNotes = []
//   renderDom(myNotes)
// })

inputBtn.addEventListener("click", function() {
  myNotes.push(inputEl.value)
  inputEl.value = ""

  localStorage.setItem("myNotes", JSON.stringify(myNotes))
  renderDom(myNotes)
})

function renderDom(arr) {
  let listItems = ""
  for(let i = 0; i < arr.length; i++) {
    listItems += `
    <li>
      <a target='_blank' href='https://${arr[i]}'>
        ${arr[i]}
      </a>
    </li>`
  }
  
  ulEl.innerHTML = listItems
}

