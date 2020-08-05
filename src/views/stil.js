import { StyleSheet } from 'react-native';
import tlfnH from '../helper/tlfnH';
import temaH from '../helper/temaH';

//K  : container
//AK : subContainer
//B  : button
//BY : buttonText

const W = tlfnH.W;
const H = tlfnH.H;
const R = temaH.renkler;


export const footerS = StyleSheet.create({
	K: {
		width: W(100),
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'center'
	},
	solK: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		height: 48,
		paddingRight: 20,
		backgroundColor: R.r1,
	},
	sagK: {
		paddingRight: 0,
		paddingLeft: 20
	},

	anabutonAK: {
		backgroundColor: R.r1,
		borderRadius: 100,
		position: 'absolute',
		padding: 10,
		borderRadius: 100
	},
});

export const anasayfaS = StyleSheet.create({
	K: {
		flex: 1,
		backgroundColor: 'white'
	},
	K2: {
		justifyContent: 'center',
		alignItems: 'center'
	},


	//#region NOT EKLE
	notEkleModalK: {
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		borderColor: R.r1
	},
	notEkleModalKapatB: { position: 'absolute', top: 3, right: 5 },
	modalBaslik: {
		fontSize: 20,
		fontWeight: 'bold',
		color: R.r2
	},
	baslikInput: {
		borderBottomWidth: 1,
		borderColor: '#00000055',
		marginBottom: 10,
		width: '90%',
	},
	notInputK: {
		width: '90%',
		borderWidth: 1,
		borderColor: '#00000055'
	},
	notInput: {
		borderRadius: 3,
		paddingHorizontal: 10,
		minHeight: H(10),
		maxHeight: H(15),
		marginBottom: 3,
	},
	butonlarK: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	buton: {
		marginRight: 3,
		marginBottom: 3
	},

	olusturB: {
		alignSelf: 'flex-end',
		marginRight: '5%',
	},
	olusturBY: {
		fontWeight: 'bold',
		fontSize: 16,
		color: R.r2,
		paddingTop: 10,
		paddingBottom: 5,
	}
	//#endregion
});

export const splashS = StyleSheet.create({
	K: { //splash ekranı container
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	},
	K2: { //anasayfa için splash ekranı container
		position: 'absolute',
		left: W(2),
		top: H(2)
	},
	K3: {
		justifyContent: 'flex-end',
		alignItems: 'center',
	}
});

export const anasayfaNotS = StyleSheet.create({
	notlarK: { //tüm notların içinde bulunduğu View
		flex: 1
	},
	notK: { //her bir not için View
		backgroundColor: R.r1,
		marginTop: H(1.2),
		marginBottom: H(1.2),
		padding: W(2),
		paddingBottom: W(9),
	},


	notButonlarK: { //notlardaki açılır butonlar alanı
		flexDirection: 'row',
		position: 'absolute',
		bottom: -10,
		right: 10,
		backgroundColor: R.r1,
		borderRadius: 2,
		alignItems: 'center',
		justifyContent: 'center',
		paddingRight: 5,
		paddingTop: 5,
		paddingBottom: 5,
		backgroundColor: R.r1,
		borderWidth: 2,
		borderBottomWidth: 0,
		borderColor: 'white',
	},
	notButonlarAK: { flexDirection: 'row' },
	butonlarAcKapaButon: {
		alignSelf: 'center',
	},
	notButonK: {
		marginRight: 3,
		marginLeft: 3
	},


	notRenkSecK: {
		borderWidth: 1,
		flexDirection: 'row',
		position: 'absolute',
		bottom: -W(2),
		left: 10,
		maxWidth: W(30),
		backgroundColor: R.r1,
		borderRadius: 2,
		borderWidth: 2,
		borderBottomWidth: 0,
		borderColor: 'white',
		paddingTop: 3,
		paddingBottom: 3

	},
	notRenk: {
		width: W(6),
		height: W(6),
		borderRadius: W(3),
		marginRight: 5,
		marginLeft: 5,
	}
});

export const anasayfaUstBolgeS = StyleSheet.create({
	K: {
		minHeight: W(20) + H(4),
		width: W(100),
		backgroundColor: R.r1,
		paddingLeft: W(25),
		paddingRight: 15,
		justifyContent: 'center',
	},
	ustAlanY: {
		fontWeight: 'bold',
		fontSize: 15,
		color: R.r2,
		textAlign: 'right'
	},
});


export const oturumS = StyleSheet.create({
	K: {
		width: W(100),
		marginTop: 25,
		justifyContent: 'center',
		alignItems: 'center'
	},

	input: {
		width: W(75),
	},
	buton: {
		width: W(65)
	},
	butonKlavyeAcik: {
		width: W(100)
	},
	uyeOlButon: {
		marginTop: '20%',
	},
	uyeOlButonY: {
		textDecorationLine: 'underline'
	}
});