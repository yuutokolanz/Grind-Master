import { create } from "zustand";
import { Games } from "../constants/enums";

type State = {
  currentGameId: Games;
};

type Actions = {
  setGameId: (gameId: Games) => void;
};

const useGame = create<State & Actions>((set) => ({
  currentGameId: Games.LeagueOfLegends,
  setGameId: (gameId) => {
    set(() => ({
      currentGameId: gameId,
    }));
  },
}));

export default useGame;