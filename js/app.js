console.log('yo');



const slides = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg',
];

// mi creo un array dove avrò le immagini già create in HTML
const slidesElement = [];

// gestisco lo stato del mio carosello con una var

let currentIndex = 0;
// recuperare il contenitore dello slider
const slidesWrapperEl = document.querySelector('.slider-wrapper');
// andiamo a togliere qualsiasi contenuto perchè non ci serve all'interno del wrapper
slidesWrapperEl.innerHTML = '';
console.log(slidesWrapperEl);

// generare il contenuto dello slider

for (let i = 0; i < slides.length; i++) {
    const src = slides[i];
    console.log(src);
    // Creo il'li
    const li = document.createElement('li');
    // Aggiungo la classe slide a questo li
    li.className = 'item';
    // gli metto la classe active
    if (i === currentIndex) {
        li.classList.add('active');
    };
    // Creo l'immagine
    const img = document.createElement('img');
    // assegno all'immagine creata il valore letto dall'array
    img.src = src;
    console.dir(img);
    // a questo punto appendo l'immagine dentro l'li creato
    li.append(img);
    // Appendo il mio li creato con l'img dentro allo slide wrapper precendentemente selezionato
    slidesWrapperEl.append(li);
    // le inserisco nel mio array vuoto precedentemente
    slidesElement.push(li);
};
    



// Seleziono la mia freccia next
const nextArrowEl = document.querySelector('.arrow_next');
// Devo ascoltare l'evento click sulla arrow next
nextArrowEl.addEventListener('click', function () {
    console.log('tasto next premuto');
    // togliere la classe active della slide attiva
    const slideAttiva = slidesElement[currentIndex];
    console.log(slideAttiva);
    slideAttiva.classList.remove('active');
    // aggiungere la classe active alla slide successiva (se esiste)
    const slideSuccessiva = slidesElement[currentIndex + 1];
    console.log(slideSuccessiva);
    slideSuccessiva.classList.add('active');
    // Aumento l'idice di 1 così la prossima slide attiva sarà la slide di indice 1 e così via
    currentIndex++;
    console.log(currentIndex);
    // if (currentIndex === 4) {
    //     currentIndex = 0;
    //     console.log('currentIndex modificato dall if')
    // };
}); 

// Seleziono la mia freccia prev
const prevArrowEl = document.querySelector('.arrow_prev');
// Devo ascoltare l'evento click sulla arrow previous
prevArrowEl.addEventListener('click', function() {
    console.log('tasto prev premuto');
    // tolgo la classe active dalla slide attiva che in questo caso sarà
    const slideAttiva = slidesElement[currentIndex];
    console.log(slideAttiva);
    slideAttiva.classList.remove('active');
    // Aggiungo la classe active alla slide precedente
    const slidePrecedente = slidesElement [currentIndex - 1];
    console.log(slidePrecedente)
    slidePrecedente.classList.add('active')
    // Diminuisco l'indice perchè sta volta sto tornando indietro
    currentIndex--;
    console.log(currentIndex);
    // if (currentIndex === -1) {
    //     currentIndex = 5
    // }
});


//  if (currentIndex === 6) {
//      currentIndex = 0
// } else if (currentIndex === -1) {
//      currentIndex = 5
// }




