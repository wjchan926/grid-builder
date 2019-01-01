export const getTileSprite = type => {
  switch (type) {
    case 0:
      return "grass";
    case 1:
      return "water";
    case 2:
      return "dirt";
    case 3:
      return "city";
    case 4:
      return "jungle";
    case 5:
      return "chest";
    case 6:
      return "campfire";
    case 7:
      return "rock";
    case 8:
      return "tree";
    case 9:
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
    case "city":
      return 3;
    case "jungle":
      return 4;
    case "chest":
      return 5;
    case "campfire":
      return 6;
    case "rock":
      return 7;
    case "tree":
      return 8;
    case "wall":
      return 9;
    case "none":
    default:
      return null;
  }
};
