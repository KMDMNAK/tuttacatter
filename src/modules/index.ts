import { db } from '../db'
import { AuthModuleProvider } from './auth'
import { UserModuleProvider } from './user'
import { ViewModuleProvider } from './view'

export const AuthModule = new AuthModuleProvider(db.getCollections())
export const UserModule = new UserModuleProvider(db.getCollections())
export const ViewModule = new ViewModuleProvider(db.getCollections())