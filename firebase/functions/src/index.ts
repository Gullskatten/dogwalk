import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";
import * as uuidv4 from "uuid/v4";

admin.initializeApp();

const db = admin.firestore();
const users = db.collection("users");
const FieldValue = admin.firestore.FieldValue;

exports.onCreateUser = functions.firestore
  .document("users/{userId}")
  .onCreate((snapshot, context) => {
    var batch = db.batch();
    let userRef = users.doc(context.params.userId);
    let notificationsCollection = userRef.collection("notifications");
    let publicInfoCollection = userRef.collection("public");
    let profileRef = publicInfoCollection.doc("profile");

    const userData = snapshot.data();

    let welcomeNotification = notificationsCollection.doc();
    
    if(!userData) {
        return;
    }

    batch.set(welcomeNotification, {
      id: uuidv4(),
      text: `${userData.displayName}, Welcome to Dogwalk! 🐶 Your future notifications will appear here. `,
      href: null,
      placeholders: [],
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
      picture: userData.photoURL
    });

    batch.set(profileRef, {
      uid: userData.uid,
      displayName: userData.displayName,
      photoURL: userData.photoURL,
      joinedAt: FieldValue.serverTimestamp(),
    });
  
    // Commit the write batch
    return batch.commit();
  });