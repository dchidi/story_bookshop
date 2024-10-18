interface IUseLogin {
  isAuthenticated: boolean;
}
export const useLogin = (): IUseLogin => {
  return { isAuthenticated: !!localStorage.getItem("authToken") };
};
