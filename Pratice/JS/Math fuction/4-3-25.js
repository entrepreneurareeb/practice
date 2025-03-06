function timeoutAction(){
    console.log('timeout executed!')
}

const timoutid=setTimeout(timeoutAction, )

clearTimeout(timoutid)



function intervalAction(){
    console.log('interval executed!')
}
const b=setInterval(intervalAction,1000*2)
setTimeout(function()
{clearInterval(b)
    console.log()
}) 