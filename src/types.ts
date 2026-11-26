export type Node = {
  name: string;
  text: string;
  pid: number;
  links: Connection[];
  position: Coord;
};

export type Coord = {
  x: number;
  y: number;
};

export type Connection = {
  name: string;
  link: string;
  pid: number;
  condition?: string | null;
};

export type Script = {
  _id: string;
  name: string;
  startingScene: string;
  scenes: Scene[];
  characters: Character[];
};

export type Scene = {
  name: string;
  id: number;
  startNode: number;
  location: string;
  characters: Character[];
  passages: Node[];
};

export type Character = { name: string; desc: string };

export type ContextMenuItem = {
  label: string;
  items?: ContextMenuItem[];
  action?: ContextMenuAction;
};

export type ContextMenuAction = ({
  position,
  nodeID,
}: {
  position: Coord;
  nodeID: number;
}) => void;
