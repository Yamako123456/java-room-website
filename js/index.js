const thumbnails = document.querySelectorAll('.video-thumbnail');
let imageId;

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click',
        function handleDblClick(event) {
            console.log('thumbnail clicked', event);
            imageId = thumbnail.id;
            console.log(imageId + ' was clicked');
    })
})

const app = {
    baseURL: "https://d3h1vu2agxyise.cloudfront.net/", //CloudFront domain name
    init: () => { // At the bottom, we're calling app.init()
   
    },
    load: () => {
        //The page had finished loading the html
        // app.showLoading(); 

    },
    showLoading: () => { //show loading... animation during loading time
        let ul = document.querySelector('.list'); //put one list item in it.
        let li = document.querySelector('li');
        li.textContent = 'Loading...';
        li.className = 'loading-list'; //css class name that animate it
        ul.appendChild(li);
    },

}

// app.init(); //Calling init() to get the whole thing started