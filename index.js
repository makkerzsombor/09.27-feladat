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

    
}