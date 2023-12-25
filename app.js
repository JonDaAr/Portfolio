
const btnSwitch = document.querySelector('#switch');
var dark = 0;
/* switch */
btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
    /* sirve para cambiar los iconos del menu del primer selecc*/
    if(document.body.classList == "dark"){
        dark = 1;
    }else{
        dark = 0;
    }
    ChangeIcon(dark);
})

/* intercambio de iconos */

function ChangeIcon(elemento){
    if (elemento == 1) {
        document.getElementById('img0').src= `/img/img4.png`;
        document.getElementById('img1').src= `/img/img5.png`;
        document.getElementById('img2').src= `/img/img6.png`;
        document.getElementById('img3').src= `/img/img7.png`;
        }else{
        document.getElementById('img0').src= `/img/img0.png`;
        document.getElementById('img1').src= `/img/img1.png`;
        document.getElementById('img2').src= `/img/img2.png`;
        document.getElementById('img3').src= `/img/img3.png`;
        }
    }