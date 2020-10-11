import MockFirebase from 'mock-cloud-firestore';
import { readAddNotesToDB, editTextPost, deletePost } from '../src/lib/firebase/firestore.js';

const fixtureData = {
  __collection__: {
    publications: {
      __doc__: {
        abc1d: {
          note: 'Hello World',
          date: '',
        },

        abc2d: {
          note: 'Good morning',
          date: '',
        },

      },
    },
  },
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

describe('Edit a post', () => {
  it('Should be able to edit a post', (done) => {
    return editTextPost('abc1d', 'Hello wonderful world', '')
      .then(() => readAddNotesToDB(
        (data) => {
          const result = data.find((element) => element.note === 'Hello wonderful world');
          expect(result.note).toBe('Hello wonderful world');
          done();
        },
      ));
  });
});

describe('Delete a post', () => {
  it('Should be able to delete a post', (done) => {
    return deletePost('abc1d')
      .then(() => readAddNotesToDB(
        (data) => {
          const result = data.find((element) => element.id === 'abc1d');
          expect(result).toBe(undefined);
          done();
        },
      ));
  });
});
