
//labellara sadece sayı girilmesine izin verilen kod bloğu
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

//hesaplanacak iki değeri belirtmeyi/tanımlamayı amaçladım.
function hesaplamaDegerleri(){
    var birinciSayi = Number(document.getElementById('sayi1').value);
    var ikinciSayi = Number(document.getElementById('sayi2').value);
    return {
        birinciSayi,ikinciSayi
    }
}

function topla() {
        var hesaplamadanGelenSayilar=hesaplamaDegerleri();
        birinciSayi= isNaN(hesaplamadanGelenSayilar.birinciSayi)?0:hesaplamadanGelenSayilar.birinciSayi;
        // iki farklı if yapısını göstermek için kullandım.
        if(isNaN(hesaplamadanGelenSayilar.ikinciSayi)){
            hesaplamadanGelenSayilar.ikinciSayi=0;
        }
        var sonuc = hesaplamadanGelenSayilar.birinciSayi+hesaplamadanGelenSayilar.ikinciSayi;
        Progress();
        document.getElementById('sonucuEkranaYazdir').innerHTML="En Son İşlem"+ ":" +hesaplamadanGelenSayilar.birinciSayi
        + " " + "+" + hesaplamadanGelenSayilar.ikinciSayi + "="+ " " +sonuc;
        temizle();
}

function cikar(){
    var hesaplamadanGelenSayilar=hesaplamaDegerleri();
    birinciSayi= isNaN(hesaplamadanGelenSayilar.birinciSayi)?0:hesaplamadanGelenSayilar.birinciSayi;
// iki farklı if yapısını göstermek için kullandım.
    if(isNaN(hesaplamadanGelenSayilar.ikinciSayi)){
        hesaplamadanGelenSayilar.ikinciSayi=0;
    }
    var sonuc = hesaplamadanGelenSayilar.birinciSayi - hesaplamadanGelenSayilar.ikinciSayi;
    Progress();
    document.getElementById('sonucuEkranaYazdir').innerHTML= "En Son İşlem" + ":" + hesaplamadanGelenSayilar.birinciSayi+
    " "+ "-" + hesaplamadanGelenSayilar.ikinciSayi + "=" + " " + sonuc;
    temizle();
}

function carp(){
    var hesaplamadanGelenSayilar = hesaplamaDegerleri();
    // iki farklı if yapısını göstermek için kullandım.
    birinciSayi = isNaN(hesaplamadanGelenSayilar.birinciSayi)?0:hesaplamadanGelenSayilar.ikinciSayi;
    if(isNaN(hesaplamadanGelenSayilar.ikinciSayi)){
        hesaplamadanGelenSayilar.ikinciSayi=0;
    }

    var sonuc= hesaplamadanGelenSayilar.birinciSayi * hesaplamadanGelenSayilar.ikinciSayi;
    Progress();
    document.getElementById('sonucuEkranaYazdir').innerHTML = "En son İşlem" + ":" + hesaplamadanGelenSayilar.birinciSayi+
    " " + "*" + hesaplamadanGelenSayilar.ikinciSayi+ "="+" "+ sonuc;    
    temizle();
}

function bol(){
    var hesaplamadanGelenSayilar = hesaplamaDegerleri();
    // iki farklı if yapısını göstermek için kullandım.
    birinciSayi = isNaN(hesaplamadanGelenSayilar.birinciSayi)?0:hesaplamadanGelenSayilar.ikinciSayi;

    if(isNaN(hesaplamadanGelenSayilar.ikinciSayi)){
        hesaplamadanGelenSayilar.ikinciSayi=0;
    }

    var sonuc = hesaplamadanGelenSayilar.birinciSayi / hesaplamadanGelenSayilar.ikinciSayi;
    Progress();
    document.getElementById('sonucuEkranaYazdir').innerHTML = "En Son İşlem" + ":" + hesaplamadanGelenSayilar.birinciSayi+
    " " + "/" + hesaplamadanGelenSayilar.ikinciSayi+ "="+ " " + sonuc;
    temizle();
}

var progressDegeri=0;
var progressCubugu = document.querySelector("#progressBar");
function Progress(){
if(progressDegeri<100){
    progressDegeri = progressDegeri+20;
    progressCubugu.style.width = progressDegeri + "%";
    progressCubugu.innerText = progressDegeri + "%";
}
setTimeout("progress()",100);
}

function temizle(){
    document.getElementById('sayi1').value=('');
    document.getElementById('sayi2').value=('');
}