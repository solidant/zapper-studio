/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { getContract, GetContractReturnType, PublicClient } from 'viem';

export const phutureVTokenFactoryAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'vToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
    ],
    name: 'VTokenCreated',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'vTokenOf',
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
] as const;

export type PhutureVTokenFactory = typeof phutureVTokenFactoryAbi;
export type PhutureVTokenFactoryContract = GetContractReturnType<PhutureVTokenFactory, PublicClient>;

export class PhutureVTokenFactory__factory {
  static connect(address: string, client: PublicClient) {
    return getContract({ address, abi: phutureVTokenFactoryAbi, publicClient: client });
  }
}
