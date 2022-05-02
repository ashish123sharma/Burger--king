let orderfood=()=>{
    let order = document.getElementById("burger").value;
    let status = "open";
    let promise = new Promise(function (resolve,reject){
        let time = Math.random()*10*100;

        setTimeout(function (){
            if(status =='open'){
                resolve (order);
            }else{
                reject();
            }

        },time)
    })
    promise.then(function (resolve){
        console.log(`${resolve} is ready`);
    })
//    promise.then(function (reject){
//        console.log("Food is not available")
//    })

}