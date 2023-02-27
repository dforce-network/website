var abiVote = [
    {
        constant: false,
        inputs: [{ name: "_option", type: "uint256" }],
        name: "vote",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [{ name: "", type: "address" }],
        name: "isVote",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "endTime",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [{ name: "_option", type: "uint256" }],
        name: "getTotalVote",
        outputs: [{ name: "result", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [{ name: "_endTime", type: "uint256" }],
        name: "setEndTime",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "token",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [{ name: "_token", type: "address" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor"
    }
];


const abiDF = [{
    "constant": false,
    "inputs": [{
        "name": "_owner",
        "type": "address"
    },
    {
        "name": "value",
        "type": "uint256"
    }
    ],
    "name": "allocateTo",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "constant": false,
    "inputs": [{
        "name": "_spender",
        "type": "address"
    },
    {
        "name": "_value",
        "type": "uint256"
    }
    ],
    "name": "approve",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "constant": false,
    "inputs": [{
        "name": "_spender",
        "type": "address"
    },
    {
        "name": "_subtractedValue",
        "type": "uint256"
    }
    ],
    "name": "decreaseApproval",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "constant": false,
    "inputs": [{
        "name": "_spender",
        "type": "address"
    },
    {
        "name": "_addedValue",
        "type": "uint256"
    }
    ],
    "name": "increaseApproval",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "constant": false,
    "inputs": [{
        "name": "_to",
        "type": "address"
    },
    {
        "name": "_value",
        "type": "uint256"
    }
    ],
    "name": "transfer",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "constant": false,
    "inputs": [{
        "name": "_from",
        "type": "address"
    },
    {
        "name": "_to",
        "type": "address"
    },
    {
        "name": "_value",
        "type": "uint256"
    }
    ],
    "name": "transferFrom",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [{
        "name": "_initialAmount",
        "type": "uint256"
    },
    {
        "name": "_tokenName",
        "type": "string"
    },
    {
        "name": "_decimalUnits",
        "type": "uint8"
    },
    {
        "name": "_tokenSymbol",
        "type": "string"
    }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
},
{
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "owner",
        "type": "address"
    },
    {
        "indexed": true,
        "name": "spender",
        "type": "address"
    },
    {
        "indexed": false,
        "name": "value",
        "type": "uint256"
    }
    ],
    "name": "Approval",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "from",
        "type": "address"
    },
    {
        "indexed": true,
        "name": "to",
        "type": "address"
    },
    {
        "indexed": false,
        "name": "value",
        "type": "uint256"
    }
    ],
    "name": "Transfer",
    "type": "event"
},
{
    "constant": true,
    "inputs": [{
        "name": "_owner",
        "type": "address"
    },
    {
        "name": "_spender",
        "type": "address"
    }
    ],
    "name": "allowance",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": true,
    "inputs": [{
        "name": "_owner",
        "type": "address"
    }],
    "name": "balanceOf",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [{
        "name": "",
        "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [{
        "name": "",
        "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [{
        "name": "",
        "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}
];


var addressDF = "0x431ad2ff6a9c365805ebad47ee021148d6f7dbe0";
var addressVote_001 = "0x12B0938E71B15aD42eFF3479Ac2874F6b5Cf40E3";
var addressVote_002 = "0xD4573F462d4Fc4b0f0932Ab9315d194A58a7427E";
var addressVote_003 = "0xC09D8215Cb467c31452F014B3d9f7694d83065BF";
