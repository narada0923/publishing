class DOM {
    header = document.querySelector(".header");
    navBtn = document.querySelector('.navigation__burger');
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

    openNavigation(){
        this.navBtn.children[0].classList.toggle('active')
    }
    
    listenEvents(){
        this.navBtn.addEventListener('click' , this.openNavigation.bind(this));
        document.addEventListener('scroll' , this.changeHeader.bind(this));
    }
}


const app = new DOM();