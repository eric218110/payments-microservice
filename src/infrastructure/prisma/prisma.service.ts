import { Injectable } from '@nestjs/common';
import { PrismaClient } from './client';

@Injectable()
export class PrismaService extends PrismaClient {}
