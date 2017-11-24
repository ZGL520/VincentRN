import {TEST} from "../constants";

const TestAction = (data) => {
    return{
        type:TEST,
        data:data
    }
};

export default TestAction