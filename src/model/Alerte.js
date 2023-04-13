export class Alerte{
    level;
    message;
    show = true;
    icon=null;
    constructor(level,message){
        this.level = level;
        this.message = message;
        if (this.level == 'sucess'){
            this.icon="mdi-check-bold"
        } else if(this.level == 'info'){
            this.icon="mdi-information-variant-circle-outline"
        } else if (this.level == 'warning'){
            this.icon="mdi-alert-outline"
        } else if (this.level == 'error'){
            this.icon="mdi-alert-octagram-outline"
        }
    }
}