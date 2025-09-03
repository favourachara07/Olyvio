import { Report } from './types';

export const mockReports: Report[] = [
  {
    id: '1',
    type: 'content',
    status: 'pending',
    reporter: {
      id: 'user1',
      name: 'Alex Johnson',
      email: 'alex@example.com',
      avatar: '/avatars/1.png'
    },
    reportedItem: {
      id: 'content1',
      type: 'post',
      preview: 'This is an inappropriate post that violates community guidelines...',
      url: '/posts/123',
      reportedUserId: 'user10',
      reportedUserName: 'problem_user'
    },
    reason: 'Contains offensive language',
    notes: 'User has been warned before about similar content',
    createdAt: '2023-06-15T10:30:00Z',
    updatedAt: '2023-06-15T10:30:00Z'
  },
  {
    id: '2',
    type: 'user',
    status: 'pending',
    reporter: {
      id: 'user2',
      name: 'Jamie Smith',
      email: 'jamie@example.com',
      avatar: '/avatars/2.png'
    },
    reportedItem: {
      id: 'user3',
      type: 'user',
      preview: 'username: problematic_user',
      url: '/users/problematic_user',
      reportedUserId: 'user3',
      reportedUserName: 'problematic_user'
    },
    reason: 'Harassment in direct messages',
    notes: 'Multiple users have reported this account',
    createdAt: '2023-06-14T15:45:00Z',
    updatedAt: '2023-06-14T15:45:00Z'
  },
  {
    id: '3',
    type: 'message',
    status: 'reviewed',
    reporter: {
      id: 'user4',
      name: 'Taylor Wilson',
      email: 'taylor@example.com',
      avatar: '/avatars/3.png'
    },
    reportedItem: {
      id: 'message5',
      type: 'direct_message',
      preview: 'You should check out this suspicious link: example.com/...',
      reportedUserId: 'user11',
      reportedUserName: 'suspicious_user'
    },
    reason: 'Suspicious link, possible phishing',
    notes: 'Link has been verified as malicious',
    assignedTo: {
      id: 'mod1',
      name: 'Moderator 1'
    },
    createdAt: '2023-06-13T09:15:00Z',
    updatedAt: '2023-06-14T11:20:00Z'
  },
  {
    id: '4',
    type: 'other',
    status: 'resolved',
    reporter: {
      id: 'user5',
      name: 'Morgan Lee',
      email: 'morgan@example.com',
      avatar: '/avatars/4.png'
    },
    reportedItem: {
      id: 'other1',
      type: 'bug',
      preview: 'Bug in the reporting system',
      url: '/settings/bug-reports/123'
    },
    reason: 'False report',
    notes: 'Bug report was valid, ticket created for dev team',
    resolvedAt: '2023-06-11T16:30:00Z',
    resolvedBy: {
      id: 'mod2',
      name: 'Moderator 2'
    },
    resolutionNotes: 'Bug confirmed and prioritized for next sprint',
    createdAt: '2023-06-10T14:20:00Z',
    updatedAt: '2023-06-11T16:30:00Z'
  },
  {
    id: '5',
    type: 'content',
    status: 'dismissed',
    reporter: {
      id: 'user6',
      name: 'Casey Kim',
      email: 'casey@example.com',
      avatar: '/avatars/5.png'
    },
    reportedItem: {
      id: 'content2',
      type: 'comment',
      preview: 'I disagree with your opinion.',
      url: '/posts/456#comment-789',
      reportedUserId: 'user12',
      reportedUserName: 'opinionated_user'
    },
    reason: 'I disagree with this content',
    notes: 'Report does not violate community guidelines',
    resolvedAt: '2023-06-09T10:15:00Z',
    resolvedBy: {
      id: 'mod1',
      name: 'Moderator 1'
    },
    resolutionNotes: 'Content falls within community guidelines',
    createdAt: '2023-06-08T18:05:00Z',
    updatedAt: '2023-06-09T10:15:00Z'
  }
];
