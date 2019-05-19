import {Member} from "./member.model";

export class Team {
  id: string;
  name: string;
  color: string;
  members: Member[];
  league: League;
  registrationFee: string;
  paid: boolean;
}

export enum League {
  FRIENDLY = 'Friendly',
  COMPETITIVE = 'Competitive'
}
