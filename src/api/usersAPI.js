import instance from './instance';

export default class usersAPI {
  static async getUsers(page = 1) {
    const { data } = instance.get(`users?page=${page}`);

    return data;
  }
}
