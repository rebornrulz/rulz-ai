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
  locations: ['ap-southeast-1', 'us-east-1', 'eu-west-3'],
  tags: [],
  sslCheckDomain: 'rulz-ai.com',
  frequency: Frequency.EVERY_10M,
  environmentVariables: [],
  code: {
    entrypoint: './rulz-ai.spec.ts',
  },
  retryStrategy: RetryStrategyBuilder.linearStrategy({
    baseBackoffSeconds: 60,
    maxRetries: 2,
    maxDurationSeconds: 600,
    sameRegion: true,
  }),
})
