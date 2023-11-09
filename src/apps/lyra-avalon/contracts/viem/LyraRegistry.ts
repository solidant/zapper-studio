/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { getContract, GetContractReturnType, PublicClient } from 'viem';

export const lyraRegistryAbi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'contractName',
        type: 'bytes32',
      },
    ],
    name: 'NonExistentGlobalContract',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'optionMarket',
        type: 'address',
      },
    ],
    name: 'NonExistentMarket',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'thrower',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'caller',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'nominatedOwner',
        type: 'address',
      },
    ],
    name: 'OnlyNominatedOwner',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'thrower',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'caller',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'OnlyOwner',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'thrower',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'market',
        type: 'address',
      },
    ],
    name: 'RemovingInvalidMarket',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'name',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
    ],
    name: 'GlobalAddressUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'contract OptionMarket',
        name: 'market',
        type: 'address',
      },
    ],
    name: 'MarketRemoved',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'contract OptionMarket',
        name: 'optionMarket',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'contract LiquidityPool',
            name: 'liquidityPool',
            type: 'address',
          },
          {
            internalType: 'contract LiquidityToken',
            name: 'liquidityToken',
            type: 'address',
          },
          {
            internalType: 'contract OptionGreekCache',
            name: 'greekCache',
            type: 'address',
          },
          {
            internalType: 'contract OptionMarket',
            name: 'optionMarket',
            type: 'address',
          },
          {
            internalType: 'contract OptionMarketPricer',
            name: 'optionMarketPricer',
            type: 'address',
          },
          {
            internalType: 'contract OptionToken',
            name: 'optionToken',
            type: 'address',
          },
          {
            internalType: 'contract PoolHedger',
            name: 'poolHedger',
            type: 'address',
          },
          {
            internalType: 'contract ShortCollateral',
            name: 'shortCollateral',
            type: 'address',
          },
          {
            internalType: 'contract GWAVOracle',
            name: 'gwavOracle',
            type: 'address',
          },
          {
            internalType: 'contract IERC20',
            name: 'quoteAsset',
            type: 'address',
          },
          {
            internalType: 'contract IERC20',
            name: 'baseAsset',
            type: 'address',
          },
        ],
        indexed: false,
        internalType: 'struct LyraRegistry.OptionMarketAddresses',
        name: 'market',
        type: 'tuple',
      },
    ],
    name: 'MarketUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'oldOwner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnerChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnerNominated',
    type: 'event',
  },
  {
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'contract LiquidityPool',
            name: 'liquidityPool',
            type: 'address',
          },
          {
            internalType: 'contract LiquidityToken',
            name: 'liquidityToken',
            type: 'address',
          },
          {
            internalType: 'contract OptionGreekCache',
            name: 'greekCache',
            type: 'address',
          },
          {
            internalType: 'contract OptionMarket',
            name: 'optionMarket',
            type: 'address',
          },
          {
            internalType: 'contract OptionMarketPricer',
            name: 'optionMarketPricer',
            type: 'address',
          },
          {
            internalType: 'contract OptionToken',
            name: 'optionToken',
            type: 'address',
          },
          {
            internalType: 'contract PoolHedger',
            name: 'poolHedger',
            type: 'address',
          },
          {
            internalType: 'contract ShortCollateral',
            name: 'shortCollateral',
            type: 'address',
          },
          {
            internalType: 'contract GWAVOracle',
            name: 'gwavOracle',
            type: 'address',
          },
          {
            internalType: 'contract IERC20',
            name: 'quoteAsset',
            type: 'address',
          },
          {
            internalType: 'contract IERC20',
            name: 'baseAsset',
            type: 'address',
          },
        ],
        internalType: 'struct LyraRegistry.OptionMarketAddresses',
        name: 'newMarketAddresses',
        type: 'tuple',
      },
    ],
    name: 'addMarket',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'contractName',
        type: 'bytes32',
      },
    ],
    name: 'getGlobalAddress',
    outputs: [
      {
        internalType: 'address',
        name: 'globalContract',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract OptionMarket',
        name: 'optionMarket',
        type: 'address',
      },
    ],
    name: 'getMarketAddresses',
    outputs: [
      {
        components: [
          {
            internalType: 'contract LiquidityPool',
            name: 'liquidityPool',
            type: 'address',
          },
          {
            internalType: 'contract LiquidityToken',
            name: 'liquidityToken',
            type: 'address',
          },
          {
            internalType: 'contract OptionGreekCache',
            name: 'greekCache',
            type: 'address',
          },
          {
            internalType: 'contract OptionMarket',
            name: 'optionMarket',
            type: 'address',
          },
          {
            internalType: 'contract OptionMarketPricer',
            name: 'optionMarketPricer',
            type: 'address',
          },
          {
            internalType: 'contract OptionToken',
            name: 'optionToken',
            type: 'address',
          },
          {
            internalType: 'contract PoolHedger',
            name: 'poolHedger',
            type: 'address',
          },
          {
            internalType: 'contract ShortCollateral',
            name: 'shortCollateral',
            type: 'address',
          },
          {
            internalType: 'contract GWAVOracle',
            name: 'gwavOracle',
            type: 'address',
          },
          {
            internalType: 'contract IERC20',
            name: 'quoteAsset',
            type: 'address',
          },
          {
            internalType: 'contract IERC20',
            name: 'baseAsset',
            type: 'address',
          },
        ],
        internalType: 'struct LyraRegistry.OptionMarketAddresses',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'globalAddresses',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract OptionMarket',
        name: '',
        type: 'address',
      },
    ],
    name: 'marketAddresses',
    outputs: [
      {
        internalType: 'contract LiquidityPool',
        name: 'liquidityPool',
        type: 'address',
      },
      {
        internalType: 'contract LiquidityToken',
        name: 'liquidityToken',
        type: 'address',
      },
      {
        internalType: 'contract OptionGreekCache',
        name: 'greekCache',
        type: 'address',
      },
      {
        internalType: 'contract OptionMarket',
        name: 'optionMarket',
        type: 'address',
      },
      {
        internalType: 'contract OptionMarketPricer',
        name: 'optionMarketPricer',
        type: 'address',
      },
      {
        internalType: 'contract OptionToken',
        name: 'optionToken',
        type: 'address',
      },
      {
        internalType: 'contract PoolHedger',
        name: 'poolHedger',
        type: 'address',
      },
      {
        internalType: 'contract ShortCollateral',
        name: 'shortCollateral',
        type: 'address',
      },
      {
        internalType: 'contract GWAVOracle',
        name: 'gwavOracle',
        type: 'address',
      },
      {
        internalType: 'contract IERC20',
        name: 'quoteAsset',
        type: 'address',
      },
      {
        internalType: 'contract IERC20',
        name: 'baseAsset',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'nominateNewOwner',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'nominatedOwner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'optionMarkets',
    outputs: [
      {
        internalType: 'contract OptionMarket',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract OptionMarket',
        name: 'market',
        type: 'address',
      },
    ],
    name: 'removeMarket',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32[]',
        name: 'names',
        type: 'bytes32[]',
      },
      {
        internalType: 'address[]',
        name: 'addresses',
        type: 'address[]',
      },
    ],
    name: 'updateGlobalAddresses',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;

export type LyraRegistry = typeof lyraRegistryAbi;
export type LyraRegistryContract = GetContractReturnType<LyraRegistry, PublicClient>;

export class LyraRegistry__factory {
  static connect(address: string, client: PublicClient) {
    return getContract({ address, abi: lyraRegistryAbi, publicClient: client });
  }
}
