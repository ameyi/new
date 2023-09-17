function setup(){
    canvas = createCapture(500, 500)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(500, 500)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotResults)
}
function takesnapshot(){
    save('ameya.png')
}
function modelLoaded(){
    console.log("Model is a big big big big big success")
}
function gotResults(results){
    if(gotResults.length > 0){
        console.log(results)
        console.log('posenetx='+ results[0].pose.nose.x)
        console.log('posenety='+ results[0].pose.nose.y)
    }
}