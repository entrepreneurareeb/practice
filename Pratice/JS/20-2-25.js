/*{
  let a=0
  let b=Math.floor(Math.random()*10+1)

while(a !==b){
    a= parseInt(prompt("Guess number between 1 to 10"))
    if(a === b)
    {
        console.log('You these the number')
    }
    else if(a>b){
        console.log('the number is higher')
    }
    else if(a<b){
        console.log('the number is small')
    }
    
    }}*/
   const a=['rock','paper','scissor','test','testing']
   b=0
   while(b<a.length)
   {
    console.log(a[b])
    b++
   }