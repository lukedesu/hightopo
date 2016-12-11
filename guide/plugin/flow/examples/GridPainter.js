ht.graph.GridPainter = function(graphView) {
    this._gv = graphView;
};
ht.Default.def(ht.graph.GridPainter, Object, {
    draw: function(g, rect) {
        var self = this,
            gv = self._gv,
            defaultPhysicalGap = 20,
            zoom = gv.getZoom(),
            viewRect = !rect ? gv.getContentRect() : gv.getViewRect();
        var gap = defaultPhysicalGap * zoom,
            remainder = gap % defaultPhysicalGap;
            if (remainder > 13 && remainder <= 17 || remainder > 3 && remainder <= 7) {
                gap = 15;
            } else if (remainder > 10 && remainder <= 13 || remainder > 0 && remainder <= 3) {
                gap = 10;
            } else {
                gap = 20;
            }
        
        gap = gap / zoom;
        var x = parseInt(viewRect.x),
            y = parseInt(viewRect.y),
            offsetX = -(x % gap),
            offsetY = -(y % gap),
            x = x + offsetX - gap,
            y = y + offsetY - gap,
            width = parseInt(viewRect.width) + gap * 2,
            height = parseInt(viewRect.height) + gap * 2,
            startX = x,
            endX = x + width,
            startY = y,
            endY = y + height,
            lineWidth = 1 / zoom;
        
        
        g.save();
        g.beginPath();
        if (rect) {
            g.rect(rect.x, rect.y, rect.width, rect.height);
            g.clip();
            g.clearRect(rect.x, rect.y, rect.width, rect.height);
            g.beginPath();
        }
        g.lineWidth = lineWidth;
        g.strokeStyle = "rgb(198, 198, 198)";
       
        for (var i = startX; i <= endX; i += gap) {
            g.moveTo(i, startY);
            g.lineTo(i, startY + height);
        }
        for (var j = startY; j <= endY; j += gap) {
            g.moveTo(startX, j);
            g.lineTo(startX + width, j);
        }
        g.stroke();
        g.restore();
    }
});