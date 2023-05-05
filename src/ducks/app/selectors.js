export const selectUser = (state) => {
    return state.app.user;
};
export const selectUserLoading = (state) => {
    return state.app.loading;
}