var app = new Vue({
  el: "#root",
  data: {
    indiceAttivo: 0,
    features: [
      {
        immagine: 'img/feature_1.png',
        title: 'Ritocca, sostituisci, assembla, wow!',
        text: 'Realizza ritratti da manuale con soggetti più espressivi, sostituisci il cielo con un clic, rimuovi gli oggetti, applica ritocchi e ricolora una scena. Grazie a strumenti di fotoritocco avanzati e a nuove funzionalità intelligenti per la creazione di effetti magici, puoi trasformare le immagini in opere d’arte.',
        side: 'left'


      },
      {
        immagine: 'img/feature_2.png',
        title: 'Fai correre la tua immaginazione per trasformare le tue foto.',
        text: 'Sfruttando un numero virtualmente illimitato di livelli, selezioni con un clic e facili operazioni di mascheratura, puoi creare rapidamente quello che la tua fotocamera non è in grado di immortalare.',
        side: 'right'
      },
      {
        immagine: 'img/feature_3.png',
        title: 'Mille tocchi di bravura.',
        text: 'Dipingi e disegna con migliaia di pennelli personalizzati o creane di nuovi: con Photoshop hai a disposizione la più grande raccolta al mondo.',
        side: 'left',
      },
      {
        immagine: 'img/feature_4.png',
        title: 'Il tuo punto di riferimento per progettare grafiche di grande impatto.',
        text: 'Poster, packaging, banner, siti web: la progettazione grafica inizia con Photoshop. Combina foto, grafiche e testi per creare immagini completamente nuove, seleziona i soggetti con un clic e gioca con colori ed effetti per perfezionare ogni progetto di design.',
        side: 'right'
      }
    ],
  },
});
