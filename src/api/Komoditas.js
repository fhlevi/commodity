import Stein from "Config/configStein";

class Komoditas extends Stein {
    constructor(header) {
        super(header);
    }

    getDataKomoditas() {
        return this.Stein.read('list')
    }

    getDataSize() {
        return this.Stein.read('option_size')
    }

    getDataCity() {
        return this.Stein.read('option_area')
    }

    saveDataKomoditas(data) {
        return this.Stein.append('list', [data])
    }
}

export default Komoditas