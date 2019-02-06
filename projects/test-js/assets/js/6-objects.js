var movies = [
    {
        title: "Avengers: Infinity war",
        rating: 10,
        seen: true
    },
    {
        title: "What happend to monday",
        rating: 8.5 ,
        seen: true
    },
    {
        title: "the room",
        rating: 3.7,
        seen: false
    }
]

movies.forEach(function(movie) {
    if (movie.seen == true) {
    console.log("The title is " + movie.title + ", it has a rating of " + movie.rating +" and you have seen it")
    }
    else{
        console.log("The title is " + movie.title + ", it has a rating of " + movie.rating +" and you have not seen it")
    }
});