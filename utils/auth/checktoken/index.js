const publicUserSchema = require('../../../schemas/user/publicUserSchema');
const privateUserSchema = require('../../../schemas/user/privateUserSchema');

async function checkToken(headers) {
    const { userid: userID, usertoken: userToken } = headers;
    if (!userID || !userToken) return { "auth" : false, "error" : 'Missing userID or userToken' };

    const publicUserFound = await publicUserSchema.findOne({_id: userID});
    if (!publicUserFound) return { "auth" : false, "error" : 'UserID does not exist' };

    const privateUserFound = await privateUserSchema.findOne({_id: userID});
    if (!privateUserFound) return { "auth" : false, "error" : 'UserID does not exist' };

    if (privateUserFound.userToken !== userToken) return { "auth" : false, "error" : 'UserToken does not match' };

    return {"auth" : true, "publicUser" : publicUserFound, "privateUser" : privateUserFound};
};

module.exports = { checkToken };