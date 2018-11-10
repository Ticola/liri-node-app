# LIRI Bot

### **Overview**

In this assignment, the project consisted of creating LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a speech Interpretation and Recognition Interface. LIRI is a _Language_ Interpretation and Recognition Interface. LIRI is a command line Node application that takes in a set of 4 different parameters and responds with powerful data.

- - -

### **Interacting with LIRI** 

1. LIRI will search Spotify for songs, BandsInTown for concerts, and OMDB for movies.

2. It takes the following commands to respond with all the proper information:

    * `spotify-this [Input Your Artist/Band]`

    * `concert-this [Input Your Artist]`

    * `movie-this [Input Your Movie]`

### **In-Depth View of How it all Comes Together in the Terminal**

1. `node liri.js spotify-this <insert song name>`

    * This will search the Spotify Web API for a specified artist/band and render the following information about each event to the terminal:

        * Artist(s)

        * Name of the song

        * A preview link of the song from Spotify

        * Name of the album


2. `node liri.js concert-this <insert artist/band name>`

    * This wil search the BandsInTown Artist Events API for a specified artist and render the following information about each event to the terminal:
        
        * Name of the venue

        * Venue location

        * Date of the event

3. `node liri.js movie-this <insert movie name>`

    * This will search the OMDB API for a specified movie and render the following information about each event to the terminal:

        * Movie title

        * Release year

        * IMDB rating

        * Country

        * Language

        * Plot

        * Actors

        * Rotten Tomatoes Rating

        * Rotten Tomatoes URL

- - - 

### **Show & Tell**

![spotify-this](/LIRI/images/spotify-this.png)

- - -

![concert-this](/LIRI/images/concert-this.png)

- - -

![movie-this](/LIRI/images/movie-this.png)

- - -

LIRI Bot is created with:
```
Node.js
Moment.js
Spotify, BandsInTown, and OMDB APIs
Dependencies:
    * Request
    * DotEnv
    * Node-Spotify-API
```

