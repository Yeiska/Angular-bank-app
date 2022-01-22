import { Account, Transactions } from "./models/account.model";

export const TRANSACTIONS: Transactions[] = [
  {
    "type": "debit",
    "description": "Deposit",
    "amount": 100
  },
  {
    "type": "debit",
    "description": "Deposit",
    "amount": 300
  },
  {
    "type": "credit",
    "description": "Olive Graden",
    "amount": 50
  },
  {
    "type": "credit",
    "description": "Walmart",
    "amount": 100
  },
  {
    "type": "debit",
    "description": "Deposit",
    "amount": 1000
  },
  {
    "type": "credit",
    "description": "Panera",
    "amount": 40
  },
  {
    "type": "credit",
    "description": "7 Eleven",
    "amount": 25
  }
]

export const ACCOUNT: Account = {
  ownerName: "Jon",
  ownerLastName: "Snow",
  totalBalance: 2000,
  transactions: TRANSACTIONS
}