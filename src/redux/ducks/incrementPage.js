const INCREMENT = "INCREMENT";

const initialState = {
    count: 50,
};

export const pageIncrement = () => ({
    type: INCREMENT,
});

export const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state, count: state.count + 50
            };
            
        default:
            return state;
    }
};