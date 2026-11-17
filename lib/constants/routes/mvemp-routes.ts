const baseRoute = `/mvemp`;

export const MvempRoutes = {
  home: baseRoute,
  auth: {
    signup: {
      home: `${baseRoute}/signup`,
    },

    signin: {
      home: `${baseRoute}/signin`,
      email: `${baseRoute}/signin/email`,
      passwordless: {
        home: `${baseRoute}/signin/passwordless`,
        verify: `${baseRoute}/signin/passwordless/verify`,
      },
    },
  },
};
