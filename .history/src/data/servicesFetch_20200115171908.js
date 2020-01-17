function getServices() {
    const data = [];

    fetch('http://localhost:8090')
        .then(res => res.json())
        .then(json => { data = json.res })

    return data
}




