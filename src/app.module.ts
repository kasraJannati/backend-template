import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { CredoModule } from './credo/credo.module';
import { QrcodeModule } from './qrcode/qrcode.module';
import { MessageModule } from './message/message.module';
import { LedgerModule } from './ledger/ledger.module';
import { ConnectionsModule } from './connections/connections.module';
// import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    // BullModule.forRoot({
    // redis: {
    //   host: 'localhost',
    //   port: 6379,
    // },
    // }),
    DbModule,
    CredoModule,
    QrcodeModule,
    MessageModule,
    LedgerModule,
    ConnectionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
