pragma solidity ^0.4.22;


contract Drug {
   enum Status {
        New,
        Submitted,
        Waiting ,
        Approved,
        Denied
    }
  constructor() {
  }
}
