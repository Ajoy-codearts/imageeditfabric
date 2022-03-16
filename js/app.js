//canvas
var canvas = new fabric.Canvas('canvas',{
    width: 900,
    height:500
})
canvas.renderAll();


//image upload
document.getElementById('imageButton').addEventListener('change', function(obj){
    var fileOrigin = obj.target.files[0];
    var reader = new FileReader();
    reader.onload=function(file){
        var fileData = file.target.result;
        fabric.Image.fromURL(fileData, function(obj){
            var newImg = obj.set({
                left:100, top:100
            }).scale(0.9);
            canvas.add(newImg).renderAll();
            // var a = canvas.setActiveObject(newImg);
            // var dataURL = canvas.toDataURL({format: 'png', quality: 0.8});
        });
    };
   reader.readAsDataURL(fileOrigin);
})


//text
var input = '';
getText=()=>{
    var inputval =document.getElementById('inputfield');
    inputval.addEventListener('change',(event)=>{
    input = event.target.value;
})
}
getText();
//declairing text
document.getElementById('textButton').addEventListener('click',function(){
    canvas.add(new fabric.Text(input,{
        top:100,
        left:50,
        fontSize:fsize,
        fontFamily:fFamily,
        fill:color
    }));
    
})
//setting text size custom
var fsize=20;
document.getElementById('fontSize').addEventListener('change',(event)=>{
    fsize = event.target.value;
})



//setting font family
var fFamily='Arial';
document.getElementById('fontFamily').addEventListener('change',(event)=>{
    fFamily = event.target.value;
})



//resize button (selected object)
document.getElementById('resize').addEventListener('click', function(){
    var obj = canvas.getActiveObject();
    obj.fontSize=fsize;
    canvas.renderAll();
})


//coloring selected text object
document.getElementById('changeColor').addEventListener('click',function(){
    var obj1 =canvas.getActiveObject();
    obj1.fill=color;
    canvas.renderAll();
})


//changing font family
document.getElementById('changeFamily').addEventListener('click',function(){
    var obj2=canvas.getActiveObject();
    obj2.fontFamily = fFamily;
    canvas.renderAll();
})


//color
var color = '#000000FF';
colorPicker=()=>{
    var colorbx = document.getElementById('colorbx');
    colorbx.addEventListener('change',(event)=>{
        color = event.target.value;
    })
}
colorPicker();






//download
download=()=>{
        imageObj = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        var link = document.createElement('a');
        link.download = "my-image.png";
        link.href = imageObj;
        link.click();
}





//clearAll
const clearAll=(canvas)=>{
    canvas.clear();
    canvas.renderAll();
}

//delete
deleteItem=()=>{
    var item = canvas.getActiveObject();
    canvas.remove(item);
}