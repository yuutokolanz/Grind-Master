import { MatchCardProps } from "../constants/matchesTypes";
import { Games } from "../constants/enums";

export const matchData: Record<Games, MatchCardProps[]> = {
  // League of Legends
  [Games.LeagueOfLegends]: [
    {
      game: Games.LeagueOfLegends,
      matchType: "Last",
      date: "15/05/2025",
      result: "Vitória",
      champion: "Ahri",
      kda: { kills: 7, deaths: 1, assists: 9 },
      highlight: "3º Melhor",
      championIcon:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Ahri_0.jpg",
    },
    {
      game: Games.LeagueOfLegends,
      matchType: "Best",
      date: "12/05/2025",
      result: "Vitória",
      champion: "Zed",
      kda: { kills: 14, deaths: 2, assists: 5 },
      highlight: "MVP",
      championIcon:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Zed_0.jpg",
    },
  ],
   
  // Valorant
  [Games.Valorant]: [
    {
      game: Games.Valorant,
      matchType: "Last",
      date: "14/05/2025",
      result: "Derrota",
      map: "Haven",
      agent: "Jett",
      kd: { kills: 18, deaths: 14 },
      acs: 260,
      agentIcon:
        "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/displayicon.png",
    },
  ],

  // CS2
  [Games.CS2] : [
    {
      game: Games.CS2,
      matchType: "Best",
      date: "10/05/2025",
      result: "Vitória",
      map: "Mirage",
      mapIcon:
        "https://static.wikia.nocookie.net/cswikia/images/9/96/Set_mirage.png/revision/latest?cb=20230901185633",
      kd: { kills: 25, deaths: 10 },
      hs_percent: 42,
      mvps: 3,
    },
  ],

  // TFT
  [Games.TeamFightTactics]: [
    {
      game: Games.TeamFightTactics,
      matchType: "Last",
      date: "13/05/2025",
      placement: 2,
      traits: "Invocador, Mago, Sombrio",
      augments: "Pandora's Items, Cybernetic Uplink, Scoped Weapons",
    },
  ]
};
