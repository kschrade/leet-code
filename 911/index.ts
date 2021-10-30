class TopVotedCandidate {
  orderedArray: { time: number; voteFor: number }[];
  constructor(persons: number[], times: number[]) {
    this.orderedArray = [];
    persons.forEach((vote, index) => {
      const timeOFVote = times[index];
      this.orderedArray.push({ time: timeOFVote, voteFor: vote });
    });
  }

  q(t: number): number {
    const counting: { [key: number]: number } = {};

    this.orderedArray.forEach((vote) => {
      if (t > vote.time) {
        return;
      }

      if (counting[vote.voteFor]) {
        counting[vote.voteFor] = counting[vote.voteFor] + 1;
      } else {
        counting[vote.voteFor] = 1;
      }
    });

    const entries = Object.entries<number>(counting);
    let winner = ['-1', -1];

    entries.forEach((kvp) => {
      if (winner[1] < kvp[1]) {
        winner = kvp;
      }
    });

    return Number.parseInt(winner[0].toString(), 10);
  }
}

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 */

const persons = [];
const times = [];

var obj = new TopVotedCandidate(persons, times);
var param_1 = obj.q(t);
