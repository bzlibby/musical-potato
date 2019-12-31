function openOrSenior(members) {
  const memberStatus = [];
  for (let i = 0; i < members.length; i++) {
    if (members[i][0] > 54 && members[i][1] > 6) {
      memberStatus.push("senior");
    } else {
      memberStatus.push("open");
    }
  }
  return memberStatus;
}

console.log(
  openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]])
);
// should be ["Open", "Open", "Senior", "Open", "Open", "Senior"]
