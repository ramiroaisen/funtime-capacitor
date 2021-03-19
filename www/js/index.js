(() => {
  Capacitor.Plugins.SplashScreen.hide();
  console.log(document.querySelector("#loading"));
  if(window.navigator.onLine) {
    location.assign("https://friends.funtime.com.ar");
  } else {
    document.querySelector("#offline").style.display = "block";
    document.querySelector("#loading").style.display = "none";
  }
})()