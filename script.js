fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
    console.log(data);
    data.forEach(ele => {
        let capital = ele.capital;
        let region = ele.region;
        let name = ele.name.common;
        let flag = ele.flags.png;
        let code = ele.fifa;  
        if(code == undefined)
            code = ele.cca2;        

        let content = document.getElementById("content");

        let column1 = document.createElement("div");
        column1.setAttribute("class","col-lg-4 col-sm-12");

        let card = document.createElement("div");
        card.setAttribute('class', 'card text-center mb-3');

        let cardHead = document.createElement("div");
        cardHead.setAttribute('class', 'card-header bg-black');

        let cardBody = document.createElement("div");
        cardBody.setAttribute('class', 'card-body');
        cardBody.setAttribute('style', 'background-image: linear-gradient(to right, rgb(165, 165, 67),grey);')

        cardHead.innerHTML = `<h2 class='text-light'>${name}</h2>`;

        cardBody.innerHTML = `<img src="${flag}" class="card-img mb-2" alt="">
        <p class="card-text text-light">Capital: ${capital}</p>
        <p class="card-text text-light">Region: ${region}</p>
        <p class="card-text text-light">Country Code: ${code}</p>
        <a href="" onclick="weather(event)" class="btn btn-outline-light">Click for Weather</a>`;

        card.append(cardHead,cardBody);
        column1.append(card);
        content.append(column1);

    });
})
.catch(err => console.log(err));



