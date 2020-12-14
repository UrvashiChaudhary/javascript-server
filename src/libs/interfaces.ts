interface Ipermission {
    'getUsers': {
        all: string[];
        read: string[];
        write: string[];
        delete: string[];
        update: string[];
    };
}
interface Iusers {
    traineeEmail: string;
    reviewerEmail: string;
}
export { Ipermission };
export { Iusers };