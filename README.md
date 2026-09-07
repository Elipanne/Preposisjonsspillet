# Preposisjonsspillet

Et enkelt nettspill for personer som lærer norsk på omtrent nivå A2. Spillet inneholder 49 kvalitetssikrede oppgaver om preposisjonene *i, på, med, under, til, over, for* og *om*.

## Filene

- `index.html` – selve nettsida
- `style.css` – utseendet
- `questions.js` – oppgaver, fasit og forklaringer
- `script.js` – spillfunksjonaliteten
- `assets/gratulerer-smiley.png` – bildet som vises ved riktig svar

Alle filene og mappa `assets` skal ligge i GitHub-depotet med den samme strukturen som her.

## Test lokalt

Du kan åpne `index.html` direkte i en nettleser. Det kreves ingen installasjon.

## Publiser med GitHub Pages

I GitHub velger du **Settings → Pages**. Velg publisering fra hovedgreina (`main`) og rotmappa (`/root`).

## Endre eller legge til oppgaver

Oppgavene ligger i `questions.js`. Hver oppgave har denne strukturen:

```js
{
  id: 1,
  choices: ["i", "på"],
  sentence: "Passet ligger ___ skuffen.",
  correct: ["i"],
  explanations: { i: "Passet ligger inni skuffen." },
  note: "En valgfri merknad."
}
```

Hvis begge alternativene er riktige, skriver du begge i `correct` og lager én forklaring for hvert svar.
