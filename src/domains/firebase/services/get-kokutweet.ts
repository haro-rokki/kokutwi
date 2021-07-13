import 'firebase/firestore';
import { db } from 'lib/firebase';

export const getKokutweets = async (path: string): Promise<string[]> => {
  if (!path) {
    return [];
  }
  const kokutweetRefs = await db.collection(path).get();

  const kokutweets: string[] = [];
  kokutweetRefs.forEach((kokutweet) => {
    kokutweets.push(kokutweet.id);
  });

  return kokutweets;
};
