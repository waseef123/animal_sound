//https://teachablemachine.withgoogle.com/models/bIXsxgGr8/
//https://teachablemachine.withgoogle.com/models/RWpzUChGR/

function startclassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/bIXsxgGr8/model.json", modelReady)
}

function modelReady() {
    classifier.classify(gotResult)

}
function gotResult(error, result) {
    if (error) {
        console.error(error)
    }
    else {
        console.log(result)
        randomnumber_R = Math.floor(Math.random() * 255) + 1
        randomnumber_G = Math.floor(Math.random() * 255) + 1
        randomnumber_B = Math.floor(Math.random() * 255) + 1
        document.getElementById("result_label").innerHTML = "I can hear " + result[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy " + (result[0].confidence * 100).toFixed(0) + " %";
        document.getElementById("result_label").style.color = "rgb(" + randomnumber_R + "," + randomnumber_G + "," + randomnumber_B + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + randomnumber_R + "," + randomnumber_G + "," + randomnumber_B + ")";



        Image1 = document.getElementById('bird') ;
        Image2 = document.getElementById('cat') ;
        Image3 = document.getElementById('dog') ; 
        Image4 = document.getElementById('rabbit') ;

        if (result[0].label == 'Bird') {
            Image1.src = 'bird.gif'
            Image2.src = 'cat.jpg'
            Image3.src = 'dog.jpg'
            Image4.src = 'rabbit.png'

        }
        else if(result[0].label=='Cat')  {
            Image1.src = 'bird.png'
            Image2.src = 'cat.gif'
            Image3.src = 'dog.jpg'
            Image4.src = 'rabbit.png'
        }
        else if(result[0].label=='Dog')  {
            Image1.src = 'bird.png'
            Image2.src = 'cat.jpg'
            Image3.src = 'dog.gif'
            Image4.src = 'rabbit.png'
        }
        else if(result[0].label=='Rabbits')  {
            Image1.src = 'bird.png'
            Image2.src = 'cat.jpg'
            Image3.src = 'dog.jpg'
            Image4.src = 'rabbit.gif'
        }
 
        else {
            Image1.src = 'bird.png'
            Image2.src = 'cat.jpg'
            Image3.src = 'dog.jpg'
            Image4.src = 'rabbit.png'
        }
    }
}

