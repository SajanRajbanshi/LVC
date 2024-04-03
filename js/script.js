function mis()
{
    var m=document.getElementById("m").value
    var e=document.getElementById("e").value
    var s=document.getElementById('s').value
    document.getElementById("output").innerHTML="Results:<br>Total Marks: "+(parseInt(m)+parseInt(s)+parseInt(e))
    document.getElementById("outputper").innerHTML="% Marks: "+(parseFloat((parseInt(m)+parseInt(s)+parseInt(e))/3)).toFixed(2)
}
function validate()
{
    var name=document.getElementById("name").value
    var location=document.getElementById("location").value
    var deg=document.getElementById("deg").value
    var course=document.getElementById("course").value
    if(name=="" || location=="")
    {
        alert("name of passwrod can't be empty")
        document.getElementById("name").focus()
        return false
    }
    else{
        alert("name: "+name+"\n"+"location: "+location+"\n"+"designation:"+deg+"\n"+"course:"+course)
    }

}

function calculate()
{
    var m=document.getElementById("merit").value
    var g=document.getElementById("grade").value
    if(g=='A')
    {
        var t=(parseFloat(m)*1.30).toFixed(2)
        var b="30%"
    }
    else if(g=='B')
    {
        var t=(parseFloat(m)*1.1).toFixed(2)
        var b="10%"

    }
    else{
        var t=parseFloat(m).toFixed(2)
        var b="0%"
    }
    document.getElementById("bonus").innerHTML="Bonus: "+b+"   Total Merit: "+t
}
function calculateMark()
{
    let mark=0 
    for(var i=0;i<2;i++)
    {
        document.getElementsByName("answer"+i).forEach(
            (e)=>{
                if(e.checked && e.value=="true")
                {
                    mark+=2
                }
            }
        )
    }
    alert("you gained "+mark+" out of 4")
}

function l()
{
    window.open("popup.html","", "width=400,height=400")

}