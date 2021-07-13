import 'firebase/firestore';
import { db } from 'lib/firebase';
import { Kokutweet } from '../models/kokutweet';

export const getKokutweet = async (path: string): Promise<Kokutweet | null> => {
  if (!path) {
    return null;
  }
  const kokutweetRefs = await db.doc(path).get();

  if (!kokutweetRefs.exists) {
    return null;
  }

  const kokutweet = kokutweetRefs.data() as Kokutweet;

  return kokutweet;
};
