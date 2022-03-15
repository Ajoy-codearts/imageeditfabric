var btn = document.querySelectorAll('.icon-item');
var item = document.querySelectorAll('.displayContent');

for(let i=0;i<btn.length;i++){
    btn[i].addEventListener('click',function(){
        for(let i=0;i<item.length;i++){
            item[i].className="displayContent";
        }
        document.getElementById(this.dataset.id).classList.add("active");
    })
}


// func1=()=>{
//     document.getElementById('text-box').classList.toggle("active")
// }
// func2=()=>{
//     document.getElementById('image-box').classList.toggle("active")
// }
// func3=()=>{
//     document.getElementById('color-box').classList.toggle("active")
// }
// func4=()=>{
//     document.getElementById('download-box').classList.toggle("active")
// }
// func5=()=>{
//     document.getElementById('delete-box').classList.toggle("active")
// }