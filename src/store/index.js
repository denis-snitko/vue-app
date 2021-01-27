import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import 'firebase/storage'

Vue.use(Vuex)

firebase.initializeApp({
  apiKey: 'AIzaSyAC7o7prm7JFJJs5Eyztlf0gsREbEKagqY',
  authDomain: 'test-project-42527.firebaseapp.com',
  databaseURL: 'https://test-project-42527-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'test-project-42527',
  storageBucket: 'test-project-42527.appspot.com',
  messagingSenderId: '132696441396',
  appId: '1:132696441396:web:696d70d63e25595e848061'
})

const storage = firebase.storage()
const storageRef = storage.ref()
export default new Vuex.Store({
  state: {
    fileName: null,
    fileUrl: null
  },
  actions: {
    uploadFile ({ commit }, fileInfo) {
      storageRef.child('images/' + fileInfo.fileName).put(fileInfo.file)
        .then((snapshot) => {
          console.log('Uploaded', snapshot.totalBytes, 'bytes.')
          console.log('File metadata:', snapshot.metadata)
          snapshot.ref.getDownloadURL().then((url) => {
            console.log('File available at', url)
          })
          console.log(fileInfo)
          commit('addFileName', fileInfo)
        }).catch((error) => {
          console.error('Upload failed', error)
        })
    },
    loadFile ({ commit }) {
      const path = `images/${this.getters.getFileFromStore}`
      const starsRef = storageRef.child(path)
      starsRef.getDownloadURL()
        .then((url) => {
          commit('addFileUrl', url)
          console.log(url)
          // Insert url into an <img> tag to "download"
        })
        .catch((error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case 'storage/object-not-found':
              // File doesn't exist
              break
            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              break
            case 'storage/canceled':
              // User canceled the upload
              break
            case 'storage/unknown':
              // Unknown error occurred, inspect the server response
              break
          }
        })
    }
  },
  mutations: {
    addFileName (state, payload) {
      state.fileName = payload.fileName
    },
    addFileUrl (state, payload) {
      state.fileUrl = payload
    }
  },
  getters: {
    getFileFromStore: store => store.fileName
  }
})
