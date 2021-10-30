var dog=0;
var cat=0;
var cow=0;

function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/xnLSMhqn9/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
  }
  function gotResults(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      random_number_r = Math.floor(Math.random() * 255) + 1;
      random_number_g = Math.floor(Math.random() * 255) + 1;
      random_number_b = Math.floor(Math.random() * 255) + 1;
  
      document.getElementById("count").innerHTML = 'Detected dog'+ dog +' Detected cat'+ cat+' detected cow'+cow;
      document.getElementById("playedaudio").innerHTML = 'DEtected Voice is of- '+ results[0].label;
      document.getElementById("count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
      document.getElementById("playedaudio").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
  
      img = document.getElementById('img1') 
    
      
  
      if (results[0].label == "MooMoo") {
        img.src = 'cow.jpg';
        cow++;
        
      } else if (results[0].label == "barking") {
        img.src = 'dog.jpg';
        dog++;
        
      } else if (results[0].label == "meow") {
        img.src = 'cat.png';
        cat++;
        
      }else{
        img.src = 'ear.png';
        
      }
    }
  }