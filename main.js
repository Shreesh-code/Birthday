var canvas = new fabric.Canvas('can');
 var x= document.getElementById("myAudio");

function new_img(){
	fabric.Image.fromURL('R.gif', function(Img){
        block_image_object=Img;
    block_image_object.scaleToWidth(700);
    block_image_object.scaleToHeight(510);
    block_image_object.set({
top:0,
left:0
    });
    canvas.add(block_image_object);
});
}

function play(){
    x.play("bdayaudio.mp3");	
}
