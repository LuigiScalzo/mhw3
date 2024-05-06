function chiudiMenu(event) {
    const button_chiudi = event.currentTarget;
    const linee = document.getElementById("tendina");
    const stile = linee.style.display;
    if (stile !== "flex") {
        linee.style.display = "flex";
    } else {
        linee.style.display = "none";
    }

}

function createImage(src) {
    const image = document.createElement("img");
    image.src = src;
    return image;
}


function apriImmagine(event) {
    const image = event.currentTarget.src;
    const i = createImage(image);
    document.body.classList.add("no-scroll");
    modalView.style.top = window.pageYOffset + 'px';
    modalView.appendChild(i);
    modalView.classList.remove("hidden");

}

function ClosedModal() {
    document.body.classList.remove("no-scroll");
    modalView.classList.add("hidden");
    modalView.innerHTML = " ";
}



function cliccaXforLOG(event) {
    const log = document.getElementById("log");
    const style = log.style.display;
    if (style === "flex") {
        log.style.display = "none";
        ClosedModal();

    }
}
function cliccaXforSIG(event) {
    const sig = document.getElementById("sig");
    const style = sig.style.display;
    if (style === "flex") {
        sig.style.display = "none";
        ClosedModal();

    }
}

function Login(event) {
    const button_login = event.currentTarget;
    const log = document.getElementById("log");
    const style = log.style.display;
    if (style !== "flex") {
        log.style.display = "flex";

    } else {
        log.style.display = "none";
    }

    document.body.classList.add("no-scroll");
    modalView.style.top = window.pageYOffset + 'px';
    modalView.classList.remove("hidden");
}

function Registrati(event) {
    const sign_up = event.currentTarget;
    const s = document.getElementById("sig");
    const s_style = s.style.display;
    const log = document.getElementById("log");
    const log_style = log.style.display;
    if (log_style === "flex" && s_style !== "flex") {

        log.style.display = "none";
        s.style.display = "flex";
    }
    document.body.classList.add("no-scroll");
    modalView.style.top = window.pageYOffset + 'px';
    modalView.classList.remove("hidden");

}
function Accedi(event) {
    const accedi = event.currentTarget;
    const s = document.getElementById("sig");
    const s_style = s.style.display;
    const log = document.getElementById("log");
    const log_style = log.style.display;

    if (s_style === "flex" && log_style !== "flex") {

        s.style.display = "none";
        log.style.display = "flex";
    }

    document.body.classList.add("no-scroll");
    modalView.style.top = window.pageYOffset + 'px';
    modalView.classList.remove("hidden");
}

function apriTesti(event) {
    const button = event.currentTarget;
    const content = document.getElementById("listatesti");
    //const st = window.getComputedStyle(content).getPropertyValue("display");

    if (content.className === "hidden") {
        content.classList.remove("hidden");

        content.classList.add("mostra");
        console.log("ciao2");
    }
    else {
        content.classList.remove("mostra");
        content.classList.add("hidden");
    }
}

function apriListaPreferiti(event) {
    console.log("ciao");
    const button = event.currentTarget;
    const lista_preferite = document.getElementById("listapreferite");
    const lista_preferite_style = lista_preferite.style.display;

    if (lista_preferite_style !== "flex") {
        lista_preferite.style.display = "flex";
    }
    else {
        lista_preferite.style.display = "none";
    }

}



const button_listatesti = document.querySelector("#testi");
button_listatesti.addEventListener("click", apriTesti);

const accedi = document.querySelector("#sig #LO");
accedi.addEventListener("click", Accedi);

const sign_up = document.querySelector("#log #SU");
sign_up.addEventListener("click", Registrati);

const clicca_xLOG = document.querySelector("#close1");
clicca_xLOG.addEventListener("click", cliccaXforLOG);

const clicca_xSIG = document.querySelector("#close2");
clicca_xSIG.addEventListener("click", cliccaXforSIG);

const button_login = document.querySelector("#links button");
button_login.addEventListener("click", Login);

const button_chiudi = document.querySelector("#listaMenu button");
button_chiudi.addEventListener("click", chiudiMenu);


const modalView = document.querySelector("#modal-view");
modalView.addEventListener("click", ClosedModal);

const imagini = (document.getElementsByClassName("image"));
for (const im of imagini) {
    im.addEventListener("click", apriImmagine);
}

const button_listapreferiti = document.querySelector("#frase a");
button_listapreferiti.addEventListener("click", apriListaPreferiti);




