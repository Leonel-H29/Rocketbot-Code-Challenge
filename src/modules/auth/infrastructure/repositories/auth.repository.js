import prisma from '../../../../clients/prisma/prismaClient.js';

class AuthRepository {
  async createUser(userData) {
    const user = await prisma.user.create({
      data: userData,
    });
    return user;
  }

  async findUserByUsername(username) {
    const user = await prisma.user.findUnique({
      where: { username },
    });
    return user;
  }

  async findUserById(id) {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    return user;
  }
}

export default new AuthRepository();
