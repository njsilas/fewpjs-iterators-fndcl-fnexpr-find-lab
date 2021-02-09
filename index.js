const testVar = {}

function testFunc() {
  return "hi"
}
superbowlWin = (record) => {
  let victory = record.find( record => record.result === "W" )
  return !!victory ? victory.year : undefined
}