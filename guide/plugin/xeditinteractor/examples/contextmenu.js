var contextMenuChangeToLine = {
        label: "Straight Line",
        type: "radio",
        action: function() {
            editInteractor.changeShapeSegment(2);
        }
    },
    contextMenuChangeToMove = {
        label: "Break",
        type: "radio",
        action: function() {
            editInteractor.changeShapeSegment(1);
        }
    },
    contextMenuChangeToQuadratic = {
        label: "Quadratic Curve",
        type: "radio",
        action: function() {
            editInteractor.changeShapeSegment(3);
        }
    },
    contextMenuChangeToBezier = {
        label: "Bezier Curve",
        type: "radio",
        action: function() {
            editInteractor.changeShapeSegment(4);
        }
    },
    contextMenuAddPoint = {
        label: "Add Point",
        action: function(item, event) {
            editInteractor.addShapePoint();
        }
    },
    contextMenuRemovePoint = {
        label: "Remove Point",
        action: function() {
            editInteractor.removeShapePoint();
        }
    },
    contextMenuClosePath = {
        label: "Close Path",
        type: "check"
    };