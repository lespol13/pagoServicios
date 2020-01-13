export const infoServices = () => {
    fetch('http://localhost:8090/test')
        .then(res => { return res.json() })
        .then(json => {
            this.setState({
                services: json.docs,
            })
        }).catch((err) => {
            console.log(err);
        });
}