import { Controller, Body, Post } from '@nestjs/common';

@Controller('account')
export class AccountController {

    @Post('items')
    public AddItem(@Body() value: Item) {
        return {
            message: 'From nest account controller',
            first: value.firstname,
            last: value.lastname
        };
    }

}

export interface Item {
    firstname: string;
    lastname: string;
}