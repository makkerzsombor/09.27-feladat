let lista = []

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
        lista.push();
    }

}

document.getElementById('gomb').addEventListener('click',hozzáad());