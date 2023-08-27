const hide = document.getElementById("hide");
const eins = document.getElementById("e");
const zwei = document.getElementById("z");
const drei = document.getElementById("d");

window.addEventListener('load', function() {
    eins.style.display = 'none';
    zwei.style.display = 'none';
    drei.style.display = 'none';
    setTimeout(() => {
        eins.style.color = "white";
        zwei.style.color = "white";
        drei.style.color = "white";
    }, 100);

});

//XDDDDDDDDDDDDDDDD
hide.addEventListener('click', () => {
    if (hide.style.opacity === '0') {
        //
    } else {
        eins.style.display = 'inline';
        zwei.style.display = 'inline';
        drei.style.display = 'inline';
        eins.style.opacity = '0';
        zwei.style.opacity = '0';
        drei.style.opacity = '0';
        hide.style.opacity = '0';
        setTimeout(() => {hide.style.display = 'none'; 
                          eins.style.opacity = '1'; 
                          zwei.style.opacity = '1'; 
                          drei.style.opacity = '1';}, 1500);
    }
});

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    const currentTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = currentTime;
  }
  

setInterval(updateClock, 1000);
  


  function displayMessage() {
    const now = new Date();
    const currentHour = now.getHours();
  
    let message = '';
  
    if (currentHour >= 0 && currentHour < 8) {
      message = 'prob sleeping or playing valo';
    } else if (currentHour >= 8 && currentHour < 16) {
      message = 'in school';
    } else if (currentHour >= 16 && currentHour < 24) {
      message = 'feel free to text me';
    } 
  
    document.getElementById('message').textContent = message;
  }
  
  // Wywołujemy funkcję, aby wyświetlić początkową wiadomość
  displayMessage();
  
  // Aktualizujemy wiadomość co minutę
  setInterval(displayMessage, 60000);
