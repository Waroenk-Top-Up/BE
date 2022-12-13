import { Response, Request } from 'express';
import { ExceptionFilter, HttpException, ArgumentsHost, Catch } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(Exception: HttpException, host: ArgumentsHost) {
        console.log(Exception.getResponse());
        console.log(Exception.getStatus());
        console.log(Exception);

        const context = host.switchToHttp();
        const request = context.getRequest<Request>();
        const response = context.getResponse<Response>();

        response.sendStatus(Exception.getStatus());
    }
}