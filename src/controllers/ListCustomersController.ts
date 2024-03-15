import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomersService } from '../services/ListCustomersService'

class ListCustomersController{
    async handle(request: FastifyRequest, replay: FastifyReply){
        const listCustomerService= new ListCustomersService();

        const customers = await listCustomerService.execute();

        replay.send(customers);

    }
}

export {ListCustomersController}