function double(array){
    let doubled;  
    doubled = [];
    
    doubled = array.map(n => n *2);
    
    console.log(doubled);
    return doubled;
};

double([2,4,6]);
