interface Ipermission{
    'getUsers' :{
        all: String[];
        read: String[];
        write:String[];
        delete:String[];
    }
}
interface Iusers{
    traineeEmail: string;
    reviewerEmail: string;
};
export{Ipermission};
export {Iusers};