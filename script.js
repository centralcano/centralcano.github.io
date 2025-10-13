const container = document.querySelector('.container');

const apps = [

      banchi = {
            display: "Banchi",
            id: "banchi",
      },
      crazy_gamble = {
            display: "Crazy Gamble",
            id: "crazy-gamble",
      },
      mine = {
            display: "Campo Minato",
            id: "mine"
      },
      tris = {
            display: "Tris",
            id: "tris",
      },
      indovina_il_numero = {
            display: "Indovina il Numero",
            id: "indovina-il-numero",
      },
      talpe = {
            display: "Talpe",
            id: "talpe",
      },
      cursori = {
            display: "Cursori",
            id: "cursori",
      },
      calcolatore_nether = {
            display: "Calcolatore Nether",
            id: "calcolatore-nether",
      },
]

apps.forEach(app => {

      const appButton = document.createElement('a');
      appButton.classList.add('app');

      const appButtonSpan = document.createElement('span');
      appButton.appendChild(appButtonSpan);
      appButtonSpan.textContent = app.display;

      appButton.style.backgroundImage = "url(apps/" + app.id + "/cover.png)";
      
      appButton.href = "apps/" + app.id + "/index.html";
      
      container.appendChild(appButton);

})
