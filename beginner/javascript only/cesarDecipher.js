function rot13(str) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let product='';
    let regex= /\w/;
    let arr=str.split('');
    //console.log(arr);
    
    
    
    for(let i in arr){
      let character=arr[i];
    if(/\w/.test(character)&&typeof character!=='number'){
    product+=alphabet[alphabet.indexOf(arr[i])+13];
    }else{
    
    product+=arr[i];
    
    }
    }
    
    console.log(product);
    
      return product;
    }
    rot13("SERR CVMMN!");
    rot13("SERR PBQR PNZC");