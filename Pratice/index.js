let list=document.getElementById('mylist')
let item=document.getElementById('item r')
// list.removeChild(item)

let paragraph=document.getElementById('myPragraph')
paragraph.remove

function action(e){
item.remove()
console.log('Chlid is remove',e)
}

item.addEventListener('click',action)

const input=document.getElementById('input')
const h1=document.getElementById('name')

function inputaction(a){
    console.log(a)
    console.log(input.vlaue)
}

input.addEventListener('input,',inputaction)


let button=document.getElementById('mybutton');
button.addEventListener('click' ,function(){
    alert('Button was clicked');
})