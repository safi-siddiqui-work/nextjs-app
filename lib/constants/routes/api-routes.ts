// import { EnvServer } from "@/lib/envs/env-server";

// const baseUrl = EnvServer?.API_URL;
const baseUrl = "";
export const ApiRoutes = {
  todos: {
    create: `${baseUrl}/todos`,
  },
};
