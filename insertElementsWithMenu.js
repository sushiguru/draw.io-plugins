/**
* A draw.io plugin for inserting a custom text (or ellipse) element,
* either by keyboard Ctrl+Shift+T (or Ctrl+Shift+Q) or by menu
*/
Draw.loadPlugin(function(ui) {
    /* Finding assigned keys:
    
      * Open javascript console
      * Draw.valueOf()
      * Traverse to: Object > loadPlugin > <function scope> 
                    > ui > keyHandler > controlShiftKeys
      * The number here is ASCII character code 
    */
    
    // Adds resources for actions
    mxResources.parse('myInsertEllipse=Insert ellipse');
    
    // Adds action : myInsertEllipse
    ui.actions.addAction('myInsertEllipse', function() {
        var theGraph = ui.editor.graph;
        if(theGraph.isEnabled() && !theGraph.isCellLocked(theGraph.getDefaultParent())){
          var pos=theGraph.getInsertPoint();
          var newElement=new mxCell("",
                    new mxGeometry(pos.x, pos.y, 15, 15),
                    "ellipse;whiteSpace=wrap;html=1;aspect=fixed;shadow=0;glass=0;comic=0;labelBackgroundColor=none;strokeColor=#82b366;strokeWidth=2;fillColor=#d5e8d4;fontFamily=Helvetica;fontSize=14;fontColor=#000000;align=center;verticalAlign=middle;spacing=0;");
        
          newElement.vertex=!0;
			newElement.insertVertex(parent, null, '1', pos.x, pos.y, 15, 15, null);
          theGraph.setSelectionCell(theGraph.addCell(newElement));
			

				
        }
    }, null, null, "Ctrl+Shift+Q");
    
    ui.keyHandler.bindAction(81, !0, "myInsertEllipse", !0);
  
    
    // Adds menu
    ui.menubar.addMenu('Add Relationships', function(menu, parent) {
        ui.menus.addMenuItem(menu, 'myInsertEllipse');
    });

    // Reorders menubar
    ui.menubar.container
      .insertBefore(ui.menubar.container.lastChild,
                    ui.menubar.container.lastChild.previousSibling.previousSibling);
});
