let time = function(){
    let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
    let sec = time.getSeconds();
    
    let tab = [];
	tab[0] = (hour - hour%10)/10;
	tab[1] = (hour%10);
			
	tab[2] = (min - min%10)/10;
	tab[3] = (min%10);
			
	tab[4] = (sec-sec%10)/10;
    tab[5] = (sec%10);
    
    document.getElementById("hours").innerHTML = hour;
	document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;

    if(hour<10){document.getElementById("hours").style.marginLeft = 55 + "px";}else{document.getElementById("hours").style.removeProperty('margin');}
	if(min<10){document.getElementById("minutes").style.marginLeft = 55 + "px";}else{document.getElementById("minutes").style.removeProperty('margin');}
	if(sec<10){document.getElementById("seconds").style.marginLeft = 55 + "px";}else{document.getElementById("seconds").style.removeProperty('margin');}
    
    Objekt = function(i,kolumna){
        this.i = i;
        this.kolumna = kolumna;
    }
    function dec2bin (dec){
		return (dec).toString(2);
    }
    Objekt.prototype.zyj = function(){
        let x = dec2bin(tab[this.i]);
        let y = 1;
        for(let j=this.kolumna.length-1;j>=0;j--){
            if(x[x.length-y]!= "1"){
                this.kolumna[j].style.backgroundColor = "gray";
                this.kolumna[j].style.opacity = 0.2;
                y++;
             }else{
                this.kolumna[j].style.backgroundColor = "cyan";
                this.kolumna[j].style.opacity = 1;
                y++;
            }
        }
    }
    
    for(let i = 0;i < 6; i++){
        let zegar = new Objekt(i,document.getElementsByClassName("h"+i))
        zegar.zyj();
    }
}
window.setInterval(time, 1000);
time();