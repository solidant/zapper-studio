/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { getContract, GetContractReturnType, PublicClient } from 'viem';

export const pancakeswapPoolDeployerAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'factory',
        type: 'address',
      },
    ],
    name: 'SetFactoryAddress',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'factory',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'token0',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'token1',
        type: 'address',
      },
      {
        internalType: 'uint24',
        name: 'fee',
        type: 'uint24',
      },
      {
        internalType: 'int24',
        name: 'tickSpacing',
        type: 'int24',
      },
    ],
    name: 'deploy',
    outputs: [
      {
        internalType: 'address',
        name: 'pool',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'factoryAddress',
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
    inputs: [],
    name: 'parameters',
    outputs: [
      {
        internalType: 'address',
        name: 'factory',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'token0',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'token1',
        type: 'address',
      },
      {
        internalType: 'uint24',
        name: 'fee',
        type: 'uint24',
      },
      {
        internalType: 'int24',
        name: 'tickSpacing',
        type: 'int24',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_factoryAddress',
        type: 'address',
      },
    ],
    name: 'setFactoryAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;

export type PancakeswapPoolDeployer = typeof pancakeswapPoolDeployerAbi;
export type PancakeswapPoolDeployerContract = GetContractReturnType<PancakeswapPoolDeployer, PublicClient>;

export class PancakeswapPoolDeployer__factory {
  static connect(address: string, client: PublicClient) {
    return getContract({ address, abi: pancakeswapPoolDeployerAbi, publicClient: client });
  }
}
