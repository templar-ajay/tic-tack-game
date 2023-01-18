"use strict"

const gridAll=document.querySelectorAll('.grid')
const checkId=[];

let rndm;

function run(){
    gridAll.forEach(element=>{
        element.addEventListener('click',function insert(e){
            e.preventDefault();
            e.target.textContent='O';
            e.target.removeEventListener('click',insert)
            checkId.push({text:e.target.textContent,id:e.target.id});
            console.log(checkId);// logging checkID 
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
           checkId.length<9? random():''
           checkId.push({text:'X',id:`${rndm}`})
        
        const id= document.getElementById(`${rndm}`)
              id.innerHTML='X'
              id.replaceWith(id.cloneNode(true));
        })
    })

}run()


function random(){
    rndm = Math.floor(Math.random()*9);

    console.log('38',rndm)
    checkId.sort((a,b)=>a.id-b.id).map(val=>{
        if(checkId.length<9){
            if(+val.id === rndm){
                random()
                // console.log(+val.id,rndm,'random called')
            }
    }
    })
     
    // console.log('line 34')
}

