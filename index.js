let lista = []
let összesIdő = 0;

class Zene{
    #zeneCim;
    #zeneHossz

    constructor(zeneCim, zeneHossz){
        this.#zeneCim = zeneCim;
        this.zeneHossz = zeneHossz;
    }

    get zeneCim(){
        return this.#zeneCim;
    }
    set zeneCim(bekertCim){
        this.#zeneCim = bekertCim;
    }

    get ZeneHossz(){
        return this.#zeneHossz;
    }
    set ZeneHossz(bekertHossz){
        this.zeneHossz = bekertHossz;
    }

    hozzáad(){
        let ujZene = new Zene(document.getElementById('cim').value,document.getElementById('hossz').value);
        lista.push(ujZene);
        összesIdő += document.getElementById('hossz').value;
    }

}

document.getElementById('gomb').addEventListener('click',hozzáad());