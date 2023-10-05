/**
* This is a Checkly CLI Dashboard construct. To learn more, visit:
* - https://www.checklyhq.com/docs/cli/
* - https://www.checklyhq.com/docs/cli/constructs-reference/#dashboard
*/

import { Dashboard } from 'checkly/constructs'

new Dashboard('rulz-dashboard', {
  tags: [],
  customUrl: '88c4e5a9',
  customDomain: 'www.rulz-ai.com',
  logo: '',
  favicon: '',
  link: '',
  header: 'Rulz Dashboard',
  description: '',
  width: 'FULL',
  refreshRate: 60,
  paginate: true,
  paginationRate: 60,
  checksPerPage: 15,
  useTagsAndOperator: true,
  hideTags: true,
  enableIncidents: false,
  expandChecks: false,
  isPrivate: false,
  showP95: true,
  showP99: true,
  showHeader: true,
})
