import { Controller, Post, Body, UseGuards, HttpCode, Param } from '@nestjs/common';
import { PermitRequest, PermitResponse, NumberOfRequestParam } from './permit.dto';
import { PermitService } from './permit.service';
import { JwtGuard } from '../auth/jwt.guard';

@Controller('permits')
export class PermitController {
    constructor(private readonly permitService: PermitService) {}

    @Post()
    @HttpCode(201)
    @UseGuards(JwtGuard)
    async createPermit(@Body() body: PermitRequest): Promise<PermitResponse> {
        return this.permitService.createPermit(body.reason);
    }

    @Post('/numberOfPermits/:numberOfPermits')
    @HttpCode(201)
    @UseGuards(JwtGuard)
    async createNumberOfPermit(@Body() body: PermitRequest, @Param() numberOfPermits: NumberOfRequestParam): Promise<PermitResponse[]> {
        return this.permitService.createNumbersOfPermit(body.reason, numberOfPermits.numberOfPermits);
    }
}
