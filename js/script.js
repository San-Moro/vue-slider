// rifare lo slider ma questa volta usando Vue.
// Devo inserire gli elementi dinamicamente
// Devo far scorrere lo slider all'immagine successiva e precedente
    // Nel methods devo fare 2 funzioni showNext e showPrev
    // Devo dare una condizione a showNext e showPrev, cioè che lo slider può scorrerere solo per la lunghezza del numero di image
    //Mostra immagine successiva
    //SE currentElement è minore di slides[image].length
        //currentElement++
    //Altrimenti
        //CurrentElement = 0
    //
    //Mostra immagine precedente
    //SE currentElement è maggiore di 0
        //currentElement--
    //Altrimenti 
        //currentElement = slides[image].length
        //

const {createApp} = Vue;
createApp({
    data() {
        return {
            currentElement : 0,
            slides : [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum.',
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
                }
            ], 
        };
    },
    methods : {
        showNext : function() {
            if (this.currentElement < this.slides.length - 1) {
                this.currentElement++;

            } else {
                this.currentElement = 0;
            }
        },
        showPrev : function() {
            if (this.currentElement > 0) {
                this.currentElement--;

            } else {
                this.currentElement = this.slides.length - 1;
            }
        }
    }

}).mount("#app");
