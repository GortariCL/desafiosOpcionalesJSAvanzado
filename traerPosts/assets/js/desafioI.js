const getPosts = (async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    try{
        const response = await fetch(url);
        const posts = await response.json();

        document.getElementById('button').addEventListener('click', () => {
            let ul = document.createElement('ul');
            document.getElementById('post-data').appendChild(ul);
            let postTitleBody = "";
        posts.forEach(async (e, indice) => {
            let li = document.createElement('li');
            let span = document.createElement('span');
            li.style.fontWeight = "800";
            span.style.fontWeight = "300";
            li.style.padding = ".5rem"
            ul.appendChild(li);
            li.innerHTML = `${e.title}`;
            li.appendChild(span);
            span.innerHTML = `<br>${e.body}`;
        });
        console.log()
        ul.append(postTitleBody);
    });
    }catch(err){
        console.log(`Error: ${err}`);
    }
})();    