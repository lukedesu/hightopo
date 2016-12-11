ht.graph.SnapTouchInteractor = function (graphView, params) {
    ht.graph.SnapTouchInteractor.superClass.constructor.call(this, graphView, params);
};
ht.Default.def(ht.graph.SnapTouchInteractor, ht.graph.TouchInteractor, {
    handleMove: function(e) {
        var self = this,
            graphView = self.gv,
            data = self._data;
        if (!data) return;
        if (!graphView._moving) {
            var point = graphView.lp(e),
                lastLogicalPoint = self._lastLogicalPoint = point,
                nodeRect = data.getRect(),
                nodeX = nodeRect.x,
                nodeY = nodeRect.y;
            self._offset = {x: lastLogicalPoint.x - nodeX, y: lastLogicalPoint.y - nodeY};
            self.fi({ kind: 'beginMove', event: e }); 
            graphView._moving = 1;
        } else {
            var lastLogicalPoint = self._lastLogicalPoint,
                point = graphView.lp(e),
                offset = self._offset,
                gap = graphView.getSnapSpacing(),
                newX = point.x - offset.x,//left
                newY = point.y - offset.y,//top
                nearestX = Math.round(newX / gap) * gap,
                nearestY = Math.round(newY / gap) * gap,
                offsetX = nearestX - (lastLogicalPoint.x - offset.x),//newleft - oldleft
                offsetY = nearestY - (lastLogicalPoint.y - offset.y);
            graphView.moveSelection(offsetX, offsetY);
            self._lastLogicalPoint = {x: point.x + (nearestX - newX), y: point.y + (nearestY - newY)};//newlogicalpoint + roundgap
            self.autoScroll(e);
            self.fi({ kind: 'betweenMove', event: e });
        }
    }
});
