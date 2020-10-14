import MockFirebase from 'mock-cloud-firestore';
import {
  addNotesToDB,
  readAddNotesToDB,
} from '../src/lib/firebase/firestore.js';


const fixtureData = {
  __collection__: {
    notes: {
      __doc__: {
        post01: {
          creatorID: '01',
          creatorName: 'Vivian',
          note: 'post agregado',
          date: '',
          mode: '',
          photo: '',
        },
        post02: {
          creatorID: '02',
          creatorName: 'Alex y Sheilly',
          note: 'post',
          date: '',
          mode: '',
          photo: '',
        },
      },
    },
  },
};
global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true, });

describe('addNotesToDB', () => {
  it('Deberia de poder agregar un post', (done) => {
    return addNotesToDB('03', 'vivian', 'publications agregado', '', '', '')
    .then(() => readAddNotesToDB(
      (data) => {
        const result = data.find(element => element.note === 'publications agregado');
        expect(result.note).toBe('publications agregado');
        done();
      }
    ));
  });
});
