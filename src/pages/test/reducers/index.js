import {DATATEST} from  '../constants/index'
const DataTestreducer = (state={test:''},action) => {
    switch (action.type){
        case DATATEST:
            return state.test = action.data;
        default:
            return state
    }

};

export default DataTestreducer;