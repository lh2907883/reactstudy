//nodejs的官方events库
import EventEmitter from 'events';

import AppDispatcher from '../common/AppDispatcher'

var _data = {
    count: 34,
    tc_type: undefined,
    div: {
        html: '123',
        html1: 'abc'
    }
};

export const AppEmit = new EventEmitter();

AppDispatcher.register(function(action) {
    switch(action.type){
        case 'CountChange':
            _data.count = action.value;
            AppEmit.emit("change");
            break;


        default:

    }
});

export default {
    addChangeListener: function(cb){
        AppEmit.on("change", cb);
    },
    removeChangeListener: function(cb){
        AppEmit.removeListener("change", cb);
    },
    getAppState: function(){
        return _data;
    },
    getPrice: function(){
        return _data.count * 2;
    }
};