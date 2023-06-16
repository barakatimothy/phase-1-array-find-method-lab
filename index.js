function superbowlWin(records) {
  const winRecord = records.find(record => record.result === 'W');
  return winRecord ? winRecord.year : undefined;
}
function superbowlWin(record) {
  const winRecord = record.find(game => game.result === 'W');
  return winRecord ? winRecord.year : undefined;
}
