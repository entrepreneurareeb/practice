array1=['name','age']
Array1=[5,6,3,4,9]
//console.log('1st',array1) //output: [name,age] 
array1.push('email','password')
//console.log('2nd',array1)  //output: [name,age,email,password]

array1.unshift('roll number')
//console.log('3rd',array1)

array1[5]=1
array1[2]=array1[4]

//console.log(array1)
lastarray1= array1.pop()
array1.pop()
//console.log(lastarray1 ,'last element')
//console.log(array1)
set1=[1,2,3,4,5]
set2=[4+2,7,2+6,5+4,6+2+1+.5+.5]
set3 = set1.concat(set2)
 inc =set3.includes(3)
 isarray=Array.isarray(set2)
//console.log(set1)
//console.log(set2)
//console.log(set3)
console.log(inc)
