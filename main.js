let Movies =[]
let search = []
let row =document.getElementById('row')
let Search = document.getElementById('search')

// ================ loading ============= 
$(document).ready(function(){
    $('#loading').fadeOut(700)
}

)
// ============ navbar =========

let OuterNav = $('.side-body').outerWidth() 
close()
function close(){
    $('.nav').animate({left:-OuterNav},500)
    $('.close-open').removeClass('fa-x')
    $('.close-open').addClass('fa-list')
    $('.side-body li').animate({'top':250},600)
}
function open(){
    $('.nav').animate({left:0},500)
    $('.close-open').addClass('fa-x')
    $('.close-open').removeClass('fa-list')
    for (let i =0 ; i <6 ; i++){
        $('.side-body li').eq(i).animate({'top':0},(i+5)*100)
     }
}

$('.close-open').click(function(){
if($('.nav').css('left') == "0px"){
    close()
}
else{
   open()
}
 })
// ============= Now playing ================= 
async function GetApi(){
    let Url = await fetch ('https://api.themoviedb.org/3/movie/now_playing?api_key=13f7ea45a2694c6c5d08cc6a61a8bc30')
   let data = await Url.json()
   Movies = data.results
   $('html, body').animate({ scrollTop: 0 },1000);
   Dispaly()
}
GetApi()

function Dispaly(){
   let box='';
    for (let i =0 ; i < Movies.length ; i++)
    {
        box+= `
        <div class="col-md-4 p-4 ">
        <div class=" main-item div overflow-hidden rounded-3 position-relative ">
                <img src="https://image.tmdb.org/t/p/w500${Movies[i].poster_path}" alt="" >
        <div class="layout top-0 start-0 position-absolute w-100 h-100  flex-column text-white pt-3 ">
      <h2 class="tittle position-relative fw-bolder pt-2 opacity text-center">${Movies[i].title}</h2>
          <p class="p-2 fw-lighter">${Movies[i].overview}</p>
             <span class="p-2 fw-lighter">release date : ${Movies[i].release_date}</span>
             <div class="">
             <span class="max border border-success border-2 m-2 fw-lighter rounded-circle p-2">${(Movies[i].vote_average)}</span></div>
</div>
</div>
</div> 
        `
    }
    row.innerHTML = box
}

// ======================= populer ============ 
async function GetPop(){
    let Url = await fetch ('https://api.themoviedb.org/3/movie/popular?api_key=13f7ea45a2694c6c5d08cc6a61a8bc30')
   let data = await Url.json()
   Movies = data.results
   $('html, body').animate({ scrollTop: 0 },1000);
   DispalyPop()
}

function DispalyPop(){
   let box='';
    for (let i =0 ; i < Movies.length ; i++)
    {
        box+= `
        <div class="col-md-4 p-4 ">
        <div class=" main-item div overflow-hidden rounded-3 position-relative ">
                <img src="https://image.tmdb.org/t/p/w500${Movies[i].poster_path}" alt="" >
        <div class="layout top-0 start-0 position-absolute w-100 h-100  flex-column text-white pt-3 ">
      <h2 class="tittle position-relative fw-bolder pt-2 opacity text-center">${Movies[i].title}</h2>
          <p class="p-2 fw-lighter">${Movies[i].overview}</p>
             <span class="p-2 fw-lighter">release date : ${Movies[i].release_date}</span>
             <div class="">
             <span class="max border border-success border-2 m-2 fw-lighter rounded-circle p-2">${(Movies[i].vote_average)}</span></div>
</div>
</div>
</div> 
        `
    }
    row.innerHTML = box
}
 
// ============== top rated ==========

async function Getreated(){
    let Url = await fetch ('https://api.themoviedb.org/3/movie/top_rated?api_key=13f7ea45a2694c6c5d08cc6a61a8bc30')
   let data = await Url.json()
   Movies = data.results
   $('html, body').animate({ scrollTop: 0 },1000);
   Dispalyreated()
}

function Dispalyreated(){
   let box='';
    for (let i =0 ; i < Movies.length ; i++)
    {
        box+= `
        <div class="col-md-4 p-4 ">
        <div class=" main-item div overflow-hidden rounded-3 position-relative ">
                <img src="https://image.tmdb.org/t/p/w500${Movies[i].poster_path}" alt="" >
        <div class="layout top-0 start-0 position-absolute w-100 h-100  flex-column text-white pt-3 ">
      <h2 class="tittle position-relative fw-bolder pt-2 opacity text-center">${Movies[i].title}</h2>
          <p class="p-2 fw-lighter">${Movies[i].overview}</p>
             <span class="p-2 fw-lighter">release date : ${Movies[i].release_date}</span>
             <div class="">
             <span class="max border border-success border-2 m-2 fw-lighter rounded-circle p-2">${(Movies[i].vote_average)}</span></div>
</div>
</div>
</div> 
        `
    }
    row.innerHTML = box
}

// =================== trending ===========
async function GetTrend(){
    let Url = await fetch ('https://api.themoviedb.org/3/trending/movie/day?api_key=13f7ea45a2694c6c5d08cc6a61a8bc30')
   let data = await Url.json()
   Movies = data.results
   $('html, body').animate({ scrollTop: 0 },1000);
   Dispalyreated()
}

function DispalyTrend(){
   let box='';
    for (let i =0 ; i < Movies.length ; i++)
    {
        box+= `
        <div class="col-md-4 p-4 ">
        <div class=" main-item div overflow-hidden rounded-3 position-relative ">
                <img src="https://image.tmdb.org/t/p/w500${Movies[i].poster_path}" alt="" >
        <div class="layout top-0 start-0 position-absolute w-100 h-100  flex-column text-white pt-3 ">
      <h2 class="tittle position-relative fw-bolder pt-2 opacity text-center">${Movies[i].title}</h2>
          <p class="p-2 fw-lighter">${Movies[i].overview}</p>
             <span class="p-2 fw-lighter">release date : ${Movies[i].release_date}</span>
             <div class="">
             <span class="max border border-success border-2 m-2 fw-lighter rounded-circle p-2">${(Movies[i].vote_average)}</span></div>
</div>
</div>
</div> 
        `
    }
    row.innerHTML = box
}


// ================ up coming =======================
async function GetUpComing(){
    let Url = await fetch ('https://api.themoviedb.org/3/movie/upcoming?api_key=13f7ea45a2694c6c5d08cc6a61a8bc30')
   let data = await Url.json()
   Movies = data.results
   $('html, body').animate({ scrollTop: 0 },1000);
   
   DispalyUpComing()
}


function DispalyUpComing(){
   let box='';
    for (let i =0 ; i < Movies.length ; i++)
    {
        box+= `
        <div class="col-md-4 p-4 ">
        <div class=" main-item div overflow-hidden rounded-3 position-relative ">
                <img src="https://image.tmdb.org/t/p/w500${Movies[i].poster_path}" alt="" >
        <div class="layout top-0 start-0 position-absolute w-100 h-100  flex-column text-white pt-3 ">
      <h2 class="tittle position-relative fw-bolder pt-2 opacity text-center">${Movies[i].title}</h2>
          <p class="p-2 fw-lighter">${Movies[i].overview}</p>
             <span class="p-2 fw-lighter">release date : ${Movies[i].release_date}</span>
             <div class="">
             <span class="max border border-success border-2 m-2 fw-lighter rounded-circle p-2">${(Movies[i].vote_average)}</span></div>
</div>
</div>
</div> 
        `
    }
    row.innerHTML = box
}

// ==================== up =================


$(".bottom-up").click(function(){
    $('html, body').animate({ scrollTop: 0 },800);
} )



$(window).scroll(function(){
    $('#Up').css('display','flex')
})


// ============ search ============


function SearchByName(){
    let box='';
     for (let i =0 ; i < search.length ; i++)
     {
         box+= `
         <div class="col-md-4 p-4 ">
         <div class=" main-item div overflow-hidden rounded-3 position-relative ">
                 <img src="https://image.tmdb.org/t/p/w500${search[i].poster_path}" alt="" >
         <div class="layout top-0 start-0 position-absolute w-100 h-100  flex-column text-white pt-3 ">
       <h2 class="tittle position-relative fw-bolder pt-2 opacity text-center">${search[i].title}</h2>
           <p class="p-2 fw-lighter">${search[i].overview}</p>
              <span class="p-2 fw-lighter">release date : ${search[i].release_date}</span>
 </div>
 </div>
 </div> 
         `
     }
     row.innerHTML = box
 }
 
 async function SearchFun(term){
    let Url = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=13f7ea45a2694c6c5d08cc6a61a8bc30&include_adult=false&query=${term}&language=en-US&page=1`)
   let data = await Url.json()
   search = data.results
   SearchByName(data.results) 
 }
 SearchFun()
 GetApi()
 