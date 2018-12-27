export const getTileSprite = type => {
  switch (type) {
    case 0:
      return "grass";
    case 1:
      return "water";
    case 2:
      return "dirt";
    case 3:
      return "jungle";
    case 4:
      return "chest";
    case 5:
      return "campfire";
    case 6:
      return "rock";
    case 7:
      return "tree";
    case 8:
      return "wall";
    default:
      return "none";
  }
};

export const getTileNumberSprite = type => {
  switch (type) {
    case "grass":
      return 0;
    case "water":
      return 1;
    case "dirt":
      return 2;
    case "jungle":
      return 3;
    case "chest":
      return 4;
    case "campfire":
      return 5;
    case "rock":
      return 6;
    case "tree":
      return 7;
    case "wall":
      return 8;
    case "none":
    default:
      return null;
  }
};
