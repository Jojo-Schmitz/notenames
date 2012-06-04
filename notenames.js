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
      cursor.staff = 0;
      cursor.voice = 0;
      cursor.rewind();  // set cursor to first chord/rest

      while (!cursor.eos()) {
            if (cursor.isChord()) {
                  var text  = new Text(curScore);
                  switch (cursor.chord().topNote().name) {
			case "C":  text.text = qsTr("C");  break;
			case "Db": text.text = qsTr("Db"); break;
			case "D":  text.text = qsTr("D");  break;
			case "Eb": text.text = qsTr("Eb"); break;
			case "E":  text.text = qsTr("E");  break;
			case "F":  text.text = qsTr("F");  break;
			case "Gb": text.text = qsTr("Gb"); break;
			case "G":  text.text = qsTr("G");  break;
			case "Ab": text.text = qsTr("Ab"); break;
			case "A":  text.text = qsTr("A");  break;
			case "Bb": text.text = qsTr("Bb"); break;
			case "B":  text.text = qsTr("B");  break;
			default:   text.text = "?";        break;
		  	}

                  text.yOffset = -5;
                  cursor.putStaffText(text);
                  }
            cursor.next();
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

