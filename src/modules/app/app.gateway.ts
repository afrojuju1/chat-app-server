import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Server } from 'http';

@WebSocketGateway()
export class AppGateway implements OnGatewayConnection, OnGatewayDisconnect {
  private logger = new Logger('AppGateway');

  @WebSocketServer()
  server

  @SubscribeMessage('message-server')
  handleMessage(client: any, payload: any): string {
    this.logger.debug(payload)
    const message = {
      name: 'Random name',
      text: 'random text!',
    }
    this.server.emit('message-client', message)
    return 'Hello world!';
  }

  handleConnection(client: any, ...args: any[]): any {
    this.logger.debug('connected...')
  }

  handleDisconnect(client: any): any {
    this.logger.debug('disconnected...')
  }
}
