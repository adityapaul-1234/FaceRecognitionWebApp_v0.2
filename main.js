Webcam.set({
    width:355,
    height:265,
    image_format: 'png',
    png_quality: 90,
});

camera = document.getElementById("camera");

Webcam.attach('#camera');
document.getElementById("camera").style.border = "none";

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
    document.getElementById("result").style.border = "none";
}

console.log('ml5 version: ', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/model.json', modelLoaded());

function modelLoaded(){
    console.log('Model Loaded!');
}