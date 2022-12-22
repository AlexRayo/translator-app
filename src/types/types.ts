export type ResRegister = Array<{
    id: string;
    time: string;
    client: any;
    technology: string;
    saks: number;
    humidity: number;
    location: number;
    imperfection: number;
    QQ: number;
    TARA: number;
    TotalQQ: number;
  }>

  export type formParams = {
    client: {},
    technology: string,
    saks: number,
    humidity: number,
    location: number,
    imperfection: number,
    QQ: number,
    TARA: number,
    TotalQQ: number,
    register: ResRegister,
    clearForm(): void,
}