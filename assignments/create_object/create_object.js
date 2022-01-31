function CreateObject(arr) {
    // Write your code here
    person={};
    for(var i=0;i<arr.length;i+=2){
        person[arr[i]]=arr[i+1]
    }
    return person

}


module.exports = CreateObject;
