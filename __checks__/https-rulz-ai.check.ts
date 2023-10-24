/**
* This is a Checkly CLI BrowserCheck construct. To learn more, visit:
* - https://www.checklyhq.com/docs/cli/
* - https://www.checklyhq.com/docs/cli/constructs-reference/#browsercheck
*/

import { BrowserCheck, Frequency, RetryStrategyBuilder } from 'checkly/constructs'

new BrowserCheck('https-rulz-ai-com', {
  name: 'https://rulz-ai.com',
  activated: true,
  muted: false,
  shouldFail: false,
  runtimeId: '2023.09',
  locations: ['ap-southeast-1', 'ap-southeast-3'],
  tags: [],
  sslCheckDomain: '',
  frequency: Frequency.EVERY_10M,
  environmentVariables: [],
  code: {
    entrypoint: './https-rulz-ai-com.spec.ts',
  },
  retryStrategy: RetryStrategyBuilder.linearStrategy({
    baseBackoffSeconds: 60,
    maxRetries: 2,
    maxDurationSeconds: 600,
    sameRegion: true,
  }),
})
