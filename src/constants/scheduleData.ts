export const ScheduleData = {
  isLive: false,
  event: "🏀농구",
  startTime: "5월 14일 9:00",
  redTeam: {
    department: "보안과",
    class: "2학년 1반",
    ratio: 50,
  },
  blueTeam: {
    department: "보안과",
    class: "2학년 2반",
    ratio: 50,
  },
};

export const ScheduleData2 = {
  isLive: true,
  event: "⚽족구",
  startTime: "5월 14일 10:00",
  redTeam: {
    department: "보안과",
    class: "2학년 1반",
    ratio: 27,
  },
  blueTeam: {
    department: "게임과",
    class: "1학년 2반",
    ratio: 63,
  },
};

export const ScheduleData3 = {
  isLive: false,
  event: "🏐배구",
  startTime: "5월 14일 11:00",
  redTeam: {
    department: "보안과",
    class: "3학년 1반",
    ratio: 90,
  },
  blueTeam: {
    department: "보안과",
    class: "3학년 2반",
    ratio: 10,
  },
};

export const ScheduleData4 = {
  isLive: false,
  event: "🤸앞구르기",
  startTime: "5월 14일 12:00",
  redTeam: {
    department: "보안과",
    class: "1학년 1반",
    ratio: 66,
  },
  blueTeam: {
    department: "보안과",
    class: "1학년 2반",
    ratio: 34,
  },
};

export const ScheduleData5 = {
  isLive: false,
  event: "⛷️스키",
  startTime: "5월 14일 13:00",
  redTeam: {
    department: "게임과",
    class: "2학년 1반",
    ratio: 78,
  },
  blueTeam: {
    department: "게임과",
    class: "2학년 2반",
    ratio: 22,
  },
};

export const MatchList = {
  message: "SUCCESS",
  data: {
    games: [
      {
        blueTeam: {
          department: "보안과",
          class: "2학년 1반",
          ratio: 78,
        },
        redTeam: {
          department: "게임과",
          class: "2학년 1반",
          ratio: 78,
        },
        id: 1,
        gameType: "🏀농구",
        date: "5월 14일 9:00",
        isDuring: false,
        winner: 1,
      },

      {
        blueTeam: {
          department: "보안과",
          class: "1학년 1반",
          ratio: 48,
        },
        redTeam: {
          department: "보안과",
          class: "2학년 1반",
          ratio: 52,
        },
        id: 2,
        gameType: "🏐배구",
        date: "5월 14일 10:00",
        isDuring: true,
        winner: 2,
      },

      {
        blueTeam: {
          department: "보안과",
          class: "3학년 1반",
          ratio: 48,
        },
        redTeam: {
          department: "보안과",
          class: "2학년 1반",
          ratio: 52,
        },
        id: 3,
        gameType: "⚽족구",
        date: "5월 14일 10:00",
        isDuring: true,
        winner: 2,
      },
    ],
  },
};
