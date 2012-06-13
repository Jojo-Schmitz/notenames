This Plugin is derived from <a href="http://musescore.org/en/handbook/plugins#notenames">Note Names plugin</a>, It too adds the note names of the top notes in voice 1 of the current score as staff text (above the staff), but works an all staves (not just the top one) and uses note names according to the locale MuseScore is configured for (instead of just the English note names C, D, E, F, G, A, B).
So the output changes with the setting of Menu -> Edit -> Preferences... -> General -> Language, resp. if that is set to 'System', the output depends on the language setting of your PC.
As a further extensions it also names notes with sharps, double sharps and double flats and the notename moves aside a bit, if the note would otherwise collide.

Available locales: English, German, Dutch, Japanese, Italian, French, Spanish, Portuguese, Russian, Romainan, Danish, Norwegian, Swedish, Polish, Slovak, Czech and Greek.

The double sharp and double flat notes as well as Fb, Cb, E# and B# still need translation for Japanese, Italian, French, Spanish, Portuguese, Russian, Romainan and Greek, help is more than welcome.

If you also want it to show courtesy- and microtonal accidentals, change 'false' to 'true' in line 104. Note however, that none of these have yet been translated, and their 'clear text' names can be rather long (e.g. "mirrored-flat-slash").

To use the plugin, you must first install it according to the <a href="http://musescore.org/en/handbook/plugins">instructions in the Handbook</a>

The idea for this plugin stems from a <a href"http://musescore.org/en/node/16786">discussion in the forum</a>, the microtonal extension from <a href="http://musescore.org/en/node/16870">another discussion in the forum</a>.
