//=============================================================================
//  MuseScore
//  Music Composition & Notation
//
//  Note Names Plugin
//
//  Copyright (C) 2012 Werner Schweer
//  Copyright (C) 2013 - 2016 Joachim Schmitz
//  Copyright (C) 2014 Jörn Eichler
//
//  This program is free software; you can redistribute it and/or modify
//  it under the terms of the GNU General Public License version 2
//  as published by the Free Software Foundation and appearing in
//  the file LICENCE.GPL
//=============================================================================

import QtQuick 2.0
import MuseScore 1.0

MuseScore {
   version: "2.0"
   description: qsTr("This plugin adds trombone slide positions")
   menuPath: "Plugins.Notes." + qsTr("Trombone Slide Positions") // this does not work, why?

   function slidePos (pitch) {
      pitch -= 20; // Trombone
      switch (pitch) {
         case 2:                       // Bb0
         case 3:
         case 4:
         case 5:
         case 6:
         case 7:
         case 8:
         case 9:
         case 10:
         case 11:
         case 12: return ""; break;
         case 13:
         case 14:                      // Bb1 ********
         case 15:                      // H/B
         case 16:                      // C2
         case 17:                      // Cis/Des
         case 18:                      // D
         case 19: return "x";  break;  // Dis/Es
         case 20: return "7";  break;  // E2
         case 21: return "6";  break;  // F2
         case 22: return "5";  break;  // Fis, Ges
         case 23: return "4";  break;  // G2
         case 24: return "3";  break;  // Gis, As
         case 25: return "2";  break;  // A2
         case 26: return "1";  break;  // Bb2
         case 27: return "7";  break;  // H/B
         case 28: return "6";  break;  // C3
         case 29: return "5";  break;  // Cis/Des
         case 30: return "4";  break;  // D3
         case 31: return "3";  break;  // Dis, Es
         case 32: return "2";  break;  // E3
         case 33: return "1";  break;  // F3
         case 34: return "5";  break;  // Fis, Ges
         case 35: return "4";  break;  // G3
         case 36: return "3";  break;  // Gis, As
         case 37: return "2";  break;  // A
         case 38: return "1";  break;  // Bb3
         case 39: return "4";  break;  // H/B
         case 40: return "3";  break;  // C4
         case 41: return "2";  break;  // Cis/Des
         case 42: return "1";  break;  // D4
         case 43: return "3";  break;  // Dis/Es
         case 44: return "2";  break;  // E4
         case 45: return "1";  break;  // F4
         case 46: return "3+"; break;  // Fis/Ges
         case 47: return "2+"; break;  // G4
         case 48: return "3";  break;  // Gis/As
         case 49: return "2";  break;  // A
         case 50: return "1";  break;  // Bb
         case 51: return "H";  break;  // H/B
         default: return "x";
      }
   }

   function nameChord (notes, text) {
      for (var i = 0; i < notes.length; i++) {
         var sep = ","; // change to "\n" if you want them vertically
         if ( i == 0) {
            // top note only, in case of on multi note chords
            // comment below to disable slide positions and have notennames only
            text.text = text.text + "\n" + slidePos(notes[i].pitch);
            // comment above and
            // uncomment 2 below to have slide positions only
            //text.text = text.text slidePos(notes[i].pitch);
            //return;
         }
         if ( i > 0 )
            text.text = sep + text.text; // any but top note

         if (typeof notes[i].tpc === "undefined") // like for grace notes ?!?
            return
         switch (notes[i].tpc) {
            case -1: text.text = qsTranslate("InspectorAmbitus", "F♭♭") + text.text; break;
            case  0: text.text = qsTranslate("InspectorAmbitus", "C♭♭") + text.text; break;
            case  1: text.text = qsTranslate("InspectorAmbitus", "G♭♭") + text.text; break;
            case  2: text.text = qsTranslate("InspectorAmbitus", "D♭♭") + text.text; break;
            case  3: text.text = qsTranslate("InspectorAmbitus", "A♭♭") + text.text; break;
            case  4: text.text = qsTranslate("InspectorAmbitus", "E♭♭") + text.text; break;
            case  5: text.text = qsTranslate("InspectorAmbitus", "B♭♭") + text.text; break;
            case  6: text.text = qsTranslate("InspectorAmbitus", "F♭")  + text.text; break;
            case  7: text.text = qsTranslate("InspectorAmbitus", "C♭")  + text.text; break;

            case  8: text.text = qsTranslate("InspectorAmbitus", "G♭")  + text.text; break;
            case  9: text.text = qsTranslate("InspectorAmbitus", "D♭")  + text.text; break;
            case 10: text.text = qsTranslate("InspectorAmbitus", "A♭")  + text.text; break;
            case 11: text.text = qsTranslate("InspectorAmbitus", "E♭")  + text.text; break;
            case 12: text.text = qsTranslate("InspectorAmbitus", "B♭")  + text.text; break;
            case 13: text.text = qsTranslate("InspectorAmbitus", "F")   + text.text; break;
            case 14: text.text = qsTranslate("InspectorAmbitus", "C")   + text.text; break;
            case 15: text.text = qsTranslate("InspectorAmbitus", "G")   + text.text; break;
            case 16: text.text = qsTranslate("InspectorAmbitus", "D")   + text.text; break;
            case 17: text.text = qsTranslate("InspectorAmbitus", "A")   + text.text; break;
            case 18: text.text = qsTranslate("InspectorAmbitus", "E")   + text.text; break;
            case 19: text.text = qsTranslate("InspectorAmbitus", "B")   + text.text; break;

            case 20: text.text = qsTranslate("InspectorAmbitus", "F♯")  + text.text; break;
            case 21: text.text = qsTranslate("InspectorAmbitus", "C♯")  + text.text; break;
            case 22: text.text = qsTranslate("InspectorAmbitus", "G♯")  + text.text; break;
            case 23: text.text = qsTranslate("InspectorAmbitus", "D♯")  + text.text; break;
            case 24: text.text = qsTranslate("InspectorAmbitus", "A♯")  + text.text; break;
            case 25: text.text = qsTranslate("InspectorAmbitus", "E♯")  + text.text; break;
            case 26: text.text = qsTranslate("InspectorAmbitus", "B♯")  + text.text; break;
            case 27: text.text = qsTranslate("InspectorAmbitus", "F♯♯") + text.text; break;
            case 28: text.text = qsTranslate("InspectorAmbitus", "C♯♯") + text.text; break;
            case 29: text.text = qsTranslate("InspectorAmbitus", "G♯♯") + text.text; break;
            case 30: text.text = qsTranslate("InspectorAmbitus", "D♯♯") + text.text; break;
            case 31: text.text = qsTranslate("InspectorAmbitus", "A♯♯") + text.text; break;
            case 32: text.text = qsTranslate("InspectorAmbitus", "E♯♯") + text.text; break;
            case 33: text.text = qsTranslate("InspectorAmbitus", "B♯♯") + text.text; break;
            default: text.text = qsTr("?")   + text.text; break;
         } // end switch tpc

         // octave, middle C being C4
         //text.text += (Math.floor(notes[i].pitch / 12) - 1)
         // or
         //text.text += (Math.floor(notes[i].ppitch / 12) - 1)

// change below false to true for courtesy- and microtonal accidentals
// you might need to come up with suitable translations
// only #, b, natural and possibly also ## seem to be available in UNICODE
         if (false) {
            switch (notes[i].userAccidental) {
               case  0: break;
               case  1: text.text = qsTranslate("accidental", "Sharp") + text.text; break;
               case  2: text.text = qsTranslate("accidental", "Flat") + text.text; break;
               case  3: text.text = qsTranslate("accidental", "Double sharp") + text.text; break;
               case  4: text.text = qsTranslate("accidental", "Double flat") + text.text; break;
               case  5: text.text = qsTranslate("accidental", "Natural") + text.text; break;
               case  6: text.text = qsTranslate("accidental", "Flat-slash") + text.text; break;
               case  7: text.text = qsTranslate("accidental", "Flat-slash2") + text.text; break;
               case  8: text.text = qsTranslate("accidental", "Mirrored-flat2") + text.text; break;
               case  9: text.text = qsTranslate("accidental", "Mirrored-flat") + text.text; break;
               case 10: text.text = qsTranslate("accidental", "Mirrored-flat-slash") + text.text; break;
               case 11: text.text = qsTranslate("accidental", "Flat-flat-slash") + text.text; break;
               case 12: text.text = qsTranslate("accidental", "Sharp-slash") + text.text; break;
               case 13: text.text = qsTranslate("accidental", "Sharp-slash2") + text.text; break;
               case 14: text.text = qsTranslate("accidental", "Sharp-slash3") + text.text; break;
               case 15: text.text = qsTranslate("accidental", "Sharp-slash4") + text.text; break;
               case 16: text.text = qsTranslate("accidental", "Sharp arrow up") + text.text; break;
               case 17: text.text = qsTranslate("accidental", "Sharp arrow down") + text.text; break;
               case 18: text.text = qsTranslate("accidental", "Sharp arrow both") + text.text; break;
               case 19: text.text = qsTranslate("accidental", "Flat arrow up") + text.text; break;
               case 20: text.text = qsTranslate("accidental", "Flat arrow down") + text.text; break;
               case 21: text.text = qsTranslate("accidental", "Flat arrow both") + text.text; break;
               case 22: text.text = qsTranslate("accidental", "Natural arrow down") + text.text; break;
               case 23: text.text = qsTranslate("accidental", "Natural arrow up") + text.text; break;
               case 24: text.text = qsTranslate("accidental", "Natural arrow both") + text.text; break;
               case 25: text.text = qsTranslate("accidental", "Sori") + text.text; break;
               case 26: text.text = qsTranslate("accidental", "Koron") + text.text; break;
               default: text.text = qsTr("?") + text.text; break;
            } // end switch userAccidental
         } // end if courtesy- and microtonal accidentals
      } // end for note
   }

   onRun: {
      if (typeof curScore === 'undefined')
         Qt.quit();

      var cursor = curScore.newCursor();
      var startStaff;
      var endStaff;
      var endTick;
      var fullScore = false;
      cursor.rewind(1);
      if (!cursor.segment) { // no selection
         fullScore = true;
         startStaff = 0; // start with 1st staff
         endStaff  = curScore.nstaves - 1; // and end with last
      } else {
         startStaff = cursor.staffIdx;
         cursor.rewind(2);
         if (cursor.tick == 0) {
            // this happens when the selection includes
            // the last measure of the score.
            // rewind(2) goes behind the last segment (where
            // there's none) and sets tick=0
            endTick = curScore.lastSegment.tick + 1;
         } else {
            endTick = cursor.tick;
         }
         endStaff = cursor.staffIdx;
      }
      console.log(startStaff + " - " + endStaff + " - " + endTick)

      for (var staff = startStaff; staff <= endStaff; staff++) {
         for (var voice = 0; voice < 4; voice++) {
            cursor.rewind(1); // beginning of selection
            cursor.voice    = voice;
            cursor.staffIdx = staff;

            if (fullScore)  // no selection
               cursor.rewind(0); // beginning of score

            while (cursor.segment && (fullScore || cursor.tick < endTick)) {
               if (cursor.element && cursor.element.type == Element.CHORD) {
                  var text = newElement(Element.STAFF_TEXT);

                  var graceChords = cursor.element.graceNotes;
                  for (var i = 0; i < graceChords.length; i++) {
                     // iterate through all grace chords
                     var notes = graceChords[i].notes;
                     nameChord(notes, text);
                     // there seems to be no way of knowing the exact horizontal pos.
                     // of a grace note, so we have to guess:
                     text.pos.x = -2.5 * (graceChords.length - i);
                     switch (voice) {
                        case 0: text.pos.y =  1; break;
                        case 1: text.pos.y = 10; break;
                        case 2: text.pos.y = -1; break;
                        case 3: text.pos.y = 12; break;
                     }

                     cursor.add(text);
                     // new text for next element
                     text  = newElement(Element.STAFF_TEXT);
                  }

                  var notes = cursor.element.notes;
                  nameChord(notes, text);

                  switch (voice) {
                     case 0: text.pos.y =  9; break;
                     case 1: text.pos.y = 10; break;
                     case 2: text.pos.y = -1; break;
                     case 3: text.pos.y = 12; break;
                  }
                  if ((voice == 0) && (notes[0].pitch > 83))
                     text.pos.x = 1;
                  cursor.add(text);
               } // end if CHORD
               cursor.next();
            } // end while segment
         } // end for voice
      } // end for staff
      Qt.quit();
   } // end onRun
}
