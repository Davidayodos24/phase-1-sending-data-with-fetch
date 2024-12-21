function submitData(name, email) {
    const formData = {
        name: name,
        email: email
    };

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", configurationObject)
        .then((response) => response.json()) // Parse the JSON from the response
        .then((data) => {
            // Append the new user's ID to the DOM
            const body = document.querySelector("body");
            const p = document.createElement("p");
            p.textContent = `New user ID: ${data.id}`;
            body.appendChild(p);
        })
        .catch((error) => {
            // Handle errors and append error message to the DOM
            const body = document.querySelector("body");
            const p = document.createElement("p");
            p.textContent = `Error: ${error.message}`;
            body.appendChild(p);
        });
}

