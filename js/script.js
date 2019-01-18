/* global $ */
let songs = [];
let artists = [];
let lengths = [];
let images = [];
let urls = [];
    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    songs.push($("#song").val());
    artists.push($("#artist").val());
    lengths.push($("#length").val());
    images.push($("#image").val());
    urls.push($("#link").val());
}
function displaySongInfo(){
    songs.forEach(function(e, i){
        $("#songs").append();
    });
    artists.forEach(function(e, i){
        console.log(e, i);
    });
    lengths.forEach(function(e, i){
        console.log(e, i);
    });
    images.forEach(function(e, i){
        console.log(e, i);
    });
    urls.forEach(function(e, i){
        console.log(e, i);
    });
}
$("#add").click(function() {
    addSongInfo();
    displaySongInfo();
});