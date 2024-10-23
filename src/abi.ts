
export const ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_username",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_damage",
				"type": "uint256"
			}
		],
		"name": "Hit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "enum Minecraft.characterState",
				"name": "_characterstate",
				"type": "uint8"
			}
		],
		"name": "changeCharacter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "enum Minecraft.Mode",
				"name": "_mode",
				"type": "uint8"
			}
		],
		"name": "changeMode",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "character",
		"outputs": [
			{
				"internalType": "string",
				"name": "username",
				"type": "string"
			},
			{
				"internalType": "enum Minecraft.characterState",
				"name": "state",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "HP",
				"type": "uint256"
			},
			{
				"internalType": "enum Minecraft.Mode",
				"name": "mode",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]