import {
    ADD_PROJECT_TO_STATE,
    ADD_TABLE_TO_STATE, DELETE_PROJECT_FROM_STATE,
    DELETE_TABLE_FROM_STATE,
    FETCH_USER,
    LOGIN,
    LOGOUT,
    SET_USER
} from "./actionTypes";

const initialState = {
    user: null,
    projects: [],
    isLoggedIn: false,
    loading: false,
    errors: null,
};


export const appReducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                isLoggedIn: false,
                errors: null,
            };
        }
        case LOGOUT: {
            return initialState;
        }
        case SET_USER:
            return {
                ...state,
                errors: null,
                loading: false,
                user: action.payload.user,
            };
        case FETCH_USER:
            return {
                ...state,
                loading: true,
            };
        case ADD_TABLE_TO_STATE:
            return {
                ...state,
                // user: {
                //     ...state.user,
                //     tables: [...state.user.tables, {
                //         name: action.payload.data.name,
                //         tableName: state.user.userName + '_' + action.payload.data.name
                //     }]
                // }
            }
        case DELETE_TABLE_FROM_STATE:
            return {
                ...state,
                // user: {
                //     ...state.user, tables: state.user.tables.filter((table) => {
                //         if (table.tableName !== action.payload.tableName) {
                //             return table
                //         }
                //         return false
                //     })
                // },
            }
        case ADD_PROJECT_TO_STATE:
            return {
                ...state,
                user: {
                    ...state.user,
                    projects: [...state.user.projects, {
                        id: Date.now().toString(),
                        projectName: action.payload.data.projectName
                    }]
                }
            }
        case DELETE_PROJECT_FROM_STATE:
            return {
                ...state,
                user: {
                    ...state.user, projects: state.user.projects.filter((project) => {
                        if (project.projectName !== action.payload.projectName) {
                            return project
                        }
                        return false
                    })
                }
            }
        default: {
            return initialState;
        }

    }
}