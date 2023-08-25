

const dropdownmenu = {
    mainmenu:document.getElementById('menu'),
    droppage:document.getElementById('drop'),
    dropitems:document.getElementById('dropdown'),

    play(){
        this.mainmenu.addEventListener('mouseover',this.show.bind(this));
        this.mainmenu.addEventListener('mouseleave',this.hide.bind(this));
    },

    show(){
        this.droppage.style.display = 'block';
        this.dropitems.style.display = 'block';

        
    },
    hide(){
        this.droppage.style.display = 'none';
        this.droppage.style.display = 'none';
    }

   
}
// dropdownmenu.play();


const changeeffect ={
    mone:document.getElementById('modern'),
    ttwo:document.getElementById('tech'),
    sthree:document.getElementById('sortit'),
    yfour:document.getElementById('yearsg'),

    pone:document.getElementById('technology'),
    ptwo:document.getElementById('eld'),
    pthree:document.getElementById('sit'),
    pfour:document.getElementById('yog'),

    effect(){
        this.mone.addEventListener('mouseover',this.sone.bind(this));
        this.ttwo.addEventListener('mouseover',this.stwo.bind(this));
        this.sthree.addEventListener('mouseover',this.ssthree.bind(this));
        this.yfour.addEventListener('mouseover',this.sfour.bind(this));
    },
    sone(){
        this.pone.style.display = 'block';
        this.pthree.style.display = 'none';
        this.pfour.style.display = 'none';
        this.ptwo.style.display = 'none';
        thiss.pone.style.backgroundColor = 'red';

    },
    stwo(){
        this.pone.style.display = 'none';
        this.pthree.style.display = 'none';
        this.pfour.style.display = 'none';
        this.ptwo.style.display = 'block';
    },

    ssthree(){
        this.pone.style.display = 'none';
        this.ptwo.style.display = 'none';
        this.pfour.style.display = 'none';
        this.pthree.style.display = 'block';
    },
    sfour(){
        this.pone.style.display = 'none';
        this.ptwo.style.display = 'none';
        this.pthree.style.display = 'none';
        this.pfour.style.display = 'block';
    }

}

changeeffect.effect();