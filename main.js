function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundclassifier('https://teachablemachine.withgoogle.com/models/[...]',modelready);
}


function modelready(){
    classifier.classify(gotResuts);
}