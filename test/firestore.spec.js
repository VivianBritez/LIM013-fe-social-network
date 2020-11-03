import MockFirebase from 'mock-cloud-firestore';
import {
  addNotesToDB,
  readAddNotesToDB,
  editTextPost,
  deletePost,
} from '../src/lib/firebase/firestore.js';

const fixtureData = {
  __collection__: {
    publications: {
      __doc__: {
        abc1d: {
          creatorID: '03',
          creatorName: 'Vivian',
          note: 'post agregado',
          date: '',
          mode: '',
          photo: '',
          name: '',
          link: '',
        },
      },
    },
  },
};

global.firebase = new MockFirebase(fixtureData, {
  isNaiveSnapshotListenerEnabled: true,
});

describe('add note', () => {
  it('Deberia de poder agregar un post', done => addNotesToDB(
    '03',
    'vivian',
    'publications agregado',
    '',
    '',
    '',
    '',
    '',
  ).then(() => readAddNotesToDB((data) => {
    const result = data.find(
      element => element.note === 'publications agregado',
    );
    expect(result.note).toBe('publications agregado');
    done();
  })));
});

describe('Edit a post', () => {
  it('Should be able to edit a post', done => editTextPost('abc1d', 'Hello wonderful world', '').then(() => readAddNotesToDB((data) => {
    const result = data.find(
      element => element.note === 'Hello wonderful world',
    );
    expect(result.note).toBe('Hello wonderful world');
    done();
  })));
});

describe('Delete a post', () => {
  it('Should be able to delete a post', done => deletePost('abc1d').then(() => readAddNotesToDB((data) => {
    const result = data.find(element => element.id === 'abc1d');
    expect(result).toBe(undefined);
    done();
  })));
});
