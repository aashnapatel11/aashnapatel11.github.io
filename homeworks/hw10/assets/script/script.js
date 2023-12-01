document.getElementById("s1").addEventListener("click", function() {
    outfitChange('o1');
});

document.getElementById("s2").addEventListener("click", function() {
    outfitChange('o2');
});

document.getElementById("s3").addEventListener("click", function() {
    outfitChange('o3');
});

document.getElementById("s4").addEventListener("click", function() {
    outfitChange('o4');
});

document.getElementById("s5").addEventListener("click", function() {
    outfitChange('o5');
});

/* the process: */


function outfitChange(change){
  document.getElementById("body").style.display = "none";
  let outfits = document.getElementsByClassName("outfit");
    for(let i=0; i<outfits.length; i++){
      outfits[i].style.display = "none";
    }
  document.getElementById(change).style.display = "block";
}

// strip outfit
let strip = document.getElementById("strip-button").addEventListener("click", function() {
  document.getElementById("body").style.display = "block";
  outfitChange("body");
}); 