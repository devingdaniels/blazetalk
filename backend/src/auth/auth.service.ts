// src/auth/auth.service.ts

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async loginWithGoogle(user) {
    const payload = {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      picture: user.picture,
    };

    return {
      accessToken: this.jwtService.sign(payload),
      user,
    };
  }
}
