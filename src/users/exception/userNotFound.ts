import { HttpException, HttpStatus } from '@nestjs/common';

export class UserNotFound extends HttpException {
    constructor(msg?: string, status?: HttpStatus) {
        super(msg || 'User Gak Ada Bodoh', status || HttpStatus.BAD_REQUEST)
    }
}