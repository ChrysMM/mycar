
const ipc = window.require('electron').ipcRenderer;
          
// Fonction qui sera appelée au clic
// événement du bouton "Aller à la fenêtre des setting.html"
function goToSettingsWindow(){
  
    // Assurez-vous de faire ipc.send('some String'),
     // où 'some String' doit être identique au
     //  premier paramètre de ipcMain.on() dans app.js
    ipc.send('openChildWindow');  
}


 
