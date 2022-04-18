let arr1=[1,2,3,4,10,12,5,6];
let arr2=[2,3,4,12,1];//t


// op=[2,4,12,1]//f
let s=[];
for(var i=0;i<arr2.length;i++){
    for(var j=0;j<arr1.length;j++){
        if(arr2[i]===arr1[j] && i<=j){
            s.push(arr2[i]);
            break;
        }}
    }
    // console.log(s);
    if(arr2.length==s.length){
        console.log("true")
    }else{
        
        console.log("false")
    }




    // let a=[7,1,2,3,4,8,5]

    // let n=8;

    //hint===> first natural number