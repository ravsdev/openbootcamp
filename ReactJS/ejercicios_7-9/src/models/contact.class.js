/**
 * Basic contact class
 */
export class Contact{
    name='';
    status=false;

    /**
     * 
     * @param {name:string} name 
     * @param {status:boolean} status 
     */
    constructor(name,status=false){
        this.name=name;
        this.status=status;
    }

}