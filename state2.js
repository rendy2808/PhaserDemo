demo.state2 = function(){};
demo.state2.prototype = {
    preload:function(){},
    create:function(){
        game.stage.backgroundColor = '#909090';
        console.log('state2');
        addChangeStateEventListener();
    },
    update:function(){}
};