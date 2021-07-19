import { createSelector } from '@ngrx/store';
import { AdminState } from './state';

export const selectMessages = (state: AdminState) => state.messages;
export const selectVisitorsContacts = createSelector(
  selectMessages,
  msgs => msgs.filter(msg => msg.uId === 'visitor')
);

export const selectUsersContacts = createSelector(
  selectMessages,
  msgs => msgs.filter(msg => msg.uId !== 'visitor')
);

export const selectBlogs = (state: AdminState) => state.blogs;
export const selectAllBlogs = createSelector(
  selectBlogs,
  blogs => blogs.filter(blog => blog)
);
