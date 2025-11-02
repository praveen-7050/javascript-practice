const listitem = document.getElementById('item-list')

listitem.addEventListener('click',(event)=>{
    if(event.target.tagName === 'LI'){
        console.log(`you clciked the :${event.target.textContent}`)
        event.target.style.backgroundColor ="tomato"
        
    }
})

const additembutton = document.getElementById("add-item");
additembutton.addEventListener('click',()=>{
    const newItem = document.createElement('li');
    newItem.textContent =`item ${listitem.children.length + 1}`;
    listitem.appendChild(newItem)
})