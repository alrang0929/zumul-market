import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBkR9JOVYwRoAbuyOnod7G4ippRn2k3gbk',
  authDomain: 'zumul-market-app.firebaseapp.com',
  projectId: 'zumul-market-app',
  storageBucket: 'zumul-market-app.firebasestorage.app',
  messagingSenderId: '13578342718',
  appId: '1:13578342718:web:a8cc2572a29f36ae239c6f',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();
