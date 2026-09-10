const PREPOSITION_QUESTIONS = [
  {
    id: 1,
    choices: ["i", "på"],
    sentence: "Passet ligger ___ skuffen, under noen papirer.",
    correct: ["i"],
    explanations: { i: "Passet ligger inni skuffen." }
  },
  {
    id: 2,
    choices: ["i", "på"],
    sentence: "Koppen står ___ bordet.",
    correct: ["på"],
    explanations: { på: "Koppen står på en flate og berører den." }
  },
  {
    id: 3,
    choices: ["i", "på"],
    sentence: "Vi skal gifte oss ___ lørdag.",
    correct: ["på"],
    explanations: { på: "Vi bruker på foran ukedager." }
  },
  {
    id: 4,
    choices: ["i", "på"],
    sentence: "Kurset starter ___ september.",
    correct: ["i"],
    explanations: { i: "Vi bruker i foran navn på måneder." }
  },
  {
    id: 5,
    choices: ["i", "på"],
    sentence: "Hun ble født ___ 1990.",
    correct: ["i"],
    explanations: { i: "Vi bruker i foran årstall." }
  },
  {
    id: 6,
    choices: ["i", "om"],
    sentence: "Møtet varte ___ en time.",
    correct: ["i"],
    explanations: { i: "I en time forteller hvor lenge møtet varte." }
  },
  {
    id: 7,
    choices: ["i", "om"],
    sentence: "Bussen kommer ___ ti minutter.",
    correct: ["om"],
    explanations: { om: "Om ti minutter betyr ti minutter fra nå." }
  },
  {
    id: 8,
    choices: ["om", "på"],
    sentence: "Jeg drikker alltid kaffe ___ morgenen.",
    correct: ["om", "på"],
    explanations: {
      om: "Om morgenen brukes ofte om noe som skjer regelmessig.",
      på: "På morgenen er også vanlig og kan brukes om den samme vanen."
    },
    note: "Begge svarene er naturlige. Sammenhengen og språkvanene til den som snakker, kan påvirke valget."
  },
  {
    id: 9,
    choices: ["om", "i"],
    sentence: "Boka handler ___ livet i Norge.",
    correct: ["om"],
    explanations: { om: "Vi bruker om for å vise hva boka har som tema." }
  },
  {
    id: 10,
    choices: ["under", "om"],
    sentence: "Han sov ___ hele filmen.",
    correct: ["under"],
    explanations: { under: "Under hele filmen betyr mens filmen pågikk." }
  },
  {
    id: 11,
    choices: ["under", "om"],
    sentence: "Ingen fikk pause. Møtet fortsatte ___ hele lunsjen.",
    correct: ["under"],
    explanations: { under: "Møtet fortsatte mens lunsjen pågikk." }
  },
  {
    id: 12,
    choices: ["med", "til"],
    sentence: "Sara gikk på kino ___ vennene sine.",
    correct: ["med"],
    explanations: { med: "Med viser at Sara og vennene gikk sammen." }
  },
  {
    id: 13,
    choices: ["med", "for"],
    sentence: "Hun klippet opp pakken ___ en saks.",
    correct: ["med"],
    explanations: { med: "Saksen er redskapet hun bruker for å åpne pakken." }
  },
  {
    id: 14,
    choices: ["med", "om"],
    sentence: "Vi reiser til Trondheim ___ tog.",
    correct: ["med"],
    explanations: { med: "Med tog forteller hvilket transportmiddel vi bruker." }
  },
  {
    id: 15,
    choices: ["med", "for"],
    sentence: "Jeg liker pizza ___ sopp.",
    correct: ["med"],
    explanations: { med: "Med sopp forteller hva pizzaen har på seg eller inneholder." }
  },
  {
    id: 16,
    choices: ["til", "på"],
    sentence: "Jeg er på vei ___ tannlegen.",
    correct: ["til"],
    explanations: { til: "Tannlegen er målet for bevegelsen." }
  },
  {
    id: 17,
    choices: ["til", "i"],
    sentence: "Vi kjører fra Oslo ___ Bergen.",
    correct: ["til"],
    explanations: { til: "Bergen er målet for reisen." }
  },
  {
    id: 18,
    choices: ["til", "for"],
    sentence: "Jeg finner ikke nøkkelen ___ ytterdøra.",
    correct: ["til"],
    explanations: { til: "Nøkkelen til ytterdøra er nøkkelen som hører til eller passer i døra." }
  },
  {
    id: 19,
    choices: ["til", "for"],
    sentence: "Mariam er søsteren ___ Ali.",
    correct: ["til"],
    explanations: { til: "Til uttrykker slektskap eller en forbindelse mellom personene." }
  },
  {
    id: 20,
    choices: ["for", "om"],
    sentence: "Kurset er laget ___ nybegynnere som vil lære norsk.",
    correct: ["for"],
    explanations: { for: "For nybegynnere viser hvem kurset er beregnet på." }
  },
  {
    id: 21,
    choices: ["for", "om"],
    sentence: "Han fikk bot ___ feilparkering.",
    correct: ["for"],
    explanations: { for: "For feilparkering uttrykker grunnen til at han fikk bot." }
  },
  {
    id: 22,
    choices: ["for", "til"],
    sentence: "Takk ___ hjelpen!",
    correct: ["for"],
    explanations: { for: "Vi bruker uttrykket takk for når vi sier hva vi takker noen for." }
  },
  {
    id: 23,
    choices: ["over", "under"],
    sentence: "Hun holdt paraplyen ___ hodet for å beskytte seg mot regnet.",
    correct: ["over"],
    explanations: { over: "Paraplyen er plassert høyere enn hodet." }
  },
  {
    id: 24,
    choices: ["under", "i"],
    sentence: "Potetene er ikke synlige fordi de vokser ___ bakken.",
    correct: ["under", "i"],
    explanations: {
      under: "Under bakken legger vekt på at potetene vokser nedenfor jordoverflaten.",
      i: "I bakken legger mer vekt på at potetene vokser inne i jorda."
    },
    note: "Begge svarene er naturlige, men perspektivet er litt forskjellig."
  },
  {
    id: 25,
    choices: ["under", "over"],
    sentence: "Når det er kaldt, har jeg stillongs innerst, ___ buksa.",
    correct: ["under"],
    explanations: { under: "Stillongsen er dekket av buksa og ligger innenfor den." }
  },
  {
    id: 26,
    choices: ["over", "under"],
    sentence: "Det kom 120 personer. Det var ___ hundre personer på konserten.",
    correct: ["over"],
    explanations: { over: "120 er mer enn 100." }
  },
  {
    id: 27,
    choices: ["om", "under"],
    sentence: "Vi snakket ___ filmen.",
    correct: ["om", "under"],
    explanations: {
      om: "Med om var filmen temaet for samtalen.",
      under: "Med under skjedde samtalen mens filmen pågikk."
    },
    note: "Begge svarene er naturlige, men de gir forskjellig betydning."
  },
  {
    id: 28,
    choices: ["i", "på"],
    sentence: "Hun jobber ___ skolen.",
    correct: ["i", "på"],
    explanations: {
      i: "I skolen viser ofte til skolen som institusjon eller skolesektoren mer generelt.",
      på: "På skolen viser ofte til arbeidsstedet eller en bestemt skole."
    },
    note: "Begge svarene er mulige. Hvilket som passer best, avhenger av hva personen mener."
  },
  {
    id: 29,
    choices: ["til", "for"],
    sentence: "Jeg kjøpte blomster ___ moren min.",
    correct: ["til", "for"],
    explanations: {
      til: "Med til skal moren få blomstene.",
      for: "Med for kjøpte jeg blomstene på vegne av moren min eller for å hjelpe henne."
    },
    note: "Begge svarene er mulige, men forholdet mellom moren og handlingen blir forskjellig."
  },
  {
    id: 30,
    choices: ["til", "for"],
    sentence: "Jeg skrev brevet ___ læreren.",
    correct: ["til", "for"],
    explanations: {
      til: "Med til er læreren mottakeren av brevet.",
      for: "Med for skrev jeg brevet på vegne av læreren eller som en hjelp for læreren."
    },
    note: "Begge svarene er naturlige, men de gir forskjellig betydning."
  },
  {
    id: 31,
    choices: ["i", "på"],
    sentence: "Hun leste boka ___ tre timer.",
    correct: ["i", "på"],
    explanations: {
      i: "Med i leste hun i tre timer. Setningen sier ikke nødvendigvis at hun ble ferdig.",
      på: "Med på brukte hun tre timer på å lese hele boka og ble ferdig."
    },
    note: "Begge svarene er naturlige, men på uttrykker tydeligere at lesingen førte fram til et ferdig resultat."
  },
  {
    id: 32,
    choices: ["i", "på"],
    sentence: "Hun bor ___ Oslo.",
    correct: ["i"],
    explanations: { i: "Vi bruker vanligvis i foran navnet på byen Oslo." }
  },
  {
    id: 33,
    choices: ["i", "på"],
    sentence: "De reiser rundt ___ Europa.",
    correct: ["i"],
    explanations: { i: "Europa er et stort geografisk område, og vi sier i Europa." }
  },
  {
    id: 34,
    choices: ["på", "med"],
    sentence: "Fargen ___ buksa er mørkeblå.",
    correct: ["på"],
    explanations: { på: "Fargen på buksa forteller om en egenskap ved buksa." }
  },
  {
    id: 35,
    choices: ["på", "under"],
    sentence: "Slutten ___ filmen var trist.",
    correct: ["på"],
    explanations: { på: "Slutten på filmen viser til den siste delen av filmen." }
  },
  {
    id: 36,
    choices: ["under", "over"],
    sentence: "Mina er 10 år. Hun er ___ 12 år.",
    correct: ["under"],
    explanations: { under: "10 er mindre enn 12." }
  },
  {
    id: 37,
    choices: ["under", "over"],
    sentence: "Jakka kostet 350 kroner. Den kostet ___ 400 kroner.",
    correct: ["under"],
    explanations: { under: "350 kroner er mindre enn 400 kroner." }
  },
  {
    id: 38,
    choices: ["til", "om"],
    sentence: "Butikken er åpen ___ klokka åtte.",
    correct: ["til"],
    explanations: { til: "Til klokka åtte viser når åpningstida slutter." }
  },
  {
    id: 39,
    choices: ["til", "på"],
    sentence: "Vi blir her ___ i morgen.",
    correct: ["til"],
    explanations: { til: "Til i morgen viser hvor lenge vi blir her." }
  },
  {
    id: 40,
    choices: ["til", "med"],
    sentence: "Dette rommet brukes ___ møter.",
    correct: ["til"],
    explanations: { til: "Til møter forteller hva rommet brukes til." }
  },
  {
    id: 41,
    choices: ["til", "om"],
    sentence: "Jeg trenger en kniv ___ å skjære brødet.",
    correct: ["til"],
    explanations: { til: "Til å skjære brødet forteller hva kniven skal brukes til." }
  },
  {
    id: 42,
    choices: ["over", "under"],
    sentence: "Gjerdet var høyt, men katten hoppet ___ det.",
    correct: ["over"],
    explanations: { over: "Katten beveget seg til den andre siden ved å hoppe høyere enn gjerdet." }
  },
  {
    id: 43,
    choices: ["over", "på"],
    sentence: "Han svømte ___ elva for å komme til den andre siden.",
    correct: ["over"],
    explanations: { over: "Over elva viser bevegelse fra den ene siden av elva til den andre." }
  },
  {
    id: 44,
    choices: ["for", "om"],
    sentence: "Jeg kjøpte boka ___ 100 kroner.",
    correct: ["for"],
    explanations: { for: "For 100 kroner forteller hva prisen på boka var." }
  },
  {
    id: 45,
    choices: ["for", "til"],
    sentence: "Han betalte 30 kroner ___ kaffen.",
    correct: ["for"],
    explanations: { for: "For kaffen viser hva han betalte 30 kroner for." }
  },
  {
    id: 46,
    choices: ["for", "om"],
    sentence: "Vi flyttet hit ___ tre år siden.",
    correct: ["for"],
    explanations: { for: "For tre år siden forteller hvor lenge det er siden flyttingen skjedde." }
  },
  {
    id: 47,
    choices: ["for", "i"],
    sentence: "Bussen gikk ___ fem minutter siden.",
    correct: ["for"],
    explanations: { for: "For fem minutter siden viser hvor lenge det er siden bussen gikk." }
  },
  {
    id: 48,
    choices: ["om", "i"],
    sentence: "Hun hadde et belte ___ livet.",
    correct: ["om", "i"],
    explanations: {
      om: "Med om legger setningen vekt på at beltet gikk rundt livet hennes.",
      i: "Med i viser setningen hvor beltet satt på kroppen."
    },
    note: "Begge svarene er naturlige. Om framhever tydeligere at beltet går rundt livet, mens i framhever plasseringen ved livet. Et belte rundt livet er også naturlig og vanlig."
  },
  {
    id: 49,
    choices: ["om", "over"],
    sentence: "Han slo armene ___ venninnen.",
    correct: ["om"],
    explanations: { om: "Armene om venninnen betyr at armene var rundt henne." },
    note: "Armene rundt venninnen er også naturlig og ofte vanligere."
  },
  {
    id: 50,
    choices: ["i", "på"],
    sentence: "Nøklene ligger ___ veska, helt nederst.",
    correct: ["i"],
    explanations: { i: "Nøklene ligger inni veska, nederst i den." }
  },
  {
    id: 51,
    choices: ["på", "i"],
    sentence: "Møtet er ___ mandag.",
    correct: ["på"],
    explanations: { på: "Vi bruker på foran ukedager." }
  },
  {
    id: 52,
    choices: ["i", "om"],
    sentence: "Vi bodde der ___ to år.",
    correct: ["i"],
    explanations: { i: "I to år forteller hvor lenge vi bodde der." }
  },
  {
    id: 53,
    choices: ["om", "i"],
    sentence: "Toget går ___ fem minutter.",
    correct: ["om"],
    explanations: { om: "Om fem minutter betyr fem minutter fra nå." }
  },
  {
    id: 54,
    choices: ["på", "til"],
    sentence: "Han arbeider ___ sykehuset.",
    correct: ["på"],
    explanations: { på: "På sykehuset er det vanlige uttrykket når sykehuset er arbeidsstedet." }
  },
  {
    id: 55,
    choices: ["med", "til"],
    sentence: "Hun kom på festen ___ broren sin.",
    correct: ["med"],
    explanations: { med: "Med viser at hun og broren kom sammen." }
  },
  {
    id: 56,
    choices: ["med", "for"],
    sentence: "Vi malte veggen ___ en stor pensel.",
    correct: ["med"],
    explanations: { med: "Penselen er redskapet vi brukte til å male veggen." }
  },
  {
    id: 57,
    choices: ["med", "om"],
    sentence: "De reiste ___ fly.",
    correct: ["med"],
    explanations: { med: "Med fly forteller hvilket transportmiddel de brukte." }
  },
  {
    id: 58,
    choices: ["med", "for"],
    sentence: "Jeg bestilte en salat ___ kylling.",
    correct: ["med"],
    explanations: { med: "Med kylling forteller hva salaten inneholder." }
  },
  {
    id: 59,
    choices: ["til", "på"],
    sentence: "Hun syklet ___ butikken.",
    correct: ["til"],
    explanations: { til: "Butikken er målet for bevegelsen." }
  },
  {
    id: 60,
    choices: ["til", "med"],
    sentence: "Denne gaven er ___ deg.",
    correct: ["til"],
    explanations: { til: "Til deg viser hvem som skal få gaven." },
    note: "Denne gaven er for deg kan også være naturlig. Da framhever for gjerne hvem gaven er ment for."
  },
  {
    id: 61,
    choices: ["til", "for"],
    sentence: "Jeg sendte en e-post ___ sjefen.",
    correct: ["til"],
    explanations: { til: "Sjefen er mottakeren av e-posten." }
  },
  {
    id: 62,
    choices: ["til", "om"],
    sentence: "Biblioteket er åpent ___ klokka seks.",
    correct: ["til"],
    explanations: { til: "Til klokka seks viser når åpningstida slutter." }
  },
  {
    id: 63,
    choices: ["til", "med"],
    sentence: "Denne boksen brukes ___ oppbevaring av mat.",
    correct: ["til"],
    explanations: { til: "Til oppbevaring forteller hva boksen brukes til." }
  },
  {
    id: 64,
    choices: ["over", "under"],
    sentence: "Et helikopter fløy ___ huset.",
    correct: ["over"],
    explanations: { over: "Helikopteret fløy høyere enn huset." }
  },
  {
    id: 65,
    choices: ["over", "under"],
    sentence: "Temperaturen var 23 grader. Den lå ___ 20 grader.",
    correct: ["over"],
    explanations: { over: "23 grader er mer enn 20 grader." }
  },
  {
    id: 66,
    choices: ["om", "i"],
    sentence: "Hun hadde et skjerf ___ halsen.",
    correct: ["om", "i"],
    explanations: {
      om: "Om halsen legger vekt på at skjerfet gikk rundt halsen.",
      i: "I halsen viser hvor skjerfet satt."
    },
    note: "Begge svarene er naturlige. Rundt halsen er også et vanlig alternativ."
  },
  {
    id: 67,
    choices: ["under", "over"],
    sentence: "Sekken lå ___ setet foran meg.",
    correct: ["under"],
    explanations: { under: "Sekken lå lavere enn setet." }
  },
  {
    id: 68,
    choices: ["under", "om"],
    sentence: "Det begynte å regne ___ kampen.",
    correct: ["under"],
    explanations: { under: "Regnet begynte mens kampen pågikk." }
  },
  {
    id: 69,
    choices: ["for", "om"],
    sentence: "Denne jakka er ___ barn.",
    correct: ["for"],
    explanations: { for: "For barn viser hvem jakka er beregnet på." }
  },
  {
    id: 70,
    choices: ["for", "til"],
    sentence: "Hun fikk ros ___ innsatsen.",
    correct: ["for"],
    explanations: { for: "For innsatsen viser hvorfor hun fikk ros." }
  },
  {
    id: 71,
    choices: ["for", "til"],
    sentence: "Han solgte sykkelen ___ 800 kroner.",
    correct: ["for"],
    explanations: { for: "For 800 kroner forteller hva prisen var." }
  },
  {
    id: 72,
    choices: ["for", "i"],
    sentence: "De flyttet hit ___ fem år siden.",
    correct: ["for"],
    explanations: { for: "For fem år siden viser hvor lenge det er siden de flyttet hit." }
  },
  {
    id: 73,
    choices: ["om", "i"],
    sentence: "Filmen handler ___ en familie i Oslo.",
    correct: ["om"],
    explanations: { om: "Om viser hva filmen har som tema." }
  },
  {
    id: 74,
    choices: ["om", "på"],
    sentence: "Vi møtes én gang ___ måneden.",
    correct: ["om"],
    explanations: { om: "Én gang om måneden forteller hvor ofte vi møtes." },
    note: "Én gang i måneden er også naturlig, men i er ikke et av svaralternativene her."
  },
  {
    id: 75,
    choices: ["på", "med"],
    sentence: "Prisen ___ billetten har økt.",
    correct: ["på"],
    explanations: { på: "Prisen på billetten forteller om en egenskap ved billetten." }
  },
  {
    id: 76,
    choices: ["i", "på"],
    sentence: "Hun har jobbet lenge ___ helsevesenet.",
    correct: ["i"],
    explanations: { i: "I helsevesenet viser til helsevesenet som samfunnsområde eller system." }
  },
  {
    id: 77,
    choices: ["over", "på"],
    sentence: "Vi gikk ___ brua til den andre siden.",
    correct: ["over", "på"],
    explanations: {
      over: "Over brua framhever at vi gikk fra den ene siden til den andre.",
      på: "På brua framhever at vi befant oss på brua mens vi gikk."
    },
    note: "Begge svarene er naturlige, men de framhever ulike sider ved situasjonen."
  },
  {
    id: 78,
    choices: ["over", "med"],
    sentence: "Bjarte listet seg ___ gulvet.",
    correct: ["over"],
    explanations: { over: "Over gulvet viser at Bjarte beveget seg forsiktig fra ett sted til et annet på gulvet." }
  },
  {
    id: 79,
    choices: ["på", "til"],
    sentence: "Elevene var sinte ___ læreren.",
    correct: ["på"],
    explanations: { på: "Sint på er en fast forbindelse." }
  },
  {
    id: 80,
    choices: ["over", "mellom"],
    sentence: "Trekkfuglene fløy i en stor rekke ___ byen.",
    correct: ["over"],
    explanations: { over: "Fuglene fløy høyere enn byen." }
  },
  {
    id: 81,
    choices: ["mellom", "under"],
    sentence: "Møtet varer ___ to og tre timer.",
    correct: ["mellom"],
    explanations: { mellom: "Mellom to og tre timer viser et tidsrom med en nedre og en øvre grense." }
  },
  {
    id: 82,
    choices: ["av", "til"],
    sentence: "Han var full ___ raseri.",
    correct: ["av"],
    explanations: { av: "Full av raseri betyr at han kjente svært sterkt raseri." }
  },
  {
    id: 83,
    choices: ["mellom", "med"],
    sentence: "Sjokoladen lå klemt ___ de to sofaputene.",
    correct: ["mellom"],
    explanations: { mellom: "Sjokoladen lå med én sofapute på hver side." }
  },
  {
    id: 84,
    choices: ["av", "med"],
    sentence: "Glasset var fullt ___ brus.",
    correct: ["av", "med"],
    explanations: {
      av: "Fullt av brus beskriver at glasset inneholdt mye brus.",
      med: "Fullt med brus er også naturlig og legger tydelig vekt på innholdet i glasset."
    },
    note: "Begge svarene er naturlige i denne setningen."
  },
  {
    id: 85,
    choices: ["av", "med"],
    sentence: "Stolen er laget helt ___ plast.",
    correct: ["av"],
    explanations: { av: "Av plast forteller hvilket materiale stolen er laget av." }
  },
  {
    id: 86,
    choices: ["av", "mellom"],
    sentence: "En ___ studentene kom for sent.",
    correct: ["av"],
    explanations: { av: "En av studentene betyr én person fra gruppa med studenter." }
  },
  {
    id: 87,
    choices: ["av", "for"],
    sentence: "Boka ble skrevet ___ en norsk forfatter.",
    correct: ["av", "for"],
    explanations: {
      av: "Med av er den norske forfatteren personen som skrev boka.",
      for: "Med for ble boka skrevet på vegne av eller til hjelp for en norsk forfatter."
    },
    note: "Begge setningene er grammatiske, men de forteller noe forskjellig om forfatterens rolle."
  },
  {
    id: 88,
    choices: ["av", "med"],
    sentence: "Hun skalv ___ kulde.",
    correct: ["av"],
    explanations: { av: "Av kulde viser hvorfor hun skalv." }
  },
  {
    id: 89,
    choices: ["av", "for"],
    sentence: "Jeg ønsker meg sol. Jeg er lei ___ regnet.",
    correct: ["av"],
    explanations: { av: "Lei av er en fast forbindelse." }
  },
  {
    id: 90,
    choices: ["mellom", "under"],
    sentence: "Sykkelen står ___ bilen og veggen.",
    correct: ["mellom"],
    explanations: { mellom: "Sykkelen står med bilen på den ene siden og veggen på den andre." }
  },
  {
    id: 91,
    choices: ["mellom", "over"],
    sentence: "Vi må velge ___ to løsninger.",
    correct: ["mellom"],
    explanations: { mellom: "Mellom brukes når vi velger blant to eller flere alternativer." }
  },
  {
    id: 92,
    choices: ["mellom", "under"],
    sentence: "Butikken er stengt ___ klokka ett og to.",
    correct: ["mellom"],
    explanations: { mellom: "Mellom klokka ett og to viser tidsrommet fra ett til to." }
  },
  {
    id: 93,
    choices: ["mellom", "av"],
    sentence: "Hva er forskjellen ___ i og på?",
    correct: ["mellom"],
    explanations: { mellom: "Vi bruker uttrykket forskjellen mellom når vi sammenligner to eller flere ting." }
  },
  {
    id: 94,
    choices: ["mellom", "med"],
    sentence: "Hun satt ___ foreldrene sine.",
    correct: ["mellom", "med"],
    explanations: {
      mellom: "Med mellom satt hun med én forelder på hver side.",
      med: "Med med satt hun sammen med foreldrene sine."
    },
    note: "Begge svarene er naturlige, men mellom beskriver plasseringen mer presist."
  },
  {
    id: 95,
    choices: ["mellom", "under"],
    sentence: "Hunden stilte seg ___ meg og døra.",
    correct: ["mellom"],
    explanations: { mellom: "Mellom viser at hunden sto med meg på den ene siden og døra på den andre." }
  },
  {
    id: 96,
    choices: ["mellom", "med"],
    sentence: "Hun delte kaka ___ de fire barna.",
    correct: ["mellom", "med"],
    explanations: {
      mellom: "Med mellom fordelte hun kaka slik at barna fikk hver sin del.",
      med: "Med med spiste eller delte hun kaka sammen med barna."
    },
    note: "Begge svarene er naturlige, men de beskriver ulike handlinger."
  },
  {
    id: 97,
    choices: ["mellom", "over"],
    sentence: "Avstanden ___ Oslo og Bergen er omtrent 460 kilometer.",
    correct: ["mellom"],
    explanations: { mellom: "Mellom viser at vi måler avstanden fra det ene stedet til det andre." }
  },
  {
    id: 98,
    choices: ["for", "av"],
    sentence: "Hun er redd ___ hunder.",
    correct: ["for"],
    explanations: { for: "Redd for er en fast forbindelse." }
  },
  {
    id: 99,
    choices: ["i", "av"],
    sentence: "Han er interessert ___ språk.",
    correct: ["i"],
    explanations: { i: "Interessert i er en fast forbindelse." }
  },
  {
    id: 100,
    choices: ["til", "for"],
    sentence: "Jeg gleder meg ___ ferien.",
    correct: ["til"],
    explanations: { til: "Glede seg til er en fast forbindelse." }
  }
];
