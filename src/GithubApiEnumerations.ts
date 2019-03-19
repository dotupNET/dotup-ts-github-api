// tslint:disable: no-reserved-keywords
/**
 * https://developer.github.com/v3/users/#get-a-single-user
 *
 * https://api.apis.guru/v2/specs/github.com/v3/swagger.json
 *
 */
// tslint:disable: interface-name
export interface GithubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  // tslint:disable-next-line: no-reserved-keywords
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email?: string;
  hireable?: boolean;
  bio?: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export enum GithubApiCategories {
  activity = 'activity',
  apps = 'apps',
  checks = 'checks',
  codesOfConduct = 'codesOfConduct',
  emojis = 'emojis',
  gists = 'gists',
  git = 'git',
  gitignore = 'gitignore',
  interactions = 'interactions',
  issues = 'issues',
  licenses = 'licenses',
  markdown = 'markdown',
  meta = 'meta',
  migrations = 'migrations',
  oauthAuthorizations = 'oauthAuthorizations',
  orgs = 'orgs',
  projects = 'projects',
  pulls = 'pulls',
  rateLimit = 'rateLimit',
  reactions = 'reactions',
  repos = 'repos',
  search = 'search',
  teams = 'teams',
  users = 'users'
}

// API
export enum GithubApiMethods {
  activity = 'activity',
  apps = 'apps',
  checks = 'checks',
  codesOfConduct = 'codesOfConduct',
  emojis = 'emojis',
  gists = 'gists',
  git = 'git',
  gitignore = 'gitignore',
  interactions = 'interactions',
  issues = 'issues',
  licenses = 'licenses',
  markdown = 'markdown',
  meta = 'meta',
  migrations = 'migrations',
  oauthAuthorizations = 'oauthAuthorizations',
  orgs = 'orgs',
  projects = 'projects',
  pulls = 'pulls',
  rateLimit = 'rateLimit',
  reactions = 'reactions',
  repos = 'repos',
  search = 'search',
  teams = 'teams',
  users = 'users'
}
export enum ActivityApiMethods {
  checkStarringRepo = 'checkStarringRepo',
  deleteRepoSubscription = 'deleteRepoSubscription',
  deleteThreadSubscription = 'deleteThreadSubscription',
  getRepoSubscription = 'getRepoSubscription',
  getThread = 'getThread',
  getThreadSubscription = 'getThreadSubscription',
  listEventsForOrg = 'listEventsForOrg',
  listEventsForUser = 'listEventsForUser',
  listFeeds = 'listFeeds',
  listNotifications = 'listNotifications',
  listNotificationsForRepo = 'listNotificationsForRepo',
  listPublicEvents = 'listPublicEvents',
  listPublicEventsForOrg = 'listPublicEventsForOrg',
  listPublicEventsForRepoNetwork = 'listPublicEventsForRepoNetwork',
  listPublicEventsForUser = 'listPublicEventsForUser',
  listReceivedEventsForUser = 'listReceivedEventsForUser',
  listReceivedPublicEventsForUser = 'listReceivedPublicEventsForUser',
  listRepoEvents = 'listRepoEvents',
  listReposStarredByAuthenticatedUser = 'listReposStarredByAuthenticatedUser',
  listReposStarredByUser = 'listReposStarredByUser',
  listReposWatchedByUser = 'listReposWatchedByUser',
  listStargazersForRepo = 'listStargazersForRepo',
  listWatchedReposForAuthenticatedUser = 'listWatchedReposForAuthenticatedUser',
  listWatchersForRepo = 'listWatchersForRepo',
  markAsRead = 'markAsRead',
  markNotificationsAsReadForRepo = 'markNotificationsAsReadForRepo',
  markThreadAsRead = 'markThreadAsRead',
  setRepoSubscription = 'setRepoSubscription',
  setThreadSubscription = 'setThreadSubscription',
  starRepo = 'starRepo',
  unstarRepo = 'unstarRepo'
}
export enum AppsApiMethods {
  addRepoToInstallation = 'addRepoToInstallation',
  checkAccountIsAssociatedWithAny = 'checkAccountIsAssociatedWithAny',
  checkAccountIsAssociatedWithAnyStubbed = 'checkAccountIsAssociatedWithAnyStubbed',
  createContentAttachment = 'createContentAttachment',
  createFromManifest = 'createFromManifest',
  createInstallationToken = 'createInstallationToken',
  findOrgInstallation = 'findOrgInstallation',
  findRepoInstallation = 'findRepoInstallation',
  findUserInstallation = 'findUserInstallation',
  getAuthenticated = 'getAuthenticated',
  getBySlug = 'getBySlug',
  getInstallation = 'getInstallation',
  listAccountsUserOrOrgOnPlan = 'listAccountsUserOrOrgOnPlan',
  listAccountsUserOrOrgOnPlanStubbed = 'listAccountsUserOrOrgOnPlanStubbed',
  listInstallationReposForAuthenticatedUser = 'listInstallationReposForAuthenticatedUser',
  listInstallations = 'listInstallations',
  listInstallationsForAuthenticatedUser = 'listInstallationsForAuthenticatedUser',
  listMarketplacePurchasesForAuthenticatedUser = 'listMarketplacePurchasesForAuthenticatedUser',
  listMarketplacePurchasesForAuthenticatedUserStubbed = 'listMarketplacePurchasesForAuthenticatedUserStubbed',
  listPlans = 'listPlans',
  listPlansStubbed = 'listPlansStubbed',
  listRepos = 'listRepos',
  removeRepoFromInstallation = 'removeRepoFromInstallation'
}
export enum ChecksApiMethods {
  create = 'create',
  createSuite = 'createSuite',
  get = 'get',
  getSuite = 'getSuite',
  listAnnotations = 'listAnnotations',
  listForRef = 'listForRef',
  listForSuite = 'listForSuite',
  listSuitesForRef = 'listSuitesForRef',
  rerequestSuite = 'rerequestSuite',
  setSuitesPreferences = 'setSuitesPreferences',
  update = 'update'
}
export enum CodesOfConductApiMethods {
  getConductCode = 'getConductCode',
  getForRepo = 'getForRepo',
  listConductCodes = 'listConductCodes'
}
export enum EmojisApiMethods {
  get = 'get'
}
export enum GistsApiMethods {
  checkIsStarred = 'checkIsStarred',
  create = 'create',
  createComment = 'createComment',
  delete = 'delete',
  deleteComment = 'deleteComment',
  fork = 'fork',
  get = 'get',
  getComment = 'getComment',
  getRevision = 'getRevision',
  list = 'list',
  listComments = 'listComments',
  listCommits = 'listCommits',
  listForks = 'listForks',
  listPublic = 'listPublic',
  listPublicForUser = 'listPublicForUser',
  listStarred = 'listStarred',
  star = 'star',
  unstar = 'unstar',
  update = 'update',
  updateComment = 'updateComment'
}
export enum GitApiMethods {
  createBlob = 'createBlob',
  createCommit = 'createCommit',
  createRef = 'createRef',
  createTag = 'createTag',
  createTree = 'createTree',
  deleteRef = 'deleteRef',
  getBlob = 'getBlob',
  getCommit = 'getCommit',
  getRef = 'getRef',
  getTag = 'getTag',
  getTree = 'getTree',
  listRefs = 'listRefs',
  updateRef = 'updateRef'
}
export enum GitignoreApiMethods {
  getTemplate = 'getTemplate',
  listTemplates = 'listTemplates'
}
export enum InteractionsApiMethods {
  addOrUpdateRestrictionsForOrg = 'addOrUpdateRestrictionsForOrg',
  addOrUpdateRestrictionsForRepo = 'addOrUpdateRestrictionsForRepo',
  getRestrictionsForOrg = 'getRestrictionsForOrg',
  getRestrictionsForRepo = 'getRestrictionsForRepo',
  removeRestrictionsForOrg = 'removeRestrictionsForOrg',
  removeRestrictionsForRepo = 'removeRestrictionsForRepo'
}
export enum IssuesApiMethods {
  addAssignees = 'addAssignees',
  addLabels = 'addLabels',
  checkAssignee = 'checkAssignee',
  create = 'create',
  createComment = 'createComment',
  createLabel = 'createLabel',
  createMilestone = 'createMilestone',
  deleteComment = 'deleteComment',
  deleteLabel = 'deleteLabel',
  deleteMilestone = 'deleteMilestone',
  get = 'get',
  getComment = 'getComment',
  getEvent = 'getEvent',
  getLabel = 'getLabel',
  getMilestone = 'getMilestone',
  list = 'list',
  listAssignees = 'listAssignees',
  listComments = 'listComments',
  listCommentsForRepo = 'listCommentsForRepo',
  listEvents = 'listEvents',
  listEventsForRepo = 'listEventsForRepo',
  listEventsForTimeline = 'listEventsForTimeline',
  listForAuthenticatedUser = 'listForAuthenticatedUser',
  listForOrg = 'listForOrg',
  listForRepo = 'listForRepo',
  listLabelsForMilestone = 'listLabelsForMilestone',
  listLabelsForRepo = 'listLabelsForRepo',
  listLabelsOnIssue = 'listLabelsOnIssue',
  listMilestonesForRepo = 'listMilestonesForRepo',
  lock = 'lock',
  removeAssignees = 'removeAssignees',
  removeLabel = 'removeLabel',
  removeLabels = 'removeLabels',
  replaceLabels = 'replaceLabels',
  unlock = 'unlock',
  update = 'update',
  updateComment = 'updateComment',
  updateLabel = 'updateLabel',
  updateMilestone = 'updateMilestone'
}
export enum LicensesApiMethods {
  get = 'get',
  getForRepo = 'getForRepo',
  list = 'list',
  listCommonlyUsed = 'listCommonlyUsed'
}
export enum MarkdownApiMethods {
  render = 'render',
  renderRaw = 'renderRaw'
}
export enum MetaApiMethods {
  get = 'get'
}
export enum MigrationsApiMethods {
  cancelImport = 'cancelImport',
  deleteArchiveForAuthenticatedUser = 'deleteArchiveForAuthenticatedUser',
  deleteArchiveForOrg = 'deleteArchiveForOrg',
  getArchiveForAuthenticatedUser = 'getArchiveForAuthenticatedUser',
  getArchiveForOrg = 'getArchiveForOrg',
  getCommitAuthors = 'getCommitAuthors',
  getImportProgress = 'getImportProgress',
  getLargeFiles = 'getLargeFiles',
  getStatusForAuthenticatedUser = 'getStatusForAuthenticatedUser',
  getStatusForOrg = 'getStatusForOrg',
  listForAuthenticatedUser = 'listForAuthenticatedUser',
  listForOrg = 'listForOrg',
  mapCommitAuthor = 'mapCommitAuthor',
  setLfsPreference = 'setLfsPreference',
  startForAuthenticatedUser = 'startForAuthenticatedUser',
  startForOrg = 'startForOrg',
  startImport = 'startImport',
  unlockRepoForAuthenticatedUser = 'unlockRepoForAuthenticatedUser',
  unlockRepoForOrg = 'unlockRepoForOrg',
  updateImport = 'updateImport'
}
export enum OauthAuthorizationsApiMethods {
  checkAuthorization = 'checkAuthorization',
  createAuthorization = 'createAuthorization',
  deleteAuthorization = 'deleteAuthorization',
  deleteGrant = 'deleteGrant',
  getAuthorization = 'getAuthorization',
  getGrant = 'getGrant',
  getOrCreateAuthorizationForApp = 'getOrCreateAuthorizationForApp',
  getOrCreateAuthorizationForAppAndFingerprint = 'getOrCreateAuthorizationForAppAndFingerprint',
  getOrCreateAuthorizationForAppFingerprint = 'getOrCreateAuthorizationForAppFingerprint',
  listAuthorizations = 'listAuthorizations',
  listGrants = 'listGrants',
  resetAuthorization = 'resetAuthorization',
  revokeAuthorizationForApplication = 'revokeAuthorizationForApplication',
  revokeGrantForApplication = 'revokeGrantForApplication',
  updateAuthorization = 'updateAuthorization'
}
export enum OrgsApiMethods {
  addOrUpdateMembership = 'addOrUpdateMembership',
  blockUser = 'blockUser',
  checkBlockedUser = 'checkBlockedUser',
  checkMembership = 'checkMembership',
  checkPublicMembership = 'checkPublicMembership',
  concealMembership = 'concealMembership',
  convertMemberToOutsideCollaborator = 'convertMemberToOutsideCollaborator',
  createHook = 'createHook',
  createInvitation = 'createInvitation',
  deleteHook = 'deleteHook',
  get = 'get',
  getHook = 'getHook',
  getMembership = 'getMembership',
  getMembershipForAuthenticatedUser = 'getMembershipForAuthenticatedUser',
  list = 'list',
  listBlockedUsers = 'listBlockedUsers',
  listForAuthenticatedUser = 'listForAuthenticatedUser',
  listForUser = 'listForUser',
  listHooks = 'listHooks',
  listInvitationTeams = 'listInvitationTeams',
  listMembers = 'listMembers',
  listMemberships = 'listMemberships',
  listOutsideCollaborators = 'listOutsideCollaborators',
  listPendingInvitations = 'listPendingInvitations',
  listPublicMembers = 'listPublicMembers',
  pingHook = 'pingHook',
  publicizeMembership = 'publicizeMembership',
  removeMember = 'removeMember',
  removeMembership = 'removeMembership',
  removeOutsideCollaborator = 'removeOutsideCollaborator',
  unblockUser = 'unblockUser',
  update = 'update',
  updateHook = 'updateHook',
  updateMembership = 'updateMembership'
}
export enum ProjectsApiMethods {
  addCollaborator = 'addCollaborator',
  createCard = 'createCard',
  createColumn = 'createColumn',
  createForAuthenticatedUser = 'createForAuthenticatedUser',
  createForOrg = 'createForOrg',
  createForRepo = 'createForRepo',
  delete = 'delete',
  deleteCard = 'deleteCard',
  deleteColumn = 'deleteColumn',
  get = 'get',
  getCard = 'getCard',
  getColumn = 'getColumn',
  listCards = 'listCards',
  listCollaborators = 'listCollaborators',
  listColumns = 'listColumns',
  listForOrg = 'listForOrg',
  listForRepo = 'listForRepo',
  listForUser = 'listForUser',
  moveCard = 'moveCard',
  moveColumn = 'moveColumn',
  removeCollaborator = 'removeCollaborator',
  reviewUserPermissionLevel = 'reviewUserPermissionLevel',
  update = 'update',
  updateCard = 'updateCard',
  updateColumn = 'updateColumn'
}
export enum PullsApiMethods {
  checkIfMerged = 'checkIfMerged',
  create = 'create',
  createComment = 'createComment',
  createCommentReply = 'createCommentReply',
  createFromIssue = 'createFromIssue',
  createReview = 'createReview',
  createReviewRequest = 'createReviewRequest',
  deleteComment = 'deleteComment',
  deletePendingReview = 'deletePendingReview',
  deleteReviewRequest = 'deleteReviewRequest',
  dismissReview = 'dismissReview',
  get = 'get',
  getComment = 'getComment',
  getCommentsForReview = 'getCommentsForReview',
  getReview = 'getReview',
  list = 'list',
  listComments = 'listComments',
  listCommentsForRepo = 'listCommentsForRepo',
  listCommits = 'listCommits',
  listFiles = 'listFiles',
  listReviewRequests = 'listReviewRequests',
  listReviews = 'listReviews',
  merge = 'merge',
  submitReview = 'submitReview',
  update = 'update',
  updateComment = 'updateComment',
  updateReview = 'updateReview'
}
export enum RateLimitApiMethods {
  get = 'get'
}
export enum ReactionsApiMethods {
  createForCommitComment = 'createForCommitComment',
  createForIssue = 'createForIssue',
  createForIssueComment = 'createForIssueComment',
  createForPullRequestReviewComment = 'createForPullRequestReviewComment',
  createForTeamDiscussion = 'createForTeamDiscussion',
  createForTeamDiscussionComment = 'createForTeamDiscussionComment',
  delete = 'delete',
  listForCommitComment = 'listForCommitComment',
  listForIssue = 'listForIssue',
  listForIssueComment = 'listForIssueComment',
  listForPullRequestReviewComment = 'listForPullRequestReviewComment',
  listForTeamDiscussion = 'listForTeamDiscussion',
  listForTeamDiscussionComment = 'listForTeamDiscussionComment'
}
export enum ReposApiMethods {
  acceptInvitation = 'acceptInvitation',
  addCollaborator = 'addCollaborator',
  addDeployKey = 'addDeployKey',
  addProtectedBranchAdminEnforcement = 'addProtectedBranchAdminEnforcement',
  addProtectedBranchRequiredSignatures = 'addProtectedBranchRequiredSignatures',
  addProtectedBranchRequiredStatusChecksContexts = 'addProtectedBranchRequiredStatusChecksContexts',
  addProtectedBranchTeamRestrictions = 'addProtectedBranchTeamRestrictions',
  addProtectedBranchUserRestrictions = 'addProtectedBranchUserRestrictions',
  checkCollaborator = 'checkCollaborator',
  compareCommits = 'compareCommits',
  createCommitComment = 'createCommitComment',
  createDeployment = 'createDeployment',
  createDeploymentStatus = 'createDeploymentStatus',
  createFile = 'createFile',
  createForAuthenticatedUser = 'createForAuthenticatedUser',
  createFork = 'createFork',
  createHook = 'createHook',
  createInOrg = 'createInOrg',
  createRelease = 'createRelease',
  createStatus = 'createStatus',
  declineInvitation = 'declineInvitation',
  delete = 'delete',
  deleteCommitComment = 'deleteCommitComment',
  deleteDownload = 'deleteDownload',
  deleteFile = 'deleteFile',
  deleteHook = 'deleteHook',
  deleteInvitation = 'deleteInvitation',
  deleteRelease = 'deleteRelease',
  deleteReleaseAsset = 'deleteReleaseAsset',
  get = 'get',
  getArchiveLink = 'getArchiveLink',
  getBranch = 'getBranch',
  getBranchProtection = 'getBranchProtection',
  getClones = 'getClones',
  getCodeFrequencyStats = 'getCodeFrequencyStats',
  getCollaboratorPermissionLevel = 'getCollaboratorPermissionLevel',
  getCombinedStatusForRef = 'getCombinedStatusForRef',
  getCommit = 'getCommit',
  getCommitActivityStats = 'getCommitActivityStats',
  getCommitComment = 'getCommitComment',
  getCommitRefSha = 'getCommitRefSha',
  getContents = 'getContents',
  getContributorsStats = 'getContributorsStats',
  getDeployKey = 'getDeployKey',
  getDeployment = 'getDeployment',
  getDeploymentStatus = 'getDeploymentStatus',
  getDownload = 'getDownload',
  getHook = 'getHook',
  getLatestPagesBuild = 'getLatestPagesBuild',
  getLatestRelease = 'getLatestRelease',
  getPages = 'getPages',
  getPagesBuild = 'getPagesBuild',
  getParticipationStats = 'getParticipationStats',
  getProtectedBranchAdminEnforcement = 'getProtectedBranchAdminEnforcement',
  getProtectedBranchPullRequestReviewEnforcement = 'getProtectedBranchPullRequestReviewEnforcement',
  getProtectedBranchRequiredSignatures = 'getProtectedBranchRequiredSignatures',
  getProtectedBranchRequiredStatusChecks = 'getProtectedBranchRequiredStatusChecks',
  getProtectedBranchRestrictions = 'getProtectedBranchRestrictions',
  getPunchCardStats = 'getPunchCardStats',
  getReadme = 'getReadme',
  getRelease = 'getRelease',
  getReleaseAsset = 'getReleaseAsset',
  getReleaseByTag = 'getReleaseByTag',
  getTopPaths = 'getTopPaths',
  getTopReferrers = 'getTopReferrers',
  getViews = 'getViews',
  list = 'list',
  listAssetsForRelease = 'listAssetsForRelease',
  listBranches = 'listBranches',
  listCollaborators = 'listCollaborators',
  listCommentsForCommit = 'listCommentsForCommit',
  listCommitComments = 'listCommitComments',
  listCommits = 'listCommits',
  listContributors = 'listContributors',
  listDeployKeys = 'listDeployKeys',
  listDeploymentStatuses = 'listDeploymentStatuses',
  listDeployments = 'listDeployments',
  listDownloads = 'listDownloads',
  listForOrg = 'listForOrg',
  listForUser = 'listForUser',
  listForks = 'listForks',
  listHooks = 'listHooks',
  listInvitations = 'listInvitations',
  listInvitationsForAuthenticatedUser = 'listInvitationsForAuthenticatedUser',
  listLanguages = 'listLanguages',
  listPagesBuilds = 'listPagesBuilds',
  listProtectedBranchRequiredStatusChecksContexts = 'listProtectedBranchRequiredStatusChecksContexts',
  listProtectedBranchTeamRestrictions = 'listProtectedBranchTeamRestrictions',
  listProtectedBranchUserRestrictions = 'listProtectedBranchUserRestrictions',
  listPublic = 'listPublic',
  listReleases = 'listReleases',
  listStatusesForRef = 'listStatusesForRef',
  listTags = 'listTags',
  listTeams = 'listTeams',
  listTopics = 'listTopics',
  merge = 'merge',
  pingHook = 'pingHook',
  removeBranchProtection = 'removeBranchProtection',
  removeCollaborator = 'removeCollaborator',
  removeDeployKey = 'removeDeployKey',
  removeProtectedBranchAdminEnforcement = 'removeProtectedBranchAdminEnforcement',
  removeProtectedBranchPullRequestReviewEnforcement = 'removeProtectedBranchPullRequestReviewEnforcement',
  removeProtectedBranchRequiredSignatures = 'removeProtectedBranchRequiredSignatures',
  removeProtectedBranchRequiredStatusChecks = 'removeProtectedBranchRequiredStatusChecks',
  removeProtectedBranchRequiredStatusChecksContexts = 'removeProtectedBranchRequiredStatusChecksContexts',
  removeProtectedBranchRestrictions = 'removeProtectedBranchRestrictions',
  removeProtectedBranchTeamRestrictions = 'removeProtectedBranchTeamRestrictions',
  removeProtectedBranchUserRestrictions = 'removeProtectedBranchUserRestrictions',
  replaceProtectedBranchRequiredStatusChecksContexts = 'replaceProtectedBranchRequiredStatusChecksContexts',
  replaceProtectedBranchTeamRestrictions = 'replaceProtectedBranchTeamRestrictions',
  replaceProtectedBranchUserRestrictions = 'replaceProtectedBranchUserRestrictions',
  replaceTopics = 'replaceTopics',
  requestPageBuild = 'requestPageBuild',
  retrieveCommunityProfileMetrics = 'retrieveCommunityProfileMetrics',
  testPushHook = 'testPushHook',
  transfer = 'transfer',
  update = 'update',
  updateBranchProtection = 'updateBranchProtection',
  updateCommitComment = 'updateCommitComment',
  updateFile = 'updateFile',
  updateHook = 'updateHook',
  updateInformationAboutPagesSite = 'updateInformationAboutPagesSite',
  updateInvitation = 'updateInvitation',
  updateProtectedBranchPullRequestReviewEnforcement = 'updateProtectedBranchPullRequestReviewEnforcement',
  updateProtectedBranchRequiredStatusChecks = 'updateProtectedBranchRequiredStatusChecks',
  updateRelease = 'updateRelease',
  updateReleaseAsset = 'updateReleaseAsset',
  uploadReleaseAsset = 'uploadReleaseAsset'
}
export enum SearchApiMethods {
  code = 'code',
  commits = 'commits',
  issues = 'issues',
  issuesAndPullRequests = 'issuesAndPullRequests',
  labels = 'labels',
  repos = 'repos',
  topics = 'topics',
  users = 'users'
}
export enum TeamsApiMethods {
  addMember = 'addMember',
  addOrUpdateMembership = 'addOrUpdateMembership',
  addOrUpdateProject = 'addOrUpdateProject',
  addOrUpdateRepo = 'addOrUpdateRepo',
  checkManagesRepo = 'checkManagesRepo',
  create = 'create',
  createDiscussion = 'createDiscussion',
  createDiscussionComment = 'createDiscussionComment',
  delete = 'delete',
  deleteDiscussion = 'deleteDiscussion',
  deleteDiscussionComment = 'deleteDiscussionComment',
  get = 'get',
  getDiscussion = 'getDiscussion',
  getDiscussionComment = 'getDiscussionComment',
  getMember = 'getMember',
  getMembership = 'getMembership',
  list = 'list',
  listChild = 'listChild',
  listDiscussionComments = 'listDiscussionComments',
  listDiscussions = 'listDiscussions',
  listForAuthenticatedUser = 'listForAuthenticatedUser',
  listMembers = 'listMembers',
  listPendingInvitations = 'listPendingInvitations',
  listProjects = 'listProjects',
  listRepos = 'listRepos',
  removeMember = 'removeMember',
  removeMembership = 'removeMembership',
  removeProject = 'removeProject',
  removeRepo = 'removeRepo',
  reviewProject = 'reviewProject',
  update = 'update',
  updateDiscussion = 'updateDiscussion',
  updateDiscussionComment = 'updateDiscussionComment'
}
export enum UsersApiMethods {
  addEmails = 'addEmails',
  block = 'block',
  checkBlocked = 'checkBlocked',
  checkFollowing = 'checkFollowing',
  checkFollowingForUser = 'checkFollowingForUser',
  createGpgKey = 'createGpgKey',
  createPublicKey = 'createPublicKey',
  deleteEmails = 'deleteEmails',
  deleteGpgKey = 'deleteGpgKey',
  deletePublicKey = 'deletePublicKey',
  follow = 'follow',
  getAuthenticated = 'getAuthenticated',
  getByUsername = 'getByUsername',
  getContextForUser = 'getContextForUser',
  getGpgKey = 'getGpgKey',
  getPublicKey = 'getPublicKey',
  list = 'list',
  listBlocked = 'listBlocked',
  listEmails = 'listEmails',
  listFollowersForAuthenticatedUser = 'listFollowersForAuthenticatedUser',
  listFollowersForUser = 'listFollowersForUser',
  listFollowingForAuthenticatedUser = 'listFollowingForAuthenticatedUser',
  listFollowingForUser = 'listFollowingForUser',
  listGpgKeys = 'listGpgKeys',
  listGpgKeysForUser = 'listGpgKeysForUser',
  listPublicEmails = 'listPublicEmails',
  listPublicKeys = 'listPublicKeys',
  listPublicKeysForUser = 'listPublicKeysForUser',
  togglePrimaryEmailVisibility = 'togglePrimaryEmailVisibility',
  unblock = 'unblock',
  unfollow = 'unfollow',
  updateAuthenticated = 'updateAuthenticated'
}