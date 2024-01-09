import { Controller, Get } from '@nestjs/common';

@Controller('healthcheck')
export class AppController {
  /**
   * Checks the health status of the service.
   *
   * @returns {string} The status message indicating whether the service is up and running.
   *
   * @Get()
   * healthCheck(): string
   */
  @Get()
  healthCheck(): string {
    return `Service is up and running 🚀`;
  }
}
