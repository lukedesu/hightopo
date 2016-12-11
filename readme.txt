HT目录文件结构：

/lib 产品类库目录：

    ht-api.js 代码注解文件，可引入IDE开发工具帮助代码提示        

    /core 核心类库目录
        ht.js 核心产品包，包含数据模型、通用组件、2D拓扑和3D引擎

    /plugin 扩展类库目录
        ht-dialog.js 对话框扩展包，提供可弹出和关闭的对话框组件 
        ht-palette.js 组件面板扩展包，提供可折叠的分类管理组件 
        ht-contextmenu.js 右键菜单扩展包，提供多级右键菜单组件           
        ht-menu.js 菜单扩展包，提供工具栏下拉菜单组件       
        ht-panel.js 面板容器扩展包，提供可容纳任意组件，并可嵌套、拖拽、吸附等功能一体化的容器             
        ht-rulerframe.js 刻度尺扩展包，提供适配2D拓扑，以及通用组件的刻度尺组件         
        ht-xeditinteractor.js 编辑交互扩展包，增强拓扑图的编辑交互功能
        ht-flow.js 流动扩展包，提供连线和多边形的流动动画效果  
        ht-dashflow.js 虚线流动扩展包，提供连线和多边形的虚线流动动画效果       
        ht-htmlnode.js HtmlNode扩展包，增加普通html元素在2D拓扑上的呈现功能
        ht-live.js 交互式图元扩展包，在2D拓扑的基础上增加按钮、进度条，组合框等可交互式图元
        ht-telecom.js 电信扩展包，包含告警模型，告警渲染和告警传播等功能
        ht-autolayout.js 自动布局扩展包，提供多种自动布局算法
        ht-forcelayout.js 弹力布局扩展包，提供2D和3D的力导向布局算法
        ht-modeling.js 建模扩展包，提供自定义3D建模函数功能
        ht-obj.js OBJ扩展包，提供加载OBJ格式的3D模型功能
        ht-edgetype.js 连线类型扩展包，提供曲线、折线等多种自定义连线类型
        ht-propertypane.js 属性面板扩展包，增强属性组件的可视化排序、过滤和分组功能
        ht-form.js 表单扩展包，提供下拉菜单、滑动条和按钮等组件，及具有组件布局功能的表单面板
        ht-overview.js 鹰眼扩展包，提供鸟瞰图功能，支持在鹰眼上定位、缩放等导航功能
        ht-animation.js 动画扩展包，提供图元任意属性动画变化功能
        ht-cssanimation.js CSS动画扩展包，提供对HTML元素的CSS动画操作封装
        ht-quickfinder.js 快速查询器扩展包，提供数据容器中指定属性图元的快速查找功能
        ht-historymanager.js 撤销和重做扩展包，提供编辑操作所需的撤销重做功能

/jsdoc API文档

    /index.html API文档主页面

/guide 开发手册：

    /core 核心手册目录

        /beginners/ht-beginners-guide.html 入门手册   
        /datamodel/ht-datamodel-guide.html 数据模型手册     
        /vector/ht-vector-guide.html 矢量手册
        /3d/ht-3d-guide.html 3D手册           
        /theme/ht-theme-guide.html 风格手册
        /schedule/ht-schedule-guide.html 调度手册
        /position/ht-position-guide.html 位置手册
        /shape/ht-shape-guide.html 形状手册
        /serialization/ht-serialization-guide.html 序列化手册 
        /batch/ht-batch-guide.html 批量手册  
        /lighting/ht-lighting-guide.html 灯光手册  
        /propertyview/ht-propertyview-guide.html 属性组件手册
        /listview/ht-listview-guide.html 列表组件手册
        /treeview/ht-treeview-guide.html 树组件手册
        /tableview/ht-tableview-guide.html 表格组件手册
        /treetableview/ht-treetableview-guide.html 树表组件手册
        /toolbar/ht-toolbar-guide.html 工具条组件手册
        /splitview/ht-splitview-guide.html 分割组件手册                
        /borderpane/ht-borderpane-guide.html 边框面板手册        
        /accordionview/ht-accordionview-guide.html 折叠组件手册
        /tabview/ht-tabview-guide.html 页签组件手册
        /databinding/ht-databinding-guide.html 数据绑定手册

    /plugin 扩展手册目录 

        /autolayout/ht-autolayout-guide.html 自动布局手册
        /forcelayout/ht-forcelayout-guide.html 弹力布局手册
        /modeling/ht-modeling-guide.html 建模手册
        /obj/ht-obj-guide.html OBJ手册
        /edgetype/ht-edgetype-guide.html 连线类型手册
        /overview/ht-overview-guide.html 鹰眼手册    
        /propertypane/ht-propertypane-guide.html 属性面板手册
        /form/ht-form-guide.html 表单面板手册
        /quickfinder/ht-quickfinder-guide.html 快速查询器手册
        /animation/ht-animation-guide.html 动画手册
        /cssanimation/ht-cssanimation-guide.html CSS动画手册
        /htmlnode/ht-htmlnode-guide.html HtmlNode手册  
        /dialog/ht-dialog-guide.html 对话框手册
        /palette/ht-palette-guide.html 组件面板手册   
        /menu/ht-menu-guide.html 菜单手册        
        /contextmenu/ht-contextmenu-guide.html 右键菜单手册        
        /rulerframe/ht-rulerframe-guide.html 刻度尺手册
        /xeditinteractor/ht-xeditinteractor-guide.html 编辑交互手册 
        /flow/ht-flow-guide.html 流动手册 
        /dashflow/ht-dashflow-guide.html 虚线流动手册 
        /panel/ht-panel-guide.html 面板手册             
        /live/ht-live-guide.html 交互式图元手册
        /telecom/ht-telecom-guide.html 电信扩展手册
        /historymanager/ht-historymanager-guide.html 撤销重做手册
         
网站：http://www.hightopo.com/
邮箱：service@hightopo.com

