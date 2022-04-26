import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgresql://postgres:9e1tK*VnoAGN@localhost:5432/portofolio_app?schema=public',
        },
      },
    });
  }
}
