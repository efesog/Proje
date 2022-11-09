function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '10px';
    }
  }
  
  /*let username = prompt("Kullanıcı adınız")

  if (username.length>0) {
    console.log(`Hoşgeldin ${username}`) 
    document.write(`Hoşgeldin ${username}`) 

  }

let kullaniciAdi = prompt("adınızı yazın")
if(kullaniciAdi.length>0){
  document.write(`hoşgeldin ${kullaniciAdi}` )
}*/


/*let yas = prompt("yasınız")
if(yas.length>0){
  document.write(`yasın ${yas}`)
}

function sekizleBolme(sayimiz) {
  let sonucumuz = [(sayimiz/2)/2]/2
  document.write(sonucumuz)
}
let rakam = prompt("Sekiz ile bölmek istediğiniz sayıyı yazın")
document.write(sekizleBolme(rakam))
*/

const SMILE = `

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
`

let sinavim = prompt("Notunuzu girin")
let textInfo; 
let info = document.querySelector("#info")


if (sinavim >=0 && sinavim <=100){
  if (sinavim > 85){
        
        textInfo+= " Geçtin"

  
  }
}