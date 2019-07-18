let ElectricLamp=function () {
    this.status=status;
    this.turnOff=function () {
        this.status=false;
    }
    this.turnOn=function () {
        this.status=true;
    }
    this.electricLamp=function () {
        if(this.status){
            alert("Đèn Đang Mở")
        }else{
            alert("Đèn Đang Tắt");
        }
    }
}
