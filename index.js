Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });
  
  camera = document.getElementById("camera");
  
  Webcam.attach('#camera');
  
      
  function juk()
  {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
  }
  
  console.log('ml5 version:', ml5.version);
  
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/TBMw_n2dJ/model.json ',cuyo);
  function cuyo(){
    console.log("te faltan cosas para entrar a la guerra") ;
  }
  
  function huh(){
  huh= document.getElementById("captured_image");
  classifier.classify(huh, resultaro)
  }
  function resultaro(error, result){
  if (error) {
    console.log(error);
  } else {
    console.log(result);
    document.getElementById("jjj").innerHTML=result[0].label;
    document.getElementById("gjg").innerHTML=result[0].confidence;
     if (result[0].label=="") {
        
     } else {
        
     }                                                                                                          
  
  
  }
    
  }
  