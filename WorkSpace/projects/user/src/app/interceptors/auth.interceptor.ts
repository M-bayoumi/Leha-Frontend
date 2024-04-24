import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // Get the language from localStorage or any other source
    const language = localStorage.getItem('lang') || 'en-US';

    const newRequest = request.clone({
      headers: request.headers.append(
        'Authorization',
        `Bearer ${localStorage.getItem('token')}`
      ),
      setHeaders: {
        'Accept-Language': language == 'en' ? 'en-US' : 'ar-EG',
      },
    });

    return next.handle(newRequest);
  }
}
