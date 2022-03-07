class DOM {
    header = document.querySelector(".header");
    constructor(){
        this.listenEvents();
    }

    changeHeader(){
        if(pageYOffset > 300){
            this.header.classList.add('header--bg');
        } else {
            this.header.classList.remove('header--bg');
        }
    }
    
    listenEvents(){
        document.addEventListener('scroll' , this.changeHeader.bind(this));
    }
}

new DOM();