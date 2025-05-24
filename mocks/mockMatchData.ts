import { MatchCardProps } from "../components/general/Card/MatchCard";

export const matchData: MatchCardProps[] = [
  {
    matchType: "Last" as const,
    date: "15/05/2025",
    result: "Vitória",
    champion: "Orianna",
    kda: { kills: 8, deaths: 2, assists: 12 },
    highlight: "4º Melhor",
    championIcon:
      "https://ruined.dev/_next/image/?url=https%3A%2F%2Fddragon.leagueoflegends.com%2Fcdn%2Fimg%2Fchampion%2Ftiles%2FOrianna_0.jpg&w=640&q=75",
  },
  {
    matchType: "Best" as const,
    date: "10/05/2025",
    result: "Vitória",
    champion: "Yasuo",
    kda: { kills: 15, deaths: 1, assists: 9 },
    highlight: "MVP",
    championIcon:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Yasuo_0.jpg",
  },
];