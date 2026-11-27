
interface ResponseFormData<D = any> {
    message: string;
    data: D;
    status: boolean;
    error : any | null;
}