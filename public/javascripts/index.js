console.log("Loaded!");

// temporary movie string for dev
// note: full text contains both single/double quotes
let movieString = '[{"movieId":1,"title":"Toy Story (1995)","genres":"Adventure|Animation|Children|Comedy|Fantasy"},{"movieId":2,"title":"Jumanji (1995)","genres":"Adventure|Children|Fantasy"},{"movieId":3,"title":"Grumpier Old Men (1995)","genres":"Comedy|Romance"},{"movieId":4,"title":"Waiting to Exhale (1995)","genres":"Comedy|Drama|Romance"},{"movieId":5,"title":"Father of the Bride Part II (1995)","genres":"Comedy"},{"movieId":6,"title":"Heat (1995)","genres":"Action|Crime|Thriller"},{"movieId":7,"title":"Sabrina (1995)","genres":"Comedy|Romance"},{"movieId":8,"title":"Tom and Huck (1995)","genres":"Adventure|Children"},{"movieId":9,"title":"Sudden Death (1995)","genres":"Action"},{"movieId":10,"title":"GoldenEye (1995)","genres":"Action|Adventure|Thriller"},{"movieId":11,"title":"American President, The (1995)","genres":"Comedy|Drama|Romance"},{"movieId":12,"title":"Dracula: Dead and Loving It (1995)","genres":"Comedy|Horror"},{"movieId":13,"title":"Balto (1995)","genres":"Adventure|Animation|Children"},{"movieId":14,"title":"Nixon (1995)","genres":"Drama"},{"movieId":15,"title":"Cutthroat Island (1995)","genres":"Action|Adventure|Romance"},{"movieId":16,"title":"Casino (1995)","genres":"Crime|Drama"},{"movieId":17,"title":"Sense and Sensibility (1995)","genres":"Drama|Romance"},{"movieId":18,"title":"Four Rooms (1995)","genres":"Comedy"},{"movieId":19,"title":"Ace Ventura: When Nature Calls (1995)","genres":"Comedy"},{"movieId":20,"title":"Money Train (1995)","genres":"Action|Comedy|Crime|Drama|Thriller"},{"movieId":21,"title":"Get Shorty (1995)","genres":"Comedy|Crime|Thriller"},{"movieId":22,"title":"Copycat (1995)","genres":"Crime|Drama|Horror|Mystery|Thriller"},{"movieId":23,"title":"Assassins (1995)","genres":"Action|Crime|Thriller"},{"movieId":24,"title":"Powder (1995)","genres":"Drama|Sci-Fi"},{"movieId":25,"title":"Leaving Las Vegas (1995)","genres":"Drama|Romance"},{"movieId":26,"title":"Othello (1995)","genres":"Drama"},{"movieId":27,"title":"Now and Then (1995)","genres":"Children|Drama"},{"movieId":28,"title":"Persuasion (1995)","genres":"Drama|Romance"},{"movieId":29,"title":"City of Lost Children, The (Cit\u00e9 des enfants perdus, La) (1995)","genres":"Adventure|Drama|Fantasy|Mystery|Sci-Fi"},{"movieId":30,"title":"Shanghai Triad (Yao a yao yao dao waipo qiao) (1995)","genres":"Crime|Drama"},{"movieId":31,"title":"Dangerous Minds (1995)","genres":"Drama"},{"movieId":32,"title":"Twelve Monkeys (a.k.a. 12 Monkeys) (1995)","genres":"Mystery|Sci-Fi|Thriller"},{"movieId":34,"title":"Babe (1995)","genres":"Children|Drama"},{"movieId":36,"title":"Dead Man Walking (1995)","genres":"Crime|Drama"},{"movieId":38,"title":"It Takes Two (1995)","genres":"Children|Comedy"},{"movieId":39,"title":"Clueless (1995)","genres":"Comedy|Romance"},{"movieId":40,"title":"Cry, the Beloved Country (1995)","genres":"Drama"},{"movieId":41,"title":"Richard III (1995)","genres":"Drama|War"},{"movieId":42,"title":"Dead Presidents (1995)","genres":"Action|Crime|Drama"},{"movieId":43,"title":"Restoration (1995)","genres":"Drama"},{"movieId":44,"title":"Mortal Kombat (1995)","genres":"Action|Adventure|Fantasy"},{"movieId":45,"title":"To Die For (1995)","genres":"Comedy|Drama|Thriller"},{"movieId":46,"title":"How to Make an American Quilt (1995)","genres":"Drama|Romance"},{"movieId":47,"title":"Seven (a.k.a. Se7en) (1995)","genres":"Mystery|Thriller"},{"movieId":48,"title":"Pocahontas (1995)","genres":"Animation|Children|Drama|Musical|Romance"},{"movieId":49,"title":"When Night Is Falling (1995)","genres":"Drama|Romance"},{"movieId":50,"title":"Usual Suspects, The (1995)","genres":"Crime|Mystery|Thriller"},{"movieId":52,"title":"Mighty Aphrodite (1995)","genres":"Comedy|Drama|Romance"},{"movieId":53,"title":"Lamerica (1994)","genres":"Adventure|Drama"},{"movieId":54,"title":"Big Green, The (1995)","genres":"Children|Comedy"},{"movieId":55,"title":"Georgia (1995)","genres":"Drama"},{"movieId":57,"title":"Home for the Holidays (1995)","genres":"Drama"},{"movieId":58,"title":"Postman, The (Postino, Il) (1994)","genres":"Comedy|Drama|Romance"},{"movieId":60,"title":"Indian in the Cupboard, The (1995)","genres":"Adventure|Children|Fantasy"},{"movieId":61,"title":"Eye for an Eye (1996)","genres":"Drama|Thriller"},{"movieId":62,"title":"Mr. Hollands Opus (1995)","genres":"Drama"},{"movieId":63,"title":"Dont Be a Menace to South Central While Drinking Your Juice in the Hood (1996)","genres":"Comedy|Crime"},{"movieId":64,"title":"Two if by Sea (1996)","genres":"Comedy|Romance"},{"movieId":65,"title":"Bio-Dome (1996)","genres":"Comedy"},{"movieId":66,"title":"Lawnmower Man 2: Beyond Cyberspace (1996)","genres":"Action|Sci-Fi|Thriller"},{"movieId":68,"title":"French Twist (Gazon maudit) (1995)","genres":"Comedy|Romance"},{"movieId":69,"title":"Friday (1995)","genres":"Comedy"},{"movieId":70,"title":"From Dusk Till Dawn (1996)","genres":"Action|Comedy|Horror|Thriller"},{"movieId":71,"title":"Fair Game (1995)","genres":"Action"},{"movieId":72,"title":"Kicking and Screaming (1995)","genres":"Comedy|Drama"},{"movieId":73,"title":"Mis\u00e9rables, Les (1995)","genres":"Drama|War"},{"movieId":74,"title":"Bed of Roses (1996)","genres":"Drama|Romance"},{"movieId":75,"title":"Big Bully (1996)","genres":"Comedy|Drama"},{"movieId":76,"title":"Screamers (1995)","genres":"Action|Sci-Fi|Thriller"},{"movieId":77,"title":"Nico Icon (1995)","genres":"Documentary"},{"movieId":78,"title":"Crossing Guard, The (1995)","genres":"Action|Crime|Drama|Thriller"},{"movieId":79,"title":"Juror, The (1996)","genres":"Drama|Thriller"},{"movieId":80,"title":"White Balloon, The (Badkonake sefid) (1995)","genres":"Children|Drama"},{"movieId":81,"title":"Things to Do in Denver When Youre Dead (1995)","genres":"Crime|Drama|Romance"},{"movieId":82,"title":"Antonias Line (Antonia) (1995)","genres":"Comedy|Drama"},{"movieId":83,"title":"Once Upon a Time... When We Were Colored (1995)","genres":"Drama|Romance"},{"movieId":85,"title":"Angels and Insects (1995)","genres":"Drama|Romance"},{"movieId":86,"title":"White Squall (1996)","genres":"Action|Adventure|Drama"}]';

let movies = JSON.parse(movieString);
console.log(movies);

let search = document.getElementById('search');
let userMovies = [];  // user selected movies

// insert movies into search
movies.map((movie) => {
    let item = document.createElement('option');
    item.innerHTML = movie.title;
    search.appendChild(item)
});

// event listener: new selection adds to array and table
$('#search').on('changed.bs.select', function (e, clickedIndex, isSelected, previousValue) {
    console.log('new movie selected');
    if (!userMovies.includes(movies[clickedIndex - 1])) {
        userMovies.push(movies[clickedIndex - 1]);
        console.log(userMovies);
        updateTable();
    }
});

// adds selected movie to table UI
function updateTable() {
    let tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';
    userMovies.map((movie) => {
        let text = '<tr><th scope=\"row\">' + movie.movieId
            + '</th><td>' + movie.title
            + '</td><td>' + movie.genres
            + '</td></tr>';
        tableBody.innerHTML += text;
    })
}

let recommendButton = document.getElementById('recommendButton');
recommendButton.addEventListener('click', () => {
    // query server: send recommendation request
});

let clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', () => {
    // clear userMovies, refresh UI
    userMovies = [];
    updateTable();
});

// test
