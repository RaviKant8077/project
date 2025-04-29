const initialState = {
    products: [],
    categories: [],
    pagination: {},
};

export const productReducer = (state = initialState, action) => {
    // Debugging: Log the action type and payload
    console.log("Action Type:", action.type);
    console.log("Action Payload:", action.payload);

    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return {
                ...state,
                products: action.payload,
                pagination: {
                    pageNumber: action.pageNumber,
                    pageSize: action.pageSize,
                    totalElement: action.totalElement,
                    totalPages: action.totalPages,
                    lastPage: action.lastPage,
                },
            };

        case 'FETCH_CATEGORIES':
            return {
                ...state,
                categories: action.payload,
                pagination: {
                    ...state.pagination,
                    pageNumber: action.pageNumber,
                    pageSize: action.pageSize,
                    totalElement: action.totalElement,
                    totalPages: action.totalPages,
                    lastPage: action.lastPage,
                }
            };

        default:
            return state;
    }
};
