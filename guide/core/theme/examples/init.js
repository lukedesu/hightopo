function init(){

    items = [   
        {
            label: 'Fit Content',
            action: function(){                             
                graphView.fitContent(true);
            }
        },                   
        {
            label: 'Editable',
            type: 'check',
            selected: false,
            toolTip: 'Make graph view editable',
            action: function(item){
                graphView.setEditable(item.selected);
            }
        },
        "separator",  
        {
            id: 'zoom',
            label: 'Zoom',
            slider: {
                min: 0.2,
                max: 5,
                value: 1,
                onValueChanged: function(){
                    graphView.setZoom(this.getValue());
                }
            }
        },
        {
            comboBox: {
                width: 105,
                value: 'Group',
                values: ['Node', 'Edge', 'Group', 'Shape', 'SubGraph', 'Grid'],
                icons: ['node_icon', 'edge_icon', 'group_icon', 'shape_icon', 'subGraph_icon', 'grid_icon']
            },
            unfocusable: true,
            toolTip: 'ComboBox example'
        },
        "separator",          
        {
            radioButton: {
                label: 'Indeterminate',
                icon: 'node_icon',
                iconColor: '#C800FF',
                groupId: 'alarm',
                width: 110
            },
            toolTip: 'Change to indeterminate alarm'
        },
        {
            radioButton: {
                label: 'Cleared',
                icon: 'node_icon',
                iconColor: '#00FF00',
                groupId: 'alarm',
                selected: true                
            },
            toolTip: 'Change to cleared alarm'        
        }                
    ];

    dataModel = new ht.DataModel();                   
    graphView = new ht.graph.GraphView(dataModel);              
    propertyView = new ht.widget.PropertyView(dataModel);
    listView = new ht.widget.ListView(dataModel);
    treeView = new ht.widget.TreeView(dataModel);
    tablePane = new ht.widget.TablePane(dataModel);
    treeTablePane = new ht.widget.TreeTablePane(dataModel);
    formPane = new ht.widget.FormPane();
    accordionView = new ht.widget.AccordionView();
    tabView = new ht.widget.TabView();
    toolbar = new ht.widget.Toolbar(items);
    borderPane = new ht.widget.BorderPane();
    borderPane.setTopView(toolbar);
    borderPane.setCenterView(graphView);

    leftSplit = new ht.widget.SplitView(borderPane, tabView, 'vertical', 0.55);
    mainSplit = new ht.widget.SplitView(leftSplit, accordionView, 'horizontal', -300);                

    view = mainSplit.getView();
    view.className = 'main';
    document.body.appendChild(view);    
    window.addEventListener('resize', function (e) {
        mainSplit.invalidate();
    }, false);                                                  
                 
    listView.setCheckMode(true);  
    listView.setSelectionModelShared(false);
    listView.getSelectionModel().setSelectionMode('single');                

    tablePane.getTableView().enableToolTip();  
    tablePane.getTableView().setCheckMode(true);
    treeTablePane.getTableView().setCheckMode('all'); 
    treeTablePane.getTableView().enableToolTip();  
    
    accordionView.add('Tree View', treeView);         
    accordionView.add('Property View', propertyView);  
    accordionView.add('Form Pane', formPane, true);
    
    tabView.add('List View', listView);
    tabView.add('Table View', tablePane).setIcon('grid_icon');
    tabView.add('Tree Table View', treeTablePane, true);

    var tab = new ht.Tab();
    tab.setName('HT for 3D Web');
    tab.setClosable(true);
    tabView.getTabModel().add(tab);                                
    if(init3d()){
        tab.setView(graph3dView);
    }else{
        tab.setDisabled(true);
    }

    initFormPane();
               
    initProperties(propertyView.getPropertyModel());         

    initColumns(tablePane.getColumnModel());
    initColumns(treeTablePane.getColumnModel());              

    hello = new ht.Node();
    hello.setPosition(80, 120);             
    hello.setName('Hello');
    hello.setToolTip('I love HT');  
    hello.setStyle('note', 'I love HT');
    hello.setStyle('note.background', '#FFA000');
    dataModel.add(hello);

    world = new ht.Node();
    world.setPosition(250, 80);
    world.setName('World');
    world.setToolTip('HT for your imagination');
    world.setStyle('note', 'HT for your imagination');    
    world.setStyle('note.expanded', false);  
    world.setStyle('border.color', 'red');
    dataModel.add(world);

    edge = new ht.Edge(hello, world);
    edge.setName('Hello World');
    edge.setStyle('label.color', 'white');
    edge.setStyle('label.background', '#3498DB');
    dataModel.add(edge);  

    group = new ht.Group();
    group.setName('HT for Web ' + ht.Default.getVersion());
    group.addChild(hello);
    group.addChild(world);
    group.addChild(edge);
    dataModel.add(group);                               

    names = ['SplitView', 'AccordionView', 'TabView',
        'PropertyView', 'ListView', 'TreeView', 'TableView', 'TreeTableView', 
        'TableHeader', 'TablePane', 'TreeTablePane','Toolbar','BorderPane', '...'];

    learnMore = new ht.Node();
    learnMore.setImage('subGraph_image');
    learnMore.setToolTip(names.join('<br>'));                
    learnMore.setName('Learn More');
    learnMore.setPosition(400, 100);
    learnMore.setStyle('note', names);
    learnMore.setStyle('note.background', 'red');
    learnMore.setStyle('body.color', 'red');
    learnMore.setStyle('note.max', 180);                                
    dataModel.add(learnMore);

    graphView.enableToolTip();  
    graphView.adjustZoom = function(zoom){
        if(zoom > 5){
            return 5;            
        }
        else if(zoom < 0.2){
            return 0.2;
        }
        return zoom;
    };
    graphView.mp(function(e){
        if(e.property === 'zoom'){      
            toolbar.setValue('zoom', graphView.getZoom());            
        }
    });     
    
    toolbar.enableToolTip();
    treeView.expandAll();
    treeTablePane.getTableView().expandAll();                  
    dataModel.getSelectionModel().setSelection(hello);                                                
}

function initFormPane(){
    formPane.addRow([                    
        'First Name:',
        {
            id: 'firstName',
            textField: {
                text: 'Eric'
            }
        }
    ],
    [80, 0.1]);

    formPane.addRow([
        'Last Name:',
        {
            id: 'lastName',
            textField: {
                text: 'Lin'
            }
        },
        {
            id: 'married',
            checkBox: {
                label: 'Married',
                selected: true
            }
        }
    ],
    [80, "0.1+56", 0.1]);   
    
    formPane.addRow([
        'Alarm:',
        {
            id: 'critical',
            radioButton: {
                label: 'Critical',                            
                icon: 'node_icon',
                iconColor: '#FF0000',
                groupId: 'alarm'
            }
        },
        {
            id: 'major',
            radioButton: {
                label: 'Major',
                icon: 'node_icon',
                iconColor: '#FFA000',
                groupId: 'alarm',
                selected: true
            }
        }
    ],
    [80, 0.1, 0.1]);         

    formPane.addRow([
        null,
        {
            id: 'minor',
            radioButton: {
                label: 'Minor',
                icon: 'node_icon',
                iconColor: '#FFFF00',
                groupId: 'alarm'
            }
        },
        {
            id: 'warning',
            radioButton: {
                label: 'Warning',
                icon: 'node_icon',
                iconColor: '#00FFFF',
                groupId: 'alarm'
            }
        }
    ],
    [80, 0.1, 0.1]);

    formPane.addRow([
        'Age & Sex:',
        {
            id: 'age',
            slider: {
                value: 35,
                step: 1
            }            
        },
        {
            id: 'sex',
            comboBox:{
                value: 'Male',
                values: ['Male', 'Female']
            }            
        }
    ],
    [80, "0.1+56", 0.1]);   

    formPane.addRow([
        'Password:',
        {
            id: 'password',
            textField: {
                text: 'ht for web',
                type: 'password'
            }
        },
        'Confirm:',
        {
            id: 'confirmPassword',
            textField: {
                text: 'ht for web',
                type: 'password'
            }
        }
    ],
    [80, 0.1, 50, 0.1]);                 
    
    formPane.addRow([
        'Description:',
        {
            id: 'description',
            textArea: {
                text: 'HT for Web:\n\nA rich JavaScript UI library that delivers a complete set of HTML5 UI widgets. With HT for Web, you can easily create modern web and mobile enterprise applications without worrying about cross-browser compatibility, standards compliance or touch-device support.\n\nA monitoring and visualization solution for the easy creation and deployment of highly customizable and fully interactive topology diagrams, dashboards and charts. HT for Web is used to visualize and control real-time and mission-critical processes in a variety of industries, from Telecommunication Network Monitoring to Industrial Automation (HMI/SCADA).\n\nA WebGL based 3D graphics engine. HT for Web offers a unique kind of abstraction layer for WebGL, extending the Model–View–Presenter (MVP) design pattern to the world of 3D graphics. With HT for Web, you can focus more on core functionality and logic, rather than dealing with the complexities of 3D rendering and mathematics.\n\nwww.hightopo.com'
            }
        }
    ],
    [80, 0.1], 0.1); 

    formPane.addRow([
        null,
        {
            button: {
                label: 'Submit',
                onClicked: function(){
                    alert(
                        'First Name:' + formPane.v('firstName') + '\n' +
                        'Last Name:' + formPane.v('lastName') + '\n' +
                        'Alarm:' + getAlarm() + '\n' +
                        'Age:' + formPane.v('age') + '\n' +
                        'Sex:' + formPane.v('sex') + '\n' +
                        'Password:' + formPane.v('password') + '\n' +
                        'Confirm Password:' + formPane.v('confirmPassword') + '\n' +
                        'Description:' + formPane.v('description')
                    );
                }
            }
        },
        {
            button: {
                label: 'Clear',
                onClicked: function(){
                    formPane.v({
                        firstName: '',
                        lastName: '',
                        password: '',
                        confirmPassword: '',
                        description: ''
                    });
                }
            }
        }
    ],
    [0.1, 80, 80]);      
}

function getAlarm(){
    if(formPane.v('critical')){
        return 'Critical';
    }
    if(formPane.v('major')){
        return 'Major';
    }
    if(formPane.v('minor')){
        return 'Minor';
    }
    if(formPane.v('warning')){
        return 'Warning';
    }
}

function init3d(){
    graph3dView = new ht.graph3d.Graph3dView();
    shape = new ht.Shape();
    graph3dView.getDataModel().add(shape);
    graph3dView.setGridVisible(true);
    graph3dView.setOriginAxisVisible(true);
    graph3dView.setCenterAxisVisible(true); 
    graph3dView.setEye([-200, 100, 300]);
    shape.setRotationX(Math.PI/2); 
    shape.s({
        'note': 'HT for modern web and mobile app development',
        'note.face': 'top',
        'note.offset.x': 3,
        'note.offset.y': -3,    
        'note.autorotate': true
    });
    shape.setPoints([                    
        // draw H
        {x: 20, y: 0},
        {x: 20, y: 100},
        {x: 20, y: 50},
        {x: 80, y: 50},
        {x: 80, y: 0},
        {x: 80, y: 100},

        // draw T
        {x: 120, y: 0},
        {x: 180, y: 0},
        {x: 150, y: 0},
        {x: 150, y: 100}                    
    ]);                                
    shape.setSegments([
        // draw H
        1, // moveTo
        2, // lineTo
        1, // moveTo
        2, // lineTo
        1, // moveTo
        2, // lineTo

        // draw T
        1, // moveTo
        2, // lineTo
        1, // moveTo
        2 // lineTo
    ]);   
    shape.setPosition3d(0, 50, 0);                
    return graph3dView.getGL();
}

function initProperties(propertyModel){
    var property = new ht.Property();
    property.setName("id");
    propertyModel.add(property);

    property = new ht.Property();
    property.setName("name");
    property.setEditable(true);
    propertyModel.add(property);

    property = new ht.Property();
    property.setName("ingroup");
    property.setDisplayName('ingroup');
    property.setAccessType('style');
    property.setEditable(true);
    property.setValueType('boolean');
    propertyModel.add(property);

    property = new ht.Property();
    property.setName("image.stretch");
    property.setDisplayName('image');
    property.setAccessType('style');
    property.setEditable(true);
    property.setEnum(['fill', 'uniform', 'centerUniform']);
    propertyModel.add(property); 

    property = new ht.Property();
    property.setName("select.color");
    property.setDisplayName('color');
    property.setAccessType('style');
    property.setValueType('color');
    property.setCategoryName('select');
    propertyModel.add(property);  

    property = new ht.Property();
    property.setName("select.width");
    property.setDisplayName('width');
    property.setAccessType('style');   
    property.setCategoryName('select');
    propertyModel.add(property);     

    property = new ht.Property();
    property.setName("label.color");
    property.setDisplayName('color');
    property.setAccessType('style');
    property.setValueType('color');
    property.setCategoryName('label');
    propertyModel.add(property);

    property = new ht.Property();
    property.setName("background");
    property.setDisplayName('label background');
    property.setAccessType('style');
    property.setValueType('color');
    property.setCategoryName('label');
    propertyModel.add(property);   

    property = new ht.Property();
    property.setName("note");
    property.setAccessType('style');
    property.setCategoryName('note');     
    propertyModel.add(property);

    property = new ht.Property();
    property.setName("note.color");
    property.setDisplayName('color');
    property.setAccessType('style');
    property.setValueType('color');
    property.setCategoryName('note');
    propertyModel.add(property);

    property = new ht.Property();
    property.setName("note.background");
    property.setDisplayName('background');
    property.setAccessType('style');
    property.setValueType('color');
    property.setCategoryName('note');
    propertyModel.add(property);                 
}

function initColumns(columnModel){
    var column = new ht.Column();
    column.setName("id");
    column.setDisplayName('Id');
    columnModel.add(column);

    column = new ht.Column();
    column.setName("name");
    column.setEditable(true);
    column.setWidth(120);
    column.setDisplayName('Name');
    columnModel.add(column);

    column = new ht.Column();
    column.setWidth(160);
    column.setDisplayName('Discription');
    column.getValue = function(data){
        if(data instanceof ht.Group){
            var size = data.getChildren().size();
            if(size === 0){
                return 'I have no child';
            }
            else if(size === 1){
                return 'I have one child';
            }
            return 'I have ' + data.size() + ' children';
        }
        if(data instanceof ht.Node){
            var position = data.getPosition();
            return 'X:' + parseInt(position.x) + ', Y:' + parseInt(position.y); 
        }
        if(data instanceof ht.Edge){
            return 'Source:' + data.getSource() + ', Target:' + data.getTarget();
        }
    };
    columnModel.add(column);                                

    var column = new ht.Column();
    column.setWidth(200);
    column.setName('note'); 
    column.setAccessType('style');
    column.setDisplayName('Note');
    columnModel.add(column);
    column.drawCell = function (g, data, selected, column, x, y, w, h, view){                    
        var label = data.getStyle('note');
        if(label){
            // draw background
            g.fillStyle = data.s('note.background');
            g.beginPath();
            g.rect(x, y, w, h);
            g.fill();   

            // draw label                    
            ht.Default.drawText(g, label, null, data.s('note.color'), x, y, w, h, 'left');            
        }
    };                 
}