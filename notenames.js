//=============================================================================
//  MuseScore
//  Music Score Editor
//  $Id:$
//
//  Note Names Plugin
//
//  Copyright (C)2008 Werner Schweer and others
//  Copyright (C)2012-2014 Joachim Schmitz
//
//  This program is free software; you can redistribute it and/or modify
//  it under the terms of the GNU General Public License version 2.
//
//  This program is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU General Public License for more details.
//
//  You should have received a copy of the GNU General Public License
//  along with this program; if not, write to the Free Software
//  Foundation, Inc., 675 Mass Ave, Cambridge, MA 02139, USA.
//=============================================================================

//
// This is ECMAScript code (ECMA-262 aka "Java Script")
//

//---------------------------------------------------------
//    init
//    this function will be called on startup of mscore
//---------------------------------------------------------

function init() {
      // print("test script init");
}

//-------------------------------------------------------------------
//    run
//    this function will be called when activating the
//    plugin menu entry
//
//    global Variables:
//    pluginPath - contains the plugin path; file separator is "/"
//-------------------------------------------------------------------

function run() {
   if (typeof curScore === 'undefined')
      return;
   var cursor   = new Cursor(curScore);
   cursor.goToSelectionStart();
   var startStaff = cursor.staff;
   cursor.goToSelectionEnd();
   var endStaff   = cursor.staff;
   var endTick    = cursor.tick(); // if no selection, go to end of score

   if (cursor.eos()) { // if no selection
     startStaff = 0; // start with 1st staff
     endStaff = curScore.staves; // and end with last
   }

   for (var staff = startStaff; staff < endStaff; ++staff) {
     for (var voice = 0; voice < 4; voice ++) {
       cursor.goToSelectionStart();
       cursor.staff = staff;
       cursor.voice = voice;
       if (cursor.eos())
         cursor.rewind(); // if no selection, start at beginning of score

       while (cursor.tick() < endTick) {
         if (cursor.isChord()) {
           var text = new Text(curScore);
           for (i = 0; i < cursor.chord().notes; i++) {
             var sep = ","; // change to "\n" if you want them vertically
             if ( i > 0 )
               text.text = sep + text.text;

             switch (cursor.chord().note(i).tpc) {
               case -1: text.text = qsTr("Fbb") + text.text; break;
               case  0: text.text = qsTr("Cbb") + text.text; break;
               case  1: text.text = qsTr("Gbb") + text.text; break;
               case  2: text.text = qsTr("Dbb") + text.text; break;
               case  3: text.text = qsTr("Abb") + text.text; break;
               case  4: text.text = qsTr("Ebb") + text.text; break;
               case  5: text.text = qsTr("Bbb") + text.text; break;
               case  6: text.text = qsTr("Fb")  + text.text; break;
               case  7: text.text = qsTr("Cb")  + text.text; break;

               case  8:  text.text = qsTr("Gb") + text.text; break;
               case  9: text.text = qsTr("Db")  + text.text; break;
               case 10: text.text = qsTr("Ab")  + text.text; break;
               case 11: text.text = qsTr("Eb")  + text.text; break;
               case 12: text.text = qsTr("Bb")  + text.text; break;
               case 13: text.text = qsTr("F")   + text.text; break;
               case 14: text.text = qsTr("C")   + text.text; break;
               case 15: text.text = qsTr("G")   + text.text; break;
               case 16: text.text = qsTr("D")   + text.text; break;
               case 17: text.text = qsTr("A")   + text.text; break;
               case 18: text.text = qsTr("E")   + text.text; break;
               case 19: text.text = qsTr("B")   + text.text; break;

               case 20: text.text = qsTr("F#")  + text.text; break;
               case 21: text.text = qsTr("C#")  + text.text; break;
               case 22: text.text = qsTr("G#")  + text.text; break;
               case 23: text.text = qsTr("D#")  + text.text; break;
               case 24: text.text = qsTr("A#")  + text.text; break;
               case 25: text.text = qsTr("E#")  + text.text; break;
               case 26: text.text = qsTr("B#")  + text.text; break;
               case 27: text.text = qsTr("F##") + text.text; break;
               case 28: text.text = qsTr("C##") + text.text; break;
               case 29: text.text = qsTr("G##") + text.text; break;
               case 30: text.text = qsTr("D##") + text.text; break;
               case 31: text.text = qsTr("A##") + text.text; break;
               case 32: text.text = qsTr("E##") + text.text; break;
               case 33: text.text = qsTr("B##") + text.text; break;
               default: text.text = qsTr("?")   + text.text; break;
             } // end switch tpc

             // octave, middle C being C4
             //text.text += (Math.floor(cursor.chord().note(i).pitch / 12) - 1)

// change below false to true for courtesy- and microtonal accidentals
// you might need to come up with suitable translations 
// only #, b, natural and possibly also ## seem to be available in UNICODE
             if (false) {
               switch (cursor.chord().note(i).userAccidental) {
                  case  0: break;
                  case  1: text.text = qsTr("#") + text.text; break;
                  case  2: text.text = qsTr("b") + text.text; break;
                  case  3: text.text = qsTr("##") + text.text; break;
                  case  4: text.text = qsTr("bb") + text.text; break;
                  case  5: text.text = qsTr("natural") + text.text; break;
                  case  6: text.text = qsTr("flat-slash") + text.text; break;
                  case  7: text.text = qsTr("flat-slash2") + text.text; break;
                  case  8: text.text = qsTr("mirrored-flat2") + text.text; break;
                  case  9: text.text = qsTr("mirrored-flat") + text.text; break;
                  case 10: text.text = qsTr("mirrored-flat-slash") + text.text; break;
                  case 11: text.text = qsTr("flat-flat-slash") + text.text; break;
                  case 12: text.text = qsTr("sharp-slash") + text.text; break;
                  case 13: text.text = qsTr("sharp-slash2") + text.text; break;
                  case 14: text.text = qsTr("sharp-slash3") + text.text; break;
                  case 15: text.text = qsTr("sharp-slash4") + text.text; break;
                  case 16: text.text = qsTr("sharp arrow up") + text.text; break;
                  case 17: text.text = qsTr("sharp arrow down") + text.text; break;
                  case 18: text.text = qsTr("sharp arrow both") + text.text; break;
                  case 19: text.text = qsTr("flat arrow up") + text.text; break;
                  case 20: text.text = qsTr("flat arrow down") + text.text; break;
                  case 21: text.text = qsTr("flat arrow both") + text.text; break;
                  case 22: text.text = qsTr("natural arrow down") + text.text; break;
                  case 23: text.text = qsTr("natural arrow up") + text.text; break;
                  case 24: text.text = qsTr("natural arrow both") + text.text; break;
                  case 25: text.text = qsTr("sori") + text.text; break;
                  case 26: text.text = qsTr("koron") + text.text; break;
                  default: text.text = qsTr("?") + text.text; break;
               } // end switch userAccidental
             } // end if courtesy- and microtonal accidentals

             switch (voice) {
               case 0: text.yOffset = -4; break;
               case 1: text.yOffset =  5; break;
               case 2: text.yOffset = -5; break;
               case 3: text.yOffset =  6; break;
             }
             if ((voice == 0) && (cursor.chord().topNote().pitch > 83))
               text.xOffset = 1; // works only in treble clef and voice 1
             cursor.putStaffText(text);
           } // end for note
         } // end if isChord()
         cursor.next();
       } // end while tick() < endTick
     } // end for voice
   } // end for staff
}

//---------------------------------------------------------
//    menu:  defines were the function will be placed
//           in the MuseScore menu structure
//---------------------------------------------------------

var mscorePlugin = {
   menu: 'Plugins.Notes.' + qsTr("Note Names"),
   init: init,
   run:  run
};

mscorePlugin;
