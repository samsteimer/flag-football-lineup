import { reactive } from 'vue';

export const state = reactive({
  players: [],
  lines: []
});

export const addPlayer = (player) => {
  state.players.push(player);
};

export const updatePlayerPosition = (player) => {
  const index = state.players.findIndex(p => p.id === player.id);
  if (index !== -1) {
    state.players.splice(index, 1, player);
  }
};

export const addLine = (line) => {
  state.lines.push(line);
};

export const savePlay = () => {
  const savedPlay = {
    players: state.players,
    lines: state.lines
  };
  localStorage.setItem('savedPlay', JSON.stringify(savedPlay));
};

export const loadPlay = () => {
  const savedPlay = JSON.parse(localStorage.getItem('savedPlay'));
  if (savedPlay) {
    state.players = savedPlay.players;
    state.lines = savedPlay.lines;
  }
};