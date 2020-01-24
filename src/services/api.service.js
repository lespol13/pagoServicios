export default class Api {
    static defaultHeaders() {
        return {
            "Content-Type": 'application/json',
        }
    }
    // -----------------------------------------------------------------------
    static async findDatos() {
        const response = await fetch('http://10.255.11.201:8090/datos/findDatos');
        const data = await response.json();
        return data;
    }
    // ------------------------------------------------------------------------
    static async secondLevel(id) {
        const config = {
            method: 'POST',
            headers: Api.defaultHeaders(),
            body: JSON.stringify({ "dato": id })
        };
        const response = await fetch('http://10.255.11.201:8090/datos/insert', config);
        const data = await response.json();
        return data;
    }
    // ------------------------------------------------------------------------
}