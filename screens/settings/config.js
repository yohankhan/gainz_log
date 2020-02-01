import Firebase from 'firebase';
var Config = {
	apiKey: 'AIzaSyCh7TStjV7P78Et14Id4N9npjQzGmmScXM',
	authDomain: 'app3-75880.firebaseapp.com',
	databaseURL: 'https://app3-75880.firebaseio.com',
	projectId: 'app3-75880',
	storageBucket: 'app3-75880.appspot.com',
	messagingSenderId: '372057561710',
	appId: '1:372057561710:web:64052082e26d1ae459247f',
	measurementId: 'G-V7052Z0012'
};

let app = Firebase.initializeApp(Config);

export const db = app.database();

