let collection = [
    {
        name: "Spartacus",
        director: "Steven S. DeKnight",
        releaseYear: 2010,
        picture: "images/spartacus.jpg",
        genre: ["action ", "drame"],
        cast: [
            "Andy Whitfield",
            "Liam McIntyre",
            "Lucy Lawless",
            "John Hannah",
        ],
        video : "https://www.allocine.fr/series/ficheserie_gen_cserie=4318.html",
    },

    {
        name: "Viking",
        director: "Keith Thompson",
        releaseYear: 2013,
        picture: "images/viking.jpg",
        genre: ["historique ", "drame"],
        cast: [
            "Travis Fimmel",
            "Katheryn Winnick",
            "Clive Standen",
            "Jessalyn Gilsig",
        ],
        video : "https://www.allocine.fr/series/ficheserie_gen_cserie=10214.html",
    },

    {
        name: "Breaking bad",
        director: "Mark Johnson",
        releaseYear: 2008,
        picture: "images/breakingBad.jpg",
        genre: ["policier ", "drame"],
        cast: [
            "Bryan Cranston",
            "Aaron Paul",
            "Anna Gunn",
            "Dean Norris",
        ],
        video : "https://www.allocine.fr/series/ficheserie_gen_cserie=3517.html",
    },

    {
        name: "The walking dead",
        director: "Frank Darabont",
        releaseYear: 2010,
        picture: "images/TheWalkingDead.jpg",
        genre: ["horreur ", "drame"],
        cast: [
            "Andrew Lincoln",
            "Norman Reedus",
            "Melissa McBride",
            "Lauren Cohan",
        ],
        video : "https://www.allocine.fr/series/ficheserie_gen_cserie=7330.html",
    },

    {
        name: "Game of thrones",
        director: "Mark Huffam",
        releaseYear: 2011,
        picture: "images/GameOfThrones.jpg",
        genre: ["fantasy ", "drame "],
        cast: [
            "Emilia Clarke",
            "Kit Harington",
            "Peter Dinklage",
            "Sophie Turner",
        ],
        video : "https://www.allocine.fr/series/ficheserie_gen_cserie=7157.html",
    },

    {
        name: "Band of brothers",
        director: "Steven Spielberg",
        releaseYear: 2001,
        picture: "images/BandOfBrothers.jpg",
        genre: ["drame ", "guerre "],
        cast: [
            "Damian Lewis",
            "Ron Livingston",
            "Scott Grimes",
            "Donnie Wahlberg",
        ],
        video : "https://www.allocine.fr/series/ficheserie_gen_cserie=306.html",
    },

    {
        name: "The 100",
        director: "Tim Scanlan",
        releaseYear: 2014,
        picture: "images/The100.jpg",
        genre: ["science-fiction ", "drame "],
        cast: [
            "Bob Morley",
            "Eliza Taylor-Cotter",
            "Lindsey Morgan",
            "Marie Avgeropoulos",
        ],
        video : "https://www.allocine.fr/series/ficheserie_gen_cserie=11871.html",
    },

    {
        name: "Kaamelott",
        director: "Alexandre Astier ",
        releaseYear: 2005,
        picture: "images/Kaamelott.jpg",
        genre: ["drame ", "humoristique "],
        cast: [
            "Alexandre Astier",
            "Lionnel Astier",
            "Franck Pitiot",
            "Anne Girouard",
        ],
        video : "https://www.allocine.fr/series/ficheserie_gen_cserie=334.html",
    },

    {
        name: "Black Mirror",
        director: "Charlie Brooker",
        releaseYear: 2011,
        picture: "images/BlackMirror.jpg",
        genre: ["Horreur ", "Science-fiction "],
        cast: [
            "Bryce Dallas Howard",
            "Anthony Mackie",
            "Hayley Atwell",
            "Jon Hamm",
        ],
        video : "https://www.allocine.fr/series/ficheserie_gen_cserie=10855.html",
    },

    {
        name: "South park",
        director: "Trey Parker",
        releaseYear: 1997,
        picture: "images/SouthPark.jpg",
        genre: ["animation ", "humoristique "],
        cast: [
            "Trey Parker",
            "Matt Stone",
            "April Stewart",
            "Mary Kay Bergman",
        ],
        video : "https://www.allocine.fr/series/ficheserie_gen_cserie=546.html",
    },

];

document.addEventListener('DOMContentLoaded', function () {

let headerFond = document.querySelector('header');
headerFond.style.backgroundImage = "url('images/fondHead.jpg')";
headerFond.style.backgroundRepear ="no-repeat";
headerFond.style.backgroundPosition ="center";


});

/* début HEADER */
document.addEventListener('DOMContentLoaded', function () {

    let header = document.querySelector('header');

    let imageHeader = document.createElement('img');

    let titreH1 = document.createElement('h1');
    titreH1.innerText = "Dams stream";

    let divHeader = document.createElement('div');

    let articleHeader = document.createElement('article');

    imageHeader.src = 'images/logo.png';
    imageHeader.classList.add('imgClassHeader');

    header.appendChild(divHeader);
    divHeader.appendChild(imageHeader);
    divHeader.appendChild(articleHeader);
    articleHeader.appendChild(titreH1);
    

});
/* fin HEADER */



/* début MAIN */
for (i = 0; i < collection.length; i++) {
    let stockCollection = collection[i];

    document.addEventListener('DOMContentLoaded', function () {

        

        let imageMain = document.createElement('img');
        imageMain.src = stockCollection.picture;
        imageMain.classList.add('MainSection_Img');

        let sectionMain = document.createElement('section');
        sectionMain.classList.add('Main_Section');

        let titreH2 = document.createElement('h2');
        titreH2.classList.add('MainSectionDiv_H2');
        titreH2.innerText = stockCollection.name;

        let articleMain = document.createElement('article');

        let divMain = document.createElement('div');

        let Pcast = document.createElement('p');
        Pcast.innerText = stockCollection.cast;

        let PDirector = document.createElement('p');
        PDirector.innerText = stockCollection.director;

        let PreleaseYear = document.createElement('p');
        PreleaseYear.innerText = stockCollection.releaseYear;

        let PGenre = document.createElement('p');
        PGenre.innerText = stockCollection.genre;

        let main = document.querySelector('main');

        main.appendChild(sectionMain);
        divMain.appendChild(imageMain);
        sectionMain.appendChild(divMain);
        sectionMain.appendChild(articleMain);
        articleMain.appendChild(titreH2);
        articleMain.appendChild(PDirector);
        articleMain.appendChild(PreleaseYear);
        articleMain.appendChild(PGenre);
        articleMain.appendChild(Pcast);

    })
};
/* fin MAIN */







