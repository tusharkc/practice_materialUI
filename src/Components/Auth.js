const Auth = {
  isAuthanticated: false,

  authenticate() {
    this.isAuthanticated = true;
  },

  getAuth() {
    return this.isAuthanticated;
  },
};

export default Auth;
