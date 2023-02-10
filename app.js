

let subBtn = document.getElementById('submit');


function showlove () {


subBtn.addEventListener('click', e => {
   
    let user = document.getElementById('you').value;
    let partner = document.getElementById('partner').value;
  
    
    
   
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '11b1a182a8mshf2dd0fd1260edf6p1ac3d8jsn09dbb445874a',
            'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
        }
    };
    
    

    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${user}&fname=${partner}`, options)
        .then(response => response.json())
        .then(data => {
            time ()
           let html = `
           <div class="card text-center w-100" id="reset">
           <div class="card-header">
             Are you compactible?
           </div>
           <div class="card-body mt-3" id="output-body">
             <h5 class="card-title">${data.sname}</h5>
             <h5 class="card-text">${data.fname}</h5>
             <h5 class="card-text">Your Score is: ${data.percentage} %</h5>
             <h5 class="card-text">${data.result}</h5>
             <a href="#" class="btn btn-danger newbtn" id="redbtn">Make Another Calculation </a>
             </div>
         </div>
           `
           document.getElementById('result').innerHTML = html;
           let reset = document.getElementById('reset');
           let redBtn = document.getElementById('redbtn');
           redBtn.addEventListener('click', e => {
            reset.style.display = 'none';
           })
          
        })
        
       
} )
}

showlove ()

let spinners = document.getElementById('spinner'); 
function time () {

    if (spinners.style.visibility = 'hidden'){
        spinners.style.visibility = 'visible' 
     }  
     setTimeout(() => {
        spinners.style.visibility = 'hidden';
      } ,
       500)
}



