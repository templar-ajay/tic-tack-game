"use strict"

const gridAll=document.querySelectorAll('.grid')
const matchCondition=[{id1:'0',id2:'1',id3:'2'},{id1:'0',id2:'3',id3:'6'},{id1:'0',id2:'4',id3:'8'},{id1:'3',id2:'4',id3:'5'},{id1:'1',id2:'4',id3:'7'},{id1:'2',id2:'5',id3:'8'},{id1:'2',id2:'4',id3:'6'}];
let rndm,result=false,pcScore=0,yourScore=0,checkId=[];

function run(){
    gridAll.forEach(element=>{
        element.addEventListener('click',function insert(e){
            e.preventDefault();

            ////////////////////////////////////////////////////////////////////////
            e.target.textContent='O';
            e.target.removeEventListener('click',insert);
            checkId.push({text:e.target.textContent,id:e.target.id});
            console.log(checkId);// logging checkID 
            match()

            ////////////////////////////////////////////////////////////////////////
            checkId.length<9? random():'';
            checkId.push({text:'X',id:`${rndm}`});
            const id= document.getElementById(`${rndm}`);
            id.innerHTML='X';
            id.replaceWith(id.cloneNode(true));

            ////////////////////////////////////////////////////////////////////////
            result===false ? match():''
        })
    })

}run()


function match(){
    matchCondition.forEach(val=>{
        const id1=document.getElementById(val.id1);
        const id2=document.getElementById(val.id2);
        const id3=document.getElementById(val.id3);
            if(id1.textContent == '' && id2.textContent == '' && id3.textContent  == '')return
            if(id1.textContent === id2.textContent && id1.textContent === id3.textContent  &&  id2.textContent === id3.textContent){
                console.log('you win ')
                console.log(id2.textContent)

                ////////////////////////////////////////////////////////////////////////
                id1.textContent ==='O' ? yourScore +=1 : pcScore +=1;
                result=true;
                gridAll.forEach(val=>{
                    val.replaceWith(val.cloneNode(true))
                })
                ////////////////////////////////////////////////////////////////////////
            }
    })
}

function random(){
    rndm = Math.floor(Math.random()*9);
    checkId.sort((a,b)=>a.id-b.id).map(val=>{
        if(checkId.length<9){
            if(+val.id === rndm){
                random()
            }
        }
    })    
}

