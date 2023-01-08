var h = 0;
var m = 0;
var s = 0;
var ms = 0;
const watch = () => {
  var hh = document.getElementById("h");
  var mm = document.getElementById("m");
  var ss = document.getElementById("s");
  var mls = document.getElementById("ms");
  ms++;
  if (ms == 1000) {
    ms = 0;
    s++;
  } else if (s == 60) {
    s = 0;
    m++;
  } else if (m == 60) {
    m = 0;
    h++;
  }

  if (h < 10 || m < 10 || s < 10 || ms < 10) {
    mls.innerText = "0" + ms;
    ss.innerText = "0" + s;
    mm.innerText = "0" + m;
    hh.innerText = "0" + h;
  } else {
    mls.innerText = ms;
    ss.innerText = s;
    mm.innerText = m;
    hh.innerText = h;
  }
};

const start_stop = (x) => {
  if (x.value == "START") {
    x.value = "STOP";
    x.style.background = "green";
    x.style.color = "white";
    x.style.border = "5px solid green";
    x.style.padding = "8px";
    a = setInterval(watch, 0.5);
  } else {
    x.value = "START";
    x.style.background = "red";
    x.style.color = "white";
    x.style.border = "5px solid red";
    x.style.padding = "8px";
    clearInterval(a);
  }
};
