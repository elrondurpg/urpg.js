import { AbilityEndpoint } from "../classes/Ability";
import { ArtRankEndpoint } from "../classes/ArtRank";
import { AttackEndpoint } from "../classes/Attack";
import { AttackCategoryEndpoint } from "../classes/AttackCategory";
import { AttackTargetTypeEndpoint } from "../classes/AttackTargetType";
import { DppContestMoveTypeEndpoint } from "../classes/DppContestMoveType";
import { ItemEndpoint } from "../classes/Item";
import { OrasContestMoveTypeEndpoint } from "../classes/OrasContestMoveType";
import { ParkLocationEndpoint } from "../classes/ParkLocation";
import { ParkRankEndpoint } from "../classes/ParkRank";
import { PermissionEndpoint } from "../classes/Permission";
import { RoleEndpoint } from "../classes/Role";
import { RseContestMoveTypeEndpoint } from "../classes/RseContestMoveType";
import { SpeciesEndpoint } from "../classes/Species";
import { StoryRankEndpoint } from "../classes/StoryRank";
import { TypeEndpoint } from "../classes/Type";
import { UserEndpoint } from "../classes/User";
import { EnvironmentName } from "../util/Constants";
export interface ClientOptions {
    environment?: EnvironmentName;
    nullHandling?: boolean;
}
export declare class Client {
    readonly baseUrl: string;
    readonly nullHandling: boolean;
    readonly ability: AbilityEndpoint;
    readonly artRank: ArtRankEndpoint;
    readonly attack: AttackEndpoint;
    readonly attackCategory: AttackCategoryEndpoint;
    readonly attackTargetType: AttackTargetTypeEndpoint;
    readonly dppContestMoveType: DppContestMoveTypeEndpoint;
    readonly item: ItemEndpoint;
    readonly orasContestMoveType: OrasContestMoveTypeEndpoint;
    readonly parkLocation: ParkLocationEndpoint;
    readonly parkRank: ParkRankEndpoint;
    readonly permission: PermissionEndpoint;
    readonly role: RoleEndpoint;
    readonly rseContestMoveType: RseContestMoveTypeEndpoint;
    readonly species: SpeciesEndpoint;
    readonly storyRank: StoryRankEndpoint;
    readonly type: TypeEndpoint;
    readonly user: UserEndpoint;
    constructor(options?: ClientOptions);
}
export * from "../models";
