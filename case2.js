const fruit=["banana","banana","apple","fig","banana",
	"cherry","apple","banana","orange","orange","Coconut",
  "cherry","Avocado","banana","Avocado","Coconut","orange",
	"Kiwi","Kiwi","Lemon","Lime"];
	const array=[];
	fruit.reduce((obj, fruitName)=>{
		if (!array.some(f => Object.keys(f)[0] === fruitName)){
			array.push({[fruitName]:{count:1}});
		} else {
			for (let j = 0; j < array.length; j++) {
				const key = String(Object.keys(array[j]));
				if(key===fruitName){
					array[j][fruitName]['count']+=1;
				}	
			}
		}
	},{});
	console.log(array);

function sorting(params) {
  switch (params) {
      case 'asc':
				console.log("--Küçükten büyüğe sıralama--");
        array.sort((a,b) =>a[Object.keys(a)].count-b[Object.keys(b)].count);
        console.log(array);
	    	break;
      case 'desc':
				console.log("--Büyükten küçüğe sıralama--");
        array.sort((a,b) =>b[Object.keys(b)].count-a[Object.keys(a)].count);
        console.log(array);
        break;
			default:
        break;
  }
}
sorting('asc');
