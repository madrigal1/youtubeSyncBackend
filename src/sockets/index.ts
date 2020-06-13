import { SocketServer } from './SoketServer';
import { server } from '../app';


const ss = new SocketServer();
ss.attach(server);