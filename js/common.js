const app = {
    baseURL: "https://eldenring.fanapis.com/api/npcs", //place where to fetch data from 
    init: () => { // At the bottom, we're calling app.init()
        document.addEventListener('DOMContentLoaded', app.load); //Waiting for DOM Content to be loaded.
        console.log('HTML loaded'); //Shows that rest of page is loaded
    },
    load: () => {
        //The page had finished loading the html
        app.showLoading(); 
        app.getData();
    },
    showLoading: () => { //show loading... animation during loading time
        let ul = document.querySelector('.list'); //put one list item in it.
        let li = document.querySelector('li');
        li.textContent = 'Loading...';
        li.className = 'loading-list'; //css class name that animate it
        ul.appendChild(li);
    },
    getData: () => {
        //based on the current page
        let page = document.body.id;
        switch (page) {
            case 'npcs':
                app.getNpcs();
                //add custom event listeners for video detail page
                break;
            // case 'main-page':
            //     //Do something
            //     break;
            default:
                app.somethingElse();
        }
    },
    getNpcs: () => {
        let url = app.baseURL + 'npcs';
        let req = new Request(url, {
            method: 'GET',
            mode: 'cors'
        });
        fetch(req)
            .then(resp => resp.json())
            .then(app.showNpcs)
            .catch(app.err);
    },
    showNpcs: (npcs) => {
        //remove the loading li
        let ul = document.querySelector('.list');
        ul.innerHTML = '';
        //create a list with the npcs data
        let df = document.createDocumentFragment();
        //console.log(npcs);
        npcs.forEach(npc => {
            let li = document.createElement('li');
            li.textContent = npc.name;
            li.setAttribute('data-id', npc.id);
            df.appendChild(li);
            //             id	string	Id of the NPC
            // name	string	Name of the NPC
            // image	string	Image URL of the NPC
            // description	string	Short description of the NPC
            // location	string	Where the NPC can be found
            //quote
        });
        ul.appendChild(df);
    },
    err: (err) => {
        //remove the loading li
        let ul = document.querySelector('.list');
        ul.innerHTML = '';
        //display the error to the user
        let div = document.createElement('div');
        div.className = 'error-msg';
        div.textContent = err.message;
        document.body.appendChild(div);
        setTimeout(() => {
            let div = document.querySelector('.error-msg');
            div.parentElement.removeChild(div);
        }, 3000);
    }
}

app.init(); //Calling init() to get the whole thing started