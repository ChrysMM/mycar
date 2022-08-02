// constante qui va permettre de créer une app et la fenetre de notre logiciel avec les fonctionnalités d'éléctron
const { app, BrowserWindow } = require('electron')
// travailler avec les chemins des fichiers
const path = require('path')

// fonction qui va permettre de créer une fenetre
function createWindow () {
    // constante win qui va créer la fenetre de l'application avec la largeur et la hauteur
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
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
