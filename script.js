let me ={
    name: 'Anes' ,
    surname: 'Fehrić' ,
    age: 22,
    location: 'Sarajevo',   
}
languages = ['bosnian', 'english', 'turkish', 'french']
console.log(me);
console.log(languages[2]);

function goToTop() {
    window.scrollTo({
    top: 0,
    });
}
window.addEventListener("scroll", function show(){
const top_btn=this.document.getElementById('topbutton');
if(top_btn!==0){ 
top_btn.classList.toggle("showTopbtn",window.scrollY>300);
}
});

