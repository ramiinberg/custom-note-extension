let myNotes = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

const notesFromLocalStorage = JSON.parse(localStorage.getItem("myNotes"))
// localStorage.clear()
if(notesFromLocalStorage) {
  myNotes = notesFromLocalStorage
  renderTitles(myNotes)
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
  myNotes.push({ 
    name: inputEl.value,
    isShown: false
  })
  inputEl.value = ""

  localStorage.setItem("myNotes", JSON.stringify(myNotes))
  renderTitles(myNotes)
})

function renderTitles(arr) {
  console.log('arr', arr)
  let listItems = ""
  for(let i = 0; i < arr.length; i++) {
    if (!arr[i].isShown) {
      listItems += `
        <li>
          <button class="title-closed-btn" onclick="changeTitleButtonStatus(${i}, true)">${arr[i].name}</button>
        </li>
        <hr />
      `
    }
    else {
      listItems += `
        <li>
          <button class="title-open-btn" onclick="changeTitleButtonStatus(${i}, false)">${arr[i].name}</button>
          <div id="sub-label">
            <span>Sub label:</span>
            <input type="text" id="input-sub-el">
          </div>
          <button>Add sub label</button>
          <button>Add link</button>
          <button>Save tab</button>
        </li>
        <hr />
      `
    }
  }
  console.log(listItems)
  ulEl.innerHTML = listItems
}

function changeTitleButtonStatus(id, isShown) {
  myNotes[id].isShown = isShown
  localStorage.setItem("myNotes", JSON.stringify(myNotes))
  renderTitles(myNotes)
}



// function renderDom(arr) {
//   let listItems = ""
//   for(let i = 0; i < arr.length; i++) {
//     listItems += `
//     <li>
//       <a target='_blank' href='https://${arr[i]}'>
//         ${arr[i]}
//       </a>
//     </li>`
//   }
  
//   ulEl.innerHTML = listItems
// }

