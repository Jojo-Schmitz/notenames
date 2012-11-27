//=============================================================================
//  MuseScore
//  Music Score Editor
//  $Id:$
//
//  Note Names Plugin
//
//  Copyright (C)2008 Werner Schweer and others
//  Copyright (C)2012 Joachim Schmitz
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
      cursor.goToSelectionStart();
      cursor.staff = staff;
      cursor.voice = 0;
      if (cursor.eos())
         cursor.rewind(); // if no selection, start at beginning of score

      while (cursor.tick() < endTick) {
         if (cursor.isChord()) {
            var text  = new Text(curScore);

            switch (cursor.chord().topNote().tpc) {
               case -1: text.text = qsTr("Fbb"); break;
               case 0:  text.text = qsTr("Cbb"); break;
               case 1:  text.text = qsTr("Gbb"); break;
               case 2:  text.text = qsTr("Dbb"); break;
               case 3:  text.text = qsTr("Abb"); break;
               case 4:  text.text = qsTr("Ebb"); break;
               case 5:  text.text = qsTr("Bbb"); break;
               case 6:  text.text = qsTr("Fb");  break;
               case 7:  text.text = qsTr("Cb");  break;

               case 8:  text.text = qsTr("Gb");  break;
               case 9:  text.text = qsTr("Db");  break;
               case 10: text.text = qsTr("Ab");  break;
               case 11: text.text = qsTr("Eb");  break;
               case 12: text.text = qsTr("Bb");  break;
               case 13: text.text = qsTr("F");   break;
               case 14: text.text = qsTr("C");   break;
               case 15: text.text = qsTr("G");   break;
               case 16: text.text = qsTr("D");   break;
               case 17: text.text = qsTr("A");   break;
               case 18: text.text = qsTr("E");   break;
               case 19: text.text = qsTr("B");   break;

               case 20: text.text = qsTr("F#");  break;
               case 21: text.text = qsTr("C#");  break;
               case 22: text.text = qsTr("G#");  break;
               case 23: text.text = qsTr("D#");  break;
               case 24: text.text = qsTr("A#");  break;
               case 25: text.text = qsTr("E#");  break;
               case 26: text.text = qsTr("B#");  break;
               case 27: text.text = qsTr("F##"); break;
               case 28: text.text = qsTr("C##"); break;
               case 29: text.text = qsTr("G##"); break;
               case 30: text.text = qsTr("D##"); break;
               case 31: text.text = qsTr("A##"); break;
               case 32: text.text = qsTr("E##"); break;
               case 33: text.text = qsTr("B##"); break;
               default: text.text = qsTr("?");   break;
            } // end switch tpc

// change below false to true for courtesy- and microtonal accidentals
// you might need to come up with suitable translations 
// only #, b, natural and possibly also ## seem to be available in UNICODE
            if (false) {
               switch (cursor.chord().topNote().userAccidental) {
                  case 0:                                            break;
                  case 1:  text.text += qsTr("#");                   break;
                  case 2:  text.text += qsTr("b");                   break;
                  case 3:  text.text += qsTr("##");                  break;
                  case 4:  text.text += qsTr("bb");                  break;
                  case 5:  text.text += qsTr("natural");             break;
                  case 6:  text.text += qsTr("flat-slash");          break;
                  case 7:  text.text += qsTr("flat-slash2");         break;
                  case 8:  text.text += qsTr("mirrored-flat2");      break;
                  case 9:  text.text += qsTr("mirrored-flat");       break;
                  case 10: text.text += qsTr("mirrored-flat-slash"); break;
                  case 11: text.text += qsTr("flat-flat-slash");     break;
                  case 12: text.text += qsTr("sharp-slash");         break;
                  case 13: text.text += qsTr("sharp-slash2");        break;
                  case 14: text.text += qsTr("sharp-slash3");        break;
                  case 15: text.text += qsTr("sharp-slash4");        break;
                  case 16: text.text += qsTr("sharp arrow up");      break;
                  case 17: text.text += qsTr("sharp arrow down");    break;
                  case 18: text.text += qsTr("sharp arrow both");    break;
                  case 19: text.text += qsTr("flat arrow up");       break;
                  case 20: text.text += qsTr("flat arrow down");     break;
                  case 21: text.text += qsTr("flat arrow both");     break;
                  case 22: text.text += qsTr("natural arrow down");  break;
                  case 23: text.text += qsTr("natural arrow up");    break;
                  case 24: text.text += qsTr("natural arrow both");  break;
                  case 25: text.text += qsTr("sori");                break;
                  case 26: text.text += qsTr("koron");               break;
                  default: text.text += qsTr("?");                   break;
               } // end switch userAccidental
            } // end if courtesy- and microtonal accidentals

            text.yOffset = -4;
            if (cursor.chord().topNote().pitch > 83)
               text.xOffset = 1;
            cursor.putStaffText(text);
         } // end if isChord()
         cursor.next();
      } // end while tick() < endTick
   } // end for staff
}

//---------------------------------------------------------
//    menu:  defines were the function will be placed
//           in the MuseScore menu structure
//---------------------------------------------------------

var mscorePlugin = {
   menu: 'Plugins.' + qsTr("Note Names"),
   init: init,
   run:  run
};

mscorePlugin;
