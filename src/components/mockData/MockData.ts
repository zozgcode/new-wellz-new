import { Account } from "@/utils/types";

export const mockAccounts: Account[] = [
  {
    account_id: "ACC001",
    holder: {
      firstName: "James",
      lastName: "Radford",
      jointNames: "",
      username: "sample1",
      password: "sample1",
    },
    bank_details: {
      account_type: "Checking",
      balance_usd: 2500000.0,
    },
    transaction_mgs_code: {
      transaction_text_msg: "",
      transaction_code: "",
      wireDate: true,
    },
    transaction_history: [
      {
        transaction_id: "TXN001",
        dateTime: "March 23rd 2024, 3:32:32 am",
        description: "Sinlair's Store - Trx",
        status: "Success",
        amount_usd: 452.0,
        account_no: "****5009",
      },
      {
        transaction_id: "TXN002",
        dateTime: "March 20th 2024, 2:02:22 am",
        description: "Justin Loci",
        status: "Success",
        amount_usd: 1152.21,
        account_no: "****7676",
      },
      {
        transaction_id: "TXN003",
        dateTime: "March 20th 2024, 2:02:22 am",
        description: "Transfer",
        status: "Success",
        amount_usd: -100.0,
        account_no: "****4409",
      },
      {
        transaction_id: "TXN004",
        dateTime: "March 20th 2024, 2:02:22 am",
        description: "Payment",
        status: "Success",
        amount_usd: -50.0,
        account_no: "****5093",
      },
      {
        transaction_id: "TXN005",
        dateTime: "March 20th 2024, 2:02:22 am",
        description: "Online Purchase",
        status: "Success",
        amount_usd: -75.0,
        account_no: "****2334",
      },
      {
        transaction_id: "TXN006",
        dateTime: "March 20th 2024, 2:02:22 am",
        description: "ATM Withdrawal",
        status: "Success",
        amount_usd: -150.0,
        account_no: "****3213",
      },
      {
        transaction_id: "TXN007",
        dateTime: "March 20th 2024, 2:02:22 am",
        description: "Transfer",
        status: "Pending",
        amount_usd: 200.0,
        account_no: "****4434",
      },
    ],
  },
  {
    account_id: "ACC002",
    holder: {
      firstName: "Lynn & Graham",
      lastName: "",
      jointNames: "Lynn Nolan Bishop & Graham Linda",
      username: "bishoplinda",
      password: "honesty21",
    },
    bank_details: {
      account_type: "Checking",
      balance_usd: 3700000.0,
    },
    transaction_mgs_code: {
      transaction_text_msg: "WTC - WIRE TRANSFER CODE",
      transaction_code: "29372326437846234234234523463",
      wireDate: true,
    },
    transaction_history: [
      {
        transaction_id: "TXN001",
        dateTime: "June 30 2023, 3:32:32 am",
        description: "WIRE TRANSFER",
        status: "Success",
        amount_usd: 580000.0,
        account_no: "****5009",
      },
      {
        transaction_id: "TXN002",
        dateTime: "April 15 2023, 1:04:02 pm",
        description: "Partnership Funding",
        status: "Success",
        amount_usd: 250000.0,
        account_no: "****5009",
      },
      {
        transaction_id: "TXN003",
        dateTime: "February 8 2023, 10:11:22 am",
        description: "Refund",
        status: "Success",
        amount_usd: 650000.0,
        account_no: "****5009",
      },
      {
        transaction_id: "TXN004",
        dateTime: "December 2 2022, 7:08:32 am",
        description: "Insurance Claim",
        status: "Success",
        amount_usd: 175000.0,
        account_no: "****5009",
      },
      {
        transaction_id: "TXN005",
        dateTime: "March 23 2022, 7:15:02 pm",
        description: "Project Milestone Payment",
        status: "Success",
        amount_usd: 965000.0,
        account_no: "****5009",
      },
    ],
  },
  {
    account_id: "ACC003",
    holder: {
      firstName: "Shannon Anthony",
      lastName: "James",
      jointNames: "",
      username: "shannon_anth15",
      password: "jam0!21",
    },
    bank_details: {
      account_type: "Checking",
      balance_usd: 5100000.0,
    },
    transaction_mgs_code: {
      transaction_text_msg:
        "Please enter the code sent to you, to continue this transaction.",
      transaction_code: "29372326437846234234234523463",
      wireDate: false,
    },
    transaction_history: [
      {
        transaction_id: "TXN001",
        dateTime: "June 30 2016, 3:32:32 am",
        description: "WIRE TRANSFER",
        status: "Success",
        amount_usd: 580000.0,
        account_no: "****5009",
      },
      {
        transaction_id: "TXN002",
        dateTime: "April 15 2016, 1:04:02 pm",
        description: "Partnership Funding",
        status: "Success",
        amount_usd: 250000.0,
        account_no: "****2930",
      },
      {
        transaction_id: "TXN003",
        dateTime: "February 8 2016, 10:11:22 am",
        description: "Refund",
        status: "Success",
        amount_usd: 650000.0,
        account_no: "****3839",
      },
      {
        transaction_id: "TXN004",
        dateTime: "December 2 2015, 7:08:32 am",
        description: "Insurance Claim",
        status: "Success",
        amount_usd: 175000.0,
        account_no: "****5009",
      },
      {
        transaction_id: "TXN005",
        dateTime: "March 23 2015, 7:15:02 pm",
        description: "Project Milestone Payment",
        status: "Success",
        amount_usd: 965000.0,
        account_no: "****5009",
      },
      {
        transaction_id: "344734",
        dateTime: "November 15, 2008, 7:20:15 am",
        description: "Project Completion Bonus",
        status: "Success",
        amount_usd: 18000.0,
        account_no: "****5012",
      },
      {
        transaction_id: "343r4",
        dateTime: "March 12, 2008, 10:45:00 am",
        description: "Client Payment",
        status: "Success",
        amount_usd: 45000.0,
        account_no: "****5013",
      },
      {
        transaction_id: "TXN0232",
        dateTime: "April 16, 2007, 2:45:15 pm",
        description: "Client Payment",
        status: "Success",
        amount_usd: 40000.0,
        account_no: "****5007",
      },
      {
        transaction_id: "TXN02324",
        dateTime: "March 24, 2007, 1:10:30 pm",
        description: "Freelance Contract",
        status: "Success",
        amount_usd: 17000.0,
        account_no: "****5008",
      },
      {
        transaction_id: "TXN00323",
        dateTime: "December 14, 2006, 10:15:45 am",
        description: "Client Payment",
        status: "Success",
        amount_usd: 15000.0,
        account_no: "****5001",
      },
      {
        transaction_id: "TXN0022",
        dateTime: "June 23, 2006, 1:30:00 pm",
        description: "Project Milestone Payment",
        status: "Success",
        amount_usd: 25000.0,
        account_no: "****5002",
      },
      {
        transaction_id: "TXN003234",
        dateTime: "April 8, 2006, 9:10:15 am",
        description: "Refund",
        status: "Success",
        amount_usd: 10000.0,
        account_no: "****5003",
      },
      {
        transaction_id: "TXN00423",
        dateTime: "January 19, 2006, 3:45:30 pm",
        description: "Service Revenue",
        status: "Success",
        amount_usd: 35000.0,
        account_no: "****5004",
      },
    ],
  },
];
