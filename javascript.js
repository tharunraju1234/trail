@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@500&family=Open+Sans:wght@500&display=swap');
 .col.col-end {
     margin-top: -10px;
 }
 .t-Login-container {
     overflow: hidden;
 }
a {
    text-decoration: none ! important;
}
.exp1{
    padding-top: 20px;
}
 .div-main-icon{
            display: flex;
            flex-direction: row;
            gap: 30px;
            justify-content: center;}
.Btn-custom {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  position: relative;
 border-radius: 7px;
  cursor: pointer;
  transition: all 0.3s;
}

.svgContainer {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  backdrop-filter: blur(0px);
  letter-spacing: 0.8px;
  border-radius: 10px;
  transition: all 0.3s;
  border: 1px solid rgba(156, 156, 156, 0.466);
}
.BG {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background: #1877f2;
  z-index: -1;
  border-radius: 10px;
  pointer-events: none;
  transition: all 0.3s;
}

.Btn-custom:hover .BG {
  transform: rotate(35deg);
  transform-origin: bottom;
}

.Btn-custom:hover .svgContainer {
  border: 1px solid rgba(230, 230, 230, 0.466);
  background-color: rgba(204, 204, 204, 0.466);
  backdrop-filter: blur(4px);
}

.svgIcon{
  font-size: px;
}

.socialSvg {
  width: 17px;
  color: white;
}

.socialSvg path {
  fill: rgb(255, 255, 255);
}

.BG-linkedin{
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background: #3c38b3;
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
  z-index: -1;
  border-radius: 9px;
  pointer-events: none;
  transition: all .3s;
}

.Btn-custom:hover .BG-linkedin {
  transform: rotate(35deg);
  transform-origin: bottom;
}

.BG-insta {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background: #f09433;
  background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
  background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
  z-index: -1;
  border-radius: 9px;
  pointer-events: none;
  transition: all .3s;
}

.Btn-custom:hover .BG-insta {
  transform: rotate(35deg);
  transform-origin: bottom;
}

.Btn-custom:hover .svgContainer {
  background-color: rgba(156, 156, 156, 0.466);
}
 .img-user-w{
     display: none;
     height: 17rem;
    width: 17rem;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
    border: 0.7rem solid var(--color-main-heading);
 }
 .div-img{
     padding-top: 100px;
     padding-left:25% ;
 }
 
 .ull {
       --col-gap: 2rem;
       --row-gap: 2rem;
       --line-w: 0.25rem;
       display: grid;
       grid-template-columns: var(--line-w) 1fr;
       grid-auto-columns: max-content;
       column-gap: var(--col-gap);
       list-style: none;
       width: min(60rem, 90%);
       margin-inline: auto;
       padding-top: 50px;
     }
     

     .ull::before {
       content: "";
       grid-column: 1;
       grid-row: 1 / span 20;
       background: var(--bg-secondary);
       border-radius: calc(var(--line-w) / 2);
     }
    .ull li:not(:last-child) {
       margin-bottom: var(--row-gap);
     }
     .ull li {
       grid-column: 2;
       --inlineP: 1.5rem;
       margin-inline: var(--inlineP);
       grid-row: span 2;
       display: grid;
       grid-template-rows: min-content min-content min-content;
     }
     
    
     .ull li .date {
       --dateH: 4rem;
       height: var(--dateH);
       margin-inline: calc(var(--inlineP) * -1);
      text-align: center;
       background-color: var(--color-main-heading);
       color: white;
       font-size: 14px;
       font-weight: 700;
       display: grid;
       place-content: center;
       position: relative;
     
       border-radius: calc(var(--dateH) / 2) 0 0 calc(var(--dateH) / 2);
     }
     
    
     .ull li .date::before {
       content: "";
       width: var(--inlineP);
       aspect-ratio: 1;
       background: var(--color-main-heading);
       background-image: linear-gradient(rgba(0, 0, 0, 0.2) 100%, transparent);
       position: absolute;
       top: 100%;
       clip-path: polygon(0 0, 100% 0, 0 100%);
       right: 0;
     }
     
    
     .ull li .date::after {
       content: "";
       position: absolute;
       width: 2rem;
       aspect-ratio: 1;
       background: var(--bgColor);
       border: 0.3rem solid var(--color-main-heading);
       border-radius: 50%;
       top: 50%;
       transform: translate(50%, -50%);
       right: calc(100% + var(--col-gap) + var(--line-w) / 2);
     }
     
     
     .ull li .title,
     .ull li .descr {
       background: #ffffff;
       position: relative;
       padding-inline: 1.5rem;
       line-height: 1.4;
     }
     .ull li .title {
       overflow: hidden;
       padding-block-start: 1.5rem;
       padding-block-end: 1rem;
       font-weight: 500;
       color: #000000;
       font-size: 16px;
     }
     .ull li .descr {
       padding-block-end: 1.5rem;
       font-weight: 300;
       color: #000000;
       font-size: 16px;
       padding-bottom: 10px;
       
     }
     
    
     .ull li .title::before,
     .ull li .descr::before {
       content: "";
       position: absolute;
       width: 90%;
       height: 0.5rem;
       background: rgba(0, 0, 0, 0.5);
       left: 50%;
       border-radius: 50%;
       filter: blur(4px);
       transform: translate(-50%, 50%);
     }
     .ull li .title::before {
       bottom: calc(100% + 0.125rem);
     }
     
     .ull li .descr::before {
       z-index: -1;
       bottom: 0.25rem;
       
     }
      .ull li {
            transition: transform 0.3s ease-in-out;
            transform-origin: center;
        }
      
     
     @media (min-width: 40rem) {
       .ull {
         grid-template-columns: 1fr var(--line-w) 1fr;
       }
       .ull::before {
         grid-column: 2;
       }
       .ull li:nth-child(odd) {
         grid-column: 1;
       }
       .ull li:nth-child(even) {
         grid-column: 3;
       }
     
       /* start second card */
       .ull li:nth-child(2) {
         grid-row: 2/4;
       }
     
       .ull li:nth-child(odd) .date::before {
         clip-path: polygon(0 0, 100% 0, 100% 100%);
         left: 0;
       }
     
       .ull li:nth-child(odd) .date::after {
         transform: translate(-50%, -50%);
         left: calc(100% + var(--col-gap) + var(--line-w) / 2);
       }
       .ull li:nth-child(odd) .date {
         border-radius: 0 calc(var(--dateH) / 2) calc(var(--dateH) / 2) 0;
       }
     }
     
     .credits {
       margin-top: 1rem;
       text-align: right;
     }
     .credits a {
       color: var(--color);
     }
     .year-of-pass{
         font-size: 12px;
        
     }


.t-Login-container{
    background-color: var(--bg-primary);
}

body.dark_theme {

--bg-primary: hsl(0, 0%, 12%);
--bg-secondary: hsl(0, 0%, 19%);
--color-primary: hsl(0, 0%, 100%);
--color-secondary: hsl(0, 0%, 62%);
--card-shadow: hsla(0, 0%, 0%, 0.4);
--input-bg: hsl(0, 0%, 16%);

--shadow-1: 10px 10px 40px var(--card-shadow);
--color-main-heading: #79C522;
--color-bg-list:#344256;
--color-exp-para:#ffffff;
--color-nav-hover:white;
--bg-color-experience: transparent;
--bg-color-experience-hover: #ffffff;

}

body.light_theme {

--bg-primary: #FBF9F8;
--bg-secondary: hsl(0, 0%, 100%);
--color-primary: hsl(0, 0%, 12%);
--color-secondary: hsl(0, 0%, 37%);
--card-shadow: hsla(0, 0%, 0%, 0.1);
--input-bg: hsl(0, 0%, 93%);

--shadow-1: 10px 10px 40px var(--card-shadow);
--color-main-heading: crimson;
--color-bg-list:#c7cbd1;
--color-exp-para:black;
--color-nav-hover:white;
--bg-color-experience: #ffffff;
--bg-color-experience-hover: #1a56ff;
}


span,
button,
ion-icon { display: block; }

input,
button,
select,
textarea {
background: none;
border: none;
font: inherit;
}

button,
select { cursor: pointer; }


body {
background: var(--bg-primary);
transition: var(--transition-1);
}

body.active { overflow: hidden; }




.theme-btn {
padding: 4px;
width: 48px;
background: var(--bg-primary);
border-radius: 100px;
transition: 0.25s ease-in-out;
border: 1px solid var(--color-secondary)
}

.header.active .theme-btn { background: var(--bg-primary); }

.theme-btn .icon {
position: relative;
left: 0;
width: 20px;
height: 20px;
border-radius: 50px;
box-shadow: inset 9px -6px var(--color-primary);
transition: 0.25s ease-in-out;
}

.theme-btn.active .icon {
left: 20px;
box-shadow: inset 20px -20px var(--color-main-heading);
}

/* before theme */
.span1{
    display: inline;
}


.pr-title{
    color: var(--color-primary);
    width:30%;
}
.pr-desc{
    color:var(--color-primary);

}
.explore {
    display: inline-block;
    width: 200px; /* Adjust the width as needed */
    height: 50px; /* Adjust the height as needed */
    background: var(--color-main-heading);
    padding: 13px; 
    text-align: center;
    border-radius: 5rem;
    color: white;
     /* padding:1.7rem 3rem; */
    /* background:#333; */
    /* color:#fff; */
    cursor: pointer;
    margin-top: 1rem;
    font-size: 17px;
  

    /* Adjust the line-height as needed */
}




.links {
    display: block;
    width: 115px;
    height: 45px;
    background: #4E9CAF;
    padding: 10px;
    text-align: center;
    border-radius: 5px;
    color: var(--color-primary);
    font-weight: bold;
    line-height: 25px;
}



/* quick links */
.card-container2 {
                     display: flex;
    justify-content: center;
    margin: 20px;
    gap: 35px;
    padding-top: 20px;
    flex-wrap: wrap;
             }
     
             /* Style for each card */
             .card2 {
                 border: 1px solid var(--color-secondary);
                 border-radius: 10px;
                 overflow: hidden;
                 width: 200px; /* Reduced width */
                 box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                 background-color: var(--bg-primary);
                 color: #79C522;
                 text-align: center;
                 }
     
             /* Style for the card content */
             .card-content2 {
                 padding: 15px; /* Reduced padding */
                
             }
     
             /* Style for the title */
             .card-title2 {
                 font-size: 20px; /* Reduced font size */
                 font-weight: bold;
                 margin-bottom: 10px; /* Reduced margin */
                 color:var(--color-main-heading);
             }
     
             /* Style for the description */
             .card-description2 {
                 font-size: 14px; /* Reduced font size */
                 color: var(--color-primary); /* Green color for the description text */
                 margin-bottom: 8px; /* Reduced margin */
             }
     
             /* Style for the "Click here to know more" link */
             .know-more-link {
                 display: block;
                 text-align: center;
                 text-decoration: none;
                 color: var(--color-main-heading); /* Green color for the link */
                 margin-top: 10px;
                 font-size: 16px;
             }
/* languages */

     .scroller {
  max-width: 800px;
  padding-top: 50px;
}

.scroller__inner {
  padding-block: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.scroller[data-animated="true"] {
  overflow: hidden;
  -webkit-mask: linear-gradient(
    90deg,
    transparent,
    white 20%,
    white 80%,
    transparent
  );
  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
}

.scroller[data-animated="true"] .scroller__inner {
  width: max-content;
  flex-wrap: nowrap;
  animation: scroll var(--_animation-duration, 40s)
    var(--_animation-direction, forwards) linear infinite;
}

.scroller[data-direction="right"] {
  --_animation-direction: reverse;
}

.scroller[data-direction="left"] {
  --_animation-direction: forwards;
}

.scroller[data-speed="fast"] {
  --_animation-duration: 20s;
}

.scroller[data-speed="slow"] {
  --_animation-duration: 60s;
}

@keyframes scroll {
  to {
    transform: translate(calc(-50% - 0.5rem));
  }
}

/* general styles */

:root {
  --clr-neutral-100: hsl(0, 0%, 100%);
  --clr-primary-100: hsl(205, 15%, 58%);
  --clr-primary-400: hsl(215, 25%, 27%);
  --clr-primary-800: hsl(217, 33%, 17%);
  --clr-primary-900: hsl(218, 33%, 9%);
}

html {
  color-scheme: dark;
}

/* body {
  display: grid;
  min-block-size: 100vh;
  place-content: center;
  font-family: system-ui;
  font-size: 1.125rem;
  background-color: var(--clr-primary-800);
} */
.lang{
  display: grid;
  /* min-block-size: 100vh; */
  place-content: center;
  font-family: system-ui;
  font-size: 1.125rem;  
}

.tag-list {
  margin: 0;
  padding-inline: 0;
  list-style: none;
}

.tag-list li {
  padding: 3rem;
  background: var(--color-bg-list);
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem -0.25rem var(--clr-primary-900);
}
li{
    font-size: 2.5rem;
    color:var(--color-main-heading);
}

/* for testing purposed to ensure the animation lined up correctly */
.test {
  background: red !important;
}
.button-link {
      display: inline-block;
      padding: 10px 20px;
      text-align: center;
      text-decoration: none;
      background-color: #79c522; /* Change the background color as needed */
      color: #ffffff; /* Change the text color as needed */
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
    }
    .links {
        display: flex;
        flex-direction: row;
        text-align: center;
        padding: 10px;
        justify-content: space-around;
        /* padding-top: 40px; */
    } /* padding-bottom: 30px; */
    
     /* Add hover effect */
    .button-link:hover {
      background-color: #79c522; /* Change the hover background color as needed */
    }
/* #R44125962004187608742_heading{
    display: none;
}

 */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600&display=swap');

:root{
    --yellow:#79c522;
}
.bx{
    font-size: 45px;
    color: var(--color-main-heading);
    padding:10px;
}
.bx-envelope{
    font-size: 28px;
}
.bx-phone{
    font-size: 28px;
}
.bx-current-location{
    font-size: 28px;
}
/* .contact{
    padding: 5rem;
    min-height: 60vh;
}
.skills{
    padding: 5rem;
    min-height: 60vh;
}
.education{
    padding: 5rem;
} */
#quick{
    padding-bottom: 100px;
    /* padding-left: 20%; */
}


*{
    font-family: 'Nunito', sans-serif;
    margin:0; padding:0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none; border:none;
    /* text-transform: capitalize; */
    /* transition: all .2s linear; */
}

*::selection{
    background:var(--color-main-heading);
    color:#333;
}

html{
    font-size: 62.5%;
    overflow-x: hidden;
}

/* html::-webkit-scrollbar{
    width:1.4rem;
} */

/* html::-webkit-scrollbar-track{
    background:#222;
} */

/* html::-webkit-scrollbar-thumb{
    background:var(--yellow);
} */

body{
    background:#111!important;
    overflow-x: hidden;
    padding-left: 35rem;
}

/* section{
    min-height: 50vh;
    padding:1rem;
} */

.btn1{
    padding:.7rem 3rem;
    background:#333;
    color:#fff;
    cursor: pointer;
    margin-top: 1rem;
    font-size: 2rem;
    border-radius: 5rem;
}

.btn1 i{
    padding:0 .5rem;
    font-size: 1.8rem;
}

.btn1:hover{
    background:var(--yellow);
}

.heading1{
    text-align: center;
    margin:0 6rem;
    font-size: 4rem;
    padding:1rem;
    border-bottom: .1rem solid var(--color-primary);
    color: var(--color-primary);
    /* padding-top: 27px; */
    margin-top: 27px;
}

.heading1 span{
    color:var(--color-main-heading);
}

header{
    position: fixed;
    top:0; left:0;
    z-index: 1000;
    height:100%;
    width:35rem;
    background:var(--bg-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    text-align: center;
    padding-top: 40px;
}

header .user1 img{
    height:17rem;
    width:17rem;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
    border:.7rem solid var(--color-main-heading);
}

header .user1 .name1{
    font-size: 25px;
    color: var(--color-primary);
    font-family: 'Noto Sans', sans-serif;
    font-family: 'Open Sans', sans-serif;

}

header .user1 .post1{
    font-size: 2rem;
    color: var(--color-primary);
}

header .navbar1{
    width:100%;
}

header .navbar1 ul{
    list-style: none;
    padding:1rem 3rem;
}


header .navbar1 ul li a{
    display: block;
    padding: 10px;
    margin:1.5rem 0;
    background: var(--bg-primary);
    color: var(--color-primary);
    font-size: 2rem;
    border-radius: 5rem;
}

header .navbar1 ul li a:hover{
    background:var(--color-main-heading);
    color:var(--color-nav-hover);
    transition-delay: all 1s easy-out;
}

#menu{
    position: fixed;
    left: 2rem;
    top:2rem;
    /* background:#333; */
    background: var(--color-main-heading);
    color:#fff;
    cursor: pointer;
    font-size: 2.5rem;
    padding:1rem 1.5rem;
    z-index: 1000;
    display: none;
}

.home{
    display: flex;
    justify-content: center;
    flex-flow: column;
    padding:0 15rem;
    text-align: center;
}

.home h3{
    font-size: 2.5rem;
    color: var(--color-primary);
      text-transform: capitalize;
}

.home h1{
    font-size:50px;
    color: var(--color-main-heading);
      text-transform: capitalize;
      font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-weight: 700;
}

.home h1 span{
    color:var(--yellow);
}

.home p{
    font-size:2rem;
    color:#eee;
    padding: 1rem 0;
}
.about{
    text-align: center;
}

.about .row1{
    
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    /* flex-wrap: wrap; */
    /* padding:1rem 0; */
    /* padding-left: 23%; */
}

.about .row1 .info123{
    /* flex:1 1 48rem; */
    padding:2rem 1rem;
    /* padding-left: 6rem; */
}

.about .row1 .info123 .about-me{
    /* font-size: 2rem;
    color:var(--yellow);
    padding:1rem 0; */
    font-weight: normal;
    font-size:2rem;
    color: var(--color-primary);
    width: 100%;
    margin: auto;
    text-align: justify;
    align-items: center;
    line-height: 1.5;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    /* padding-left:10%; */
    padding:0px 70px;
  
}

.about .row1 .info123 h3 span{
    color:#eee;
    padding:0 .5rem;
}

.about .row1 .counter1{
    flex:1 1 48rem;
    /* display: flex; */
    justify-content: center;
    flex-wrap: wrap;
}

.about .row1 .counter1 .box1{
    width:20rem;
    background:#222;
    text-align: center;
    padding: 2rem;
    margin:2rem;
}

.about .row1 .counter1 .box1 span{
    font-size: 4rem;
    color:var(--yellow);
}

.about .row1 .counter1 .box1 h3{
    font-size: 2rem;
    color: var(--color-primary);
}
.exp{
    text-align: center;
}
.education{
    padding-top: 30px;
}

.education .box-container1{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding:1rem 0;
    /* padding-left: 3rem; */
    /* margin-left: 400px; */
}

.education .box-container1 .box1{
    width:27rem;
    margin:4rem 1rem;
    padding-left: 4rem;
    border-left: .2rem solid var(--color-primary);
    position: relative;
}

.education .box-container1 .box1 span{
    font-size: 1.3rem;
    background:#222;
    color:#fff;
    border-radius: 5rem;
    padding:.5rem 2.5rem;
    
}

.education .box-container1 .box1 h3{
    font-size: 2rem;
    color: var(--color-primary);
    padding-top: 1.5rem;
    width: 200px;
    text-transform: capitalize;
}

.education .box-container1 .box1 p{
    font-size: 1.4rem;
    color: var(--color-primary);
    padding: 1rem 0;
}

.education .box-container1 .box1 i{
    position: absolute;
    top:-1.5rem; left:-2.5rem;
    height:5rem;
    width: 5rem;
    border-radius: 50%;
    line-height: 5rem;
    text-align: center;
    font-size: 2rem;
    color:var(--color-primary);
    background:var(--yellow);
}


.contact .row-con{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.contact .row-con .content{
   
    padding:4rem;
    padding-bottom: 30px;
}
.contact .row-con .content .info h3{
    display: flex;
    align-items: center;
    font-size: 2rem;
    color:var(--color-primary);
    padding:1rem 0;
    font-weight: normal;
}

.contact .row-con .content .info h3 i{
    padding-right: 1rem;
    color:var(--color-main-heading);
}
.soc-icons{
    display: flex;
    flex-direction: row;
    padding:10px;
}

.top{
    position: fixed;
    bottom:7.5rem; right: 2rem;
    z-index: 100;
    display: none;
}

.skills-bar {
   
  padding: 25px 30px 25px 285px;
}

.skills-bar .bar {
  margin: 25px 0;
}

.skills-bar .bar .info1 span {
  font-size: 18px;
  font-weight: 600;
   text-transform: uppercase;
}

.skills-bar .bar .info1 {
  margin-bottom: 30px;
  color: var(--color-primary);
}

.skills-bar .bar .progress-line {
  position: relative;
  height: 10px;
  width: 550px;
  background: var(--bg-secondary);
  border-radius: 10px;
  transform: scaleX(0);
  transform-origin: left;
  animation: animate 1s cubic-bezier(1, 0, 0.5, 1) forwards;
}

.bar .progress-line span {
  position: absolute;
  background: var(--color-main-heading);
  height: 100%;
  border-radius: 10px;
  transform: scaleX(0);
  transform-origin: left;
  animation: animate 2.5s 2.5s cubic-bezier(1, 0, 0.5, 1) forwards;
   
}

@keyframes animate {
  100% {
    transform: scaleX(1);
  }
}

/* .progress-line .html {
  width: 90%;
}
.progress-line .css {
  width: 70%;
}
.progress-line .bootstrap {
  width: 30%;
}
.progress-line .javascript {
  width: 60%;
}
.progress-line .c {
  width: 70%;
}
.progress-line .DS {
  width: 75%;
} */

.bar .progress-line span::before {
  position: absolute;
  content: "";
  height: 0;
  right: 0;
  top: -12px;
  width: 0;
  border: 7px solid transparent;
  border-bottom-width: 0px;
  border-right-width: 0px;
  border-top-style: #f0f0f0;
  border-top-color: #f0f0f0;
}

.bar .progress-line span::after {
  position: absolute;
  right: 0;
  top: -28px;
  color: #07374a;
  font-size: 12px;
  font-weight: 700;
  background: #f0f0f0;
  padding: 1px 8px;
  border-radius: 3px;
}

/* .progress-line .html::after {
  content: "80%";
}
.progress-line .css::after {
  content: "70%";
}
.progress-line .bootstrap::after {
  content: "30%";
}
.progress-line .javascript::after {
  content: "60%";
}
.progress-line .c::after {
  content: "70%";
}
.progress-line .DS::after{
  content: "75%";
} */

.navbar.solid {
  background-color: #07374a;
  transition: background-color 1s ease 0s;
  box-shadow: 0 0 4px rgb(7 55 74 / 20%);
  z-index: 500;
}

.navbar.solid .navbar-brand {
  display: inline-block;
  color: #f0f0e6;
  transition: color 1s ease 0s;
}

.navbar-brand {
  display: none;
  color: #f0f0e6;
  font-weight: 400;
}
.down123{
    text-align: center;
    margin-top: -45px;
}
.down-btn {
    text-align: center;
      position: relative;
      display: inline-block;
      padding: 25px 30px;
      font-size: 18px;
      font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border-radius: 100px;
      margin: 30px 0;
      color: var(--bg-primary);
      background-color:var(--color-main-heading);
      text-decoration: none;
      text-transform: uppercase;
      transition: 0.5s;
      letter-spacing: 4px;
      overflow: hidden;
      /* margin-left: 50%; */
    }
    
    .down-btn:hover {
      background: var(--color-main-heading);
      color: white;
      box-shadow: 0 0 10px var(--color-main-heading), 0 0 10px var(--color-main-heading), 0 0 10px var(--color-main-heading), 0 0 10px var(--color-main-heading);
      /* -webkit-box-reflect: below 1px linear-gradient(transparent, #0005); */
    }
    
     /* .down-btn:nth-child(1) {
      filter: hue-rotate(270deg);
    }
    
    .down-btn:nth-child(2) {
      filter: hue-rotate(110deg);
    }
    
    .down-btn span {
      position: absolute;
      display: block;
    }
    
    .down-btn span:nth-child(1) {
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, transparent, #79c522);
      animation: animate1 1s linear infinite;
    }
       @keyframes animate1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}
    .down-btn span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #79c522);
  animation: animate2 1s linear infinite;
  animation-delay: 0.25s;
}
@keyframes animate2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}
.down-btn span:nth-child(3) {
  bottom: 0;
  right: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #79c522);
  animation: animate3 1s linear infinite;
  animation-delay: 0.5s;
}
@keyframes animate3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}
.down-btn span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #79c522);
  animation: animate4 1s linear infinite;
  animation-delay: 0.75s;
}
@keyframes animate4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}   */

.main-div1{
    display:flex;
    flex-direction:row;
    justify-content:center;
    flex-wrap:wrap;
    padding-top: 50px;
    gap:20px;
    padding-bottom: 40px;
    }
    .card123 {
 width: 260px;
 /* height: 300px; */
 border-radius: 20px;
 background: #ffffff;
 /* position: relative; */
 padding: 0px 20px 20px;
 border: 2px solid #c3c6ce;
 /* transition: 0.5s ease-out;
 overflow: visible; */
 /* display: flex;
 flex-direction: column;
 justify-content: flex-start; */
}

.card-details {
 color: #79c522;
 height: 100%;
 /* gap: 50px; */
 display: grid;
 place-content: flex-start;
}

.card-button {
 /* transform: translate(-50%, 125%); */
 width: 70%;
 margin: auto;
 border-radius: 3rem;
 border: none;
 background-color: var(--color-main-heading);
 color: #fff;
 font-size: 1.5rem;
 padding: 0.5rem 2rem;


 /* bottom: -22%; */
 /* opacity: 0; */
 transition: 0.3s ease-out;
 text-align: center;
 
}

.text-body {
 color: #000000;
 font-size: 18px;
 text-align: center;
 justify-self: center;
}
.text-title {
 font-size: 21px;
 font-weight: bold;
 color:var(--color-main-heading);
 
 padding-top: 20px;
 text-align: center;
 
}

.card123:hover {
 border-color: var(--color-main-heading);
 box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
}

/* .card123:hover .card-button {
 transform: translate(-50%, 50%);
 opacity: 1;
} */

.custom-div-duration{
  display: flex;
  justify-content: space-between;
  font-size: 12px
}

















@media (max-width:1200px){

    html{
        font-size: 55%;
    }
    .skills-bar{
            padding: 25px 30px 25px 190px;
    }
    .home{
        padding:1rem 4rem;
    }

}

@media (max-width:991px){

   header{
       left:-120%;
   }

   #menu{
       display: block;
   }

   header.toggle{
    left:0%;
   }

   body{
       padding:0;
   }

}

@media (max-width:768px){
.skills-bar {
    padding: 25px 30px 25px 30px!important;
    text-align: -webkit-center;
}
    html{
        font-size: 50%;
    }
    
    }

@media (max-width:480px){
    .scroller{
        padding-left: 10px;
    }
    .skills-bar{
        padding: 0px 40px 0px 40px ;
    }
    .intern{
        flex-direction: column!important;
    }
    
    .img-user-w{
        display: block;
        
    }
    .exp1{
        padding-top: 27px;
    }
    .home h3{
        padding-top: 30px;
    }
    .exp-card{
        width: 100%!important;
        height: 300px;
    }
    header{
        width: 100vw;
    }
    .soc-icons{
        flex-direction: row;
    }
    .heading{
        margin:0 3rem;
    }

    .about .row .counter .box{
        width: 100%;
    }
 
    .education .box-container .box{
        width:100%;
    }

    .portfolio .box-container .box{
        width:100%;
    }

    .contact .row form{
        margin:3rem 0;
    }
    .skills-bar .bar .progress-line {
        width:300px;
        height:15px
    }
    .skills-bar{
        padding:0px;
    }
    .card-container1 {
        width:0px;
    }
    .about .row1 .info123 .about-me {
        padding :0px 30px;
        text-align: center;
    }
    #quick {
    
    padding-left: 0px;}
    .card-button{
        /* width: 30%; */
        /* left:34%!important; */
        margin-top: 10px;
    }
 } 


 /* experience */
 
.intern{
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 50px;
    gap: 20px;
    padding-bottom: 40px 
}
        .exp-card-title {
  color: var(--color-main-heading);
  font-size: 22px;
  line-height: normal;
  font-weight: 700;
  margin-bottom: 0.5em;
}

.exp-card-company {
  color: var(--color-exp-para);
  font-size: 17px;
  font-weight: 700;
}
.exp-type{
    color: var(--color-exp-para);
  font-size: 17px;
  font-weight: 700;
}
.know{
    background-color:var(--color-main-heading);
  border: none;
  color: white;
  padding: 5px 18px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 20px;
}

.small-desc {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5em;
  color: var(--color-exp-para);
  padding-top:20px;
}
.small-desc {
  font-size: 14px;
}
.small-desc1{
    color: var(--color-primary);
    font-size: 14px;
}

.custom-know-more{
    color: #ffffff !important;
    font-size: 13px;
    
}

.go-corner {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 2em;
  height: 2em;
  overflow: hidden;
  top: 0;
  right: 0;
  background: linear-gradient(135deg, #6293c8, #384c6c);
  border-radius: 0 4px 0 32px;
}

.go-arrow {
  margin-top: -4px;
  margin-right: -4px;
  color: white;
  font-family: courier, sans;
}

.exp-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 30%;
  min-height: 320px;
  /* background-color: #f2f8f9; */
  border-radius: 25px;
  padding: 5px 10px 20px 20px;
  margin: auto;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;
  /* background: linear-gradient(to bottom, #344256, #344256); */
  background-color: var(--bg-color-experience);
  font-family: Arial, Helvetica, sans-serif;
  border: 2px solid var(--color-main-heading);
  color: #79c522;
  padding-top: 15px;
  /* height: 370px; */
}

.exp-card:before {
  content: '';
  position: absolute;
  /* width: 10%; */
  z-index: -1;
  top: -16px;
  right: -16px;
  background: var(--color-primary);
  opacity: 80%;
  height: 32px;
  /* width: 47px; */
  border-radius: 32px;
  transform: scale(1);
  transform-origin: 50% 50%;
  transition: transform 0.35s ease-out;
  color: var(--bg-primary);
  
}

.exp-card:hover:before {
  transform: scale(28);
  
}
.exp-card:hover {
    background: var(--bg-color-experience-hover);
    transition: all 1s;
}


.exp-card:hover .small-desc {
  transition: all 0.5s ease-out;
  color: var(--bg-primary);
}
.exp-card:hover .small-desc1{
  transition: all 0.5s ease-out;
  color: var(--bg-primary);
}

.exp-card:hover .card-title {
  transition: all 0.5s ease-out;
  color: var(--bg-primary);
}

.exp-card:hover .card-company {
  transition: all 0.5s ease-out;
  color: var(--bg-primary);
}

.exp-card:hover .exp-card-title{
    transition: all 0.5s ease-out;
  color: var(--bg-primary);
}

.exp-card:hover .exp-card-company{
    transition: all 0.5s ease-out;
  color: var(--bg-primary);
}

.exp-card:hover .exp-type{
    transition: all 0.5s ease-out;
  color: var(--bg-primary);
}

.main-experience-div-cont{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: -20px;
}

.duration-experience-cont{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 30%;
}

.exp-card:hover .duration-experience-cont{
  transition: all 0.5s ease-out;
  color: #ffffff;
}
