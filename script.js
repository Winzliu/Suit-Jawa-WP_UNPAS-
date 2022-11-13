const pGajah = document.querySelector('.area-player .gajah')
const pOrang = document.querySelector('.area-player .orang')
const pSemut = document.querySelector('.area-player .semut')

let a=0
let b=0
let sComp = document.getElementsByTagName('h1')[1]
let sPlayer = document.getElementsByTagName('h1')[2]


const gComp = document.querySelector('.area-komputer .img-komputer')

function putar() {
  const gambar = ['gajah', 'semut', 'orang']
  let i=0
  const waktuMulai = new Date().getTime();
  setInterval(function(){
    if(new Date().getTime() -  waktuMulai > 1000){
      clearInterval;
      return;
    }
    gComp.setAttribute('src', 'img/' + gambar[i++ % 3] + '.png')
  },100)
}


pGajah.addEventListener('click', function(){
  let Hasil = document.querySelector('.info')
  let comp = Math.random();
  putar()

  setTimeout(function(){
    if(comp <= 0.34){
      gComp.setAttribute('src','img/gajah.png')
      return Hasil.innerHTML = 'SERI'
    }else if (comp>0.34 && comp<0.67){
      gComp.setAttribute('src','img/orang.png')
      let d = ++b
      sPlayer.innerHTML = d
      return Hasil.innerHTML = 'MENANG'
    }else{
      gComp.setAttribute('src','img/semut.png')
      let c = ++a
      sComp.innerHTML = c;
      return Hasil.innerHTML = 'KALAH'
    }
  },1000)

  
})

pOrang.addEventListener('click', function(){
  let Hasil = document.querySelector('.info')
  let comp = Math.random();
  putar()

  setTimeout(function(){
    if(comp <= 0.34){
      gComp.setAttribute('src','img/gajah.png')
      let c = ++a
      sComp.innerHTML = c;
      return Hasil.innerHTML = 'KALAH'
    }else if (comp>0.34 && comp<0.67){
      gComp.setAttribute('src','img/orang.png')
      return Hasil.innerHTML = 'SERI'
    }else{
      gComp.setAttribute('src','img/semut.png')
      let d = ++b
      sPlayer.innerHTML = d
      return Hasil.innerHTML = 'MENANG'
    }
  },1000)
})

pSemut.addEventListener('click', function(){
  let Hasil = document.querySelector('.info')
  let comp = Math.random();
  putar()

  setTimeout(function(){
    if(comp <= 0.34){
      gComp.setAttribute('src','img/gajah.png')
      let d = ++b
      sPlayer.innerHTML = d
      return Hasil.innerHTML = 'MENANG'
    }else if (comp>0.34 && comp<0.67){
      gComp.setAttribute('src','img/orang.png')
      let c = ++a
      sComp.innerHTML = c;
      return Hasil.innerHTML = 'KALAH'
    }else{
      gComp.setAttribute('src','img/semut.png')
      return Hasil.innerHTML = 'SERI'
    }
  },1000)
})























