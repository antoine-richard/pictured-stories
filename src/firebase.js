// This import loads the firebase namespace along with all its type information.
import * as Firebase from 'firebase/app'
// These imports load individual services into the firebase namespace.
import 'firebase/auth'
import 'firebase/database'

const firebaseApp = Firebase.initializeApp({
  apiKey: 'AIzaSyC8VcLwuFx62VT5xjjGcaU9s_-w3u4W2ds',
  authDomain: 'pictured-stories-2b3e0.firebaseapp.com',
  databaseURL: 'https://pictured-stories-2b3e0.firebaseio.com',
  projectId: 'pictured-stories-2b3e0',
  storageBucket: 'pictured-stories-2b3e0.appspot.com',
  messagingSenderId: '802537654654'
})

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebaseApp.database()
