import { Games } from "./enums";

export type MatchType = "Last" | "Best";

export type MatchCardPropsLoL = {
  game: Games.LeagueOfLegends;
  matchType: MatchType;
  date: string;
  result: string;
  champion: string;
  kda: { kills: number; deaths: number; assists: number };
  highlight: string;
  championIcon: string;
};

export type MatchCardPropsValorant = {
  game: Games.Valorant;
  matchType: MatchType;
  date: string;
  result: string;
  map: string;
  agent: string;
  kd: { kills: number; deaths: number };
  acs: number;
  agentIcon: string;
};

export type MatchCardPropsCS2 = {
  game: Games.CS2;
  matchType: MatchType;
  date: string;
  result: string;
  map: string;
  mapIcon: string;
  kd: { kills: number; deaths: number };
  hs_percent: number;
  mvps: number;
};

export type MatchCardPropsTFT = {
  game: Games.TeamFightTactics;
  date: string;
  matchType: MatchType;
  placement: number;
  traits: string;
  augments: string;
};

export type MatchCardProps =
  | MatchCardPropsLoL
  | MatchCardPropsValorant
  | MatchCardPropsCS2
  | MatchCardPropsTFT;