// lorsque contenu de la page chargé alors replacetext qui est une const = recuperer des elements html par leurs id innertext pour modifier le text de l'element htlm


window.addEventListener('DOMContentLoaded', () => {


    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
//   recuperer version chrome node et electron puis appeler la const replacetext ci dessus qui va remplacer les elements d'idex.html
    for (const dependency of ['chrome', 'node', 'electron']) {
      replaceText(`${dependency}-version`, process.versions[dependency])
    }
  })