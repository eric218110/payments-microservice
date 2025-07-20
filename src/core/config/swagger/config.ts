import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { description, name, version } from '../../../../package.json';

export const setupSwagger = (app: INestApplication<any>) => {
  const config = new DocumentBuilder()
    .setTitle(`${name}`)
    .setDescription(`${description}`)
    .setVersion(`${version}`)
    .addServer(`http://localhost:${process.env.SERVER_PORT}`, 'Local Server')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      in: 'header',
    })
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api-docs', app, documentFactory, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });
};
