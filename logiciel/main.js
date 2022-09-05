// constante qui va permettre de créer une app et la fenetre de notre logiciel avec les fonctionnalités d'éléctron
const { Console } = require('console');
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

}

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

// Récupère tous les cookies.
session.defaultSession.cookies.get({})
  .then((cookies) => {
    console.log(cookies)
  }).catch((error) => {
    console.log(error)
  })

// Interroge tous les cookies associés à une Url spécifique.
session.defaultSession.cookies.get({ url: 'https://github.com/ChrysMM/MyCar.git' })
  .then((cookies) => {
    console.log(cookies)
  }).catch((error) => {
    console.log(error)
  })

// Définit un cookie avec les données de cookie spécifiées;
// peut écraser les cookies équivalents s'ils existent.
const cookie = { url: 'https://github.com/ChrysMM/MyCar.git', name: 'dummy_name', value: 'dummy' }
session.defaultSession.cookies.set(cookie)
  .then(() => {
    // success
  }, (error) => {
    console.error(error)
  })
