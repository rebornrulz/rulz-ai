/**
* This is a Checkly CLI AlertChannel construct. To learn more, visit:
* - https://www.checklyhq.com/docs/cli/
* - https://www.checklyhq.com/docs/cli/constructs-reference/#alertchannel
*/

import { EmailAlertChannel } from 'checkly/constructs'

export const emailChannel = new EmailAlertChannel('email-192748', {
  address: 'reborn@rulz-ai.com',
  sendRecovery: true,
  sendFailure: true,
  sendDegraded: false,
  sslExpiry: false,
})
