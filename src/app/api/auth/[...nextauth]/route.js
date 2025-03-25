const { authOptions } = require("lib/authOptions");
const { default: NextAuth } = require("next-auth");

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
