import { Module } from "@nestjs/common";
import { TrpcService } from "./trpc.service";
import { trpcRouter } from "./trpc.router";

@Module({
    imports:[],
    providers:[TrpcService, trpcRouter],
})

export class TrpcModule {}
