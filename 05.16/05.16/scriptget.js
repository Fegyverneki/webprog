//GET
fetch("https://nodejs.sulla.hu/data").then(function(data) {
    return data.json()
})
.then(function(arrayofdata){
    
    arrayofdata.map(function(hotel){
        document.getElementById("container").innerHTML += `<div class="hotel-box">
        <h1>${hotel.name}</h1>
        <h1>Gazda: ${hotel.hostname}</h1>
        <h2>Hely: ${hotel.location}</h2>
        <h2>Ár: ${hotel.price}</h2>
        <h2>Minimum éjszaka: ${hotel.minimum_nights}</h2>
        <br/>
        <button class="grungy-button" onclick="remove(${hotel.id})">Eltávolítás</button>
        <button class="grungy-button" onclick="update(${hotel.id})">Módosítás</button>
    </div>`
    })
})

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

// PUT
function update(id) {
    if (confirm("Biztos hogy frissíteni szeretnéd?")) {
        let data = JSON.stringify({
            name: prompt("Add meg az új nevet:"),
            hostname: prompt("Add meg az új gazda nevét:"),
            location: prompt("Add meg az új hely nevét:"),
            price: prompt("Add meg az új árat:"),
            minimum_nights: prompt("Add meg az új minimum éjszakák számát:")
        });

        fetch("https://nodejs.sulla.hu/data/" + id, {
            method: "PUT",
            body: data,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function () {
            location.reload();
        });
    }
}
