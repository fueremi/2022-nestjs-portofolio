import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup() {
    return {
      status: 200,
      message: "I'm sign up!",
    };
  }

  signin() {
    return {
      status: 200,
      message: "I'm sign in!",
    };
  }
}
