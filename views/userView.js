
function userView(user){
    return `userId : ${user.id}, usernam : ${user.name}, password : ${user.password}`;
}

module.exports = userView;