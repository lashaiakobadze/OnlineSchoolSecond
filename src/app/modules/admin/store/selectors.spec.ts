import * as fromSelectors from './selectors';

import { Contact } from 'src/app/shared/modules/contact/contact.model';
import { News } from 'src/app/shared/modules/home/news.model';

const contacts: Array<Contact> = [
  {
    email: 'test1@gmail.com',
    message: 'test msg1',
    uId: 'visitor'
  },
  {
    email: 'test2@gmail.com',
    message: 'test msg2',
    uId: '9204809128'
  },
  {
    email: 'test3@gmail.com',
    message: 'test msg3',
    uId: '984091'
  }
];

describe('Selectors', () => {
  it('should select the visitor contacts', () => {
    const initialState = contacts;
    const result = fromSelectors.selectVisitorsContacts.projector(initialState);
    expect(result.length).toEqual(1);
    expect(result[0].uId).toEqual('visitor');
  });

  it('should select the users contacts', () => {
    const initialState = contacts;
    const result = fromSelectors.selectUsersContacts.projector(initialState);
    expect(result.length).toEqual(2);
    expect(result[0].uId).toEqual('9204809128');
    expect(result[1].uId).toEqual('984091');
  });

  it('should select all blogs', () => {
    const initialState: Array<News> = [
      {
        id: '123781238',
        date: new Date().toString(),
        title: 'test',
        imgPath: 'test path',
        info: 'test info',
      }
    ];
    const result = fromSelectors.selectAllBlogs.projector(initialState);
    expect(result.length).toEqual(initialState.length);
  });
});
