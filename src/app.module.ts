import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {CatsModule} from './cats/cats.module';
import {DatabaseModule} from './database.module';
import { WalletModule } from './wallet/wallet.module';

@Module({
    imports: [DatabaseModule, CatsModule, WalletModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
