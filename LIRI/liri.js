require("dotenv").config();

let keys = require("./keys.js");
let fs = require("fs");
let request = require("request");
let Spotify = require("node-spotify-api");
let moment = require("moment");

let userCommand = process.argv[2];
let secondCommand = process.argv[3];

// CONCATENATE MULTIPLE WORDS IN `SECOND COMMAND`
for (var i = 4; i < process.argv.length; i++) {
    secondCommand += '+' + process.argv[i];
}

// SPOTIFY-THIS
var getArtistNames = function (artist) {
    return artist.name;
};

let spotify = new Spotify(keys.spotify);

let getSpotify = function (songName) {
    if (songName === undefined) {
        songName = "The Sign";
    }
    spotify.search(
        {
            type: "track",
            query: secondCommand
        },
        function (err, data) {
            if (err) {
                console.log("Error occurred: " + err);
                return;
            }
            var songs = data.tracks.items;
            for (var i = 0; i < 4; i++) {
                console.log(i);
                console.log("Artist(s): " + songs[i].artists.map(getArtistNames));
                console.log("Song Title: " + songs[i].name);
                console.log("Preview Song: " + songs[i].preview_url);
                console.log("Album: " + songs[i].album.name);
                console.log("-----------------------------------");
            }
        }
    );
};

// SWITCH COMMANDS
function mySwitch(userCommand) {

    switch (userCommand) {

        case "concert-this":
            getConcert();
            break;

        case "spotify-this":
            getSpotify();
            break;

        case "movie-this":
            getMovie();
            break;

        case "do-what-it-says":
            doWhat();
            break;
        default:
            console.log("I don't know. Ask Google-Bot.");
            break;
    }

    // MOVIE-THIS
    function getMovie() {
        let movieName = secondCommand;
        let queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&tomatoes=true&apikey=trilogy";

        request(queryUrl, function (error, response, body) {

            if (!error && response.statusCode === 200) {
                var body = JSON.parse(body);

                console.log('================ Movie Info Results================');
                console.log("Title: " + body.Title);
                console.log("Release Year: " + body.Year);
                console.log("IMDB Rating: " + body.imdbRating);
                console.log("Country: " + body.Country);
                console.log("Language: " + body.Language);
                console.log("Plot: " + body.Plot);
                console.log("Actors: " + body.Actors);
                console.log("Rotten Tomatoes Rating: " + body.Ratings[2].Value);
                console.log("Rotten Tomatoes URL: " + body.tomatoURL);
                console.log('==================END==============================');

            } else {
                console.log("Error occurred.")
            }
            if (movieName === "Mr. Nobody") {
                console.log("-----------------------");
                console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
                console.log("It's on Netflix!");
            }
        });
    }

    // CONCERT THIS
    function getConcert() {
        let artistName = secondCommand;
        let queryURL = "https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=70472da13b62029c60f902691c864e84";
        request(queryURL, function (err, response, body) {
            let concertInfo = JSON.parse(body);
            for (var i = 0; i < 5; i++) {
                var show = concertInfo[i];
                console.log("Venue: " + show.venue.name);
                console.log("Location: " + show.venue.city + ", " + show.venue.country);
                console.log(moment(show.datetime).format("MM/DD/YY"));
            }
        })
        console.log("CONCERT THIS: ");
    }

    // DO WHAT IT SAYS
    function doWhat() {
        fs.readFile("random.txt", "utf8", function (error, data) {
            if (!error);
            console.log(data.toString());
            var cmds = data.toString().split(',');
        });
    }
}

mySwitch(userCommand);