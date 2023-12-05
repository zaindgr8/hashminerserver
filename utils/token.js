const jose = require("jose");

const createToken = async (data) => {
  console.log(data);
  const alg = "HS256";
  const secret = new TextEncoder().encode("zangbang");
  const token = await new jose.SignJWT(data)
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(secret);

  return token;
};

module.exports = createToken;
