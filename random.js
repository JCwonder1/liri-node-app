var fs = require('fs');
var spotifySearch = require('./spotify-request');
var bandsInTownSearch = require('./bandintown-request');
var omdbSearch = require('./omdb-request');


function randomSearch(){
    fs.readFile('random.txt', 'utf8', (err, data)=> {
        if(err){
            console.log(err);
        }

        let arr = data.split("\n");
        let randomPick = Math.floor(Math.random() * Math.floor(5));

        let pick = arr[randomPick];
        let request = pick.substr(0, pick.indexOf(" ")).trim();
        let searchTerm = pick.substr(pick.indexOf(" ")).trim();

        switch (request) {
            case (request = 'concert-this'):
                searchTerm = searchTerm.trim().split(" ").join("+");
                bandsInTownSearch(searchTerm);
                break
            case (request = 'spotify-this-song'):
                spotifySearch(searchTerm);
                break
            case (request = 'movie-this'):
                searchTerm = searchTerm.trim().split(" ").join("+");
                omdbSearch(searchTerm);
                break
        }
});
}


module.exports = randomSearch;