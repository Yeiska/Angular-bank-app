export interface   Account {
    ownerName: string;
    ownerLastName: string;
    totalBalance: number;
    transactions: Transactions[];
}
 export interface Transactions {
    type: string,
    description: string,
    amount: number;
}
