
Webcam.set({
    height:300,
    width:400,
    image_format:"png",
    png_quality:90
   });
   camera=document.getElementById("camera");
   Webcam.attach(camera);
   function takeImg(){
     Webcam.snap(
         function(data_uri){
            document.getElementById("picture").innerHTML="<img src="+data_uri+" width:400px height:300px id='pic'>" 
         }
     )

   }
   console.log("ml5",ml5.version);
classifier=ml5.imageClassifier(
    "https://teachablemachine.withgoogle.com/models/FElRrzin8/",
    modelLoaded

);
function modelLoaded(){
  console.log("YAY!!!!!!!!!!!!!!!!My Model Is Working !!!!!!")      
}
function IdentifyImg(){
    img=document.getElementById("pic");
    classifier.classify(img, gotResult);
}

function gotResult(error,result){
if (error){
    console.error("ERR0R")
}
else{
    console.log(result);
    NewNo=result[0].confidence.toFixed(2)*100;
    console.log(NewNo);
    if(NewNo<=50){
        document.getElementById("Accuracy").style.color="red";
        console.log("red");
    }
    else if(NewNo>50 && NewNo<=75){
        document.getElementById("Accuracy").style.color="yellow"; 
        console.log("yellow");
    }
    else if(NewNo>=76.0){
        document.getElementById("Accuracy").style.color="green"; 
        console.log("green");
    }
    document.getElementById("Object").innerHTML=result[0].label;
    document.getElementById("Accuracy").innerHTML=NewNo+"%";
}
}

   
  