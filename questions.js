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
    correct: ["om"],
    explanations: { om: "Om livet betyr at beltet var rundt livet hennes." },
    note: "Et belte rundt livet er også naturlig og ofte vanligere."
  },
  {
    id: 49,
    choices: ["om", "over"],
    sentence: "Han slo armene ___ venninnen.",
    correct: ["om"],
    explanations: { om: "Armene om venninnen betyr at armene var rundt henne." },
    note: "Armene rundt venninnen er også naturlig og ofte vanligere."
  }
];
