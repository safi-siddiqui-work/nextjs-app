export const WebRoutes = {
  home: "/",
  auth: {
    signup: "/signup",
    signin: {
      home: "/signin",
      email: "/signin/email",
      passwordless: {
        home: "/signin/passwordless",
        verify: "/signin/passwordless/verify",
      },
    },
  },
};
