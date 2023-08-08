import { Module } from '@nestjs/common';
import { UserAuthGuard } from './guard/user-auth.guard';

@Module({
  providers: [UserAuthGuard],
  exports: [UserAuthGuard],
})
export class AuthModule {}
