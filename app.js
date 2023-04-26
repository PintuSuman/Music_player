const music=new Audio('audio/1.mp3');
/*music.play();*/


const songs=[
    {
        id:1,
        songName:'ON MY WAY <br> <div class="subtitle">Alan Walker</div>',
        poster:"img/1.jpg",
    },
    {
        id:2,
        songName:'ARIJIT SINGH <br> <div class="subtitle">Arijit singh</div>',
        poster:"img/2.jpg",
    },
     {
        id:3,
        songName:'ON MY WAY <br> <div class="subtitle">Alan Walker</div>',
        poster:"img/3.jpg",
    }
    ,
     {
        id:4,
        songName:'ON MY WAY <br> <div class="subtitle">Alan Walker</div>',
        poster:"img/4.jpg",
    }
    ,
     {
        id:5,
        songName:'LONG VANDE <br> <div class="subtitle">Alan Walker</div>',
        poster:"img/5.jpg",
    }
    ,
     {
        id:6,
        songName:'VAKT LOTEN <br> <div class="subtitle">Alan Walker</div>',
        poster:"img/6.jpg",
    }
    ,
     {
        id:7,
        songName:'ON MY WAY <br> <div class="subtitle">Alan Walker</div>',
        poster:"img/7.jpg",
    }
    ,
     {
        id:8,
        songName:'ON MY WAY <br> <div class="subtitle">Alan Walker</div>',
        poster:"img/8.jpg",
    }
    ,
     {
        id:9,
        songName:'ON MY WAY <br> <div class="subtitle">Alan Walker</div>',
        poster:"img/9.jpg",
    }
    ,
     {
        id:10,
        songName:'ON MY WAY <br> <div class="subtitle">Alan Walker</div>',
        poster:"img/10.jpg",
    }
    ,
     {
        id:11,
        songName:'ON MY WAY <br> <div class="subtitle">Alan Walker</div>',
        poster:"img/11.jpg",
    }
    ,
     {
        id:12,
        songName:'ON MY WAY <br> <div class="subtitle">Alan Walker</div>',
        poster:"img/12.jpg",
    }
    ,
     {
        id:13,
        songName:'ON MY WAY <br> <div class="subtitle">Alan Walker</div>',
        poster:"img/13.jpg",
    }
    ,
     {
        id:14,
        songName:'ON MY WAY <br> <div class="subtitle">Alan Walker</div>',
        poster:"img/14.jpg",
    }
    ,
     {
        id:15,
        songName:'ON MY WAY <br> <div class="subtitle">Alan Walker</div>',
        poster:"img/15.jpg",
    }
    ,
     {
        id:16,
        songName:'ON MY WAY <br> <div class="subtitle">Alan Walker</div>',
        poster:"img/16.jpg",
    }
    ,
     {
        id:17,
        songName:'ON MY WAY <br> <div class="subtitle">Alan Walker</div>',
        poster:"img/17.jpg",
    }
    ,
     {
        id:18,
        songName:'PASOORI <br> <div class="subtitle">Ali Sethi and Shae Gill </div>',
        poster:"img/18.jpg",
    }
    ,
     {
        id:19,
        songName:'ON MY WAY <br> <div class="subtitle">Alan Walker</div>',
        poster:"img/19.jpg",
    }
    ,
     {
        id:20,
        songName:'VANDE MATRAM <br> <div class="subtitle"> Bankim chand chaterji </div>',
        poster:"img/20.jpg",
    }
];



Array.from(document.getElementsByClassName('songitem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
});


let masterplay=document.getElementById('masterplay');
masterplay.addEventListener('click',()=>{
    if(music.paused || music.currentTime<=0){
        music.play();
        wave.classList.add('active1');
        
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
    }
    else{
        music.pause();
        wave.classList.remove('active1');
        masterplay.classList.remove('bi-pause-fill');
        masterplay.classList.add('bi-play-fill');
       
    }
});

const makeallbackground=()=>{
    Array.from(document.getElementsByClassName('songitem')).forEach((el)=>{
       el.style.background='rgb(105,105,105,.0)';
    });
}

const makeplay=()=>{
    Array.from(document.getElementsByClassName('playlistplay')).forEach((el)=>{
       el.classList.add('bi-play-circle-fill');
       el.classList.remove('bi-pause-circle-fill');
    });
}
let index=0;
let title=document.getElementById('title');
let poster_master_play=document.getElementById('poster_master_play');
let download_music=document.getElementById('download_music');
Array.from(document.getElementsByClassName('playlistplay')).forEach((e)=>{

    e.addEventListener('click',(el)=>{
       index=el.target.id;
       music.src=` audio/${index}.mp3`;
       poster_master_play.src=`img/${index}.jpg`;
       music.play();
       masterplay.classList.remove('bi-play-fill');
       masterplay.classList.add('bi-pause-fill');
      
       wave.classList.add('active1');
       let songtitle=songs.filter((els)=>{
            return els.id==index;
       });
       download_music.href=`audio/${index}.mp3`;
       songtitle.forEach(elss=>{
        let {songName,poster}=elss;
         title.innerHTML=songName;
         poster_master_play.innerHTML=poster;
         download_music.setAttribute('download',songName);
   
       })
       makeallbackground();
       Array.from(document.getElementsByClassName('songitem'))[index-1].style.background='rgb(105,105,105,.1)';
       makeplay();
      //Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.add('bi-play-fill');
      el.target.classList.add('bi-pause-circle-fill');
      el.target.classList.remove('bi-play-circle-fill');
    });
});



let currentstart=document.getElementById('currentstart');
let currentend=document.getElementById('currentend');
let seek=document.getElementById('seek');
let bar2=document.getElementById('bar2');
let dot=document.getElementById('dot');

music.addEventListener('timeupdate',()=>{
    let music_currenttime=music.currentTime;
    let music_dur=music.duration;
    let minut=Math.floor(music_dur/60);
    let sec=Math.floor(music_dur%60);

if(sec<10){
    sec=`0${sec}`;
}
    currentend.innerText=`${minut}:${sec}`;

   let min=Math.floor(music_currenttime/60);
   let se=Math.floor(music.currentTime%60);
   if(se<10){
    se=`0${se}`;
   } 
   currentstart.innerText=`${min}:${se}`;
   let progressbar=parseInt((music_currenttime/music_dur)*100);
    seek.value=progressbar;
   bar2.style.width=`${progressbar}%`;
dot.style.left=`${progressbar}%`
});

seek.addEventListener('change',()=>{
    music.currentTime=seek.value*music.duration/100;
});

let vol_icon=document.getElementById('vol_icon');
let vol=document.getElementById('vol');
let vol_bar=document.getElementById('vol_bar');

let vol_dot=document.getElementById('vol_dot');

vol.addEventListener('click',()=>{
    if(vol.value==0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value>0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value>50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_v=vol.value;
    vol_bar.style.width=`${vol_v}%`;
    vol_dot.style.left=`${vol_v}%`;
    music.volume=vol_v/100;
    
});

/*vol_icon.addEventListener('click',()=>{
    if(vol.value>0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
        music.volume=0;
    }
   else if(vol.value==0){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
        music.volume=100;
    }
});
*/

let back=document.getElementById('back');
let next=document.getElementById('next');

back.addEventListener('click',()=>{
   index=index-1;
   if(index<1){
    index=Array.from(document.getElementsByClassName('songitem')).length;
   }
   music.src=` audio/${index}.mp3`;
   poster_master_play.src=`img/${index}.jpg`;
   music.play();
   masterplay.classList.remove('bi-play-fill');
   masterplay.classList.add('bi-pause-fill');
  
   wave.classList.add('active1');
   let songtitle=songs.filter((els)=>{
        return els.id==index;
   });
   songtitle.forEach(elss=>{
    let {songName,poster}=elss;
     title.innerHTML=songName;
     poster_master_play.innerHTML=poster;

   })
   makeallbackground();
   Array.from(document.getElementsByClassName('songitem'))[index-1].style.background='rgb(105,105,105,.1)';
   makeplay();
  //Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.add('bi-play-fill');
  el.target.classList.add('bi-pause-circle-fill');
  el.target.classList.remove('bi-play-circle-fill');
});




next.addEventListener('click',()=>{
    index++;
    if(index>Array.from(document.getElementsByClassName('songitem')).length){
     index=1;
    }
    music.src=` audio/${index}.mp3`;
    poster_master_play.src=`img/${index}.jpg`;
    music.play();
    masterplay.classList.remove('bi-play-fill');
    masterplay.classList.add('bi-pause-fill');
   
    wave.classList.add('active1');
    let songtitle=songs.filter((els)=>{
         return els.id==index;
    });
    songtitle.forEach(elss=>{
     let {songName,poster}=elss;
      title.innerHTML=songName;
      poster_master_play.innerHTML=poster;
 
    })
    makeallbackground();
    Array.from(document.getElementsByClassName('songitem'))[index-1].style.background='rgb(105,105,105,.1)';
    makeplay();
   //Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.add('bi-play-fill');
   el.target.classList.add('bi-pause-circle-fill');
   el.target.classList.remove('bi-play-circle-fill');
 });
 
 




















let pop_song_left=document.getElementById('pop_song_left');
let pop_song_right=document.getElementById('pop_song_right');
let pop_song=document.getElementsByClassName('pop_song')[0];



pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft+=300;
});
pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft-=300;
});
let pop_art_left=document.getElementById('pop_art_left');
let pop_art_right=document.getElementById('pop_art_right');
let item=document.getElementsByClassName('item')[0];



pop_art_right.addEventListener('click',()=>{
   item.scrollLeft+=330;
});
pop_art_left.addEventListener('click',()=>{
    item.scrollLeft-=330;
});


let shuffle=document.getElementById('shuffle');
shuffle.addEventListener('click',()=>{
    let a=shuffle.innerHTML;
   
    switch (a) {
        case 'next':
            shuffle.classList.remove('bi-music-note-beamed')
            shuffle.classList.remove('bi-shuffle');
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.innerHTML='repeat';
            
            break;
      case 'repeat':
        shuffle.classList.remove('bi-music-note-beamed')
        shuffle.classList.remove('bi-arrow-repeat');
        shuffle.classList.add('bi-shuffle');
        shuffle.innerHTML='random';
          break;


      case 'random':
        shuffle.classList.remove('bi-arrow-repeat')
        shuffle.classList.remove('bi-shuffle');
        shuffle.classList.add('bi-music-note-beamed');
        shuffle.innerHTML='next';
      break;
        
    }

});

let next_music=()=>{
    if (index==songs.length) {
        index=1;
    } else {
        index++;
    }
    music.src=` audio/${index}.mp3`;
    poster_master_play.src=`img/${index}.jpg`;
    music.play();
    masterplay.classList.remove('bi-play-fill');
    masterplay.classList.add('bi-pause-fill');
   
    wave.classList.add('active1');
    let songtitle=songs.filter((els)=>{
         return els.id==index;
    });
    download_music.href=`audio/${index}.mp3`;
    songtitle.forEach(elss=>{
     let {songName,poster}=elss;
      title.innerHTML=songName;
      poster_master_play.innerHTML=poster;
      download_music.setAttribute('download',songName);

    })
    makeallbackground();
    Array.from(document.getElementsByClassName('songitem'))[index-1].style.background='rgb(105,105,105,.1)';
    makeplay();
   //Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.add('bi-play-fill');
   el.target.classList.add('bi-pause-circle-fill');
   el.target.classList.remove('bi-play-circle-fill');

}

let repeat_music=()=>{
    index;
    music.src=` audio/${index}.mp3`;
    poster_master_play.src=`img/${index}.jpg`;
    music.play();
    masterplay.classList.remove('bi-play-fill');
    masterplay.classList.add('bi-pause-fill');
   
    wave.classList.add('active1');
    let songtitle=songs.filter((els)=>{
         return els.id==index;
    });
    download_music.href=`audio/${index}.mp3`;
    songtitle.forEach(elss=>{
     let {songName,poster}=elss;
      title.innerHTML=songName;
      poster_master_play.innerHTML=poster;
      download_music.setAttribute('download',songName);

    })
    makeallbackground();
    Array.from(document.getElementsByClassName('songitem'))[index-1].style.background='rgb(105,105,105,.1)';
    makeplay();
   //Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.add('bi-play-fill');
   el.target.classList.add('bi-pause-circle-fill');
   el.target.classList.remove('bi-play-circle-fill');
}

let random_music=()=>{
    if(index==songs.length){
        index=1;
    }
    else{
        index=Math.floor(Math.random()*songs.length)-1;
    }
    music.src=` audio/${index}.mp3`;
    poster_master_play.src=`img/${index}.jpg`;
    music.play();
    masterplay.classList.remove('bi-play-fill');
    masterplay.classList.add('bi-pause-fill');
   
    wave.classList.add('active1');
    let songtitle=songs.filter((els)=>{
         return els.id==index;
    });
    download_music.href=`audio/${index}.mp3`;
    songtitle.forEach(elss=>{
     let {songName,poster}=elss;
      title.innerHTML=songName;
      poster_master_play.innerHTML=poster;
      download_music.setAttribute('download',songName);

    })
    makeallbackground();
    Array.from(document.getElementsByClassName('songitem'))[index-1].style.background='rgb(105,105,105,.1)';
    makeplay();
   //Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.add('bi-play-fill');
   el.target.classList.add('bi-pause-circle-fill');
   el.target.classList.remove('bi-play-circle-fill');
}

music.addEventListener('ended',()=>{
    let b=shuffle.innerHTML;
    switch (b) {
        case 'next':
            next_music();
            break;
    
       case 'repeat' :
        repeat_music();
        break;

        case 'random':
        random_music();
            break;
    }
});


let search_results=document.getElementsByClassName('search_results')[0];
songs.forEach(elements=>{
    const{id,songName,poster}=elements;
    let card=document.createElement('a');
    card.classList.add('card');
    card.href="#"+id;
    card.innerHTML=`
    <img src="${poster}" alt="">
    <div class="content">
     ${songName}
    </div>
    `;
    search_results.appendChild(card);
});

let input=document.getElementsByTagName('input')[0];
input.addEventListener('keyup',()=>{
    let input_value=input.value.toUpperCase();
    let items=search_results.getElementsByTagName('a');
    for(let index=0;index<items.length;index++){
        let as=items[index].getElementsByClassName('content')[0];
        let text_value=as.textContent|| as.innerHTML;
       if(text_value.toUpperCase().indexOf(input_value)>-1) {
            items[index].style.display='flex';
       } else {
        items[index].style.display='none';
       }
       if (input.value==0) {
        search_results.style.display='none';
       } else {
        search_results.style.display='';
       }
       items[index].addEventListener('click',()=>{
        
        index++;
        music.src=`audio/${index}.mp3`;
        poster_master_play.src=`img/${index}.jpg`;
        music.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
       
        wave.classList.add('active1');
        let songtitle=songs.filter((els)=>{
             return els.id==index;
        });
        download_music.href=`audio/${index}.mp3`;
        songtitle.forEach(elss=>{
         let {songName,poster}=elss;
          title.innerHTML=songName;
          poster_master_play.innerHTML=poster;
          download_music.setAttribute('download',songName);
    
        })
        makeallbackground();
        Array.from(document.getElementsByClassName('songitem'))[index-1].style.background='rgb(105,105,105,.1)';
        makeplay();
       //Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.add('bi-play-fill');
       el.target.classList.add('bi-pause-circle-fill');
       el.target.classList.remove('bi-play-circle-fill');
       });
    }

});