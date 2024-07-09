var planets = [
    "mercury.jpg",
    "venus.jpg",
    "earth.jpg",
    "mars.jpg",
    "jupiter.jpg",
    "saturn.jpg",
    "uranus.jpg",
    "neptune.jpg",
  ];
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  var shuffled_planets = shuffleArray(planets);
  console.log(shuffled_planets);
  
  // var cards = "";
  // for (var index = 0; index < shuffled_planets.length; index++)
  //   cards += '<div class="card"></div>';
  
  const cards = document.querySelectorAll(".card");
  
  // var x = document.getElementsByClassName("hover");
  // console.log(x);
  
  function flipCard() {
    this.classList.add("flipped");
  }
  
  
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", flipCard);
  }
  
  //Əsas dəyişiklik son sətirdədi. 27-ci sətirdə ümumi bütün card-ları bir yerə yığırsan daha sonra 53-də həmin card-ları bir bir click etdikcə çevrilsin deyə for döngüsünə alırsan. Card-ların sayı çox olduğuna görə döngü ilə yazmasan sadəcə birinə flipped class-ı add olunur. Döngüyə aldıqda click etdikcə əlavə edir. Başqa nəsə sualın varsa yaza bilərsən.
  