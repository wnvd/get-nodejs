const bcrypt = require("bcrypt");
const saltRounds = 10;
const plainPass = 's0/\p4$$w0rd';
const plainPass2 = 'not_chicken';
let hashedPassword;

async function test() {
    hashedPassword = await bcrypt.hash(plainPass, saltRounds);
    console.log(hashedPassword);

    const res = await bcrypt.compare(plainPass2, hashedPassword);
    console.log(res);
}
test();
