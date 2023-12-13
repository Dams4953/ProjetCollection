let collection = [
    {
        name: "Spartacus",
        director: "Steven S. DeKnight",
        releaseYear: 2010,
        picture: "images/spartacus.jpg",
        genre: ["action", "drame"],
        cast: [
            "Andy Whitfield",
            "Liam McIntyre",
            "Lucy Lawless",
            "John Hannah",
        ],
        video : "https://www.allocine.fr/series/ficheserie_gen_cserie=4318.html",
    },

    {
        name: "viking",
        director: "Keith Thompson",
        releaseYear: 2013,
        picture: "images/viking.jpg",
        genre: ["historique", "drame"],
        cast: [
            "Travis Fimmel",
            "Katheryn Winnick",
            "Clive Standen",
            "Jessalyn Gilsig",
        ],
        video : "https://www.allocine.fr/series/ficheserie_gen_cserie=10214.html",
    },

    {
        name: "breaking bad",
        director: "Mark Johnson",
        releaseYear: 2008,
        picture: "images/breakingBad.jpg",
        genre: ["policier", "drame"],
        cast: [
            "Bryan Cranston",
            "Aaron Paul",
            "Anna Gunn",
            "Dean Norris",
        ],
        video : "https://www.allocine.fr/series/ficheserie_gen_cserie=3517.html",
    },

    {
        name: "the walking dead",
        director: "Frank Darabont",
        releaseYear: 2010,
        picture: "images/TheWalkingDead.jpg",
        genre: ["horreur", "drame"],
        cast: [
            "Andrew Lincoln",
            "Norman Reedus",
            "Melissa McBride",
            "Lauren Cohan",
        ],
        video : "https://www.allocine.fr/series/ficheserie_gen_cserie=7330.html",
    },

    {
        name: "game of thrones",
        director: "Mark Huffam",
        releaseYear: 2011,
        picture: "images/GameOfThrones.jpg",
        genre: ["fantasy", "drame"],
        cast: [
            "Emilia Clarke",
            "Kit Harington",
            "Peter Dinklage",
            "Sophie Turner",
        ],
        video : "https://www.allocine.fr/series/ficheserie_gen_cserie=7157.html",
    },

    {
        name: "band of brothers",
        director: "Steven Spielberg",
        releaseYear: 2001,
        picture: "BandOfBrothers.jpg",
        genre: ["drame", "guerre"],
        cast: [
            "principaux 	Damian Lewis",
            "Ron Livingston",
            "Scott Grimes",
            "Donnie Wahlberg",
        ],
        video : "https://www.allocine.fr/series/ficheserie_gen_cserie=306.html",
    },

    {
        name: "the 100",
        director: "Tim Scanlan",
        releaseYear: 2014,
        picture: "images/The100.jpg",
        genre: ["science-fiction", "drame"],
        cast: [
            "Bob Morley",
            "Eliza Taylor-Cotter",
            "Lindsey Morgan",
            "Marie Avgeropoulos",
        ],
        video : "https://www.allocine.fr/series/ficheserie_gen_cserie=11871.html",
    },

    {
        name: "kaamelott",
        director: "Alexandre Astier ",
        releaseYear: 2005,
        picture: "images/Kaamelott.jpg",
        genre: ["drame", "humoristique"],
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
        genre: ["Horreur", "Science-fiction"],
        cast: [
            "Bryce Dallas Howard",
            "Anthony Mackie",
            "Hayley Atwell",
            "Jon Hamm",
        ],
        video : "https://www.allocine.fr/series/ficheserie_gen_cserie=10855.html",
    },

    {
        name: "south park",
        director: "Trey Parker",
        releaseYear: 1997,
        picture: "images/SouthPark.jpg",
        genre: ["animation", "humoristique"],
        cast: [
            "Trey Parker",
            "Matt Stone",
            "April Stewart",
            "Mary Kay Bergman",
        ],
        video : "https://www.allocine.fr/series/ficheserie_gen_cserie=546.html",
    },

];

/* début HEADER */
document.addEventListener('DOMContentLoaded', function () {

    let header = document.querySelector('header');

    let imageHeader = document.createElement('img');

    let titreH1 = document.createElement('h1');
    titreH1.innerText = "Dam D collection";

    let PHeader = document.createElement('p');
    PHeader.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    let divHeader = document.createElement('div');

    let articleHeader = document.createElement('article');

    imageHeader.src = 'images/rondbleu.png';
    imageHeader.classList.add('imgClassHeader');

    header.appendChild(divHeader);
    divHeader.appendChild(imageHeader);
    header.appendChild(articleHeader);
    articleHeader.appendChild(titreH1);
    articleHeader.appendChild(PHeader);

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






