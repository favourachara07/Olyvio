export type ReportStatus = 'pending' | 'reviewed' | 'resolved' | 'dismissed';

export interface UserReference {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface ReportedItem {
  id: string;
  type: string;
  preview: string;
  url?: string;
  reportedUserId?: string;
  reportedUserName?: string;
}

export interface Report {
  id: string;
  type: 'content' | 'user' | 'message' | 'other';
  status: ReportStatus;
  reporter: UserReference;
  reportedItem: ReportedItem;
  reason: string;
  notes?: string;
  assignedTo?: {
    id: string;
    name: string;
  };
  createdAt: string;
  updatedAt: string;
  resolvedAt?: string;
  resolvedBy?: {
    id: string;
    name: string;
  };
  resolutionNotes?: string;
}
