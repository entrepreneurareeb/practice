/*{let grid=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(grid[1,2])}*/

/*{
    let arr=[1,2,3,4]
    {
        for(let value of arr){
            console.log(value) //practice  (for of) loop (only for array)
        }
    }
}*/
{
    let obj={firstname:'test',lastname:'testing',address:'12349668',age:20,bloodgroup:'O+'}
    for(let key in obj){
        console.log(key+':'+obj[key])
    }
}