const randomUser = (async () => {
    const url = 'https://randomuser.me/api/?results=5000'

    try {
        const response = await fetch(url);
        const { results } = await response.json();

        results.forEach((e, i) => {
            let img = document.createElement('img');
            img.setAttribute('src', `${e.picture.thumbnail}`);
            document.getElementById('user-data').appendChild(img);
            let p1 = document.createElement('p');
            document.getElementById('user-data').appendChild(p1);
            p1.innerHTML = `${e.name.first} ${e.name.last}`;
            let p2 = document.createElement('p');
            document.getElementById('user-data').appendChild(p2);
            p2.innerHTML = `${e.email}`;
            let p3 = document.createElement('p');
            document.getElementById('user-data').appendChild(p3);
            p3.innerHTML = `${e.phone}`;
        });
    } catch(e) {
        ('no se puede obtener la informacion')
        console.log(`Error: ${e}`);
    }
})();