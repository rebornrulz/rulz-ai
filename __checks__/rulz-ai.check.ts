/**
* This is a Checkly CLI BrowserCheck construct. To learn more, visit:
* - https://www.checklyhq.com/docs/cli/
* - https://www.checklyhq.com/docs/cli/constructs-reference/#browsercheck
*/

import { BrowserCheck, Frequency, RetryStrategyBuilder } from 'checkly/constructs'

new BrowserCheck('rulz-ai', {
  name: 'rulz-ai',
  activated: true,
  muted: false,
  shouldFail: false,
  locations: ['ap-southeast-1', 'ap-southeast-3'],
  tags: [],
  sslCheckDomain: '',
  frequency: Frequency.EVERY_24H,
  environmentVariables: [],
  code: {
    entrypoint: './rulz-ai.spec.ts',
  },
  retryStrategy: RetryStrategyBuilder.fixedStrategy({
    baseBackoffSeconds: 0,
    maxRetries: 1,
    maxDurationSeconds: 600,
    sameRegion: false,
  }),
})
