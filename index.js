document.addEventListener("DOMContentLoaded", () =>{
  const formInput = document.getElementById('input-form');
  let userInput
  
  formInput.addEventListener('submit', (e) => {
    e.preventDefault();
    let userInput = e.target[0].value
    
    createToMessage(userInput)
    setTimeout(()=> {
      createFromMessge(userInput)
    },1000)
    formInput.reset()
  })

  
})

// function createToMessage(text) {
//   const messageArea = document.getElementById('messages');
//   let content = `
//     <div class="to-message">
//       ${text}
//     </div>
//   `
//   messageArea.innerHTML += content
// }

function createToMessage(text) {
  const messageArea = document.getElementById('messages');
  if (messageArea.children.length === 0){
    let content = `
      <div class="to-message">
        ${text}
      </div>
    `
    messageArea.innerHTML += content
  } else {
    let msg = document.createElement('div')
    msg.className = "to-message"
    msg.innerText = text

    let prevMsg = messageArea.firstChild
    messageArea.insertBefore(msg, prevMsg)
  }
}

function createFromMessge(text) {
  const messageArea = document.getElementById('messages');
  let response
  switch (text) {
    case "hey":
      response = "Hey how are you!"
      break;
    
    case "what are you":
      response = "I am a simple Bot in this simple world"
      break;

    case "your are so cool":
      response = "I know!!! Thanks to Ronny! someone should really hire this man"
      break;

    case "doing good":
      response = "Well you probably doing better then Ronny he's going crazy looking for a job"
      break;

    case "bye":
      response = "By Remeber to follow ronny on Twitter @R_T_Blanco!!"

    default:
      response = "Im sorry Im not a smart bot.... yet can you repeat that please?"
      break;
  }
  if (messageArea.children.length === 0){
    let content = `
      <div class="from-message">
        ${response}
      </div>
    `
    messageArea.innerHTML += content
  } else {
    let msg = document.createElement('div')
    msg.className = "from-message"
    msg.innerText = response

    let prevMsg = messageArea.firstChild
    messageArea.insertBefore(msg, prevMsg)
  }
}