import { IUser } from "./user.interface"

export interface IGoal {
    _id?: string
    createdBy: Partial<IUser>
    title: string
    description: string
}