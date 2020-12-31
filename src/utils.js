import { v4 as uuidv4 } from "uuid";
export const MovieState = () => {
	return [
		{
			title: "Evacuation",
			img: "https://i.ibb.co/BPBwxG1/evac.jpg",
			id: uuidv4(),
			active: true,
			url: "/evacuation",
			editeur: "Actes Sud",
			date: "05/04/2017",
			rakuten:
				"https://fr.shopping.rakuten.com/offer/buy/1899680921/evacuation.html",
			cultura: "https://www.cultura.com/evacuation-9782330075729.html",
			fnac: "https://livre.fnac.com/a10283223/Raphael-Jerusalmy-Evacuation",
			amazon:
				"https://www.amazon.com/Evacuation-Rapha%C3%ABl-Jerusalmy-ebook/dp/B076Z1JBHN/ref=sr_1_1?dchild=1&keywords=evacuation+jerusalmy&qid=1609442699&s=digital-text&sr=1-1",
			description:
				"C’est la guerre. L’ensemble de la population de Tel-Aviv est évacué. Sauf qu’à la dernière minute, Saba, le grand-père de Naor, descend du bus, entraînant le jeune homme et sa petite amie Yaël dans une dérive clandestine au coeur de la cité désertée désormais toute à eux. Une expérience à hauts risques, à l’intensité démultipliée par trois – trois âmes dont la fraternité efface les générations, trois grands enfants éperdus : Saba, le rescapé beckettien aux velléités oubliées, Yaël, la belle artiste aux idéaux intacts, et Naor, l’étudiant en cinéma aux yeux grands ouverts. Dans une ville bombardée devenue terrain de jeu, cocon paradoxal pour une innocence réinventée, Évacuation est un conte sans morale, une bulle de poésie arrachée aux entrailles de l’histoire au présent, une ode urbaine au désir de vivre, et de paix.",
		},
		{
			title: "La confrérie des chasseurs de livres",
			img: "https://i.ibb.co/NscPSN4/confrerie.jpg",
			id: uuidv4(),
			active: false,
			url: "/confrerie",

			editeur: "Actes Sud",
			date: "21/08/2013",
			cultura:
				"https://www.cultura.com/la-confrerie-des-chasseurs-de-livres-9782330051181.html",
			rakuten:
				"https://fr.shopping.rakuten.com/mfp/5623964/la-confrerie-des-chasseurs-de-livres-raphael-jerusalmy?pid=208329622",
			fnac:
				"https://livre.fnac.com/a8191766/Raphael-Jerusalmy-La-confrerie-des-chasseurs-de-livres-babel-1317",
			amazon:
				"https://www.amazon.com/confr%C3%A9rie-chasseurs-livres/dp/B01J3OB0AW/ref=sr_1_1?dchild=1&keywords=la+confrerie+des+chasseurs+de+livres&qid=1609442564&sr=8-1",
			description:
				"Le roman de Raphaël Jerusalmy commence là où calent les livres d'histoire. François Villon, premier poète des temps modernes et brigand notoire, croupit dans les geôles de Louis XI en attendant son exécution. Quand il reçoit la visite d'un émissaire du roi, il est loin d'en espérer plus qu'un dernier repas. Rebelle, méfiant, il passe pourtant un marché avec l'évêque de Paris et accepte une mission secrète qui consiste d'abord à convaincre un libraire et imprimeur de Mayence de venir s'installer à Paris pour mieux combattre la censure et faciliter la circulation des idées progressistes réprouvées par Rome. Un premier pas sur un chemin escarpé qui mènera notre poète, flanqué de son fidèle acolyte coquillard maître Colin, jusqu'aux entrailles les plus fantasmatiques de la Jérusalem d'en bas, dans un vaste jeu d'alliances, de complots et de contre-complots qui met en marche les forces de l'esprit contre la toute-puissance des dogmes et des armes, pour faire triompher l'humanisme et la liberté. Palpitant comme un roman d'aventures, vif et malicieux comme une farce faite à l'histoire des idées, regorgeant de trouvailles et de rebondissements, La Confrérie des chasseurs de livres cumule le charme et l'énergie de Fanfan la Tulipe, l'engagement et la dérision de Don Quichotte et le sens du suspense d'un Umberto Eco.",
		},
		{
			title: "Diderot - Non à l'ignorance",
			img: "https://i.ibb.co/6Z541fH/diderot.jpg",
			id: uuidv4(),
			active: false,
			url: "/diderot",
			editeur: "Actes Sud Junior",
			date: "21/01/2015",
			cultura: "",
			rakuten:
				"https://fr.shopping.rakuten.com/offer/buy/516218966/diderot-non-a-l-ignorance-de-raphael-jerusalmy.html",
			fnac:
				"https://livre.fnac.com/a7681774/Raphael-Jerusalmy-Diderot-non-a-l-ignorance",
			amazon:
				"https://www.amazon.com/Denis-Diderot-non-lignorance-French/dp/2330039263/ref=sr_1_2?dchild=1&keywords=diderot+non+a+l%27ignorance&qid=1609442615&sr=8-2",
			description:
				"Très jeune, Denis Diderot refuse les interdits imposés par la morale bourgeoise et le clergé sur le savoir de son époque. Petit à petit germe en lui le désir de mettre une connaissance libre à la portée de tous. Il mène alors une lutte acharnée pour faire naître la grande Encyclopédie dont il fut le père. L’impact considérable de son travail fera reculer les obscurantismes. Ce récit picaresque et poétique nous permet de redécouvrir le grand personnage des Lumières, un homme à la vie éminemment romanesque. Diderot incarne un combat plus que jamais d’actualité : partager le savoir, sans contraintes ni tabous, sans prescriptions morales ou religieux.",
		},
		{
			title: "Sauver Mozart",
			img: "https://i.ibb.co/4wkDwvj/mozart.webp",
			id: uuidv4(),
			active: false,
			url: "/mozart",
			rakuten:
				"https://fr.shopping.rakuten.com/mfp/5236938/sauver-mozart-le-journal-d-otto-j-steiner-raphael-jerusalmy?pid=153043072",
			editeur: "Actes Sud",
			date: "21/03/2012",
			cultura: "https://www.cultura.com/sauver-mozart-9782330023461.html",
			fnac:
				"https://livre.fnac.com/a6076239/Raphael-Jerusalmy-Sauver-mozart-babel-1207",
			amazon:
				"https://www.amazon.com/Sauver-Mozart-journal-dOtto-Steiner/dp/2330005164/ref=sr_1_1?dchild=1&keywords=sauver+mozart&qid=1609442526&sr=8-1",
			description:
				"C'est l'histoire d'un attentat musical. Eté 1939, au lendemain de l'Anschluss, Otto J. Steiner égrène ses jours dans un sanatorium de Salzbourg tandis qu'au-dehors l'Histoire montre les crocs. Autrichien, juif(un peu), seul (complètement), il n'aime plus que la musique — et la tuberculose le ronge autant que l'humiliation d'être malade, ou les privations qui achèvent de le pousser à la marge du monde. Un monde dissonant à son oreille de mélomane, une faute de goût existencielle pour cette âme libre, témoin privilégié et involontaire du délitement d'une certaine idée de l'homme. Tout semble joué, quand un événement inattendu le conduit à deux doigts de faire basculer le siècle. Mais s'il ne restait jamais plus rien à sauver que Mozart ? Avec un humour glaçant, une cruauté précise et une gravité malicieuse, Raphaël Jerusalmy signe un premier roman farouchement subversif.",
		},
		{
			title: "Les Obus Jouaient à Pigeons Vole",
			img: "https://i.ibb.co/dDyQhVQ/obus.jpg",
			id: uuidv4(),
			active: false,
			url: "/obus",
			editeur: "Éditions Bruno Doucey",
			cultura:
				"https://www.cultura.com/les-obus-jouaient-a-pigeon-vole-9782330090654.html",
			rakuten:
				"https://fr.shopping.rakuten.com/mfp/5698390/les-obus-jouaient-a-pigeon-vole-raphael-jerusalmy?pid=2442800885",
			date: "19/02/2016",
			fnac:
				"https://livre.fnac.com/a10969489/Raphael-Jerusalmy-Les-obus-jouaient-a-pigeon-vole-babel",
			amazon:
				"https://www.amazon.com/Les-obus-jouaient-%C3%A0-pigeon-vole/dp/2362290948/ref=sr_1_1?dchild=1&keywords=les+obus+jouaient&qid=1609442728&s=digital-text&sr=1-1",
			description:
				"17 mars 1916. Guillaume Apollinaire est atteint par un éclat d'obus dans une tranchée, alors qu'il lit une revue littéraire qui vient, selon l'auteur, d'être retrouvée en Bavière. Retour sur les vingt-quatre heures qui ont précédé l'impact, sur le drame humain qui se joue et le regard d'Apollinaire sur ses hommes, la guerre et la création littéraire.",
		},
		{
			title: "La rose de Saragosse",
			img: "https://i.ibb.co/J5w2R3X/rose.jpg",
			id: uuidv4(),
			active: false,
			url: "/rose",
			editeur: "Actes Sud",
			date: "03/01/2018",
			cultura:
				"https://www.cultura.com/la-rose-de-saragosse-9782363604996.html",
			rakuten:
				"https://fr.shopping.rakuten.com/mfp/5904602/la-rose-de-saragosse?pid=2442800873",
			fnac:
				"https://livre.fnac.com/a13445299/Raphael-Jerusalmy-La-rose-de-saragosse-babel",
			amazon:
				"https://www.amazon.com/ROSE-SARAGOSSE-French-JERUSALMY/dp/2363604997/ref=sr_1_1?dchild=1&keywords=la+rose+de+saragosse&qid=1609442592&s=audible&sr=1-1",
			description:
				"Au cœur de l'Inquisition espagnole, la rencontre improbable entre un mercenaire à la solde du plus offrant et une poignée de grand-bourgeois convertis en danger. La Rose de Saragosse allume l'étincelle d'une rébellion qui passe par le trait vif de la caricature et le langage unique de la gravure. Aventure, séduction, mystère, un bref et riche roman comme une esquisse qui fait parler les silences. Où l'on retrouve le souffle et l'acuité de l'auteur de La Confrérie des chasseurs de livres et de Sauver Mozart. ",
		},
		{
			title: "Shalom Tsahal",
			img: "https://i.ibb.co/rQzFY14/tsahal.jpg",
			id: uuidv4(),
			active: true,
			url: "/tsahal",
			editeur: "Jean Attias",
			date: "24/05/2002",
			cultura: "",
			rakuten:
				"https://fr.shopping.rakuten.com/offer/buy/1083516/Jerusalmy-Raphael-Shalom-Tsahal-Confessions-D-un-Lieutenant-Livre.html",
			fnac: "https://livre.fnac.com/a1309053/Raphael-Jerusalmy-Shalom-Tsahal",
			amazon:
				"https://www.amazon.com/Shalom-Tsahal-Rapha%C3%ABl-J%C3%A9rusalmy/dp/2913973272/ref=sr_1_12?dchild=1&keywords=raphael+jerusalmy&qid=1609443863&sr=8-12",
			description:
				"Ne comptez pas sortir indemne de ce livre. Il y a de l'audace d'un gentleman, d'un officier supérieur et de l'idée même du peuple juif. Ces mémoires refusées par tous les éditeurs paraissent enfin alors que ces aventures authentiques et mouvementés gênent tous les establishments. A propos de Tsahal, oubliez vos préjugés et suivez avec passion le parcours tumultueux d'un provocateur d'exception. Jérusalmy déplace les limites du roman noir en prise sur les intrigues politiques façon James Ellroy ou Jean-Patrick Manchette. Son souffle et les enjeux d'un conflit qui embrasent l'homme et le Proche-Orient se situe au cœur même de la modernité de ce millénaire. De Normale Sup aux frontières du Sinaï en passant par les missions humanitaires au Rwanda, Jérusalmy sème le doute avec brio. Vous possédiez des certitudes sur les Juifs et Israël ? Oubliez-les ! Le Juif qui par deux fois a sauvé la vie d'Arafat s'explique enfin. Raphaël Jérusalmy est arrivé. Un auteur d'exception vous prend à partie.",
		},
		{
			title: "Manuel bleu contre l'antisémtisme et la désinformation",
			img: "https://i.ibb.co/GH0cygt/bleu.png",
			id: uuidv4(),
			active: false,
			url: "/bleu",
			editeur: "Valensin",
			date: "15/11/2019",
			cultura:
				"https://www.cultura.com/manuel-bleu-contre-l-antisemitisme-et-la-desinformation-9782374260389.html",
			fnac:
				"https://www.fnac.com/mp41971204/Manuel-bleu-contre-l-antisemitisme-et-la-desinformation",
			amazon:
				"https://www.amazon.com/Manuel-Bleu-Contre-lAntisemitisme-Desinformation/dp/2374260380/ref=sr_1_16?dchild=1&qid=1609442739&refinements=p_27%3ARapha%C3%ABl+JERUSALMY&s=books&sr=1-16&text=Rapha%C3%ABl+JERUSALMY",
			description:
				"Il y a urgence. Faire face à la désinformation et aux attaques constantes dont le peuple juif est la cible est aujourd'hui indispensable à la défense de la démocratie dans laquelle nous vivons. Afin de lutter contre la haine et la discrimination, il suffit de connaître quelques bonnes vérités que nous vous offrons ici. Des vérités destinées à édifier ceux qui aimeraient savoir et comprendre. Et aussi mieux répondre. En sus de ces données qui vous aideront à combattre le mensonge et les préjugés, il existe une panoplie de moyens d'action faciles à mener par tout un chacun, d'initiatives citoyennes permises par la loi, de structures juridiques, d'associations et institutions officielles à votre entière disposition. Vous en découvrirez ici les principaux ainsi que des conseils quant à la façon d'en faire bon usage. Mieux savoir, mieux comprendre, pour mieux défendre la justice et la vérité. Tel est le principe de cette brochure.",
		},
		{
			title: "Des Sex Pistols à l'Intifada",
			img: "https://i.ibb.co/m5bfXhj/sex-Pistols.jpg",
			id: uuidv4(),
			active: false,
			url: "/sexPistols",
			editeur: "Balland",
			date: "14/01/2021",
			rakuten:
				"https://fr.shopping.rakuten.com/offer/buy/5474212008/des-sex-pistols-a-l-intifada-confidences-d-un-officier-israelien-du-renseignement-format-broche.html",
			cultura:
				"https://www.cultura.com/des-sex-pistols-a-l-intifada-confidences-d-un-officier-israelien-du-renseignement-9782940632640.html",
			fnac:
				"https://livre.fnac.com/a15194156/Raphael-Jerusalmy-Des-Sex-Pistols-a-l-Intifada",
			amazon: "",
			description:
				"Témoignage sur la vie d'un officier du renseignement d'Israël et les actions secrètes menées par l'auteur aux quatre coins du monde et sur lesquelles il lève pudiquement un coin du voile. Il y a une forte dose d'espoir et de désespoir dans ce livre qui offre une occasion de sortir des lieux communs. Comment la narration d'un parcours militaire au sein de Tsahal se fait oeuvre littéraire destructrice de bien des idées préconçues sur l'armée, Israël mais aussi sur la littérature elle-même. Au départ, ce récit autobiographique, bilan personnel d'un parisien de 68 devenu officier des services secrets israéliens, ne devait être que la chronique d'un révolté. Mais il avait des comptes à régler avec les gens : les israéliens, les Sex Pistols, Arafat, sa concierge, Henri Michaux, les femmes, un bébé du Rwanda, le prophète Moïse... Alors, ses 'confessions' sont devenues le bilan d'une époque dingue. A travers jungles et palaces, en passant par Normale Sup' et le lycée Henri IV, de Manaus à Gaza, de Manhattan à Bogota, ce n'est pas qu'un aventurier qui roule sa bosse : c'est l'histoire qui roule l'aventure. C'est la totale : thriller, provocation, voyage, poésie. C'est l'actualité brûlante, le danger, un certain opportunisme, le vécu, l'absinthe et les Uzis...de l'art en direct ! Le soldat juif qui a bu le café avec Pinochet, Dick Cheney et le Prince de Thaïlande s'explique enfin dans un immense clin d'oeil et avec un style d'écriture inattendu. Alors, oubliez tout ce que vous croyez savoir des arabes, des juifs et des punks, de la guerre et de Dada. ",
		},
		{
			title: "Bibliodyssées: 50 histoires de livres sauvés",
			img: "https://i.ibb.co/pZTDMCV/biblio.jpg",
			id: uuidv4(),
			active: false,
			url: "/biblio",
			editeur: "Imprimerie Nationale",
			date: "03/04/2019",
			rakuten:
				"https://fr.shopping.rakuten.com/offer/buy/3755064665/bibliodyssees-50-histoires-de-livres-sauves-format-beau-livre.html",
			cultura: "https://www.cultura.com/bibliodyssees-9782330119850.html",
			fnac: "https://livre.fnac.com/a13206995/Kamel-Daoud-Bibliodyssee",
			amazon:
				"https://www.amazon.com/BibliOdyss%C3%A9es-Foudre-index-exil-talismans/dp/2330119852/ref=sr_1_9?dchild=1&keywords=raphael+jerusalmy&qid=1609447617&sr=8-9",
			description:
				"De tous temps et dans le monde entier, au gré des conflits, des passions ou parfois de simples hasards, des livres et les textes qu'ils enferment, parfois même des bibliothèques entières, ont été dispersés, malmenés ou censurés. Quand ces livres survivent aux périls et à l'oubli, c'est grâce au courage et à la passion des hommes. D'autres ouvrages, tout aussi chèrement préservés, deviennent de véritables talismans, jusque dans l'exil. Voici rassemblés les récits de ces destins, parmi les plus emblématiques. Ce recueil de cinquante « bibliodyssées » rend hommage à ces livres, à leurs auteurs comme à leurs protecteurs, et préfigure ce qui pourrait constituer la première « anthologie de livres sauvés ».",
		},
	];
};

export default MovieState;
