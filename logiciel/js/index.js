const axios= require("axios");
const ipc = window.require('electron').ipcRenderer;
          
// Fonction qui sera appelée au clic
// événement du bouton "Aller à la fenêtre des setting.html"
function goToSettingsWindow(){
  
    // Assurez-vous de faire ipc.send('some String'),
     // où 'some String' doit être identique au
     //  premier paramètre de ipcMain.on() dans app.js
    ipc.send('openChildWindow');  
}

// const usernameInput = document.getElementById("username");
// const passwordInput = document.getElementById("password");
// const btn = document.getElementById("btn");

// const config = {
//     headers: { Authorization: `Bearer ${token}` }
// };
 function validate(){
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
   
  const config = {
    headers: { Authorization: `Bearer ${token}` }
};
axios.post("http://localhost:8080/api/auth/signin", {
    // headers: {
    //         "x-access-token": "token-value",
    //       },

  username: username,
  password: password, 
  config
    })
    .then((response) => {
      console.log(response);
       
    });


 }


// btn.addEventListener("click", () => {
//   let usernameInput = "";
//   let passwordInput = "";
//   const username = usernameInput.valueOf;
//   const password = passwordInput.valueOf;
 


  // axios.post("http://localhost:8080/api/auth/signin", {
  //   // headers: {
  //   //         "x-access-token": "token-value",
  //   //       },
  
  
  // username: username,
  //     password: password, config
  //   })
  //   .then((response) => {
  //     console.log(response);
       
  //   });
// });

 
