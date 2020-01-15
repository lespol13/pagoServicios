export function getServices(services,service) {
    return fetch('http://localhost:8090/test')
        .then(res => { return res.json() })
        .then(json => {
            this.setState({
                services: json.docs,
                service: json.docs[0]
            })

        }).catch((err) => {
            console.log(err);
        });
}