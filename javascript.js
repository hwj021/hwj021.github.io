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
