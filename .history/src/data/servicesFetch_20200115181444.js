
var data = [];
function getServices() {
    fetch('http://localhost:8090/test')
        .then(res => { return res.json() })
        .then(json => { data = json.res })

    return data
}




