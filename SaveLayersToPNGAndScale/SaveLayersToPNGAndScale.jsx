﻿/**
* Remixer: @herkulano (http://www.herkulano.com)
* Thanks to: Niels Bosma (niels.bosma@motorola.com)
*/

var folder = Folder.selectDialog();
var document = app.activeDocument;

if(document && folder)
	var scaleTo = prompt("Scale (2=200%)" , "2");

if(document && folder && scaleTo)
	var suffix = prompt("Suffix" , "@2x") || "";

if(document && folder && scaleTo) {
	var layer, file, options;
	
	for (var i = document.layers.length - 1; i >= 0; i--){
		layer = document.layers[i];
    if (!layer.locked) {
   		hideAllLayers();
   		layer.visible = true;
   		
	 		file = new File(folder.fsName + "/" + layer.name + suffix + ".png");
	 		
	 		options = new ExportOptionsPNG24();
	 		options.antiAliasing = true;
	 		options.transparency = true;
	 		options.artBoardClipping = true;
	 		options.verticalScale = parseFloat(scaleTo)*100;
	 		options.horizontalScale = parseFloat(scaleTo)*100;
	 		
	 		document.exportFile(file, ExportType.PNG24, options);
		}
	}
}

function hideAllLayers() {
	var layer;
	
	for (var i = document.layers.length - 1; i >= 0; i--){
		layer = document.layers[i];
		if (!layer.locked) {
			layer.visible = false;
		}
	};
}