const restaurant ={
    name: 'Ichiran Ramen',
    address:`${Math.floor(Math.random()*100 + 1)} John Ave`,
    city:' Brooklyn',
    state:' NY',
    zipcode:' 11206',
   
    
}
fulladdress= `${restaurant.address},${restaurant.city},${restaurant.state},${restaurant.zipcode}`
//console.log(fulladdress)



/*student={
    name:"Ammar",
    age:18,
    subject:["English",'Urdu','Math','Computer'],
    isEnrolled: true,
}
console.log(student)

student.grade='A'
student.isEnrolled= false
 
console.log(student['name'], 
            student['age'],
            student.subject,
            student['grade'],
            student['isEnrolled'],

)*/

/*let userlogin = false
let prosubcriber= false   //first way to type
if (userlogin==false ){
    console.log("please login  first to see data")
    
}else
{if(prosubcriber ==true){ 
    console.log("thanks, you are a pro subscriber")
    
}
else{
    console.log('Here is your data, consider subscribe to get access to pro freatures')
    
    
}}*/

let user = true
let subcriber= false  //secound  way to type
if (!user){
    console.log("please login  first to see data")    
}
if (user && subcriber){
    console.log("thanks, you are a pro subscriber")
}
if (user && !subcriber){
    console.log('Here is your data, consider subscribe to get access to pro freatures')
}