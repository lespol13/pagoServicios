function getServices(id) {
    return fetch('/crdrdr/crdincmg', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(id)
    }).then(function (res) { return res.json(); })
        .then(console.log(data))
}





