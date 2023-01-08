//7.01.2023
const hide = document.getElementById("hide");
const eins = document.getElementById("1");
const zwei = document.getElementById("2");
const drei = document.getElementById("3");
const welcome = document.getElementById("welcome");

window.addEventListener('load', function() {
    eins.style.display = 'none';
    zwei.style.display = 'none';
    drei.style.display = 'none';
    welcome.style.display = 'none';
});

hide.addEventListener('click', () => {
    if (hide.style.opacity === '0') {
        hide.style.opacity = '1';
    } else {
        eins.style.display = 'inline';
        zwei.style.display = 'inline';
        drei.style.display = 'inline';
        welcome.style.display = 'block';
        eins.style.opacity = '0';
        zwei.style.opacity = '0';
        drei.style.opacity = '0';
        hide.style.opacity = '0';
        welcome.style.opacity = '0';
        setTimeout(() => {hide.style.display = 'none'; 
                          eins.style.opacity = '1'; 
                          zwei.style.opacity = '1'; 
                          drei.style.opacity = '1';}, 1500);
        setTimeout(() => {welcome.style.opacity = '1';}, 2500);
    }
});