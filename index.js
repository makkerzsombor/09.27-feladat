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

    static hozzáad(){
        let cim = document.getElementById('cim').value;
        let hossz = parseInt(document.getElementById('hossz').value);
        let ujZene = new Zene(cim,hossz);
        lista.push(ujZene);
        összesIdő += hossz;
        document.getElementById('ossz').innerHTML = "Ide jönn az összesített idő: " + összesIdő.toString();
        console.log(összesIdő);
    }

}

document.getElementById('gomb').addEventListener('click',Zene.hozzáad);