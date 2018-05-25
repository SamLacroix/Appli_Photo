function getDepartement(){
    $.ajax({
        url: "http://localhost/api_photo/public/api/v1/photo",
        method: "GET",
    })
        .done(function(response){
            //superman.movies = response.data;
            console.log(response.data);
            $("#movies").empty();
            response.data.forEach(function(d){
                $("#aucun_departement").append('<option>' + d.nom + '</option>');
            })
        })
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

$(document).ready(function(){
    $("#accueil").show();
    $("#recherche").hide();
    $("#inscription").hide();
    $("#profil").hide();
    $("#visitor").hide();
    $("#loger").hide();
    myMap();
    });

function openNav() {
    $("#mySidenav").css("width","250px");
}

$("#menu").on("click",openNav)

function closeNav() {
    $("#mySidenav").css("width","0px");
}

$("#closeBtn").on("click",closeNav)


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
    getDepartement();
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



$("#menu").on("click",openNav)
$("#closeBtn").on("click",closeNav)
$("#accueilBtn").on("click",accueil)
$("#rechercheBtn").on("click",recherche)
$("#inscriptionBtn").on("click",inscription)
$("#profilBtn").on("click",profil)





/*function showMovies() {
	$ajax({
		url: "http://localhost/movie-sf/public/api/v1/movies/random"
		data: {
			num: 20
		}
		data: $("form-yo").serialize() //pour envoyer données recuperees à partir d'un formulaire post
	})
	.done(function(reponse){
		$("movies").empty();
		response.data.foreach(function(el){
			$("#movies").append('<p>' + el.title +'<p>');
		})
	})
	}
}
$("#movies-btn").on("click",showMovies)*/