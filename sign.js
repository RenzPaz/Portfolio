
const fetchData = async () => {

    try{
        const result = await fetch('http://10.120.20.241:3000/register');
        console.log(await result.json())
    }catch(error){
        console.log(error)
    }


}

async function register(){
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    try{
        const result = await fetch('http://10.120.20.241:3000/register',
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json", // Specify JSON content
                },
                body: JSON.stringify({ username: username, email: email, password: password }) // Data to send
            }
        )
        .then(response => response.json()) // Convert response to JSON
        .then(data => console.log(data)) // Handle success
        .catch(error => console.error("Error:", error));
        console.log(await result.json())
    }catch(error){
        console.log(error)
    }
}

fetchData()