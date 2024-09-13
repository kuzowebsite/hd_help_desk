//---------------  dock code-----------------------//
const dock = document.querySelector('.apple-dock');
const items = document.querySelectorAll('.dock-item');


dock.addEventListener('mousemove',(e)=>{
  let rect = dock.getBoundingClientRect();
  let x = e.clientX-rect.x;
  
    items.forEach((item)=>{
      let itemRect = item.getBoundingClientRect()
      let xCord = (itemRect.x+(itemRect.width/2))-rect.x;
      let position = Math.floor(xCord - x)/100;
      
      if(position < 0){position = -1 * position;}
      
      if(position < 0.75){
        item.style.scale = `clamp(1, ${2-position}, 2)`;
      }
      else{
        item.style.scale = `clamp(1, 1, 1.5)`;
      }
      
    })
})

dock.addEventListener('mouseout',(e)=>{
  items.forEach((item)=>{
      item.style.scale = `clamp(1, 1, 1.5)`;
  })
})

items.forEach((item)=>{
   item.addEventListener('click',(e)=>{
     item.classList.add('slide-top');
   })
   item.addEventListener('animationend',(e)=>{
     item.classList.remove('slide-top');
   })
 })
//---------------  dock code-----------------------//



function closeModal(id){
  let element = document.querySelector(`[data-window="${id}"]`);
 
  element.setAttribute('onclick',`openModal('${id}')`);
  let modal=document.getElementById(`${id}`);
  
  modal.classList.remove('modalOpen');
  modal.classList.add('modalClose');
  
  
    modal.addEventListener('animationend',(e)=>{
       
      if(modal.classList.contains('modalClose')){
        modal.classList.remove('modalClose');
        let titleBar = modal.querySelector('.titleBar');
        titleBar.remove();
        }
    })  
  
  
}
function MaximizeModal(id){

  let modal=document.getElementById(`${id}`);
  if(modal.classList.contains('modelMaximize')){
    modal.classList.remove('modelMaximize');  
    return;
  }
  modal.classList.add('modelMaximize');
  return;
}

function openModal(id){
  let openWindowCount = document.querySelectorAll('.modalOpen').length;
  let element = this.event.target.parentElement;
  let windowID = element.dataset.window;
   element.setAttribute('onclick',`closeModal('${windowID}')`);
  let modal=document.getElementById(`${windowID}`);
  
  let content = modal.innerHTML;
  modal.innerHTML = '';
  let titleBar = 
    `
    <div class="titleBar">
    <div class="windowBtnGrp">
        <button class="windowClose" onclick="closeModal('${windowID}')"></button>
        <button class="windowMini" ></button>
        <button class="windowMaxi" onclick="MaximizeModal('${windowID}')"></button>
        </div>
            <div class="title">${windowID}</div>
            <div></div>
        </div>
    </div>
</div>

  `;
  modal.innerHTML = titleBar+content;
  modal.style = `--cascade:${openWindowCount}`;
  showModal(windowID);
}

function showModal(id){
  document.getElementById(id).classList.remove('modalClose');
  document.getElementById(id).classList.add('modalOpen');
}

function makeTop(){
  let windowTops = document.querySelectorAll('.windowTop');
  windowTops.forEach((window)=>{
    window.classList.remove('windowTop');
  })
  let element = this.event.target;
  let windowID = element.id;
  let modal=document.getElementById(`${windowID}`);
  modal.classList.add('windowTop');
  return;
}


function windowPosition(){
  let event = this.event;
  let element = this.event.target;
  let windowID = element.id;
  let modal=document.getElementById(`${windowID}`);
  let cords = modal.getBoundingClientRect()
  console.log(event,cords);
  modal.style.setProperty("--x", event.clientX);
  modal.style.setProperty("--y", event.clientY);
}