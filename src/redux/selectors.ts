interface stateType {
  count: { value: number };
  isLogin: { value: boolean };
}

export const selectCount = (state: stateType) => state.count.value;

export const selectIsLogin = (state: stateType) => state.isLogin.value;
