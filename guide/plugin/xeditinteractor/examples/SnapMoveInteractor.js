ht.graph.SnapMoveInteractor = function (graphView) {
    ht.graph.SnapMoveInteractor.superClass.constructor.call(this, graphView);
};
ht.Default.def(ht.graph.SnapMoveInteractor, ht.graph.MoveInteractor, {
    handle_mousedown: function (e) {
        var self = this,
            graphView = self.gv;
        if (!ht.Default.isLeftButton(e) || graphView._editing) {
            return;
        }
        var data = graphView.getSelectedDataAt(e);
        if (data && data instanceof ht.Node) {
            self._data = data;
            graphView.handleMouseDown && graphView.handleMouseDown(e, data);
            self.startDragging(e);
            var lastLogicalPoint = self._lastLogicalPoint,
                nodeRect = data.getRect(),
                nodeX = nodeRect.x,
                nodeY = nodeRect.y;
            self._offset = {x: lastLogicalPoint.x - nodeX, y: lastLogicalPoint.y - nodeY};
            if (graphView.isMovable(data)) {
                graphView._moving = 1;
            }
        }
    },
    handleWindowMouseMove: function (e) {
        var self = this,
            gv = self.gv;
        if (!gv._moving) {
            return;
        }
        self.fi({ kind: self._logicalPoint ? 'betweenMove' : 'beginMove', event: e });
        var lastLogicalPoint = self._lastLogicalPoint,
            point = self._logicalPoint = gv.lp(e),
            offset = self._offset,
            gap = gv.getSnapSpacing(),
            newX = point.x - offset.x,//left
            newY = point.y - offset.y,//top
            nearestX = Math.round(newX / gap) * gap,
            nearestY = Math.round(newY / gap) * gap,
            offsetX = nearestX - (lastLogicalPoint.x - offset.x),//newleft - oldleft
            offsetY = nearestY - (lastLogicalPoint.y - offset.y);
        gv.moveSelection(offsetX, offsetY);
        self._lastLogicalPoint = {x: point.x + (nearestX - newX), y: point.y + (nearestY - newY)};//newlogicalpoint + roundgap
        self.autoScroll(e);
    }
});
