import { HeartbeatCheck } from 'checkly/constructs'

new HeartbeatCheck('rulz-ai', {
  name: 'Rulz-AI',
  activated: true,
  muted: false,
  period: 1,
  periodUnit: 'hours',
  grace: 30,
  graceUnit: 'minutes',
  tags: [],
})
