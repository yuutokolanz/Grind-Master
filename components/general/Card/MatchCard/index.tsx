import { Games } from "../../../../constants/enums";
import { MatchCardProps } from "../../../../constants/matchesTypes";
import CardCS from "./CardCS";
import CardLoL from "./CardLoL";
import CardTFT from "./CardTFT";
import CardValorant from "./CardValorant";


export default function MatchCard(props: MatchCardProps) {
  switch (props.game) {
    case Games.LeagueOfLegends:
      return <CardLoL {...props} />;

    case Games.Valorant:
      return <CardValorant {...props} />;

    case Games.CS2:
      return <CardCS {...props} />

    case Games.TeamFightTactics:
      return <CardTFT {...props} />

    default:
      return null;
  }
}