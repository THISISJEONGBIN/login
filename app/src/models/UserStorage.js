

class UserStorage {
    static #users = {
    id : ["jeongbin", "김정빈", "김팀장"],
    psword : ["1234","1234","123456"],
    name : ["김정빈", "정빈이","김팀장"],
    };

    static getUsers(...fields) {
        const users = this.#users; 
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});

        return newUsers;
    }
    static getUsersInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }
};

module.exports = UserStorage;