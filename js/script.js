/* global $ */
let songs = [];
let artists = [];
let lengths = [];
let images = [];
let urls = [];
    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
function addSongInfo(){
    console.log("START");
    // BELOW write the code to add new items to each of the arrays.
    let newSong = $("#song").val();
    let newArtist = $("#artist").val();
    let newLength = $("#length").val();
    let newImage = $("#image").val();
    let newLink = $("#link").val();
    songs.push(newSong);
    artists.push(newArtist);
    lengths.push(newLength);
    images.push(newImage);
    urls.push(newLink);
    console.log("END");
}
function displaySongInfo(){
    console.log("ALERT");
    $("#songs").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#images").empty();
    $("#links").empty();
    songs.forEach(function(e, i){
        $("#songs").append("<div>" + e + "</div>");
        console.log(e, i);
    });
    artists.forEach(function(e, i){
        $("#artists").append("<div>" + e + "</div>");
        console.log(e, i);
    });
    lengths.forEach(function(e, i){
        $("#lengths").append("<div>" + e + "</div>");
        console.log(e, i);
    });
    images.forEach(function(e, i){
        $("#images").append("<div>" + e + "</div>");
        console.log(e, i);
    });
    urls.forEach(function(e, i){
        $("#links").append("<div>" + e + "</div>");
        console.log(e, i);
    });
}
$("#add").click(function() {
    addSongInfo();
    displaySongInfo();
});