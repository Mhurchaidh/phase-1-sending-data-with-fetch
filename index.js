function submitData(name, email) {
    
    const configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name,
            email,
        }),
    }

    return fetch("http://localhost:3000/users", configObject)
        .then(resp => resp.json())
        .then(object => {
            //document.body.innerHTML = object.id;
            console.log(object);
            document.querySelector('body').append(object.id);
        })
        .catch(error => {
            alert("Bad things!");
            document.querySelector('body').append(error.message);
            return error;
        })
}

