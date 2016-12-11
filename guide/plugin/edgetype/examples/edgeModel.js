createEdgeModel = function(){
    
    var gap = 5,
        radius = 5,
        node1, node2;
    
    node1 = createNode(50, 50);
    node2 = createNode(450, 50);
    createEdge(node1, node2, 1, {
        'edge.type': 'points',  
        'edge.offset': 0,
        'edge.points': [
            {x: 150, y: 20},
            {x: 250, y: 60},
            {x: 350, y: 20}
        ]
    });

    // default bundle
    node1 = createNode(50, 100);
    node2 = createNode(220, 100);
    createEdge(node1, node2, 3);

    // center and pattern
    node1 = createNode(280, 100);
    node2 = createNode(450, 100);
    createEdge(node1, node2, 3, {'edge.pattern': [6, 6], 'edge.center': true});

    // use points type to disable bundle, config source and target position
    node1 = createNode(550, 70, {'shape': 'rect'});                
    node2 = createNode(700, 70, {'shape': 'rect'});
    node1.setSize(80, 100);
    node2.setSize(80, 100);                  
    createEdge(node1, node2, 1, {
        'edge.type': 'points', 
        'edge.offset': 0,
        'edge.source.position': 8,
        'edge.source.offset.x': -10,
        'edge.source.offset.y': 10,
        'edge.target.position': 6,
        'edge.target.offset.x': 10,
        'edge.target.offset.y': 10
    });
    createEdge(node1, node2, 1, {
        'edge.type': 'points',
        'edge.offset': 0,
        'edge.source.position': 26,
        'edge.source.offset.x': 10,
        'edge.source.offset.y': -10,
        'edge.target.position': 28,
        'edge.target.offset.x': -10,
        'edge.target.offset.y': -10
    });

    // ripple bundle
    node1 = createNode(50, 180);
    node2 = createNode(220, 180);
    createEdge(node1, node2, 3, 'ripple');  

    // ripple center and pattern
    node1 = createNode(280, 180);
    node2 = createNode(450, 180);
    createEdge(node1, node2, 3, {
        'edge.type': 'ripple',
        'edge.ripple.size': 3,
        'edge.ripple.elevation': 20,
        'edge.pattern': [6, 6],
        'edge.center': true,
        'edge.offset': 0
    });    

    // ripple both side
    node1 = createNode(510, 180);
    node2 = createNode(740, 180);
    createEdge(node1, node2, 3, {
        'edge.type': 'ripple',
        'edge.ripple.size': 5,
        'edge.ripple.elevation': 20,
        'edge.ripple.both': true,
        'edge.center': true,
        'edge.offset': 0
    });  

    // ripple straight line
    node1 = createNode(50, 260);
    node2 = createNode(450, 260);
    createEdge(node1, node2, 2, {
        'edge.type': 'ripple',
        'edge.gap': 10,
        'edge.ripple.length': 10,
        'edge.ripple.elevation': -10,
        'edge.ripple.straight': true,
        'edge.offset': 0
    }).s({
        'edge.ripple.elevation': 10
    });                 

    // ripple straight line
    node1 = createNode(510, 260);
    node2 = createNode(740, 260);
    createEdge(node1, node2, 2, {
        'edge.type': 'ripple',
        'edge.gap': 10,
        'edge.ripple.size': 6,
        'edge.ripple.elevation': -10,
        'edge.ripple.straight': true,
        'edge.offset': 0
    }).s({
        'edge.ripple.elevation': 10
    });    

    // ortho
    node1 = createNode(50, 360);
    node2 = createNode(220, 300);
    createEdge(node1, node2, 3, {
        'edge.type': 'ortho',
        'edge.gap': gap
    });    

    node1 = createNode(280, 360);
    node2 = createNode(450, 300);
    createEdge(node1, node2, 3, {
        'edge.type': 'ortho',
        'edge.gap': gap,
        'edge.corner.radius': radius
    });  

    node1 = createNode(510, 360);
    node2 = createNode(680, 300);
    createEdge(node1, node2, 3, {
        'edge.type': 'ortho',
        'edge.gap': gap,
        'edge.corner.radius': 0
    });                 

    // flex
    node1 = createNode(50, 460);
    node2 = createNode(220, 400);
    createEdge(node1, node2, 3, {
        'edge.type': 'flex',
        'edge.gap': gap
    });    

    node1 = createNode(280, 460);
    node2 = createNode(450, 400);
    createEdge(node1, node2, 3, {
        'edge.type': 'flex',
        'edge.gap': gap,
        'edge.corner.radius': 20
    });  

    node1 = createNode(510, 460);
    node2 = createNode(680, 400);
    createEdge(node1, node2, 3, {
        'edge.type': 'flex',
        'edge.gap': gap,
        'edge.corner.radius': 0
    }); 

    // h.v
    node1 = createNode(50, 560);
    node2 = createNode(220, 500);
    createEdge(node1, node2, 3, {
        'edge.type': 'h.v',
        'edge.gap': gap
    });    

    node1 = createNode(280, 560);
    node2 = createNode(450, 500);
    createEdge(node1, node2, 3, {
        'edge.type': 'h.v',
        'edge.gap': gap,
        'edge.corner.radius': radius
    });   

    node1 = createNode(510, 560);
    node2 = createNode(680, 500);
    createEdge(node1, node2, 3, {
        'edge.type': 'h.v',
        'edge.gap': gap,
        'edge.corner.radius': 0
    });  

    // v.h
    node1 = createNode(50, 660);
    node2 = createNode(220, 600);
    createEdge(node1, node2, 3, {
        'edge.type': 'v.h',
        'edge.gap': gap
    });    

    node1 = createNode(280, 660);
    node2 = createNode(450, 600);
    createEdge(node1, node2, 3, {
        'edge.type': 'v.h',
        'edge.gap': gap,
        'edge.corner.radius': radius
    });   

    node1 = createNode(510, 660);
    node2 = createNode(680, 600);
    createEdge(node1, node2, 3, {
        'edge.type': 'v.h',
        'edge.gap': gap,
        'edge.corner.radius': 0
    }); 

    // extend.east
    node1 = createNode(50, 760);
    node2 = createNode(190, 700);
    createEdge(node1, node2, 3, {
        'edge.type': 'extend.east',
        'edge.gap': gap
    });    

    node1 = createNode(280, 760);
    node2 = createNode(420, 700);
    createEdge(node1, node2, 3, {
        'edge.type': 'extend.east',
        'edge.gap': gap,
        'edge.corner.radius': radius
    });   

    node1 = createNode(510, 760);
    node2 = createNode(650, 700);
    createEdge(node1, node2, 3, {
        'edge.type': 'extend.east',
        'edge.gap': gap,
        'edge.corner.radius': 0
    });     

    // extend.west
    node1 = createNode(80, 860);
    node2 = createNode(220, 800);
    createEdge(node1, node2, 3, {
        'edge.type': 'extend.west',
        'edge.gap': gap
    });    

    node1 = createNode(310, 860);
    node2 = createNode(450, 800);
    createEdge(node1, node2, 3, {
        'edge.type': 'extend.west',
        'edge.gap': gap,
        'edge.corner.radius': radius
    });   

    node1 = createNode(540, 860);
    node2 = createNode(680, 800);
    createEdge(node1, node2, 3, {
        'edge.type': 'extend.west',
        'edge.gap': gap,
        'edge.corner.radius': 0
    });   

    // extend.north
    node1 = createNode(50, 960);
    node2 = createNode(220, 930);
    createEdge(node1, node2, 3, {
        'edge.type': 'extend.north',
        'edge.gap': gap
    });    

    node1 = createNode(280, 960);
    node2 = createNode(450, 930);
    createEdge(node1, node2, 3, {
        'edge.type': 'extend.north',
        'edge.gap': gap,
        'edge.corner.radius': radius
    });   

    node1 = createNode(510, 960);
    node2 = createNode(680, 930);
    createEdge(node1, node2, 3, {
        'edge.type': 'extend.north',
        'edge.gap': gap,
        'edge.corner.radius': 0
    });     


    // extend.south
    node1 = createNode(50, 1030);
    node2 = createNode(220, 1000);
    createEdge(node1, node2, 3, {
        'edge.type': 'extend.south',
        'edge.gap': gap
    });    

    node1 = createNode(280, 1030);
    node2 = createNode(450, 1000);
    createEdge(node1, node2, 3, {
        'edge.type': 'extend.south',
        'edge.gap': gap,
        'edge.corner.radius': radius
    });   

    node1 = createNode(510, 1030);
    node2 = createNode(680, 1000);
    createEdge(node1, node2, 3, {
        'edge.type': 'extend.south',
        'edge.gap': gap,
        'edge.corner.radius': 0
    });
    
    
    var count = 20,
        radius = 200,
        cx = 1020,
        cy = 270,
        center = createNode(cx, cy);
    center.setSize(160, 80);
    for (var i = 0; i < count; i++) {
            var node = createNode(
                cx + radius * Math.cos(Math.PI * 2 / count * i),
                cy + radius * Math.sin(Math.PI * 2 / count * i)
            );
            createEdge(center, node, 3, {
                'edge.type': 'boundary',
                'edge.gap': gap
            });
    }    
};