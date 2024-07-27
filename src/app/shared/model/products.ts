export interface Iproduct {
    pname: string;
    pid: string;
    pstatus: Ipstatus ;
}

export type Ipstatus = "In_Progress" | "Delivered" | "Dispatched"