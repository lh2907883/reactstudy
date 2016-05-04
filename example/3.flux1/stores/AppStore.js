//nodejs的官方events库
import EventEmitter from 'events';

import AppDispatcher from '../common/AppDispatcher'

var _data = {
    count: 1,
    tc_type: undefined,
    btn_text: 'he',
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
        case 'BtnTextChange':
            _data.btn_text = action.value;
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
    getCount: function(){
        return _data.count;
    },
    getPrice: function(){
        return _data.count * 2;
    },
    getBtnText: function(){
        return _data.btn_text;
    }
};