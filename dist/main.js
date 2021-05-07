"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./components/app/app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const bootstrap = async () => {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Api v1')
        .setDescription('The API for vibe APP')
        .setVersion('1.0')
        .addBearerAuth({ in: 'header', type: 'http' })
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3000);
};
bootstrap();
//# sourceMappingURL=main.js.map