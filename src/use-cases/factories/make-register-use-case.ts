import { PrismaUsersRepository } from '../../repository/prisma/users.repository'
import { RegisterUseCase } from '../register.usecase'

export function makeRegisterUseCase() {
  const usersRepository = new PrismaUsersRepository()
  return new RegisterUseCase(usersRepository)
}
