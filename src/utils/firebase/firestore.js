import firebase from 'firebase/app'

const firestore = firebase.firestore()
const settings = {
    timestampsInSnapshots: true
}
firestore.settings(settings);

export default firestore;