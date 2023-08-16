import { INestApplication, Injectable } from "@nestjs/common";
import { TrpcService } from "./trpc.service";
import { z } from 'zod'
import * as trpcExpress from '@trpc/server/adapters/express'

@Injectable()
export class trpcRouter {
    constructor(private readonly trpc: TrpcService) { }

    appRouter = this.trpc.router({
        hello: this.trpc.procedure.input(
            z.object({
                name: z.string().optional(),
            }),
        )
        .query(({input}) => {
            const { name } = input
            return {
                greeting: `hello ${name ? name: `user`}`
            }
        }),
    })

    async applyMiddleware(app: INestApplication) {
        app.use(
            `/trpc`,
            trpcExpress.createExpressMiddleware({
                router: this.appRouter,
            })
        )
    }

}

export type AppRouter = trpcRouter['appRouter']