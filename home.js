var INIT_DELAY = 1200, SHOW_DELAY = 100,
    elCount, thisEl = 0, nextEl = -1,
    smgroup,
    greatSayings = [
      "Code the change you wish to see in the world.",
      "What you do is important, because you are important.",
      "I shall pass this way, but only once. <br/>All the good that I can do, I must do, without any hesitation. <br/>For I shall pass this way but only once."
    ];

function loadPage() {
  smgroup = document.getElementById('socialmedias').children;
  elCount = Math.floor(smgroup.length / 2);
  setTimeout(function(){showel();}, INIT_DELAY);
  printSaying();
}

function showel(el) {
  if (elCount >= 0) {
    if (nextEl == -1) {
      thisEl = elCount--;
      nextEl = smgroup.length - thisEl;
    } else {
      thisEl = nextEl;
      nextEl = -1;
    }
    console.log('1: ' + thisEl + ', 2: ' + nextEl);
    smgroup[thisEl].classList.remove('hide');
    setTimeout(function(){showel();}, SHOW_DELAY);
  }
}

function printSaying() {
  var taglineEl = document.getElementById('tagline');
  taglineEl.innerHTML = greatSayings[Math.floor(Math.random() * greatSayings.length)];
  taglineEl.classList.remove('hide');
}

function realName() {
  var h1 = document.getElementsByTagName('h1')[0];
  if (h1.innerHTML[0] == 'R') {h1.innerHTML = "Smiley<br/>Rob";}
  else {h1.innerHTML = "Robert<br/>Chatfield";}
}
