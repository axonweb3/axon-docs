"use strict";(self.webpackChunkaxon_docs=self.webpackChunkaxon_docs||[]).push([[440],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>d});var a=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function p(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},p=Object.keys(n);for(a=0;a<p.length;a++)t=p[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(n);for(a=0;a<p.length;a++)t=p[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var y=a.createContext({}),l=function(n){var e=a.useContext(y),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},u=function(n){var e=l(n.components);return a.createElement(y.Provider,{value:e},n.children)},o="mdxType",c={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(n,e){var t=n.components,i=n.mdxType,p=n.originalType,y=n.parentName,u=s(n,["components","mdxType","originalType","parentName"]),o=l(t),m=i,d=o["".concat(y,".").concat(m)]||o[m]||c[m]||p;return t?a.createElement(d,r(r({ref:e},u),{},{components:t})):a.createElement(d,r({ref:e},u))}));function d(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var p=t.length,r=new Array(p);r[0]=m;var s={};for(var y in e)hasOwnProperty.call(e,y)&&(s[y]=e[y]);s.originalType=n,s[o]="string"==typeof n?n:i,r[1]=s;for(var l=2;l<p;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2575:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>y,contentTitle:()=>r,default:()=>c,frontMatter:()=>p,metadata:()=>s,toc:()=>l});var a=t(7462),i=(t(7294),t(3905));t(4996);const p={title:"System Contracts",hide_title:!0,sidebar_position:1},r="System Contracts",s={unversionedId:"contract/system_contacts",id:"contract/system_contacts",title:"System Contracts",description:"Metadata",source:"@site/docs/contract/system_contacts.md",sourceDirName:"contract",slug:"/contract/system_contacts",permalink:"/contract/system_contacts",draft:!1,editUrl:"https://github.com/axonweb3/axon-docs/edit/main/docs/contract/system_contacts.md",tags:[],version:"current",lastUpdatedAt:1696753662,formattedLastUpdatedAt:"Oct 8, 2023",sidebarPosition:1,frontMatter:{title:"System Contracts",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Contract Info",permalink:"/category/contract-info"},next:{title:"Precompile Contracts",permalink:"/contract/precompile_contracts"}},y={},l=[{value:"Metadata",id:"metadata",level:2},{value:"Address",id:"address",level:3},{value:"ABI",id:"abi",level:3},{value:"CKB Light Client",id:"ckb-light-client",level:2},{value:"Address",id:"address-1",level:3},{value:"ABI",id:"abi-1",level:3},{value:"Image Cell",id:"image-cell",level:2},{value:"Address",id:"address-2",level:3},{value:"ABI",id:"abi-2",level:3}],u={toc:l},o="wrapper";function c(n){let{components:e,...t}=n;return(0,i.kt)(o,(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system-contracts"},"System Contracts"),(0,i.kt)("h2",{id:"metadata"},"Metadata"),(0,i.kt)("h3",{id:"address"},"Address"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"0x10000000000000000001\n")),(0,i.kt)("h3",{id:"abi"},"ABI"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"(click here to view ABI)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "inputs": [\n      {\n        "components": [\n          {\n            "components": [\n              {\n                "internalType": "uint64",\n                "name": "start",\n                "type": "uint64"\n              },\n              {\n                "internalType": "uint64",\n                "name": "end",\n                "type": "uint64"\n              }\n            ],\n            "internalType": "struct MetadataManager.MetadataVersion",\n            "name": "version",\n            "type": "tuple"\n          },\n          {\n            "internalType": "uint64",\n            "name": "epoch",\n            "type": "uint64"\n          },\n          {\n            "internalType": "uint64",\n            "name": "gas_limit",\n            "type": "uint64"\n          },\n          {\n            "internalType": "uint64",\n            "name": "gas_price",\n            "type": "uint64"\n          },\n          {\n            "internalType": "uint64",\n            "name": "interval",\n            "type": "uint64"\n          },\n          {\n            "components": [\n              {\n                "internalType": "bytes",\n                "name": "bls_pub_key",\n                "type": "bytes"\n              },\n              {\n                "internalType": "bytes",\n                "name": "pub_key",\n                "type": "bytes"\n              },\n              {\n                "internalType": "address",\n                "name": "address_",\n                "type": "address"\n              },\n              {\n                "internalType": "uint32",\n                "name": "propose_weight",\n                "type": "uint32"\n              },\n              {\n                "internalType": "uint32",\n                "name": "vote_weight",\n                "type": "uint32"\n              }\n            ],\n            "internalType": "struct MetadataManager.ValidatorExtend[]",\n            "name": "verifier_list",\n            "type": "tuple[]"\n          },\n          {\n            "internalType": "uint64",\n            "name": "propose_ratio",\n            "type": "uint64"\n          },\n          {\n            "internalType": "uint64",\n            "name": "prevote_ratio",\n            "type": "uint64"\n          },\n          {\n            "internalType": "uint64",\n            "name": "precommit_ratio",\n            "type": "uint64"\n          },\n          {\n            "internalType": "uint64",\n            "name": "brake_ratio",\n            "type": "uint64"\n          },\n          {\n            "internalType": "uint64",\n            "name": "tx_num_limit",\n            "type": "uint64"\n          },\n          {\n            "internalType": "uint64",\n            "name": "max_tx_size",\n            "type": "uint64"\n          }\n        ],\n        "internalType": "struct MetadataManager.Metadata",\n        "name": "metadata",\n        "type": "tuple"\n      }\n    ],\n    "name": "appendMetadata",\n    "outputs": [],\n    "stateMutability": "nonpayable",\n    "type": "function"\n  },\n  {\n    "inputs": [],\n    "name": "construct",\n    "outputs": [],\n    "stateMutability": "nonpayable",\n    "type": "function"\n  },\n  {\n    "inputs": [\n      {\n        "internalType": "uint64",\n        "name": "epoch",\n        "type": "uint64"\n      }\n    ],\n    "name": "getMetadata",\n    "outputs": [\n      {\n        "components": [\n          {\n            "components": [\n              {\n                "internalType": "uint64",\n                "name": "start",\n                "type": "uint64"\n              },\n              {\n                "internalType": "uint64",\n                "name": "end",\n                "type": "uint64"\n              }\n            ],\n            "internalType": "struct MetadataManager.MetadataVersion",\n            "name": "version",\n            "type": "tuple"\n          },\n          {\n            "internalType": "uint64",\n            "name": "epoch",\n            "type": "uint64"\n          },\n          {\n            "internalType": "uint64",\n            "name": "gas_limit",\n            "type": "uint64"\n          },\n          {\n            "internalType": "uint64",\n            "name": "gas_price",\n            "type": "uint64"\n          },\n          {\n            "internalType": "uint64",\n            "name": "interval",\n            "type": "uint64"\n          },\n          {\n            "components": [\n              {\n                "internalType": "bytes",\n                "name": "bls_pub_key",\n                "type": "bytes"\n              },\n              {\n                "internalType": "bytes",\n                "name": "pub_key",\n                "type": "bytes"\n              },\n              {\n                "internalType": "address",\n                "name": "address_",\n                "type": "address"\n              },\n              {\n                "internalType": "uint32",\n                "name": "propose_weight",\n                "type": "uint32"\n              },\n              {\n                "internalType": "uint32",\n                "name": "vote_weight",\n                "type": "uint32"\n              }\n            ],\n            "internalType": "struct MetadataManager.ValidatorExtend[]",\n            "name": "verifier_list",\n            "type": "tuple[]"\n          },\n          {\n            "internalType": "uint64",\n            "name": "propose_ratio",\n            "type": "uint64"\n          },\n          {\n            "internalType": "uint64",\n            "name": "prevote_ratio",\n            "type": "uint64"\n          },\n          {\n            "internalType": "uint64",\n            "name": "precommit_ratio",\n            "type": "uint64"\n          },\n          {\n            "internalType": "uint64",\n            "name": "brake_ratio",\n            "type": "uint64"\n          },\n          {\n            "internalType": "uint64",\n            "name": "tx_num_limit",\n            "type": "uint64"\n          },\n          {\n            "internalType": "uint64",\n            "name": "max_tx_size",\n            "type": "uint64"\n          }\n        ],\n        "internalType": "struct MetadataManager.Metadata",\n        "name": "",\n        "type": "tuple"\n      }\n    ],\n    "stateMutability": "view",\n    "type": "function"\n  },\n  \n  {\n    "inputs": [\n      {\n        "internalType": "address",\n        "name": "relayer",\n        "type": "address"\n      }\n    ],\n    "name": "isVerifier",\n    "outputs": [\n      {\n        "internalType": "bool",\n        "name": "",\n        "type": "bool"\n      }\n    ],\n    "stateMutability": "view",\n    "type": "function"\n  },\n  {\n    "inputs": [],\n    "name": "verifierList",\n    "outputs": [\n      {\n        "internalType": "address[]",\n        "name": "",\n        "type": "address[]"\n      },\n      {\n        "internalType": "uint256",\n        "name": "",\n        "type": "uint256"\n      }\n    ],\n    "stateMutability": "view",\n    "type": "function"\n  }\n]\n'))),(0,i.kt)("h2",{id:"ckb-light-client"},"CKB Light Client"),(0,i.kt)("h3",{id:"address-1"},"Address"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"0x10000000000000000003\n")),(0,i.kt)("h3",{id:"abi-1"},"ABI"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"(click here to view ABI)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "inputs": [\n      {\n        "internalType": "bytes32[]",\n        "name": "blockHashs",\n        "type": "bytes32[]"\n      }\n    ],\n    "name": "rollback",\n    "outputs": [],\n    "stateMutability": "view",\n    "type": "function"\n  },\n  {\n    "inputs": [\n      {\n        "internalType": "bool",\n        "name": "allowRead",\n        "type": "bool"\n      }\n    ],\n    "name": "setState",\n    "outputs": [],\n    "stateMutability": "view",\n    "type": "function"\n  },\n  {\n    "inputs": [\n      {\n        "components": [\n          {\n            "internalType": "uint32",\n            "name": "version",\n            "type": "uint32"\n          },\n          {\n            "internalType": "uint32",\n            "name": "compactTarget",\n            "type": "uint32"\n          },\n          {\n            "internalType": "uint64",\n            "name": "timestamp",\n            "type": "uint64"\n          },\n          {\n            "internalType": "uint64",\n            "name": "number",\n            "type": "uint64"\n          },\n          {\n            "internalType": "uint64",\n            "name": "epoch",\n            "type": "uint64"\n          },\n          {\n            "internalType": "bytes32",\n            "name": "parentHash",\n            "type": "bytes32"\n          },\n          {\n            "internalType": "bytes32",\n            "name": "transactionsRoot",\n            "type": "bytes32"\n          },\n          {\n            "internalType": "bytes32",\n            "name": "proposalsHash",\n            "type": "bytes32"\n          },\n          {\n            "internalType": "bytes32",\n            "name": "unclesHash",\n            "type": "bytes32"\n          },\n          {\n            "internalType": "bytes32",\n            "name": "dao",\n            "type": "bytes32"\n          },\n          {\n            "internalType": "uint128",\n            "name": "nonce",\n            "type": "uint128"\n          },\n          {\n            "internalType": "bytes32",\n            "name": "blockHash",\n            "type": "bytes32"\n          }\n        ],\n        "internalType": "struct CkbType.Header[]",\n        "name": "headers",\n        "type": "tuple[]"\n      }\n    ],\n    "name": "update",\n    "outputs": [],\n    "stateMutability": "view",\n    "type": "function"\n  }\n]\n'))),(0,i.kt)("h2",{id:"image-cell"},"Image Cell"),(0,i.kt)("h3",{id:"address-2"},"Address"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"0x10000000000000000004\n")),(0,i.kt)("h3",{id:"abi-2"},"ABI"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"(click here to view ABI)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "inputs": [\n      {\n        "components": [\n          {\n            "components": [\n              {\n                "internalType": "bytes32",\n                "name": "txHash",\n                "type": "bytes32"\n              },\n              {\n                "internalType": "uint32",\n                "name": "index",\n                "type": "uint32"\n              }\n            ],\n            "internalType": "struct CkbType.OutPoint[]",\n            "name": "txInputs",\n            "type": "tuple[]"\n          },\n          {\n            "components": [\n              {\n                "internalType": "bytes32",\n                "name": "txHash",\n                "type": "bytes32"\n              },\n              {\n                "internalType": "uint32",\n                "name": "index",\n                "type": "uint32"\n              }\n            ],\n            "internalType": "struct CkbType.OutPoint[]",\n            "name": "txOutputs",\n            "type": "tuple[]"\n          }\n        ],\n        "internalType": "struct ImageCell.BlockRollBlack[]",\n        "name": "blocks",\n        "type": "tuple[]"\n      }\n    ],\n    "name": "rollback",\n    "outputs": [],\n    "stateMutability": "view",\n    "type": "function"\n  },\n  {\n    "inputs": [\n      {\n        "internalType": "bool",\n        "name": "allowRead",\n        "type": "bool"\n      }\n    ],\n    "name": "setState",\n    "outputs": [],\n    "stateMutability": "view",\n    "type": "function"\n  },\n  {\n    "inputs": [\n      {\n        "components": [\n          {\n            "internalType": "uint64",\n            "name": "blockNumber",\n            "type": "uint64"\n          },\n          {\n            "components": [\n              {\n                "internalType": "bytes32",\n                "name": "txHash",\n                "type": "bytes32"\n              },\n              {\n                "internalType": "uint32",\n                "name": "index",\n                "type": "uint32"\n              }\n            ],\n            "internalType": "struct CkbType.OutPoint[]",\n            "name": "txInputs",\n            "type": "tuple[]"\n          },\n          {\n            "components": [\n              {\n                "components": [\n                  {\n                    "internalType": "bytes32",\n                    "name": "txHash",\n                    "type": "bytes32"\n                  },\n                  {\n                    "internalType": "uint32",\n                    "name": "index",\n                    "type": "uint32"\n                  }\n                ],\n                "internalType": "struct CkbType.OutPoint",\n                "name": "outPoint",\n                "type": "tuple"\n              },\n              {\n                "components": [\n                  {\n                    "internalType": "uint64",\n                    "name": "capacity",\n                    "type": "uint64"\n                  },\n                  {\n                    "components": [\n                      {\n                        "internalType": "bytes32",\n                        "name": "codeHash",\n                        "type": "bytes32"\n                      },\n                      {\n                        "internalType": "enum CkbType.ScriptHashType",\n                        "name": "hashType",\n                        "type": "uint8"\n                      },\n                      {\n                        "internalType": "bytes",\n                        "name": "args",\n                        "type": "bytes"\n                      }\n                    ],\n                    "internalType": "struct CkbType.Script",\n                    "name": "lock",\n                    "type": "tuple"\n                  },\n                  {\n                    "components": [\n                      {\n                        "internalType": "bytes32",\n                        "name": "codeHash",\n                        "type": "bytes32"\n                      },\n                      {\n                        "internalType": "enum CkbType.ScriptHashType",\n                        "name": "hashType",\n                        "type": "uint8"\n                      },\n                      {\n                        "internalType": "bytes",\n                        "name": "args",\n                        "type": "bytes"\n                      }\n                    ],\n                    "internalType": "struct CkbType.Script[]",\n                    "name": "type_",\n                    "type": "tuple[]"\n                  }\n                ],\n                "internalType": "struct CkbType.CellOutput",\n                "name": "output",\n                "type": "tuple"\n              },\n              {\n                "internalType": "bytes",\n                "name": "data",\n                "type": "bytes"\n              }\n            ],\n            "internalType": "struct CkbType.CellInfo[]",\n            "name": "txOutputs",\n            "type": "tuple[]"\n          }\n        ],\n        "internalType": "struct ImageCell.BlockUpdate[]",\n        "name": "blocks",\n        "type": "tuple[]"\n      }\n    ],\n    "name": "update",\n    "outputs": [],\n    "stateMutability": "view",\n    "type": "function"\n  }\n]\n'))))}c.isMDXComponent=!0}}]);