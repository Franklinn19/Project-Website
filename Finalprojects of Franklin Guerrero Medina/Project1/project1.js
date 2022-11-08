// Make your items and purchased items in two differents arrays.
let items=[];
let purchasedItems=[];

//this function , will show all items entered (purchased/nonpurchased)
function full() { 
   clear();
    for(i=0;i<items.length;i++){
        let item=items[i]
        let li=document.createElement("li");
        if (purchasedItems.includes(item)){
            li.style.textDecoration="line-through"
        }
        
        li.appendChild(document.createTextNode(item));
        document.getElementById("List").appendChild(li);
        console.log(item)
    }
}


// this function , if the item is clikcked it will be crossed out
//any crossed out items will be added to the purchased items
function crossOut(element){
    if (element.style.textDecoration==="line-through"){
        element.style.textDecoration=""
        let index= purchasedItems[purchasedItems.indexOf(element)]
        let left=purchasedItems.slice(0,index)
        let right=purchasedItems.slice(index+1)

    }
    else if (element.style.textDecoration===""){
        element.style.textDecoration="line-through"
        purchasedItems.push(element.innerHTML)
    }
    
   }


// this function will show an alert when clicking the "Add Items button"
// letting the user input an new item , which once entered will be added
// to the items array
function add() {
    let newItem=prompt("Add Item Here!")
    let ul =document.getElementById("List");
    let li= document.createElement("li");
    li.setAttribute("onclick","crossOut(this)");
    li.appendChild(document.createTextNode(newItem));
    ul.appendChild(li);
    items.push(newItem)
}

//this function , will show all items that were crossed out(purchased)
//it will clear any purchased item and move it to the purchased items 
function purchase(){

    clear()
    for(i=0;i<purchasedItems.length;i++){
        let purchaseItem=purchasedItems[i]
        let li=document.createElement("li")
        li.appendChild(document.createTextNode(purchaseItem))
        li.style.textDecoration="line-through"
        document.getElementById("List").appendChild(li)
        
    }

}

//
function clear(){
    let items= document.getElementById("List");
    console.log(items);

   while (items.firstChild){
    items.removeChild(items.firstChild)
   }
}


// this function will show to the user all items left that were not purchased 
//once the 'Items left button is clicked.
function left(){
    clear()
    for(i=0;i<items.length;i++){
        let item=items[i]
        console.log([items])
        console.log([purchasedItems])
        if(!purchasedItems.includes(item)){
            let li=document.createElement("li")
            li.appendChild(document.createTextNode(item))
            document.getElementById("List").appendChild(li)
        }

    }
}