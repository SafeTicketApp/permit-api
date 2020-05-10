import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = process.env.PORT || 3010;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(port);
    console.log('listing on port ' + port);
}
bootstrap();
