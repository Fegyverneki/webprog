//GET
fetch("https://nodejs.sulla.hu/data").then(function(data) {
    return data.json()
})
.then(function(arrayofdata){
    
    arrayofdata.map(function(hotel){
        document.getElementById("container").innerHTML += `<h1>${hotel.name}</h1>
        <h1>${hotel.hostname}</h1>
        <h2>${hotel.location}</h2>
        <h2>${hotel.price}</h2>
        <h2>${hotel.minimum_nights}</h2>
        <br/>
        <button onclick="remove(${hotel.id})">Töröl</button>`
    })
})
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
//DELETE
function remove(id){
    if(confirm("Biztos hogy eltávolítod?")) {
    fetch("https://nodejs.sulla.hu/data/"+id, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function() {
        location.reload()
    })
}
}