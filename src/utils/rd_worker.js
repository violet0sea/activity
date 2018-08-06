console.log('worker')
onmessage = function(e) {
    console.log(100)
    postMessage(200)
}
