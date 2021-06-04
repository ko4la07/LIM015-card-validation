// import validator from './validator.js';
  
// console.log(validator);



function cambiadisplay(id){
    if (id == 'dos'){
    document.getElementById('uno').style.display='none'; 
    document.getElementById('dos').style.display='block'; 
    document.getElementById('tres').style.display='none';
    }else if (id == 'tres'){
    document.getElementById('uno').style.display='none';
    document.getElementById('dos').style.display='none';  
    document.getElementById('tres').style.display='block';
    }
    }

              
           