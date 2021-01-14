import { Controller, Get, Render, Res } from '@nestjs/common';


@Controller('')
export class AppController {
    @Get()
    home(){

        let renderProps = {
            script : '/build/client.bundle.js'
        }

        
            
    }

}
