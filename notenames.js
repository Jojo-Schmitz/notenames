//=============================================================================
//  MuseScore
//  Linux Music Score Editor
//  $Id:$
//
//  Test plugin
//
//  Copyright (C)2008 Werner Schweer and others
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

function init()
      {
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

function run()
      {
      if (typeof curScore === 'undefined')
            return;
      var cursor   = new Cursor(curScore);
      for (var staff = 0; staff < curScore.staves; ++staff) {
            cursor.staff = staff;
            cursor.voice = 0;
            cursor.rewind();  // set cursor to first chord/rest

            while (!cursor.eos()) {
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
		  	      }

                        text.yOffset = -4;
                        cursor.putStaffText(text);
                        }
                  cursor.next();
                  }
            }
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

