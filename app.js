function stars() {
    const count = 300;
    const stars = document.getElementById('stars');
    var i = 0;

    while(i < count) {
      const star = document.createElement('i');
      const x = Math.floor(Math.random() * window.innerWidth)
      const y = Math.floor(Math.random() * window.innerHeight)

      const size = Math.random() * 5;
      star.style.left = x+'px';
      star.style.top = y+'px';
      star.style.height = 1+size+'px';
      star.style.width = 1+size+'px';

      const duration = Math.random() * 2;
      star.style.animationDuration = 2+duration+'s';


      stars.appendChild(star);
      i++
    }
  }
  stars();


  var hours = new Date().getHours()
var time =  new Date().getTime()

// Day One

var dayOneTime =  new Date("9 jul , 2022 07:00:00").getTime()

var dot = dayOneTime - time
var dayOne = Math.floor((dot / (1000 * 60 * 60 * 24))  );
var doh = Math.floor((dot / (1000 * 60 * 60 ))  %24 )
var dom = Math.floor((dot / (1000 * 60 )) % 60)
var dos = Math.floor((dot / (1000 )) % 60)
console.log(dayOne + " days " + doh + " hours " + dom + " minutes " + dos + " seconds");
var hours = new Date().getHours()
var time =  new Date().getTime()

document.getElementById("day1").innerHTML = (dayOne + " days " + doh + " hours " + dom + " minutes " + dos + " seconds")
// Day Two 

var dayOneTime2 =  new Date("10 jul , 2022 05:00:00").getTime()

var dot2 = dayOneTime2 - time
var daytwo = Math.floor((dot2 / (1000 * 60 * 60 * 24))  );
var doh2 = Math.floor((dot2 / (1000 * 60 * 60 ))  %24 )
var dom2 = Math.floor((dot2 / (1000 * 60 )) % 60)
var dos2 = Math.floor((dot2 / (1000 )) % 60)
document.getElementById("day2").innerHTML = (daytwo + " days " + doh2 + " hours " + dom2 + " minutes " + dos2 + " seconds");


// Day Three

var dayOneTime3 =  new Date("11 jul , 2022 05:00:00").getTime()

var dot3 = dayOneTime3 - time
var daythree = Math.floor((dot3 / (1000 * 60 * 60 * 24))  );
var doh3 = Math.floor((dot3 / (1000 * 60 * 60 ))  %24 )
var dom3 = Math.floor((dot3 / (1000 * 60 )) % 60)
var dos3 = Math.floor((dot3 / (1000 )) % 60)
document.getElementById("day3").innerHTML = (daythree + " days " + doh3 + " hours " + dom3 + " minutes " + dos3 + " seconds");