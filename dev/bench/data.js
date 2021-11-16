window.BENCHMARK_DATA = {
  lastUpdate: 1637043656809,
  repoUrl: 'https://github.com/napi-rs/napi-rs',
  entries: {
    Benchmark: [
      {
        commit: {
          author: {
            email: 'lynweklm@gmail.com',
            name: 'LongYinan',
            username: 'Brooooooklyn',
          },
          committer: {
            email: 'lynweklm@gmail.com',
            name: 'LongYinan',
            username: 'Brooooooklyn',
          },
          distinct: true,
          id: 'f57651f7493249a6520109a2f73f111a8d9bd618',
          message: 'chore: publish\n\n - @napi-rs/cli@2.0.0-alpha.5',
          timestamp: '2021-11-16T14:11:56+08:00',
          tree_id: '17a9d47c2bb76190ada99d26325c1020834f4e12',
          url: 'https://github.com/napi-rs/napi-rs/commit/f57651f7493249a6520109a2f73f111a8d9bd618',
        },
        date: 1637043655519,
        tool: 'benchmarkjs',
        benches: [
          {
            name: 'noop#napi-rs',
            value: 46137552,
            range: '±1.38%',
            unit: 'ops/sec',
            extra: '88 samples',
          },
          {
            name: 'noop#JavaScript',
            value: 752120815,
            range: '±1.13%',
            unit: 'ops/sec',
            extra: '86 samples',
          },
          {
            name: 'Plus number#napi-rs',
            value: 15027774,
            range: '±1.29%',
            unit: 'ops/sec',
            extra: '86 samples',
          },
          {
            name: 'Plus number#JavaScript',
            value: 722674655,
            range: '±0.94%',
            unit: 'ops/sec',
            extra: '84 samples',
          },
          {
            name: 'Create buffer#napi-rs',
            value: 285927,
            range: '±11.46%',
            unit: 'ops/sec',
            extra: '58 samples',
          },
          {
            name: 'Create buffer#JavaScript',
            value: 1592558,
            range: '±6.46%',
            unit: 'ops/sec',
            extra: '78 samples',
          },
          {
            name: 'createArray#createArrayJson',
            value: 28707,
            range: '±1.16%',
            unit: 'ops/sec',
            extra: '87 samples',
          },
          {
            name: 'createArray#create array for loop',
            value: 6373,
            range: '±1.19%',
            unit: 'ops/sec',
            extra: '89 samples',
          },
          {
            name: 'createArray#create array with serde trait',
            value: 6268,
            range: '±1.05%',
            unit: 'ops/sec',
            extra: '86 samples',
          },
          {
            name: 'getArrayFromJs#get array from json string',
            value: 14832,
            range: '±0.91%',
            unit: 'ops/sec',
            extra: '88 samples',
          },
          {
            name: 'getArrayFromJs#get array from serde',
            value: 8637,
            range: '±0.85%',
            unit: 'ops/sec',
            extra: '87 samples',
          },
          {
            name: 'getArrayFromJs#get array with for loop',
            value: 10680,
            range: '±1.09%',
            unit: 'ops/sec',
            extra: '88 samples',
          },
          {
            name: 'Get Set property#Get Set from native#u32',
            value: 331058,
            range: '±5.86%',
            unit: 'ops/sec',
            extra: '71 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#u32',
            value: 286382,
            range: '±6.12%',
            unit: 'ops/sec',
            extra: '71 samples',
          },
          {
            name: 'Get Set property#Get Set from native#string',
            value: 291302,
            range: '±6.29%',
            unit: 'ops/sec',
            extra: '73 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#string',
            value: 276396,
            range: '±6.04%',
            unit: 'ops/sec',
            extra: '74 samples',
          },
          {
            name: 'Async task#spawn task',
            value: 30863,
            range: '±2.54%',
            unit: 'ops/sec',
            extra: '74 samples',
          },
          {
            name: 'Async task#ThreadSafeFunction',
            value: 355,
            range: '±2.83%',
            unit: 'ops/sec',
            extra: '64 samples',
          },
          {
            name: 'Async task#Tokio future to Promise',
            value: 21046,
            range: '±3.41%',
            unit: 'ops/sec',
            extra: '75 samples',
          },
          {
            name: 'Query#query * 100',
            value: 1679,
            range: '±2.12%',
            unit: 'ops/sec',
            extra: '83 samples',
          },
          {
            name: 'Query#query * 1',
            value: 20583,
            range: '±1.86%',
            unit: 'ops/sec',
            extra: '79 samples',
          },
        ],
      },
    ],
  },
}
