
// let n=10;
// let t=1;
// let a=[]
// while(t--){

//     for(var i=0;i<=n;i++){
        
//             let diff=(((i+1)**2)-(i**2));
//            a.push(diff);
        
//     }
// }
// console.log(a);
// your code goes here



// function Cnt(a,n){
// 	let c=0,d=0,i,sum=1,j;

// 	for(i=0;i<n;i++){
// 		if(a[i]%2!=0 || a[i]%4==0) d++;
// 		sum=a[i];

// 	for(j=i+1;j<n;j++){
// 		sum=sum*a[j];

// 		if(sum%2!=0 || sum%4==0)
// 		c++;
// 	}
// 	sum=1;
// }
// return c+d;
// 	}
// 	let arr=[1,2];
// 	let n=arr.length;

// 	let ans=Cnt(arr,n);
// 	console.log(ans)

// your code goes here
function newStr(s,k){

	var x="";

	while(s.length>0){
		var temp=s[0];

		for(var i=1;i<k && i<s.length;i++){
			if(s[i]<temp){
				temp=s[i];
			}
		}

		x=x+temp;

		for(var i=0;i<k;i++){
			if(s[i]===temp){
				s=s.substring(0,i)+s.substring(i+1)
			 break;
			}
		}

	}

	return x;
}
var s='errichto';
var k=2;//erichrot
console.log(newStr(s,k));