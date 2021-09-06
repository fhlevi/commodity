import SteinStore from 'stein-js-client'

class ConfigStein {
    constructor(header = {}) {
        this.Stein = new SteinStore(process.env.VUE_APP_API_MAIN)
    }
}

export default ConfigStein