//https://teachablemachine.withgoogle.com/models/F7ZtFK14_/

prediction1 =""
prediction2 =""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
 });
 camera = document.getElementById("camera")
 Webcam.attach( '#camera' );

 function takesnapshot(){
    Webcam.snap( function(data_uri) {
        // display results in page
        document.getElementById('result').innerHTML = 
         '<img id="captureimage" src="'+data_uri+'"/>';
    } );
 }

 console.log("ml5ver",ml5.version)

 classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/F7ZtFK14_/model.json",model_loded)
 function model_loded(){
     console.log("model_loded")
 }

 function speakabc(){
     var synth= window.SpeechSynthesis
     speak_data_1 = "the first preditcion is  "+prediction1;
     speak_data_2 = "the second preditcion is  "+prediction2;
     var utterthis = new SpeechSynthesisUtterance(speak_data_1+speak_data_2)
     console.log(speak_data_1)
     synth.speak(utterthis)
 }

 function check(){
  img= document.getElementById('captureimage')
  classifier.classify(img,gotresults)   
 }

 function gotresults(error, results){
     if(error){
     console.error(error);   
     }else{
     console.log(results) 
     document.getElementById("result_emotion_name").innerHTML=results[0].label 
     document.getElementById("result_emotion_name2").innerHTML=results[1].label 
     prediction1=results[0].label
     console.log(prediction1)
     prediction2=results[1].label
     speakabc()

     if(results[0].label=="happy"){
         document.getElementById("update_emoji").innerHTML = "&#128513;";
     }
     if(results[0].label=="sad"){
        document.getElementById("update_emoji").innerHTML = "&#128557;";
    }
    if(results[0].label=="angry"){
        document.getElementById("update_emoji").innerHTML = "&#128545;";
    }
    if(results[1].label=="happy"){
        document.getElementById("update_emoji2").innerHTML = "&#128513;";
    }
    if(results[1].label=="sad"){
        document.getElementById("update_emoji2").innerHTML = "&#128557";
    }
    if(results[1].label=="angry"){
        document.getElementById("update_emoji2").innerHTML = "&#128545;";
    }
     }

 }