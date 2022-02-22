

const sacCarreMarron = 'https://atelier-cuir-fuchats-back.herokuapp.com/assets/sacCarreMarron/sac-cuir-artisanal-rectangle-marron.jpeg'

const cartableMarron = 'https://atelier-cuir-fuchats-back.herokuapp.com/assets/cartableMarronClair/cartable-cuir-marron-clair.jpeg'
const cartableMarronProfil = 'https://atelier-cuir-fuchats-back.herokuapp.com/assets/cartableMarronClair/cartable-cuir-marron-clair-profil.jpeg'

const sacocheMarron = 'https://atelier-cuir-fuchats-back.herokuapp.com/assets/sacocheMarron/sacoche-homme-cuir-marron-artisanat-fuchats.jpeg'
const sacocheMarronOuvert = 'https://atelier-cuir-fuchats-back.herokuapp.com/assets/sacocheMarron/sacoche-homme-cuir-marron-artisanat-ouverte.jpeg'
const sacocheMarronProfil = 'https://atelier-cuir-fuchats-back.herokuapp.com/assets/sacocheMarron/sacoche-homme-cuir-marron-artisanat-profil.jpeg'

const sacRouge = 'https://atelier-cuir-fuchats-back.herokuapp.com/assets/sacRouge/Petit-sac-rouge-rond-veau-dessus.jpeg'
const sacRougeOuvert = 'https://atelier-cuir-fuchats-back.herokuapp.com/assets/sacRouge/Petit-sac-rouge-rond-veau-ouvert.jpeg'
const sacRougeFace = 'https://atelier-cuir-fuchats-back.herokuapp.com/assets/sacRouge/Petit-sac-rouge-rond-veau-face.jpeg'
const sacRougeRecul = 'https://atelier-cuir-fuchats-back.herokuapp.com/assets/sacRouge/Petit-sac-rouge-rond-veau-recul.png'

const sacMarron = 'https://atelier-cuir-fuchats-back.herokuapp.com/assets/sacPascale/Sac-cuir-artisanal-marron-pascale-devant.jpeg'
const sacMarronDos = 'https://atelier-cuir-fuchats-back.herokuapp.com/assets/sacPascale/Sac-cuir-artisanal-marron-pascale-dos.jpeg'
const sacMarronOuvert = 'https://atelier-cuir-fuchats-back.herokuapp.com/assets/sacPascale/Sac-cuir-artisanal-marron-pascale-ouvert.jpeg'


const itemToSale = [
	{
		name: 'sac en cuir de veau rouge',
		category: 'sac',
		id: 1,
		cover: sacRouge,
		allCover : [sacRouge, sacRougeOuvert, sacRougeFace, sacRougeRecul],
		price: 70,
		quantity: 1,
		fullName : 'Petit sac à main en cuir de veau rouge',
		comment : ['Taille : largeur 21cm, hauteur 15 cm, profondeur 5,5 cm.', 'Petit sac rouge vif, de forme arrondie, en cuir de veau souple et léger. On peut y glisser son téléphone, son porte-monnaie, et dans la poche intérieur plaquée, ses clés ou ses cartes', 'Fermeture à glissière sur le dessus.', 'Bandoulière réglable jusqu\'à 115 cm.']
	},
    {
		name: 'sac en cuir marron',
		category: 'sac',
		id: 2,
		cover: sacMarron,
		allCover: [sacMarron, sacMarronDos, sacMarronOuvert],
		price: 250,
		quantity: 0,
		fullName : 'Sac en cuir Pascale marron',
		comment : ['Taille : largeur 33 cm, hauteur 32 cm, profondeur 9 cm', 'Grand sac en cuir à tannage végétal rigide. Peut se porter en sac à dos ou bandoulière grâce à sa bandoulière amovible et réglable en longueur, et à ses bretelles également amovibles.', 'Une poche extérieure de 2 cm d\'épaisseur.', 'Entièrement cousu main. Motifs sur le devant réalisés à l\'aide de matoirs.']
	},
	{
		name: 'sac carré à tanage végétal',
		category: 'sac',
		id: 3,
		cover: sacCarreMarron,
		allCover: [sacCarreMarron],
		quantity: 1,
		price: 220,
		fullName : 'Sac Michèle carré marron en cuir à tannage végétal',
		comment : ['Taille : largeur 28 cm, hauteur 25 cm, profondeur 9 cm.', 'Grand sac à main style sacoche, en cuir à tannage végétal. Une poche intérieure plaquée en cuir souple. Bandoulière réglable en longueur.', 'Entièrement cousu main. Motifs sur le devant réalisés à l\'aide de matoirs.']
	},
	{
		name: 'Cartable marron clair',
		category: 'cartable',
		id: 4,
		cover: cartableMarron,
		allCover: [cartableMarron, cartableMarronProfil],
		price: 220,
		quantity: 1,
		fullName : 'Cartable en cuir marron clair',
		comment : ['Cartable en cuir, entièrement cousu main.', 'Sa bandoulière amovible grâce à des mousquetons est réglable en longueur.', 'Il possède une poche extérieure, et 2 compartiments à soufflet intérieures.', 'Dimensions : hauteur 30 cm, largeur 38 cm, profondeur 12 cm (2 compartiments de 6 cm)']
	},
	{
		name: 'Sacoche homme marron',
		category: 'cartable',
		id: 5,
		cover: sacocheMarron,
		allCover: [sacocheMarron, sacocheMarronOuvert, sacocheMarronProfil],
		price: 110,
		quantity: 1,
		fullName : 'Sacoche homme marron',
		comment : ['Sacoche en cuir à tannage végétal d\'environ 2mm d\'épaisseur, entièrement cousue main.', 'Légère, elle pèse moins de 500 g. Sa bandoulière est réglable en longueur jusqu\'à 140 cm.', 'Pratique, elle possède une poche plaquée intérieure, et une poche à soufflet extérieure.', 'Sa fermeture par tourniqué est en laiton vieilli.', 'Dimensions : hauteur 22 cm, largeur 18 cm, profondeur 8 cm', 'Poche frontale : hauteur 17 cm, largeur 14 cm, profondeur 3 cm']
	},
]

module.exports = itemToSale;