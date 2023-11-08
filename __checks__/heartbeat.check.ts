import { HeartbeatCheck } from 'checkly/constructs'

new HeartbeatCheck('heartbeat-check-1', {
  name: 'Heartbeat Check #1',
  activated: true,
  muted: false,
  period: 1,
  periodUnit: 'hours',
  grace: 30,
  graceUnit: 'minutes',
  tags: [],
})
