import {IsNumber, IsString} from 'class-validator'

export class PostRouteDto {
    @IsNumber()
    id: number

    @IsString()
    email: string

    @IsString()
    password: string
}