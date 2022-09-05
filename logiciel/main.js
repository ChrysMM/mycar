// constante qui va permettre de créer une app et la fenetre de notre logiciel avec les fonctionnalités d'éléctron
const { Console } = require('console');
const { NOMEM } = require('dns');
const { app, BrowserWindow } = require('electron')
const { session } = require('electron')
// travailler avec les chemins des fichiers
const path = require('path')



// fonction qui va permettre de créer une fenetre
function createWindow () {
    // constante win qui va créer la fenetre de l'application avec la largeur et la hauteur
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, 
      contextIsolation: false,
      enableRemoteModule: false,
      preload: path.join(__dirname, '../js/preload.js'), 
    }
    
  })
  win.loadURL("http://localhost:8080"); 
  win.loadFile('./html/index.html'); 
  cook()
  // console.log("test cookies")
  // win.webContents.session.cookies.set({ url: 'http://localhost', name: 'dummy_name', value: 'dummy' }).then(() => {console.log("########## cookies créé enfin ########## ")})

}
// const cook = () => {
//   const cookie = { url: 'http://localhost', name:"cc" , value: 'fefe', nomCategorie:" " }
//   console.log('---------- cookies ----------')    
//   session.defaultSession.cookies.set(cookie)
//       .then(() => {
//       // success
//           console.log("cookie");
//           session.defaultSession.cookies.get({ nomCategorie:" "})
//       .then((cookies) => {
//           console.log(cookies)
//       }).catch((erreur) => {
//           console.log(error) 
//       })
//   }, (error) => {
//   console.error(error)
// })
// }



// quand l'app est prete, tout pres charger + créer une fenetre
app.whenReady().then(() => {
  
  createWindow()
  
//   si application active mais pas de fenetre -> recreation de fenetre
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
      
    }
  })
})




// .on detecter un evenement qui est que tt les fenetres du logiciel est ferme pour lutilisateur alors on quitte l'application de facon definitive 
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
