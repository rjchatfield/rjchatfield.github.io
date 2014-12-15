var INIT_DELAY = 1200, SHOW_DELAY = 100,
  elCount, thisEl = 0, nextEl = -1,
  smgroup;

function loadPage() {
  smgroup = document.getElementById('socialmedias').children;
  elCount = Math.floor(smgroup.length / 2);
  showDiv('textBlock1');
  setTimeout(function(){showel();}, INIT_DELAY);
  setTimeout(function(){showDiv('textBlock2');}, INIT_DELAY*2);
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
    smgroup[thisEl].classList.remove('hide');
    setTimeout(function(){showel();}, SHOW_DELAY);
  }
}

function showDiv(d) {
  var taglineEl = document.getElementById(d);
  taglineEl.classList.remove('hide');
}

function realName() {
  var h1 = document.getElementsByTagName('h1')[0];
  if (h1.innerHTML[0] == 'R') {h1.innerHTML = "Smiley Rob";}
  else {h1.innerHTML = "Robert J Chatfield";}
}
