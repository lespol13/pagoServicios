export function getServices(id) {
    return fetch('/crdrdr/crdincmg', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(id)
    });
}

// const getServices = (state1, state2) => {
//     fetch('./data.js')
//         .then(res => { return res.json() })
//         .then(json => {
//             state1 = json.docs;
//             state2 = json.docs[0]
//         })


// }




