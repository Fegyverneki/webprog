//POST
document.getElementById("buttonsend").onclick = function () {
    if(document.getElementById("name").value == "" || document.getElementById("hostname").value == "" || document.getElementById("location").value == "" || document.getElementById("price").value == "" || document.getElementById("minimum_nights").value == ""){
        alert("Bizonyos mezők üresek!")
    }
    else{
        let data = JSON.stringify({
            name: document.getElementById("name").value,
            hostname: document.getElementById("hostname").value,
            location: document.getElementById("location").value,
            price: Number(document.getElementById("price").value),
            minimum_nights: Number(document.getElementById("minimum_nights").value)
        })

        fetch("https://nodejs.sulla.hu/data", {
            method: "POST",
            body: data,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function() {
            location.reload()
        })
    }
}