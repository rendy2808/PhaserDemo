demo.state9 = function(){};
demo.state9.prototype = {
    preload:function(){},
    create:function(){
        game.stage.backgroundColor = '#ddffcc';
        console.log('state9');
        addChangeStateEventListener();
    },
    update:function(){}     
};