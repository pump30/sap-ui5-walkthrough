sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller){
    "use strict"

    return Controller.extend("sap.ui.demo.walthrough.view", {
        onShowHello: function(){
            alert("hello")
        }
    })
})