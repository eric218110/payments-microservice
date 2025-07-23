import { INestApplication, Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { description, name, version } from '../../../../package.json';

export const setupSwagger = (app: INestApplication<any>) => {
  const logger = new Logger('SwaggerConfig');
  const { SERVER_PORT: port = '3000' } = process.env;

  const serverUrl = `http://localhost:${port}`;
  const swaggerPath = 'api-docs';

  const config = new DocumentBuilder()
    .setTitle(`${name}`)
    .setDescription(`${description}`)
    .setVersion(`${version}`)
    .addServer(serverUrl, 'Local Server')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      in: 'header',
    })
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);

  SwaggerModule.setup(swaggerPath, app, documentFactory, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  logger.log(`Access OpenApi docs in address: ${serverUrl}/${swaggerPath}`);
};
