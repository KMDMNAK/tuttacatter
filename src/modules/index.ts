import { db } from '../db'
import { AuthModuleProvider } from './auth'
import { UserModuleProvider } from './user'

export const AuthModule = new AuthModuleProvider(db.getCollections())
export const UserModule = new UserModuleProvider(db.getCollections())