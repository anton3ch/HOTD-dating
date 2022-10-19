function hideResults() {
  document.getElementById("rhaenyra").setAttribute("class", "hidden");
  document.getElementById("alicent").setAttribute("class", "hidden");
  document.getElementById("daemon").setAttribute("class", "hidden");
  document.getElementById("larys").setAttribute("class", "hidden");
  document.getElementById("corlys").setAttribute("class", "hidden");
}

window.onload = function() {
  
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResults();
    
    const noHeights = document.getElementById("noHeights").checked;
    const noKill = document.getElementById("noKill").checked;
    const noFeet = document.getElementById("noFeet").checked;

    if (noHeights === false && noKill === true && noFeet === true) {
      document.getElementById("alicent").removeAttribute("class");
      // document.getElementById("ah").setAttribute("width", "500px");
    } else if (noHeights === true && noKill === false && noFeet === true) {
      document.getElementById("daemon").removeAttribute("class");
      // document.getElementById("dt").setAttribute("width", "500px");
    } else if (noHeights === true && noKill === true && noFeet === true) {
    document.getElementById("rhaenyra").removeAttribute("class");
    // document.getElementById("rt").setAttribute("width", "500px");
    } else if (noHeights === false && noKill === false && noFeet === true) {
      document.getElementById("corlys").removeAttribute("class");
      // document.getElementById("cv").setAttribute("width", "500px");
    } else if (noFeet === false) {
      document.getElementById("larys").removeAttribute("class");
      // document.getElementById("ah").setAttribute("width", "500px");
    }
  }
}