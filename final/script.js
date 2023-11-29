function newpage(season) {
  window.location.href = season + ".html";

}

function tryontop(topnumber) {
  document.getElementById("top").src = topnumber;
}

function tryonbottom(bottomnumber) {
  document.getElementById("bottom").src = bottomnumber;
}

function back() {
  window.location.href = "index.html"

}

function learn(item){
  document.getElementById("popup").style.visibility = "visible";
  document.getElementById("popup-img").src = item;
  
  if((item) == 'img/tops/1.png') {
    document.getElementById("popup-title").innerHTML = "Olive Green Tank Top";
    document.getElementById("popup-link").href = "https://oldnavy.gap.com/";
    document.getElementById("popup-link").innerHTML = "This top is from Old Navy. Click here to shop.";   
  }

  if((item) == 'img/tops/2.png') {
    document.getElementById("popup-title").innerHTML = "Green Hoodie";
    document.getElementById("popup-link").href = "https://www.thenorthface.com/en-us";
    document.getElementById("popup-link").innerHTML = "This top is from my Northface. Click here to shop.";   
  }
  
  if((item) == 'img/tops/3.png') {
    document.getElementById("popup-title").innerHTML = "Black Tank Top";
    document.getElementById("popup-link").href = "https://www.hollisterco.com/";
    document.getElementById("popup-link").innerHTML = "This top is from Hollister. Click here to shop.";   
  }

  if((item) == 'img/tops/4.png') {
    document.getElementById("popup-title").innerHTML = "Brown Cardigan";
    document.getElementById("popup-link").href = "https://www.hollisterco.com/";
    document.getElementById("popup-link").innerHTML = "This top is from Hollister. Click here to shop.";   
  }

  if((item) == 'img/tops/5.png') {
    document.getElementById("popup-title").innerHTML = "White Tank Top";
    document.getElementById("popup-link").href = "https://us.brandymelville.com/";
    document.getElementById("popup-link").innerHTML = "This top is from Brandy Melville. Click here to shop.";   
  }

  if((item) == 'img/tops/6.png') {
    document.getElementById("popup-title").innerHTML = "Pink Top";
    document.getElementById("popup-link").href = "https://www2.hm.com/en_us/index.html";
    document.getElementById("popup-link").innerHTML = "This top is from H&M. Click here to shop.";   
  }

  if((item) == 'img/tops/7.png') {
    document.getElementById("popup-title").innerHTML = "Pink Top";
    document.getElementById("popup-link").href = "https://www.macys.com/";
    document.getElementById("popup-link").innerHTML = "This top is from Macys. Click here to shop.";   
  }

  if((item) == 'img/tops/8.png') {
    document.getElementById("popup-title").innerHTML = "Blue Tank Top";
    document.getElementById("popup-link").href = "https://www.hollisterco.com/";
    document.getElementById("popup-link").innerHTML = "This top is from Hollister. Click here to shop.";   
  }

  if((item) == 'img/tops/9.png') {
    document.getElementById("popup-title").innerHTML = "Blue Short Sleeve Cardigan";
    document.getElementById("popup-link").href = "https://www2.hm.com/en_us/index.html";
    document.getElementById("popup-link").innerHTML = "This top is from H&M. Click here to shop.";  
  }

  if((item) == 'img/tops/10.png') {
    document.getElementById("popup-title").innerHTML = "Blue Striped Sweater";
    document.getElementById("popup-link").href = "https://www.target.com/";
    document.getElementById("popup-link").innerHTML = "This top is from Target. Click here to shop.";  
  }

  if((item) == 'img/tops/11.png') {
    document.getElementById("popup-title").innerHTML = "Maroon Turtle Neck";
    document.getElementById("popup-link").href = "https://www.hollisterco.com/";
    document.getElementById("popup-link").innerHTML = "This top is from Hollister. Click here to shop."; 
  }


  if((item) == 'img/tops/12.png') {
    document.getElementById("popup-title").innerHTML = "Red Sweater";
    document.getElementById("popup-link").href = "https://www.target.com/";
    document.getElementById("popup-link").innerHTML = "This top is from Target. Click here to shop.";  
  }


  if((item) == 'img/tops/13.png') {
    document.getElementById("popup-title").innerHTML = "Flower Blouse";
    document.getElementById("popup-link").href = "https://www.nordstromrack.com/";
    document.getElementById("popup-link").innerHTML = "This top is from Nordstrom Rack. Click here to shop.";  
  }
  if((item) == 'img/tops/15.png') {
    document.getElementById("popup-title").innerHTML = "Brown Top";
    document.getElementById("popup-link").href = "https://www.hollisterco.com/";
    document.getElementById("popup-link").innerHTML = "This top is from Hollister. Click here to shop.";  
  }

  if((item) == 'img/bottom/1.png') {
    document.getElementById("popup-title").innerHTML = "Blue Jeans";
    document.getElementById("popup-link").href = "https://www.hollisterco.com/";
    document.getElementById("popup-link").innerHTML = "This bottom is from Hollister. Click here to shop.";  
  }

  if((item) == 'img/bottom/2.png') {
    document.getElementById("popup-title").innerHTML = "Cargo Pants";
    document.getElementById("popup-link").href = "https://www.hollisterco.com/";
    document.getElementById("popup-link").innerHTML = "This bottom is from Hollister. Click here to shop.";  
  }

  if((item) == 'img/bottom/3.png') {
    document.getElementById("popup-title").innerHTML = "Light Blue Jeans";
    document.getElementById("popup-link").href = "https://www.hollisterco.com/";
    document.getElementById("popup-link").innerHTML = "This bottom is from Hollister. Click here to shop.";  
  }

  if((item) == 'img/bottom/4.png') {
    document.getElementById("popup-title").innerHTML = "Green Plaid Skirt";
    document.getElementById("popup-link").href = "https://us.brandymelville.com/";
    document.getElementById("popup-link").innerHTML = "This bottom is from Brandy Melville. Click here to shop.";    
  }

  if((item) == 'img/bottom/5.png') {
    document.getElementById("popup-title").innerHTML = "White Skirt";
    document.getElementById("popup-link").href = "https://www.macys.com/";
    document.getElementById("popup-link").innerHTML = "This bottom is from Macys. Click here to shop.";  
  }

  if((item) == 'img/bottom/6.png') {
    document.getElementById("popup-title").innerHTML = "Floral Skirt";
    document.getElementById("popup-link").href = "https://www.macys.com/";
    document.getElementById("popup-link").innerHTML = "This bottom is from Macys. Click here to shop.";    
  }

  if((item) == 'img/bottom/7.png') {
    document.getElementById("popup-title").innerHTML = "Black Skirt";
    document.getElementById("popup-link").href = none;
    document.getElementById("popup-link").innerHTML = "This bottom is from my roommate.";    
  }

  if((item) == 'img/bottom/8.png') {
    document.getElementById("popup-title").innerHTML = "Pink Skirt";
    document.getElementById("popup-link").href = "https://www.rossstores.com/";
    document.getElementById("popup-link").innerHTML = "This bottom is from Ross. Click here to shop.";    
  }

  if((item) == 'img/bottom/9.png') {
    document.getElementById("popup-title").innerHTML = "Shorts";
    document.getElementById("popup-link").href = "https://www.hollisterco.com/";
    document.getElementById("popup-link").innerHTML = "This bottom is from Hollister. Click here to shop."; 
  }

  


  
}

function closepopup() {
  document.getElementById("popup").style.visibility = "hidden";
}