let SwitchButton=function () {
    this.status=status;

    this.connectToLamp=function (lamp) {
        lamp.status=this.status;
    }
    this.switchOn=function () {
        this.status=true;
    }
    this.switchOff=function () {
        this.status=false;
    }
}