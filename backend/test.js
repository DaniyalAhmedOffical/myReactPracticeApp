

function submit(){
    var obj = {Roll:1, Name:'Asif'}
    
    $.post('http://localhost:2000/tFunc/t2',obj,function(data,status){
        console.log(data)
    })
    console.log(obj)
}