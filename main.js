function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true, video:false});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/SuODDGqlH/model.json', { probabilityThreshold: 0.7 } ,modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}

var dog = 0;
var cat = 0;
var horse = 0;
var lion = 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;
    document.getElementById("result_count").innerHTML = 'Detected Dog - '+ dog +  ' Detected Cat - ' + cat +  ' Detected horse -  ' + horse + ' Detected Lion - ' + lion;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('animal_image');

    if (results[0].label == "woof") {
      img.src = 'bark.jpg';
      dog = dog + 1;
    } else if (results[0].label == "meow") {
      img.src = 'meow.jpg';
      cat = cat + 1;
    } 
    else if (results[0].label == "roar") {
        img.src = 'lion.jpg';
        cat = cat + 1;
      }else if (results[0].label == "neigh") {
        img.src = 'horse.jpg';
        horse = horse + 1;
      }
      else{
        img.src = 'not.png';
      }
  }
}