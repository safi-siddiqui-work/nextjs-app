export const WebRoutes = {
  home: "/",
  auth: {
    signup: {
      home: "/signup",
      verify: "/signup/verify",
      create: "/signup/create",
    },
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
