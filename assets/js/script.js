class DOM {
    header = document.querySelector(".header");
    navBtn = document.querySelector(".navigation__burger");
    hexNav = document.querySelectorAll(".hex__nav__item");
    hexPic = document.querySelector("#hexpic");
    slideTextContainer = document.querySelector('.hex__slider__layer');
    mobileNav = document.querySelector('.mobile-navigation');
    mobileNavItems = document.querySelectorAll('.navItem__item');
    categorySelectItems = document.querySelectorAll('.portfolio__category .select')
    hexPics = [
        {
            url: "#",
            title: "창업 지원 사업",
            path: './assets/images/office0.jfif',
            description: "창업 지원을 위한 교육 및 멘토링, 액셀러레이팅,크라우드펀딩, 마케팅 지원, 직/간접투자 등",
        },
        {
            url: "#",
            title: "마케팅 사업",
            path: './assets/images/office1.jfif',
            description: "실질적인 성과를 위한 퍼포먼스 마케팅, 콘텐츠 제작, 뉴미디어 마케팅, 서포터즈, 공모전 국내외 셀링 등",
        },
        {
            url: "#",
            title: "MICE 사업",
            path: './assets/images/office3.jfif',
            description: "고객 맞춤형 포럼, 세미나, 전시, 축제, 온라인 행사, 설명회 및 상담회 등",
        },
        {
            url: "#",
            title: "영상콘텐츠 사업",
            path: './assets/images/office2.jfif',
            description: "바이럴 및 광고 영상, 예능 콘텐츠, 인플루언서 콜라보, 라이브커머스, 비대면 송출 등",
        }
    ];
    constructor() {
        this.listenEvents();
    }

    changeHeader() {
        if (pageYOffset > 300) {
            this.header.classList.add("header--bg");
        } else {
            this.header.classList.remove("header--bg");
        }
    }

    openNavigation() {
        this.navBtn.children[0].classList.toggle("active");
        this.mobileNav.classList.toggle('mobile-navigation--open');
    }

    toggleHexSlider() {
        this.hexNav.forEach((el) => {
            el.classList.remove("hex__nav__item--active");
        });
    }

    mobileNavToggle() {
        this.mobileNavItems.forEach(el => {
            el.classList.remove('active');
            el.children[1].classList.remove('sublist--active');
        })
    }

    categoryActiveToggler(){
        this.categorySelectItems?.forEach((el) => {
            el.classList.remove('select--active')
        })
    }

    listenEvents() {
        this.navBtn.addEventListener("click", this.openNavigation.bind(this));
        document.addEventListener("scroll", this.changeHeader.bind(this));
        this.hexNav?.forEach((el, index) => {
            el.style.backgroundImage = `url(${this.hexPics[index].path})`;
            el.addEventListener("click", () => {
                const {url , path , title , description} = this.hexPics[index];
                this.toggleHexSlider();
                el.classList.add("hex__nav__item--active");
                this.hexPic.src = path;
                this.slideTextContainer.innerHTML = `
                    <div class="hex__slider__caption">
                        <h2>
                            <a href=${url}>${title}</a>
                        </h2>
                        <p>${description}</p>
                    </div>
                `
            });
        });

        this.mobileNavItems.forEach((el , index) => {
            el.addEventListener('click' , () => {
                this.mobileNavToggle();
                el.classList.add('active');
                el.children[1].classList.add('sublist--active')
            })
        });

        this.categorySelectItems.forEach((el , index) => {
            el.addEventListener('click' , () => {
                this.categoryActiveToggler();
                el.classList.add('select--active');
            })
        })
    }
}

const app = new DOM();
