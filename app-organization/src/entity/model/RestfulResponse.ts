export class RestfulResponse{
    code: number;
    msg: string;
    data: any;
    meta: any;
    constructor(options: {
        code: number,
        msg: string,
        data: any,
        meta: any,
    }) {
        this.code = options.code || 0,
        this.msg = options.msg || '',
        this.data = options.data || {},
        this.meta = options.meta || {}
    }
}
