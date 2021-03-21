(() => {
  
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  
  document.querySelector("#reload").onclick = () => location.reload();

  let first = true;

  const loop = async () => {
    while(true) {
      const ok = await fetch("https://friends.funtime.com.ar/health", {mode: "cors", credentials: "omit"})
                .then(r => r.ok)
                .catch(e => false);

      if(ok) {
        location.assign("https://friends.funtime.com.ar");
        break;
      } else {
        if(first) {
          document.querySelector("#splash").classList.remove("visible");
          document.querySelector("#offline").classList.add("visible");
        } else {
          first = false;
        }
        await sleep(500);
      }
    }
  }

  loop();
})()