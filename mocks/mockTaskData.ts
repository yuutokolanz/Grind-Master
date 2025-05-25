// mockTaskData.ts
import { TaskCardProps } from "../components/general/Card/TaskCard";
import { Games } from "../constants/enums"; 

export const taskData: TaskCardProps[] = [
  // League of Legends
  {
    game: Games.LeagueOfLegends,
    taskTitle: "Treino de Farm",
    taskDescription: "Farme o máximo de minions até os 5 minutos no modo treino",
    reapeatable: true,
    complete: false,
  },
  {
    game: Games.LeagueOfLegends,
    taskTitle: "Treino de Habilidades",
    taskDescription: "Treine suas habilidades com Yasuo",
    reapeatable: false,
    complete: true,
  },

  // Valorant
  {
    game: Games.Valorant,
    taskTitle: "Treino de Mira",
    taskDescription: "Acerte 30 tiros seguidos no campo de tiro",
    reapeatable: true,
    complete: false,
  },
  {
    game: Games.Valorant,
    taskTitle: "Utilitárias com Sova",
    taskDescription: "Treine flechas reveladoras em 3 mapas diferentes",
    reapeatable: false,
    complete: true,
  },

  // CS2
  {
    game: Games.CS2,
    taskTitle: "Recoil Control",
    taskDescription: "Pratique spray com AK-47 por 10 minutos",
    reapeatable: true,
    complete: false,
  },

  // TFT
  {
    game: Games.TeamFightTactics,
    taskTitle: "Composições Meta",
    taskDescription: "Monte uma comp de Arcanistas no modo normal",
    reapeatable: false,
    complete: false,
  },
];
