import type { Client } from "../client/Client";
import { Attack } from "../models";
import { CrudEndpoint } from "../rest/CrudEndpoint";
export declare class AttackEndpoint extends CrudEndpoint<Attack> {
    constructor(client: Client);
    create(): Promise<Attack>;
    update(): Promise<Attack>;
    delete(): Promise<Attack>;
}
