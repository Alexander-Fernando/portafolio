import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = initializeApp({
  apiKey: 'AIzaSyDzUA8wYvv0lgsB-2LypH4TqrIzkHo8AGU',
  authDomain: 'portafolio-alexander.firebaseapp.com',
  projectId: 'portafolio-alexander',
  storageBucket: 'portafolio-alexander.appspot.com',
  messagingSenderId: '1063753352532',
  appId: '1:1063753352532:web:70511f014995f59119b4c1',
});



export const db = getFirestore(firebaseConfig);
