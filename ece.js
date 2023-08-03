var points={
    1:[64,95.5],
    2:[47,95.5],
    3:[64,201.5],
    4:[47,201,5],
    5:[178.5,107.014],
    6:[177.482,220.013],
    7:[238,85.9592],
    8:[240,183.959],
    9:[563.745,138.966],
    10:[636.745,180.966],
    11:[720.883,168.003],
    12:[737.883,167.003]
}

const mySet1 = {}

const canvas=document.getElementById('canvas')


function addEdge(){

    var ip1=document.getElementById('ip1').value
    var ip2=document.getElementById('ip2').value
    if(isNaN(ip1)|| isNaN(ip2)){
        alert('Enter Valid Number')
        return
    }
     if(ip1<1|| ip1>12|| ip2<1 || ip2>12 ){
        alert('Enter Valid Number')
        return
    }
    if(ip1==ip2){
        alert('Enter different values')
        return
    }
    var tempNum=0
  
    if(ip1>ip2){
        tempNum=parseInt(ip1.toString()+ip2.toString())
    }
    else{
        tempNum=parseInt(ip2.toString()+ip1.toString())
    }
    if(mySet1[tempNum]!=null){
        alert('Connection is already present')
        return
    }
    console.log(tempNum)
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", points[ip1][0]); // set the starting x coordinate
    line.setAttribute("y1", points[ip1][1]); // set the starting y coordinate
    line.setAttribute("x2", points[ip2][0]); // set the ending x coordinate
    line.setAttribute("y2", points[ip2][1]); // set the ending y coordinate
    line.setAttribute("stroke", "black"); 
    console.log(line)   
    canvas.appendChild(line);
    mySet1[tempNum]=canvas.children.length-1
    console.log(mySet1)

}
function removeEdge(){

    var ip1=document.getElementById('ip1').value
    var ip2=document.getElementById('ip2').value
    if(isNaN(ip1)|| isNaN(ip2)){
        alert('Enter Valid Number')
        return
    }
     if(ip1<1|| ip1>12|| ip2<1 || ip2>12 ){
        alert('Enter Valid Number')
        return
    }
    if(ip1==ip2){
        alert('Enter different values')
        return
    }
     var tempNum=0
    if(ip1>ip2){
        tempNum=parseInt(ip1.toString()+ip2.toString())
    }
    else{
        tempNum=parseInt(ip2.toString()+ip1.toString())
    }
    if(mySet1[tempNum]==null){
        alert('Connection not present')
        return
    } 
    var idx=mySet1[tempNum]
    // console.log('*******************************')
    // console.log(canvas.children)
    // console.log(idx)
    // console.log(mySet1)
    // console.log(canvas.children[idx])

    canvas.removeChild(canvas.children[idx]);
    delete mySet1[tempNum]
    for(const i in mySet1){
        if(mySet1.i>=idx){
            mySet1.i-=1
        }
    }
    console.log(mySet1)
    

}