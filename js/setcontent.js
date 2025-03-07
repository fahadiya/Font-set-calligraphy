function setcontent(){
    var content = document.getElementById("form-control").value;
    var contents =["content1","content2","content3"];
    for ( var i=0;i<contents.length;i++){
    document.getElementById(contents[i]).innerHTML =content;
}
}