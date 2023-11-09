/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { getContract, GetContractReturnType, PublicClient } from 'viem';

export const y2KFinanceVotingLockedAbi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_lockToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_rewardAddr1',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_rewardAddr2',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_maxEpochs',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_minEpochs',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'governanceToken',
        type: 'address',
      },
    ],
    name: 'CannotWhitelistGovernanceToken',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'maxEpochs',
        type: 'uint256',
      },
    ],
    name: 'EpochMaxReached',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'epochStart',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'now',
        type: 'uint256',
      },
    ],
    name: 'EpochStartInvalid',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'balance',
        type: 'uint256',
      },
    ],
    name: 'FundsInLockPeriod',
    type: 'error',
  },
  {
    inputs: [],
    name: 'IncreaseLockEpochsNotGTZero',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InsufficientAmount',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InsufficientBalance',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'available',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'rewardAmount',
        type: 'uint256',
      },
    ],
    name: 'InsufficientFundsForRewards',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'maxEpochs',
        type: 'uint256',
      },
    ],
    name: 'LockEpochsMax',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'minEpochs',
        type: 'uint256',
      },
    ],
    name: 'LockEpochsMin',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NotWhitelisted',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'tokenState',
        type: 'bool',
      },
    ],
    name: 'ChangeERC20Whiltelist',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'currentTime',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'flag',
        type: 'bool',
      },
    ],
    name: 'ChangeEnforceTime',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'currentTime',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldEpochs',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newEpochs',
        type: 'uint256',
      },
    ],
    name: 'ChangeMaxLockEpochs',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'lockedEpochs',
        type: 'uint256',
      },
    ],
    name: 'Deposit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Paused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'RecoveredERC20',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'RecoveredERC721',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'totalBalance',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'lockedEpochs',
        type: 'uint256',
      },
    ],
    name: 'Relock',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'reward',
        type: 'uint256',
      },
    ],
    name: 'RewardPaid',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'epochId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'reward1',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'reward2',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'start',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'finish',
        type: 'uint256',
      },
    ],
    name: 'SetNextReward',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Unpaused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'currentId',
        type: 'uint256',
      },
    ],
    name: 'UpdatedEpoch',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Withdrawn',
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
    name: 'accounts',
    outputs: [
      {
        internalType: 'uint256',
        name: 'balance',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'lockEpochs',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'lastEpochPaid',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'rewards1',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'rewards2',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'epochId',
        type: 'uint256',
      },
    ],
    name: 'balanceOfInEpoch',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: 'flag',
        type: 'bool',
      },
    ],
    name: 'changeEnforceTime',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_maxEpochs',
        type: 'uint256',
      },
    ],
    name: 'changeMaxEpochs',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'tokenAddress',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'flag',
        type: 'bool',
      },
    ],
    name: 'changeRecoverWhitelist',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'claimReward',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'currentEpoch',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'lockEpochs',
        type: 'uint256',
      },
    ],
    name: 'deposit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'enforceTime',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
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
    name: 'epochs',
    outputs: [
      {
        internalType: 'uint256',
        name: 'start',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'finish',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'totalLocked',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'rewards1',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'rewards2',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'isSet',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'exit',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'getAccount',
    outputs: [
      {
        internalType: 'uint256',
        name: 'balance',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'lockEpochs',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'lastEpochPaid',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'rewards1',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'rewards2',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getCurrentEpoch',
    outputs: [
      {
        internalType: 'uint256',
        name: 'start',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'finish',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'locked',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'rewards1',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'rewards2',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'isSet',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'epochId',
        type: 'uint256',
      },
    ],
    name: 'getEpoch',
    outputs: [
      {
        internalType: 'uint256',
        name: 'start',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'finish',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'locked',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'rewards1',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'rewards2',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'isSet',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'epochId',
        type: 'uint256',
      },
    ],
    name: 'getEpochAccountInfo',
    outputs: [
      {
        internalType: 'uint256',
        name: 'balance',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'start',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'finish',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'locked',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'userRewards1',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'userRewards2',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'isSet',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getNextEpoch',
    outputs: [
      {
        internalType: 'uint256',
        name: 'start',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'finish',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'locked',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'rewards1',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'rewards2',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'isSet',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'lockToken',
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
    name: 'maxEpochs',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'minEpochs',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'nextUnsetEpoch',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
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
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'tokenAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenAmount',
        type: 'uint256',
      },
    ],
    name: 'recoverERC20',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'tokenAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'recoverERC721',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
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
    name: 'rewardToken',
    outputs: [
      {
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'rewards',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'rewardsPaid',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'reward1',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'reward2',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'epochDurationInDays',
        type: 'uint256',
      },
    ],
    name: 'setNextEpoch',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'reward1',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'reward2',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'epochDurationInDays',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'epochStart',
        type: 'uint256',
      },
    ],
    name: 'setNextEpoch_start',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalAssets',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalLocked',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'updateAccount',
    outputs: [
      {
        internalType: 'uint256',
        name: 'balance',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'lockEpochs',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'lastEpochPaid',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'rewards1',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'rewards2',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'updateEpochs',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'whitelistRecoverERC20',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;

export type Y2KFinanceVotingLocked = typeof y2KFinanceVotingLockedAbi;
export type Y2KFinanceVotingLockedContract = GetContractReturnType<Y2KFinanceVotingLocked, PublicClient>;

export class Y2KFinanceVotingLocked__factory {
  static connect(address: string, client: PublicClient) {
    return getContract({ address, abi: y2KFinanceVotingLockedAbi, publicClient: client });
  }
}
