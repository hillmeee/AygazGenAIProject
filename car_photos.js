function clearIconicCarPhotos() {
    document.getElementById("iconic-car-photos").innerHTML = '';
}

function clearHomePagePhotos() {
    document.getElementById("home-page-photos").innerHTML = '';
}

function clearGunumuzCarsPhotos() {
    document.getElementById("gunumuz-car-photos").innerHTML = '';
}

function clearAboutUsPhotos() {
    document.getElementById("about-us-photos").innerHTML = '';
}

function showHomePage() {
    clearHomePagePhotos();
    var homePageDiv = document.getElementById("home-page-photos");
    var homePagePhotos = [
        "/Users/ahmet/OneDrive/Desktop/Education/Software/HTML/AyGazGenAI/Images/nissan_gtr_r34_1.jpg",
        "/Users/ahmet/OneDrive/Desktop/Education/Software/HTML/AyGazGenAI/Images/supra_1.jpg",
        "/Users/ahmet/OneDrive/Desktop/Education/Software/HTML/AyGazGenAI/Images/bmw_1.jpg",
        "/Users/ahmet/OneDrive/Desktop/Education/Software/HTML/AyGazGenAI/Images/chevrolet_1.jpg",
        "/Users/ahmet/OneDrive/Desktop/Education/Software/HTML/AyGazGenAI/Images/dodge_1.jpg",
        "/Users/ahmet/OneDrive/Desktop/Education/Software/HTML/AyGazGenAI/Images/ferrari_1.jpg",
        "/Users/ahmet/OneDrive/Desktop/Education/Software/HTML/AyGazGenAI/Images/lambo_1.jpg",
        "/Users/ahmet/OneDrive/Desktop/Education/Software/HTML/AyGazGenAI/Images/merso_1.jpg"
    ];

    homePagePhotos.forEach(function(photo) {
        var imgElement = document.createElement("img");
        imgElement.src = photo;
        homePageDiv.appendChild(imgElement);
    });
}

function showIconicCars() {
    clearIconicCarPhotos();
    var iconicCarDiv = document.getElementById("iconic-car-photos");
    var iconicCarPhotos = [
        "/Users/ahmet/OneDrive/Desktop/Education/Software/HTML/AyGazGenAI/Images/nissan_gtr_r34_2.jpg",
        "/Users/ahmet/OneDrive/Desktop/Education/Software/HTML/AyGazGenAI/Images/supra_2.jpg",
        "/Users/ahmet/OneDrive/Desktop/Education/Software/HTML/AyGazGenAI/Images/chevrolet_2.jpg",
        "/Users/ahmet/OneDrive/Desktop/Education/Software/HTML/AyGazGenAI/Images/dodge_2.jpg",
        "/Users/ahmet/OneDrive/Desktop/Education/Software/HTML/AyGazGenAI/Images/ferrai_2.jpg",
        "/Users/ahmet/OneDrive/Desktop/Education/Software/HTML/AyGazGenAI/Images/lambo_2.jpg",
        "/Users/ahmet/OneDrive/Desktop/Education/Software/HTML/AyGazGenAI/Images/merso_2.jpg",
        "/Users/ahmet/OneDrive/Desktop/Education/Software/HTML/AyGazGenAI/Images/merso_g_1.jpg"
    ];

    iconicCarPhotos.forEach(function(photo) {
        var imgElement = document.createElement("img");
        imgElement.src = photo;
        iconicCarDiv.appendChild(imgElement);
    });
}

function showGunumuzCars() {
    clearGunumuzCarsPhotos();
    var modernCarDiv = document.getElementById("gunumuz-car-photos");
    var modernCarPhotos = [
        "/Users/ahmet/OneDrive/Desktop/Education/Software/HTML/AyGazGenAI/Images/bmw_3.jpg",
        "/Users/ahmet/OneDrive/Desktop/Education/Software/HTML/AyGazGenAI/Images/chevrolet_3.jpg",
        "/Users/ahmet/OneDrive/Desktop/Education/Software/HTML/AyGazGenAI/Images/dodge_3.jpg",
        "/Users/ahmet/OneDrive/Desktop/Education/Software/HTML/AyGazGenAI/Images/ferrai_3.jpg",
        "/Users/ahmet/OneDrive/Desktop/Education/Software/HTML/AyGazGenAI/Images/merso_g_3.jpg",
        "/Users/ahmet/OneDrive/Desktop/Education/Software/HTML/AyGazGenAI/Images/merso_3.jpg",
        "/Users/ahmet/OneDrive/Desktop/Education/Software/HTML/AyGazGenAI/Images/merso_g_2.jpg",
        "/Users/ahmet/OneDrive/Desktop/Education/Software/HTML/AyGazGenAI/Images/prosche_2.jpg"
    ];

    modernCarPhotos.forEach(function(photo) {
        var imgElement = document.createElement("img");
        imgElement.src = photo;
        modernCarDiv.appendChild(imgElement);
    });
}

function showAboutUs() {
    clearAboutUsPhotos();
    var aboutUsDiv = document.getElementById("about-us-photos");
    var aboutUsPhotos = [
        "/Users/ahmet/OneDrive/Desktop/Education/Software/HTML/AyGazGenAI/Images/porsche_3.jpg",
        "/Users/ahmet/OneDrive/Desktop/Education/Software/HTML/AyGazGenAI/Images/chevrolet_4.jpg",
        "/Users/ahmet/OneDrive/Desktop/Education/Software/HTML/AyGazGenAI/Images/dodge_4.jpg",
        "/Users/ahmet/OneDrive/Desktop/Education/Software/HTML/AyGazGenAI/Images/ferrai_4.jpg",
        "/Users/ahmet/OneDrive/Desktop/Education/Software/HTML/AyGazGenAI/Images/lambo_3.jpg",
        "/Users/ahmet/OneDrive/Desktop/Education/Software/HTML/AyGazGenAI/Images/merso_3.jpg",
        "/Users/ahmet/OneDrive/Desktop/Education/Software/HTML/AyGazGenAI/Images/merso_g_2.jpg",
        "/Users/ahmet/OneDrive/Desktop/Education/Software/HTML/AyGazGenAI/Images/supra_4.jpg"
    ];

    aboutUsPhotos.forEach(function(photo) {
        var imgElement = document.createElement("img");
        imgElement.src = photo;
        aboutUsDiv.appendChild(imgElement);
    });
}
