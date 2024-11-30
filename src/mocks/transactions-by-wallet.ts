export const transactionsByWallet = {
  data: {
    success: true,
    message: 'Last 10 transaction fetched successfully',
    result: [
      {
        timestamp: '2024-11-28T11:53:16.000Z',
        fee: 0.002415,
        fee_payer: 'E9vf42zJXFv8Ljop1cG68NAxLDat4ZEGEWDLfJVX38GF',
        signers: [
          'E9vf42zJXFv8Ljop1cG68NAxLDat4ZEGEWDLfJVX38GF',
          '3WuC9d4agjFmQauWQ2r8WSaby2VpsNVSYTcUdr3zQcR1',
          'DScDQ1zV4qVMU8HQmfcJkjZhfo5QqCWdV7dbxkb2gU9C',
        ],
        signatures: [
          '5Q91ujtsQLaC6tfAs8e18btpRS3Z9ubRANdZJAZe26ZnKaEjsYeb4a2hSsWYc8Je7dstxpznupSNeN9DraE7jc6e',
          '29nkTd3Eo2aPBb7KsGivY4pUAkXd9yUEZjh286Niog6j3sqq6dYbHv6iWJc7SWcFYRRLczcsk1cLBQZpBZMGvhS3',
          '4oqsbBKApuy1juQ6PtkNVALx97ZFsnZjiGoU9u72VJ3Q2SU4hHo1SN6eDeqNcP7uRxBZBVGtC8nwuvb5YjCqL3Dr',
        ],
        protocol: {
          address: '11111111111111111111111111111111',
          name: 'SYSTEM_PROGRAM',
        },
        type: 'ADVANCENONCE',
        status: 'Fail',
        token_balance_changes: [],
        actions: [
          {
            info: {
              nonceAccount: 'Gwh9xSaXyiZDPnuSEGHSvbXwsFX3bbdnE1mAwUdvfYm3',
              nonceAuthority: 'DScDQ1zV4qVMU8HQmfcJkjZhfo5QqCWdV7dbxkb2gU9C',
              recentBlockhashesSysvar:
                'SysvarRecentB1ockHashes11111111111111111111',
            },
            source_protocol: {
              address: '11111111111111111111111111111111',
              name: 'SYSTEM_PROGRAM',
            },
            type: 'ADVANCENONCE',
            ix_index: 0,
          },
          {
            info: {},
            source_protocol: {
              address: 'ComputeBudget111111111111111111111111111111',
              name: 'COMPUTE_BUDGET_PROGRAM',
            },
            type: 'UNKNOWN',
            ix_index: 2,
          },
          {
            info: {},
            source_protocol: {
              address: 'ComputeBudget111111111111111111111111111111',
              name: 'COMPUTE_BUDGET_PROGRAM',
            },
            type: 'UNKNOWN',
            ix_index: 3,
          },
          {
            info: {
              sender: '3WuC9d4agjFmQauWQ2r8WSaby2VpsNVSYTcUdr3zQcR1',
              receiver: 'G2YxRa6wt1qePMwfJzdXZG62ej4qaTC7YURzuh2Lwd3t',
              amount: 8.00001,
              amount_raw: 8000010000,
            },
            source_protocol: {
              address: '11111111111111111111111111111111',
              name: 'SYSTEM_PROGRAM',
            },
            type: 'SOL_TRANSFER',
            ix_index: 1,
          },
        ],
      },
      {
        timestamp: '2024-11-28T11:52:28.000Z',
        fee: 0.002415,
        fee_payer: 'E9vf42zJXFv8Ljop1cG68NAxLDat4ZEGEWDLfJVX38GF',
        signers: [
          'E9vf42zJXFv8Ljop1cG68NAxLDat4ZEGEWDLfJVX38GF',
          'G2YxRa6wt1qePMwfJzdXZG62ej4qaTC7YURzuh2Lwd3t',
          'DScDQ1zV4qVMU8HQmfcJkjZhfo5QqCWdV7dbxkb2gU9C',
        ],
        signatures: [
          '4j58SHxwaU5RpmAFWBztmYkFfV4hhuDkv6Y4NSvbWd4FriTT2Z2UzM1HyGj8FGvwWBhj3koYbwbhCFgQJqoKjm9U',
          'CD4Pc3D8x6UkEswPHrFrm7ekiTo9u91CrWqK9CpnY7wrHrpTv72nEWhtZ8DmeMgZidyj57XBqsvv1m9cZJkz5Wr',
          '44T2g2GcwUjbsfSyRJTd3dXFN7A7RFYtBdmXZSzvisWgC4NpfZrQMMSnNj6e7NysXpBUbBCAwNQYYvCadXBsyVVZ',
        ],
        protocol: {
          address: '11111111111111111111111111111111',
          name: 'SYSTEM_PROGRAM',
        },
        type: 'ADVANCENONCE',
        status: 'Success',
        token_balance_changes: [],
        actions: [
          {
            info: {
              nonceAccount: '7fcC6X6htTJzDrcVMFPXbtTuHsDhXp8iyq5so83NdwWe',
              nonceAuthority: 'DScDQ1zV4qVMU8HQmfcJkjZhfo5QqCWdV7dbxkb2gU9C',
              recentBlockhashesSysvar:
                'SysvarRecentB1ockHashes11111111111111111111',
            },
            source_protocol: {
              address: '11111111111111111111111111111111',
              name: 'SYSTEM_PROGRAM',
            },
            type: 'ADVANCENONCE',
            ix_index: 0,
          },
          {
            info: {},
            source_protocol: {
              address: 'ComputeBudget111111111111111111111111111111',
              name: 'COMPUTE_BUDGET_PROGRAM',
            },
            type: 'UNKNOWN',
            ix_index: 2,
          },
          {
            info: {},
            source_protocol: {
              address: 'ComputeBudget111111111111111111111111111111',
              name: 'COMPUTE_BUDGET_PROGRAM',
            },
            type: 'UNKNOWN',
            ix_index: 3,
          },
          {
            info: {
              sender: 'G2YxRa6wt1qePMwfJzdXZG62ej4qaTC7YURzuh2Lwd3t',
              receiver: '7FJDeh7kmuKRobB8h5yipFjeaT5EteKQNgPo7JXZQJgQ',
              amount: 0.06916771,
              amount_raw: 69167710,
            },
            source_protocol: {
              address: '11111111111111111111111111111111',
              name: 'SYSTEM_PROGRAM',
            },
            type: 'SOL_TRANSFER',
            ix_index: 1,
          },
        ],
      },
      {
        timestamp: '2024-11-28T11:52:28.000Z',
        fee: 0.002415,
        fee_payer: 'E9vf42zJXFv8Ljop1cG68NAxLDat4ZEGEWDLfJVX38GF',
        signers: [
          'E9vf42zJXFv8Ljop1cG68NAxLDat4ZEGEWDLfJVX38GF',
          'G2YxRa6wt1qePMwfJzdXZG62ej4qaTC7YURzuh2Lwd3t',
          'DScDQ1zV4qVMU8HQmfcJkjZhfo5QqCWdV7dbxkb2gU9C',
        ],
        signatures: [
          '55qpxUoWGsgxKC5eGppmYpgMfrXoYqLEKUvHyr2KUF1mC9ZrzaLEf6GfqU4trTXvLC6uW8jBtDxDshR25Kh5tZpb',
          'fprpNtKBx6xaYyHH8L5y8PG54pwd3o3yw2N2Jq7cxB5AxmQc7G1DAczQbry2B42cnD8vwc6AdGT2cfqiYyNdyzH',
          '3YwrH2LcsDB5LP4HjYzH9HYUTT1FWaDF9JCcSLqnjV39zut2QEwsNxhctaHDkMfMk2Grqvjry8xmPXbVviPpmv6d',
        ],
        protocol: {
          address: '11111111111111111111111111111111',
          name: 'SYSTEM_PROGRAM',
        },
        type: 'ADVANCENONCE',
        status: 'Success',
        token_balance_changes: [],
        actions: [
          {
            info: {
              nonceAccount: '4ZDDuhSMwGQR5NVvP6h4AvgdPApDHgf234U5vG4mtiK1',
              nonceAuthority: 'DScDQ1zV4qVMU8HQmfcJkjZhfo5QqCWdV7dbxkb2gU9C',
              recentBlockhashesSysvar:
                'SysvarRecentB1ockHashes11111111111111111111',
            },
            source_protocol: {
              address: '11111111111111111111111111111111',
              name: 'SYSTEM_PROGRAM',
            },
            type: 'ADVANCENONCE',
            ix_index: 0,
          },
          {
            info: {},
            source_protocol: {
              address: 'ComputeBudget111111111111111111111111111111',
              name: 'COMPUTE_BUDGET_PROGRAM',
            },
            type: 'UNKNOWN',
            ix_index: 2,
          },
          {
            info: {},
            source_protocol: {
              address: 'ComputeBudget111111111111111111111111111111',
              name: 'COMPUTE_BUDGET_PROGRAM',
            },
            type: 'UNKNOWN',
            ix_index: 3,
          },
          {
            info: {
              sender: 'G2YxRa6wt1qePMwfJzdXZG62ej4qaTC7YURzuh2Lwd3t',
              receiver: 'CwG2wek4wXdULoVFdRRaatpWA17Au92DHXTjXJ7UuQij',
              amount: 7.914826,
              amount_raw: 7914826000,
            },
            source_protocol: {
              address: '11111111111111111111111111111111',
              name: 'SYSTEM_PROGRAM',
            },
            type: 'SOL_TRANSFER',
            ix_index: 1,
          },
        ],
      },
      {
        timestamp: '2024-11-28T11:52:07.000Z',
        fee: 0.002415,
        fee_payer: 'E9vf42zJXFv8Ljop1cG68NAxLDat4ZEGEWDLfJVX38GF',
        signers: [
          'E9vf42zJXFv8Ljop1cG68NAxLDat4ZEGEWDLfJVX38GF',
          'G2YxRa6wt1qePMwfJzdXZG62ej4qaTC7YURzuh2Lwd3t',
          'DScDQ1zV4qVMU8HQmfcJkjZhfo5QqCWdV7dbxkb2gU9C',
        ],
        signatures: [
          '5ULHrpcsCt4JbsJqLQpNDv8MpjfmpVLaCgHNTsvY3JRXufgfF4moHa4CrEzQzDFpCXMbLX8avo6PaicqZRCs1uMh',
          '4bcsMg8NYzeRMQ8YJuBEz9aJBjVvFqZUkYRhHAy1V1Qix3UgrCtRdgdCz47C1gMGmbpBPmzoVrDEi7z2kjGVsb2R',
          '3xwD3UVTdXTTd5UbW3pQ5UPfEnM9rBbhZd1vd7cKAZHnS4r8wtieJQnXDCtDfkRRgRvSr5K921Dv4ErnWcCY5PnE',
        ],
        protocol: {
          address: '11111111111111111111111111111111',
          name: 'SYSTEM_PROGRAM',
        },
        type: 'ADVANCENONCE',
        status: 'Success',
        token_balance_changes: [],
        actions: [
          {
            info: {
              nonceAccount: '7Kq2mGnvgBjSgExjjxnDHLpxEESyWQN3aqiNvxF74CRz',
              nonceAuthority: 'DScDQ1zV4qVMU8HQmfcJkjZhfo5QqCWdV7dbxkb2gU9C',
              recentBlockhashesSysvar:
                'SysvarRecentB1ockHashes11111111111111111111',
            },
            source_protocol: {
              address: '11111111111111111111111111111111',
              name: 'SYSTEM_PROGRAM',
            },
            type: 'ADVANCENONCE',
            ix_index: 0,
          },
          {
            info: {},
            source_protocol: {
              address: 'ComputeBudget111111111111111111111111111111',
              name: 'COMPUTE_BUDGET_PROGRAM',
            },
            type: 'UNKNOWN',
            ix_index: 2,
          },
          {
            info: {},
            source_protocol: {
              address: 'ComputeBudget111111111111111111111111111111',
              name: 'COMPUTE_BUDGET_PROGRAM',
            },
            type: 'UNKNOWN',
            ix_index: 3,
          },
          {
            info: {
              sender: 'G2YxRa6wt1qePMwfJzdXZG62ej4qaTC7YURzuh2Lwd3t',
              receiver: 'CB7DoKvPnQqVETavgGLR5hDMU664F88ryySDFjPU58AH',
              amount: 2.00311613,
              amount_raw: 2003116130,
            },
            source_protocol: {
              address: '11111111111111111111111111111111',
              name: 'SYSTEM_PROGRAM',
            },
            type: 'SOL_TRANSFER',
            ix_index: 1,
          },
        ],
      },
      {
        timestamp: '2024-11-28T11:52:04.000Z',
        fee: 0.002415,
        fee_payer: 'E9vf42zJXFv8Ljop1cG68NAxLDat4ZEGEWDLfJVX38GF',
        signers: [
          'E9vf42zJXFv8Ljop1cG68NAxLDat4ZEGEWDLfJVX38GF',
          'G2YxRa6wt1qePMwfJzdXZG62ej4qaTC7YURzuh2Lwd3t',
          'DScDQ1zV4qVMU8HQmfcJkjZhfo5QqCWdV7dbxkb2gU9C',
        ],
        signatures: [
          '1XkWz16eCT93Yyoqe3j71Ca5nzZmCNj47HEacJZVZbdY3svDVwwZo7J9sgndrXeQd74wvhZheihXbaHPeYEscyp',
          '5XxKDSCwMncLfP6VxLDYdzQARp9FFf7akv7Fw9DZoTq2UKGSYeysxrz8MSrcqr36G18edV1iXzgLbUMaSWAoSoLQ',
          '3VgHnBXLRj9tzwCbm3ngPgYggW2vyc329y9GsZAC2XpBYvMgJp87MLeL4vyTbHVsF9jZhpgHdTwDLS2d8XFA5Ayg',
        ],
        protocol: {
          address: '11111111111111111111111111111111',
          name: 'SYSTEM_PROGRAM',
        },
        type: 'ADVANCENONCE',
        status: 'Success',
        token_balance_changes: [],
        actions: [
          {
            info: {
              nonceAccount: '62CFhNg2dFkwPcmRXmK5AU6a2aJTKoJzcrbKfurn2yKa',
              nonceAuthority: 'DScDQ1zV4qVMU8HQmfcJkjZhfo5QqCWdV7dbxkb2gU9C',
              recentBlockhashesSysvar:
                'SysvarRecentB1ockHashes11111111111111111111',
            },
            source_protocol: {
              address: '11111111111111111111111111111111',
              name: 'SYSTEM_PROGRAM',
            },
            type: 'ADVANCENONCE',
            ix_index: 0,
          },
          {
            info: {},
            source_protocol: {
              address: 'ComputeBudget111111111111111111111111111111',
              name: 'COMPUTE_BUDGET_PROGRAM',
            },
            type: 'UNKNOWN',
            ix_index: 2,
          },
          {
            info: {},
            source_protocol: {
              address: 'ComputeBudget111111111111111111111111111111',
              name: 'COMPUTE_BUDGET_PROGRAM',
            },
            type: 'UNKNOWN',
            ix_index: 3,
          },
          {
            info: {
              sender: 'G2YxRa6wt1qePMwfJzdXZG62ej4qaTC7YURzuh2Lwd3t',
              receiver: 'H2KdcNxZmMQCszmAyhG6UtgwSRepspeqAFWFWiq15shk',
              amount: 0.08055322,
              amount_raw: 80553220,
            },
            source_protocol: {
              address: '11111111111111111111111111111111',
              name: 'SYSTEM_PROGRAM',
            },
            type: 'SOL_TRANSFER',
            ix_index: 1,
          },
        ],
      },
      {
        timestamp: '2024-11-28T11:51:56.000Z',
        fee: 0.002415,
        fee_payer: 'E9vf42zJXFv8Ljop1cG68NAxLDat4ZEGEWDLfJVX38GF',
        signers: [
          'E9vf42zJXFv8Ljop1cG68NAxLDat4ZEGEWDLfJVX38GF',
          '7HK6CzGrW78g1YPyADeXjaCrzeTGTAugs5huGdnsNDef',
          'DScDQ1zV4qVMU8HQmfcJkjZhfo5QqCWdV7dbxkb2gU9C',
        ],
        signatures: [
          '3QFHdW5yNUYZRCEDd97SLCLTF859x3uG65cWXQCmhzEvAgjdHzdGUcV9e3VRxyqbMLgM3Zrz3pHDjBmEqby41swT',
          'J11PyFCxNfeFN3gkxYfDMsMF25rYNqt2xQGG5ZmdTMEmZsbkUrbWYxdicV49B9RvYyJdZDru3rEi6u3gvEG9f3i',
          '4EAVcfWNXBbLhHKmMxGXEVKnUcD81MkK3dcywGRBkXMUeFwuj6Vs6azPsmEGkakgSBCEd2qEQyfEJYuB6dvKZLML',
        ],
        protocol: {
          address: '11111111111111111111111111111111',
          name: 'SYSTEM_PROGRAM',
        },
        type: 'ADVANCENONCE',
        status: 'Success',
        token_balance_changes: [],
        actions: [
          {
            info: {
              nonceAccount: '9ebzS7k6Ydn4dd4jHvWVt1SiA4AxGrgmj3UQEwiRaUKL',
              nonceAuthority: 'DScDQ1zV4qVMU8HQmfcJkjZhfo5QqCWdV7dbxkb2gU9C',
              recentBlockhashesSysvar:
                'SysvarRecentB1ockHashes11111111111111111111',
            },
            source_protocol: {
              address: '11111111111111111111111111111111',
              name: 'SYSTEM_PROGRAM',
            },
            type: 'ADVANCENONCE',
            ix_index: 0,
          },
          {
            info: {},
            source_protocol: {
              address: 'ComputeBudget111111111111111111111111111111',
              name: 'COMPUTE_BUDGET_PROGRAM',
            },
            type: 'UNKNOWN',
            ix_index: 2,
          },
          {
            info: {},
            source_protocol: {
              address: 'ComputeBudget111111111111111111111111111111',
              name: 'COMPUTE_BUDGET_PROGRAM',
            },
            type: 'UNKNOWN',
            ix_index: 3,
          },
          {
            info: {
              sender: '7HK6CzGrW78g1YPyADeXjaCrzeTGTAugs5huGdnsNDef',
              receiver: 'G2YxRa6wt1qePMwfJzdXZG62ej4qaTC7YURzuh2Lwd3t',
              amount: 0.07,
              amount_raw: 70000000,
            },
            source_protocol: {
              address: '11111111111111111111111111111111',
              name: 'SYSTEM_PROGRAM',
            },
            type: 'SOL_TRANSFER',
            ix_index: 1,
          },
        ],
      },
      {
        timestamp: '2024-11-28T11:51:37.000Z',
        fee: 0.002415,
        fee_payer: 'E9vf42zJXFv8Ljop1cG68NAxLDat4ZEGEWDLfJVX38GF',
        signers: [
          'E9vf42zJXFv8Ljop1cG68NAxLDat4ZEGEWDLfJVX38GF',
          '8AtmEgKXKisAncY9wfCJTESyduFqHE1cyPqYTrDqXZTt',
          'DScDQ1zV4qVMU8HQmfcJkjZhfo5QqCWdV7dbxkb2gU9C',
        ],
        signatures: [
          '3iM5QyNySocGhtDGP3boGwHBNwz18wYYYhADQFefACLQLNJfWyH6UkAL1apW1Xrc9c9PRvrEcqh5vQ5VEUmyuWRj',
          'DboALrQNtGgGtAd4dBwd3vqrRxYxp7XkAW26DDXXUySyQgdjQS7pxH66mQerCe4Tv58tH4zATRkbTPcdsVDRtwZ',
          'FSLnKvNpdWrAs4BrhmddkwQZwZKraNPsPN7KUwmFfBMStNi3TVbf4aLgpTMK5uQPT5psLZSprgs46dQZzDJftU6',
        ],
        protocol: {
          address: '11111111111111111111111111111111',
          name: 'SYSTEM_PROGRAM',
        },
        type: 'ADVANCENONCE',
        status: 'Success',
        token_balance_changes: [],
        actions: [
          {
            info: {
              nonceAccount: '7hqH6okzvLBRxbS6X7vpzq2K7b6gEMSmsFjzXinTEDS9',
              nonceAuthority: 'DScDQ1zV4qVMU8HQmfcJkjZhfo5QqCWdV7dbxkb2gU9C',
              recentBlockhashesSysvar:
                'SysvarRecentB1ockHashes11111111111111111111',
            },
            source_protocol: {
              address: '11111111111111111111111111111111',
              name: 'SYSTEM_PROGRAM',
            },
            type: 'ADVANCENONCE',
            ix_index: 0,
          },
          {
            info: {},
            source_protocol: {
              address: 'ComputeBudget111111111111111111111111111111',
              name: 'COMPUTE_BUDGET_PROGRAM',
            },
            type: 'UNKNOWN',
            ix_index: 2,
          },
          {
            info: {},
            source_protocol: {
              address: 'ComputeBudget111111111111111111111111111111',
              name: 'COMPUTE_BUDGET_PROGRAM',
            },
            type: 'UNKNOWN',
            ix_index: 3,
          },
          {
            info: {
              sender: '8AtmEgKXKisAncY9wfCJTESyduFqHE1cyPqYTrDqXZTt',
              receiver: 'G2YxRa6wt1qePMwfJzdXZG62ej4qaTC7YURzuh2Lwd3t',
              amount: 0.69062769,
              amount_raw: 690627690,
            },
            source_protocol: {
              address: '11111111111111111111111111111111',
              name: 'SYSTEM_PROGRAM',
            },
            type: 'SOL_TRANSFER',
            ix_index: 1,
          },
        ],
      },
      {
        timestamp: '2024-11-28T11:51:35.000Z',
        fee: 0.002415,
        fee_payer: 'E9vf42zJXFv8Ljop1cG68NAxLDat4ZEGEWDLfJVX38GF',
        signers: [
          'E9vf42zJXFv8Ljop1cG68NAxLDat4ZEGEWDLfJVX38GF',
          'FX2QNFdG26dXrjSjPd27ow3j8QeLY48gfJ3qQWJrkNHF',
          'DScDQ1zV4qVMU8HQmfcJkjZhfo5QqCWdV7dbxkb2gU9C',
        ],
        signatures: [
          '55PoDWqksm4XL4YFxKS2curKD7ws2vsCxZ2k5GcZ7bc9xnaVTYyjxdaxXcqWCTtm9tkkJakfo9yFoVomKL7zreTu',
          '8F8D81FeaFYciavZokUNVYHntnSR7TT5BqQq9RwvBWSxnkkg8eEr9VGmR5SnAQJsetmc8ss129ENwGGAsWSRhkv',
          '4GBLDsDD4gLsoCYjDAHDQyvB28UkLuW1nCwV69Jki7FWxdvpvmmYaKEqKHRR6eTtbCkMo1GCXP4bgzXpPmr3GPL',
        ],
        protocol: {
          address: '11111111111111111111111111111111',
          name: 'SYSTEM_PROGRAM',
        },
        type: 'ADVANCENONCE',
        status: 'Fail',
        token_balance_changes: [],
        actions: [
          {
            info: {
              nonceAccount: 'ABrrA2QyUBpEnsMfsiXhL9y4w1jqZq1BzdZtEYiHSi7t',
              nonceAuthority: 'DScDQ1zV4qVMU8HQmfcJkjZhfo5QqCWdV7dbxkb2gU9C',
              recentBlockhashesSysvar:
                'SysvarRecentB1ockHashes11111111111111111111',
            },
            source_protocol: {
              address: '11111111111111111111111111111111',
              name: 'SYSTEM_PROGRAM',
            },
            type: 'ADVANCENONCE',
            ix_index: 0,
          },
          {
            info: {},
            source_protocol: {
              address: 'ComputeBudget111111111111111111111111111111',
              name: 'COMPUTE_BUDGET_PROGRAM',
            },
            type: 'UNKNOWN',
            ix_index: 2,
          },
          {
            info: {},
            source_protocol: {
              address: 'ComputeBudget111111111111111111111111111111',
              name: 'COMPUTE_BUDGET_PROGRAM',
            },
            type: 'UNKNOWN',
            ix_index: 3,
          },
          {
            info: {
              sender: 'FX2QNFdG26dXrjSjPd27ow3j8QeLY48gfJ3qQWJrkNHF',
              receiver: 'G2YxRa6wt1qePMwfJzdXZG62ej4qaTC7YURzuh2Lwd3t',
              amount: 32.825858921,
              amount_raw: 32825858921,
            },
            source_protocol: {
              address: '11111111111111111111111111111111',
              name: 'SYSTEM_PROGRAM',
            },
            type: 'SOL_TRANSFER',
            ix_index: 1,
          },
        ],
      },
      {
        timestamp: '2024-11-28T11:51:29.000Z',
        fee: 0.002415,
        fee_payer: 'E9vf42zJXFv8Ljop1cG68NAxLDat4ZEGEWDLfJVX38GF',
        signers: [
          'E9vf42zJXFv8Ljop1cG68NAxLDat4ZEGEWDLfJVX38GF',
          'G2YxRa6wt1qePMwfJzdXZG62ej4qaTC7YURzuh2Lwd3t',
          'DScDQ1zV4qVMU8HQmfcJkjZhfo5QqCWdV7dbxkb2gU9C',
        ],
        signatures: [
          'sV4PSoz7rBSzNaiQMmzFr9UYtENskNPo4kWvA2Wi2F4YGrHTiwYUbUAvTxPdSxpYzJxU4d93zW55xbAg7PVw6BW',
          '5wpeBMff1kJks3gx3HMS7ju3o7mzTZjXXYUPEFC9pkLx4BcLbs2uSg6jTgXAF9FVjTw8W2t65FNEz6iHrKSWHfWm',
          '4e7AnP6vKDUBU3QMctyMyQo2FGHXjNTboG1MU2GTt7DidS6ri41MgM5G2KfrV9JCYEHnFVKhZ4VqhnbZco7MPJKU',
        ],
        protocol: {
          address: '11111111111111111111111111111111',
          name: 'SYSTEM_PROGRAM',
        },
        type: 'ADVANCENONCE',
        status: 'Success',
        token_balance_changes: [],
        actions: [
          {
            info: {
              nonceAccount: 'oXGvNpvsYfUj2rPZBgs7reJojVvHATJmuc2CdGRMDYn',
              nonceAuthority: 'DScDQ1zV4qVMU8HQmfcJkjZhfo5QqCWdV7dbxkb2gU9C',
              recentBlockhashesSysvar:
                'SysvarRecentB1ockHashes11111111111111111111',
            },
            source_protocol: {
              address: '11111111111111111111111111111111',
              name: 'SYSTEM_PROGRAM',
            },
            type: 'ADVANCENONCE',
            ix_index: 0,
          },
          {
            info: {},
            source_protocol: {
              address: 'ComputeBudget111111111111111111111111111111',
              name: 'COMPUTE_BUDGET_PROGRAM',
            },
            type: 'UNKNOWN',
            ix_index: 2,
          },
          {
            info: {},
            source_protocol: {
              address: 'ComputeBudget111111111111111111111111111111',
              name: 'COMPUTE_BUDGET_PROGRAM',
            },
            type: 'UNKNOWN',
            ix_index: 3,
          },
          {
            info: {
              sender: 'G2YxRa6wt1qePMwfJzdXZG62ej4qaTC7YURzuh2Lwd3t',
              receiver: 'D432LAi6dRGf3s7dSkBv6gvg96CMYM9sz4NSDwLwcMo6',
              amount: 0.03858275,
              amount_raw: 38582750,
            },
            source_protocol: {
              address: '11111111111111111111111111111111',
              name: 'SYSTEM_PROGRAM',
            },
            type: 'SOL_TRANSFER',
            ix_index: 1,
          },
        ],
      },
      {
        timestamp: '2024-11-28T11:51:17.000Z',
        fee: 0.002415,
        fee_payer: 'E9vf42zJXFv8Ljop1cG68NAxLDat4ZEGEWDLfJVX38GF',
        signers: [
          'E9vf42zJXFv8Ljop1cG68NAxLDat4ZEGEWDLfJVX38GF',
          'dPbudqptxKQDpCCzbULvUc3LHfsuLpZfA15kvY2TEf6',
          'DScDQ1zV4qVMU8HQmfcJkjZhfo5QqCWdV7dbxkb2gU9C',
        ],
        signatures: [
          '3FzFhfCj1UYoqKB876qnxPxF1Wwc6RtmH2nGjAsWHYcG7JKjK1CKLN5LVUfFf4pkVW85UFaTadXqjAV5VgTbtmbC',
          '3qsFjFFaDJVvk1LJTfmnPZAUwNBwCsJoyMzvm19QxuoZts6c7Uu5fRGruFDmQg5pjE5N6fcJXZqU6XGtJK2SkkK3',
          '4paKYVaBFnzLmrYeAZ2FWUthshJZQYmQavpWaJaQsjFDK2pGw5mJNrbAsrgvrbpMdqqbhwqKK8x9taU5xhSoFaAp',
        ],
        protocol: {
          address: '11111111111111111111111111111111',
          name: 'SYSTEM_PROGRAM',
        },
        type: 'ADVANCENONCE',
        status: 'Success',
        token_balance_changes: [],
        actions: [
          {
            info: {
              nonceAccount: '48nKr8ys6bVUhJAbAyDZ1V1Nt6JHdhJ7f4k5gNGhiyyP',
              nonceAuthority: 'DScDQ1zV4qVMU8HQmfcJkjZhfo5QqCWdV7dbxkb2gU9C',
              recentBlockhashesSysvar:
                'SysvarRecentB1ockHashes11111111111111111111',
            },
            source_protocol: {
              address: '11111111111111111111111111111111',
              name: 'SYSTEM_PROGRAM',
            },
            type: 'ADVANCENONCE',
            ix_index: 0,
          },
          {
            info: {},
            source_protocol: {
              address: 'ComputeBudget111111111111111111111111111111',
              name: 'COMPUTE_BUDGET_PROGRAM',
            },
            type: 'UNKNOWN',
            ix_index: 2,
          },
          {
            info: {},
            source_protocol: {
              address: 'ComputeBudget111111111111111111111111111111',
              name: 'COMPUTE_BUDGET_PROGRAM',
            },
            type: 'UNKNOWN',
            ix_index: 3,
          },
          {
            info: {
              sender: 'dPbudqptxKQDpCCzbULvUc3LHfsuLpZfA15kvY2TEf6',
              receiver: 'G2YxRa6wt1qePMwfJzdXZG62ej4qaTC7YURzuh2Lwd3t',
              amount: 0.22957,
              amount_raw: 229570000,
            },
            source_protocol: {
              address: '11111111111111111111111111111111',
              name: 'SYSTEM_PROGRAM',
            },
            type: 'SOL_TRANSFER',
            ix_index: 1,
          },
        ],
      },
    ],
  },
}
