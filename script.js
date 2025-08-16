const container = document.querySelector('.container');

const apps = [

      banchi = {
            display: "Banchi",
            id: "banchi",
      },
      cursori = {
            display: "Cursori",
            id: "cursori",
      },
      calcolatore_nether = {
            display: "Calcolatore Nether",
            id: "calcolatore-nether",
      },
      crazy_gamble = {
            display: "Crazy Gamble",
            id: "crazy-gamble",
      },
      indovina_il_numero = {
            display: "Indovina il Numero",
            id: "indovina-il-numero",
      },
      talpe = {
            display: "Talpe",
            id: "talpe",
      },
      tris = {
            display: "Tris",
            id: "tris",
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