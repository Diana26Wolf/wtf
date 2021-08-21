Webcam.set({
    width: 400,
    height: 350,
    image_format: 'png',
    png_quality: 90,
    flip_horiz: true
})
camera = document.getElementById("camera")
Webcam.attach("#camera")

function Capture() {
    Webcam.snap(function (data_uri) {
        document.getElementById("picture").innerHTML = "<img id='captured_image' src = ' " + data_uri + " '>";
    });
}
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/mhpkJgyKc/model.json", Model_Loaded)

function Model_Loaded() {
    console.log("Model had been loaded successfully!")
}

function Compare() {
    img= document.getElementById("captured_image")
    classifier.classify(img, gotResult)
    console.log("Hey")
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
    }
}