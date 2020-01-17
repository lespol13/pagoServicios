export function getServices() {
    return fetch('http://localhost:8090/test')
        .then(res => res.json)
        .then(json =>
            this.setState({
                services: json.docs,
                service: json.docs[0]
            })
        )
}