import { query } from "./_generated/server";

export const getMany = query({
    args : {},
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();
        if(identity === null){
            throw new Error("Not authenticated")
        }
        return await ctx.db.query("users").collect();
  },
});