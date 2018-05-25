$(document).ready(function(){
    $("#accueil").show();
    $("#recherche").hide();
    $("#affichage").hide();
    $("#inscription").hide();
    $("#profil").hide();
    $("#visitor").hide();
    myMap();
    });

function openNav() {
    $("#mySidenav").css("width","250px");
}

function closeNav() {
    $("#mySidenav").css("width","0px");
}

function accueil() {
	closeNav();
	$("#accueil").show();
    $("#recherche").hide();
    $("#inscription").hide();
    $("#profil").hide();
    $("#visitor").hide();
    $("#loger").show();
}

function recherche() {
	closeNav();
	$("#accueil").hide();
    $("#recherche").show();
    $("#inscription").hide();
    $("#profil").hide();
    $("#visitor").show();
    $("#loger").hide();
}

function inscription() {
	closeNav();
	$("#accueil").hide();
    $("#recherche").hide();
    $("#inscription").show();
    $("#profil").hide();
    $("#visitor").show();
    $("#loger").hide();
}

function profil() {
	closeNav();
	$("#accueil").hide();
    $("#recherche").hide();
    $("#inscription").hide();
    $("#profil").show();
    $("#visitor").show();
    $("#loger").hide();
}

var lat = 47;
var long = 0;
var lat1 = 47;
var long1 = 0.2;
var centre = {lat: lat, lng: long};
var centre1 = {lat: lat1, lng: long1};
function myMap() {
var mapOptions = {
    center: new google.maps.LatLng(lat, long),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.HYBRID
}
var map = new google.maps.Map(document.getElementById("affichage"), mapOptions);
var marker = new google.maps.Marker({
  position: centre,
  map: map
});
var marker = new google.maps.Marker({
  position: centre1,
  map: map
});
}