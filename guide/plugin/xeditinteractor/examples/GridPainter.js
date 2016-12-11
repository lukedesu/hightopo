ht.graph.GridPainter = function(graphView) {
    var gv = this._gv = graphView;
};
ht.Default.def(ht.graph.GridPainter, Object, {
    draw: function(g) {
        var self = this,
            gv = self._gv,
            defaultPhysicalGap = 20,
            zoom = gv.getZoom(),
            viewRect = gv.getViewRect();
        var gap = defaultPhysicalGap * zoom;

        gap = gap / zoom;
        var x = Math.round(viewRect.x),
            y = Math.round(viewRect.y),
            offsetX = x % gap,
            offsetY = y % gap,
            x = x - offsetX - gap,
            y = y - offsetY - gap,
            width = Math.round(viewRect.width) + gap * 2,
            height = Math.round(viewRect.height) + gap * 2,
            startX = x,
            endX = x + width,
            startY = y,
            endY = y + height,
            lineWidth = 1 / zoom,
            rowIndex = 0,
            columnIndex = 0;
    
        g.save();
        rowIndex = Math.floor(y / gap);
        columnIndex = Math.floor(x / gap);
        g.beginPath();
        g.lineWidth = lineWidth;
        g.strokeStyle = "rgb(238, 238, 238)";
        for (var i = startX; i <= endX; i += gap) {
            if (columnIndex % 2 !== 0) {
                g.moveTo(i, startY);
                g.lineTo(i, startY + height);
            }
            columnIndex++;
        }
        for (var j = startY; j <= endY; j += gap) {
            if (rowIndex % 2 !== 0) {
                g.moveTo(startX, j);
                g.lineTo(startX + width, j);
            }
            rowIndex++;
        }
        g.stroke();
        
        rowIndex = Math.floor(y / gap);
        columnIndex = Math.floor(x / gap);
        g.beginPath();
        g.lineWidth = lineWidth;
        g.strokeStyle = "rgb(208, 208, 208)";
        for (var i = startX; i <= endX; i += gap) {
            if (columnIndex % 2 === 0) {
                g.moveTo(i, startY);
                g.lineTo(i, startY + height);
            }
            columnIndex++;
        }
        for (var j = startY; j <= endY; j += gap) {
            if (rowIndex % 2 === 0) {
                g.moveTo(startX, j);
                g.lineTo(startX + width, j);
            }
            rowIndex++;
        }
        g.stroke();
        g.restore();
    }
});