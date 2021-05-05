import React from "react";

function Home() {
  var x = document.getElementById("demo");
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function showPosition(position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
  }

  return (
    <div>
      <h1>ENTRI</h1>
      <button onClick={getLocation()}>Try It</button>
      <p id="demo"></p>
    </div>
  );
}

export default Home;
