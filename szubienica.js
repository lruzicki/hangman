var haslo = "Front end developer";
haslo= haslo.toUpperCase();

var dlugosc = haslo.length;
var ile_skuch = 0;

haslo1= "";
for(i=0;i<dlugosc;i++)
{
    if(haslo.charAt(i)==" ")
        haslo1+=" ";
    else
        haslo1+="-";

}



function wypisz_haslo()
{
    document.getElementById("plansza").innerHTML = haslo1;
}

function wypisz()
{
    document.getElementById("plansza").innerHTML="dddddddddddddddddddddddddddddddddddddddddddd";
}



const litery = ["A","Ą","B","C","Ć","D","E","Ę","F","G","H","I","J","K","L","Ł","M","N","Ń","O","P","Q","R","S","Ś","T","U","Ó","V","W","X","Y","Z","Ź","Ż"];

function start()
{
    var tresc_diva="";




    for(i=0;i<=34;i++)
    {
        if(i%7==0)
            tresc_diva= tresc_diva + '<div class="litera" style="clear:both;" onclick="sprawdz('+i+')"'+'id="lit'+i+'">'+litery[i]+'</div>';
        else
            tresc_diva= tresc_diva + '<div class="litera" onclick="sprawdz('+i+')"'+'id="lit'+i+'">'+litery[i]+'</div>';

    }

    document.getElementById("alfabet").innerHTML=tresc_diva;


    wypisz_haslo();
}

String.prototype.ustawZnak = function(miejsce, znak)
{
    if(miejsce > this.length-1)
        return this.toString();
    else
        return this.substr(0,miejsce)+znak+this.substr(miejsce+1);
    
}

function sprawdz(nr)
{

    var trafiona = false;

    for(i=0;i < dlugosc;i++)
    {
        if(haslo.charAt(i)==litery[nr])
        {
            haslo1 = haslo1.ustawZnak(i,litery[nr])
            trafiona = true;
        }
    }

    if(trafiona==true)
    {
        var element = "lit" + nr;
        document.getElementById(element).style.background="#003300";
        document.getElementById(element).style.color="#00c000";
        document.getElementById(element).style.border="3px solid #00c000";
        document.getElementById(element).style.cursor="default";
        
        wypisz_haslo();
    }
    else
    {
        var element = "lit" + nr;
        document.getElementById(element).style.background="#330000";
        document.getElementById(element).style.color="#c00000";
        document.getElementById(element).style.border="3px solid #c00000";
        document.getElementById(element).style.cursor="default";
        document.getElementById(element).setAttribute("onclick",";")

        //skucha
        ile_skuch++;
        var obraz = "img/s"+ile_skuch+".jpg";
        document.getElementById("szubienica").innerHTML='<img src="'+obraz+'"alt=""/>';
    }

    //wygrana
    if (haslo == haslo1)
    {
        document.getElementById("alfabet").innerHTML = "Tak jest! Podano prawidłowe hasło: "+haslo+'</br></br><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
    }

    //przegrana
    if(ile_skuch>=9)
    {
        document.getElementById("alfabet").innerHTML = "Przegrana. Prawidłowe hasło: "+haslo+'</br></br><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
    }


}

window.onload=start;
