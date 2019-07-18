let dieuKhien=new SwitchButton();
let den=new ElectricLamp();
// function xyly() {
//     let lamp = document.getElementById("myImage");
//     // if(dieuKhien.status){
//     //     dieuKhien.connectToLamp(den);
//     //     lamp.src="./images/2.jpg";
//     //     dieuKhien.status=false;
//     // }else{
//     //     lamp.src="./images/1.jpg";
//     //     dieuKhien.status=true;
//     // }
// }
dieuKhien.switchOff();
dieuKhien.connectToLamp(den);
console.log(den);
den.electricLamp();

