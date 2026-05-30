/*
 * games-data.js — 레크 뭐하지? 게임 데이터 통합 관리 파일
 *
 * 이 파일에 게임 정보를 추가하면 모든 페이지에 자동 반영됩니다.
 * 태그를 정확하게 입력하면 해당하는 모든 페이지에 노출됩니다.
 *
 * 태그 옵션:
 * - location: indoor(실내) / outdoor(야외) / both(둘다)
 * - groupSize: small(5명 이하) / medium(6-15명) / large(16-30명) / xlarge(30명 이상)
 *   (하나의 게임이 여러 인원 규모에 맞으면 배열에 모두 포함)
 * - ageGroup: young(유아) / kid-young(초등 저학년) / kid-old(초등 고학년) / teen(청소년) / adult(성인)
 * - duration: short(5분 이내) / medium(10-15분) / long(20-30분 이상) / flexible(자유)
 * - situation: ice-break(처음만남) / energy(에너지폭발) / no-prep(준비물없음) / brain(두뇌사용)
 *
 * 게임 추가 방법:
 * 1. 아래 배열에 객체를 추가합니다.
 * 2. id는 html 파일명(확장자 제외)과 동일하게 설정하세요.
 * 3. 저장하면 실내/야외/소그룹/전체/연령별 페이지에 자동 반영됩니다.
 */

const gamesData = [
  {
    id: 'animal-imitate',
    emoji: '🐘',
    title: '동물 흉내 게임',
    description: '진행자가 외치는 동물처럼 온몸으로 표현해요! 웃음과 신체 표현력을 키우는 놀이. 진행자 도구 포함',
    url: 'games/animal-imitate.html',
    people: '5명+',
    time: '10~20분',
    prep: '진행자 도구(폰)',
    tags: {
      location: ['both'],
      groupSize: ['small'],
      ageGroup: ['young', 'kid-young'],
      duration: 'medium',
      situation: ['energy', 'no-prep']
    }
  },
  {
    id: 'balloon-pop',
    emoji: '🎈',
    title: '풍선 터뜨리기',
    description: '발목에 묶은 풍선을 지키면서 상대 풍선을 터뜨려라! 전략과 스피드의 대결',
    url: 'games/balloon-pop.html',
    people: '10명+',
    time: '15~20분',
    prep: '풍선·끈',
    tags: {
      location: ['outdoor'],
      groupSize: ['medium', 'large'],
      ageGroup: ['kid-young', 'kid-old'],
      duration: 'medium',
      situation: ['energy']
    }
  },
  {
    id: 'bingo',
    emoji: '🎰',
    title: '빙고 게임',
    description: '주제만 바꾸면 무한 활용! 영화·성경 인물·음식 등 21개 주제를 골라 쓰는 만능 게임',
    url: 'games/bingo.html',
    people: '5명+',
    time: '15~25분',
    prep: '빙고판·펜',
    tags: {
      location: ['both'],
      groupSize: ['small', 'medium', 'large', 'xlarge'],
      ageGroup: ['young', 'kid-young', 'kid-old', 'teen', 'adult'],
      duration: 'medium',
      situation: ['ice-break', 'brain']
    }
  },
  {
    id: 'body-talk',
    emoji: '🙌',
    title: '몸으로 말해요',
    description: '말은 금지! 몸짓으로만 전달하는 팀 대항 제스처 게임. 릴레이·1분 챌린지·테마 버전 등 다양한 변형 포함',
    url: 'games/body-talk.html',
    people: '8명+',
    time: '15~30분',
    prep: '제시어 카드',
    tags: {
      location: ['indoor'],
      groupSize: ['medium', 'large', 'xlarge'],
      ageGroup: ['kid-young', 'kid-old', 'teen', 'adult'],
      duration: 'medium',
      situation: ['energy', 'brain']
    }
  },
  {
    id: 'bomb-pass',
    emoji: '💣',
    title: '폭탄 돌리기',
    description: '음악이 멈추는 순간, 폭탄을 들고 있으면 탈락! 긴장감 넘치는 인기 게임',
    url: 'games/bomb-pass.html',
    people: '10명+',
    time: '10~15분',
    prep: '공 1개',
    tags: {
      location: ['indoor'],
      groupSize: ['medium', 'large'],
      ageGroup: ['kid-young', 'kid-old', 'teen', 'adult'],
      duration: 'medium',
      situation: ['energy', 'no-prep']
    }
  },
  {
    id: 'color-hunt',
    emoji: '🎨',
    title: '색깔 찾기',
    description: '진행자가 색깔을 외치면 그 색깔의 물건에 손을 얹어요! 색깔 인지력과 반응 속도를 키우는 게임',
    url: 'games/color-hunt.html',
    people: '5명+',
    time: '10~15분',
    prep: '준비물 없음',
    tags: {
      location: ['both'],
      groupSize: ['small'],
      ageGroup: ['young', 'kid-young'],
      duration: 'medium',
      situation: ['energy', 'no-prep']
    }
  },
  {
    id: 'liar-game',
    emoji: '🕵️',
    title: '라이어 게임',
    description: '너만 모르는 그 단어! 정체를 숨기며 즐기는 심리 추리 게임. 진행자 도구 포함',
    url: 'games/liar-game.html',
    people: '4~15명',
    time: '10~15분',
    prep: '진행자 도구(폰)',
    tags: {
      location: ['indoor'],
      groupSize: ['small', 'medium'],
      ageGroup: ['kid-old', 'teen', 'adult'],
      duration: 'medium',
      situation: ['brain', 'no-prep']
    }
  },
  {
    id: 'escape-mission',
    emoji: '🔐',
    title: '방탈출 미션',
    description: '인쇄해서 바로 쓰는 완성 시나리오 3종! 단서를 풀어 탈출하는 협동 추리 게임',
    url: 'games/escape-mission.html',
    people: '4~20명',
    time: '30~50분',
    prep: '인쇄물·필기구',
    tags: {
      location: ['indoor'],
      groupSize: ['small', 'medium', 'large'],
      ageGroup: ['young', 'kid-young', 'kid-old', 'teen', 'adult'],
      duration: 'long',
      situation: ['brain']
    }
  },
  {
    id: 'follow-me',
    emoji: '🪞',
    title: '따라 하기 게임',
    description: '진행자의 동작을 그대로 따라 해요! 집중력과 모방 능력을 자연스럽게 키워주는 어린이 인기 게임',
    url: 'games/follow-me.html',
    people: '4명+',
    time: '10~15분',
    prep: '준비물 없음',
    tags: {
      location: ['both'],
      groupSize: ['small'],
      ageGroup: ['young', 'kid-young'],
      duration: 'medium',
      situation: ['energy', 'no-prep']
    }
  },
  {
    id: 'group-jumprope',
    emoji: '🪢',
    title: '단체 줄넘기',
    description: '긴 줄 하나로 온 팀이 함께! 호흡을 맞춰 최대 인원 통과에 도전하는 협동 게임',
    url: 'games/group-jumprope.html',
    people: '10명+',
    time: '15~25분',
    prep: '긴 줄 1~2개',
    tags: {
      location: ['outdoor'],
      groupSize: ['medium', 'large'],
      ageGroup: ['kid-young', 'kid-old', 'teen'],
      duration: 'medium',
      situation: ['energy']
    }
  },
  {
    id: 'guess-who',
    emoji: '🤔',
    title: '나는 누구일까요?',
    description: '익명으로 제출한 팀원 정보를 맞히는 게임. 몰랐던 동료의 의외의 모습에 웃음과 친밀감이 동시에!',
    url: 'games/guess-who.html',
    people: '6~30명',
    time: '20~35분',
    prep: '포스트잇·펜',
    tags: {
      location: ['indoor'],
      groupSize: ['medium', 'large'],
      ageGroup: ['teen', 'adult'],
      duration: 'long',
      situation: ['ice-break']
    }
  },
  {
    id: 'mafia',
    emoji: '🕵️',
    title: '마피아 게임',
    description: '마피아를 찾아라! 심리전과 추리로 가득한 소그룹 최고 인기 게임',
    url: 'games/mafia.html',
    people: '6~15명',
    time: '20~40분',
    prep: '역할 카드',
    tags: {
      location: ['both'],
      groupSize: ['medium'],
      ageGroup: ['kid-old', 'teen', 'adult'],
      duration: 'long',
      situation: ['brain']
    }
  },
  {
    id: 'mind-match',
    emoji: '🤝',
    title: '이심전심',
    description: '같은 단어를 동시에 외쳐라! 서로를 얼마나 잘 아는지 알 수 있는 공감 게임',
    url: 'games/mind-match.html',
    people: '4~12명',
    time: '10~20분',
    prep: '준비물 없음',
    tags: {
      location: ['both'],
      groupSize: ['small', 'medium'],
      ageGroup: ['kid-young', 'kid-old', 'teen', 'adult'],
      duration: 'medium',
      situation: ['ice-break', 'no-prep']
    }
  },
  {
    id: 'nunchigame',
    emoji: '🎯',
    title: '눈치 게임',
    description: '한 명씩 차례로 일어나며 숫자를 외쳐요. 동시에 일어나면 탈락! 집중력 게임',
    url: 'games/nunchigame.html',
    people: '8명+',
    time: '10~20분',
    prep: '준비물 없음',
    tags: {
      location: ['indoor'],
      groupSize: ['medium', 'large'],
      ageGroup: ['kid-young', 'kid-old', 'teen'],
      duration: 'medium',
      situation: ['energy', 'no-prep']
    }
  },
  {
    id: 'ox-quiz',
    emoji: '⭕',
    title: 'OX 퀴즈',
    description: 'O 구역 또는 X 구역으로 이동! 틀리면 탈락, 마지막까지 살아남는 대형 퀴즈 게임',
    url: 'games/ox-quiz.html',
    people: '20명+',
    time: '15~30분',
    prep: '퀴즈 준비',
    tags: {
      location: ['both'],
      groupSize: ['large', 'xlarge'],
      ageGroup: ['kid-young', 'kid-old', 'teen', 'adult'],
      duration: 'medium',
      situation: ['brain', 'energy']
    }
  },
  {
    id: 'photo-mission',
    emoji: '📸',
    title: '팀 포토 미션',
    description: '주어진 미션 목록대로 팀이 함께 사진을 찍어오는 창의적인 팀 활동. 자연스러운 협동과 웃음!',
    url: 'games/photo-mission.html',
    people: '10~40명',
    time: '30~45분',
    prep: '스마트폰',
    tags: {
      location: ['both'],
      groupSize: ['medium', 'large', 'xlarge'],
      ageGroup: ['teen', 'adult'],
      duration: 'long',
      situation: ['energy', 'ice-break']
    }
  },
  {
    id: 'relay-quiz',
    emoji: '⚡',
    title: '스피드 릴레이 퀴즈',
    description: '팀원이 릴레이로 이어받아 푸는 스피드 퀴즈 대결. 상식·시사 문제를 섞으면 커스텀 대회 완성!',
    url: 'games/relay-quiz.html',
    people: '10~50명',
    time: '20~40분',
    prep: '퀴즈 세트',
    tags: {
      location: ['indoor'],
      groupSize: ['medium', 'large', 'xlarge'],
      ageGroup: ['teen', 'adult'],
      duration: 'long',
      situation: ['brain', 'energy']
    }
  },
  {
    id: 'relay-race',
    emoji: '🏃',
    title: '이어달리기 변형 게임',
    description: '일반 이어달리기에 미션을 더한 변형 게임. 웃음과 스릴이 가득한 팀 대항전!',
    url: 'games/relay-race.html',
    people: '20명+',
    time: '20~30분',
    prep: '콘·미션 카드',
    tags: {
      location: ['outdoor'],
      groupSize: ['large', 'xlarge'],
      ageGroup: ['kid-young', 'kid-old', 'teen'],
      duration: 'long',
      situation: ['energy']
    }
  },
  {
    id: 'song-dance',
    emoji: '🎵',
    title: '노래 율동',
    description: '노래에 맞춰 율동을 함께 배우고 따라 해요! 음감과 신체 리듬감을 키우는 유아 최고 인기 활동',
    url: 'games/song-dance.html',
    people: '제한 없음',
    time: '15~25분',
    prep: '음악 재생기',
    tags: {
      location: ['both'],
      groupSize: ['small', 'medium', 'large', 'xlarge'],
      ageGroup: ['young', 'kid-young'],
      duration: 'medium',
      situation: ['energy', 'no-prep']
    }
  },
  {
    id: 'speedquiz',
    emoji: '⚡',
    title: '스피드 퀴즈',
    description: '제시어를 설명하는 사람과 맞히는 사람! 제한 시간 안에 최대한 많이 맞히는 게임',
    url: 'games/speedquiz.html',
    people: '4명+',
    time: '15~20분',
    prep: '퀴즈 카드',
    tags: {
      location: ['indoor'],
      groupSize: ['small', 'medium'],
      ageGroup: ['kid-young', 'kid-old', 'teen', 'adult'],
      duration: 'medium',
      situation: ['brain', 'energy']
    }
  },
  {
    id: 'story-creation',
    emoji: '📖',
    title: '창작 이야기 게임',
    description: '한 문장씩 이어가며 전혀 예상치 못한 이야기를 만들어요! 창의력과 순발력을 키우는 언어 게임',
    url: 'games/story-creation.html',
    people: '4~15명',
    time: '15~25분',
    prep: '준비물 없음',
    tags: {
      location: ['both'],
      groupSize: ['small', 'medium'],
      ageGroup: ['kid-old', 'teen', 'adult'],
      duration: 'medium',
      situation: ['brain', 'no-prep']
    }
  },
  {
    id: 'strategy-board',
    emoji: '♟️',
    title: '전략 보드게임 변형',
    description: '간단한 규칙으로 변형한 전략 게임! 순간 판단력과 팀 전략 수립 능력을 키우는 고학년 필수 게임',
    url: 'games/strategy-board.html',
    people: '4~16명',
    time: '20~40분',
    prep: '격자 종이·바둑돌',
    tags: {
      location: ['indoor'],
      groupSize: ['small', 'medium', 'large'],
      ageGroup: ['kid-old', 'teen', 'adult'],
      duration: 'long',
      situation: ['brain']
    }
  },
  {
    id: 'talent-show',
    emoji: '🌟',
    title: '장기자랑',
    description: '팀별로 숨겨진 재능을 뽐내는 시간! 웃음과 응원이 넘치는 전체 참여 활동',
    url: 'games/talent-show.html',
    people: '20명+',
    time: '30~50분',
    prep: '음향·마이크',
    tags: {
      location: ['indoor'],
      groupSize: ['large', 'xlarge'],
      ageGroup: ['kid-young', 'kid-old', 'teen', 'adult'],
      duration: 'long',
      situation: ['energy']
    }
  },
  {
    id: 'team-mission-race',
    emoji: '🚀',
    title: '팀 미션 레이스',
    description: '두뇌·체력·협동이 요구되는 다양한 미션을 팀이 함께 풀어나가는 종합 레이스 게임',
    url: 'games/team-mission-race.html',
    people: '10명+',
    time: '30~45분',
    prep: '미션 카드',
    tags: {
      location: ['both'],
      groupSize: ['medium', 'large'],
      ageGroup: ['kid-old', 'teen', 'adult'],
      duration: 'long',
      situation: ['energy', 'brain']
    }
  },
  {
    id: 'team-relay',
    emoji: '🏅',
    title: '릴레이 미션',
    description: '다양한 미션을 릴레이로! 팀워크와 응원이 하나로 합쳐지는 종합 대항전',
    url: 'games/team-relay.html',
    people: '20명+',
    time: '30~45분',
    prep: '미션별 도구',
    tags: {
      location: ['both'],
      groupSize: ['large', 'xlarge'],
      ageGroup: ['kid-young', 'kid-old', 'teen'],
      duration: 'long',
      situation: ['energy']
    }
  },
  {
    id: 'telestrations',
    emoji: '✏️',
    title: '텔레스트레이션',
    description: '그림으로 전달하고 글로 설명하고! 전달 과정에서 내용이 엉뚱하게 변하는 웃음 게임',
    url: 'games/telestrations.html',
    people: '4~10명',
    time: '15~25분',
    prep: '종이·펜',
    tags: {
      location: ['both'],
      groupSize: ['small', 'medium'],
      ageGroup: ['kid-young', 'kid-old', 'teen', 'adult'],
      duration: 'medium',
      situation: ['brain', 'ice-break']
    }
  },
  {
    id: 'throne-battle',
    emoji: '👑',
    title: '왕좌 쟁탈전',
    description: '슬라임에서 왕까지! 진화하며 왕좌를 차지하는 단체 게임',
    url: 'games/throne-battle.html',
    people: '10명+',
    time: '10~15분',
    prep: '의자 1개 (선택)',
    tags: {
      location: ['both'],
      groupSize: ['medium', 'large', 'xlarge'],
      ageGroup: ['kid-young', 'kid-old', 'teen', 'adult'],
      duration: 'medium',
      situation: ['energy', 'no-prep']
    }
  },
  {
    id: 'towel-pass',
    emoji: '🎽',
    title: '수건돌리기',
    description: '수건을 들고 달리다 발각되면 역전! 박진감 넘치는 야외 추격 게임',
    url: 'games/towel-pass.html',
    people: '15명+',
    time: '10~20분',
    prep: '수건 1개',
    tags: {
      location: ['outdoor'],
      groupSize: ['large'],
      ageGroup: ['kid-young', 'kid-old', 'teen'],
      duration: 'medium',
      situation: ['energy']
    }
  },
  {
    id: 'treasure-hunt',
    emoji: '🗺️',
    title: '보물찾기',
    description: '미리 숨겨둔 힌트 카드를 찾아라! 팀별로 단서를 풀며 보물을 찾는 협동 게임',
    url: 'games/treasure-hunt.html',
    people: '10명+',
    time: '30~40분',
    prep: '힌트 카드·보물',
    tags: {
      location: ['both'],
      groupSize: ['medium', 'large'],
      ageGroup: ['young', 'kid-young', 'kid-old', 'teen', 'adult'],
      duration: 'long',
      situation: ['brain', 'ice-break']
    }
  },
  {
    id: 'truth-or-lie',
    emoji: '🤥',
    title: '진실 혹은 거짓',
    description: '세 가지 중 거짓말이 하나! 서로의 숨겨진 이야기를 알아가는 친밀감 게임',
    url: 'games/truth-or-lie.html',
    people: '4~15명',
    time: '15~30분',
    prep: '준비물 없음',
    tags: {
      location: ['both'],
      groupSize: ['small', 'medium'],
      ageGroup: ['kid-young', 'kid-old', 'teen', 'adult'],
      duration: 'medium',
      situation: ['ice-break', 'no-prep']
    }
  },
  {
    id: 'updown',
    emoji: '⬆️',
    title: '업다운 게임',
    description: '진행자가 숫자를 외치면 그 숫자만큼 일어서거나 앉아야 해요. 순간 판단 단체 반응 게임',
    url: 'games/updown.html',
    people: '5명+',
    time: '10~15분',
    prep: '준비물 없음',
    tags: {
      location: ['indoor'],
      groupSize: ['small', 'medium', 'large'],
      ageGroup: ['kid-old', 'teen', 'adult'],
      duration: 'medium',
      situation: ['brain', 'no-prep']
    }
  },
  {
    id: 'wave',
    emoji: '🌊',
    title: '단체 파도타기',
    description: '호흡을 맞춰 파도를 만들어라! 단순하지만 하나 됨을 느끼는 전체 협동 게임',
    url: 'games/wave.html',
    people: '30명+',
    time: '10~20분',
    prep: '준비물 없음',
    tags: {
      location: ['both'],
      groupSize: ['xlarge'],
      ageGroup: ['kid-young', 'kid-old', 'teen', 'adult'],
      duration: 'medium',
      situation: ['energy', 'no-prep']
    }
  },
  {
    id: 'bigstep',
    emoji: '👣',
    title: '빅스텝',
    description: '가위바위보로 큰 걸음! 5분간 결승선 도달 점수제 게임',
    url: 'games/bigstep.html',
    people: '5명+',
    time: '5분',
    prep: '출발선/결승선 표시',
    tags: {
      location: ['both'],
      groupSize: ['small', 'medium', 'large', 'xlarge'],
      ageGroup: ['young', 'kid-young', 'kid-old', 'teen', 'adult'],
      duration: 'short',
      situation: ['energy', 'no-prep']
    }
  },
  {
    id: 'balloon-toss',
    emoji: '🎈',
    title: '풍선 튕기기',
    description: '풍선이 바닥에 닿지 않게! 손·발·머리 규칙을 바꿔가며 도전하는 유아·어린이 인기 놀이',
    url: 'games/balloon-toss.html',
    people: '4명+',
    time: '10~20분',
    prep: '풍선',
    tags: {
      location: ['indoor'],
      groupSize: ['small', 'medium'],
      ageGroup: ['young', 'kid-young'],
      duration: 'medium',
      situation: ['energy']
    }
  },
  {
    id: 'balloon-basketball',
    emoji: '🏀',
    title: '풍선 농구',
    description: '큰 박스를 골대로! 손으로 쳐서 풍선을 골대에 넣는 팀 대항 레크리에이션',
    url: 'games/balloon-basketball.html',
    people: '6명+',
    time: '15~25분',
    prep: '풍선, 큰 박스 2개',
    tags: {
      location: ['indoor'],
      groupSize: ['medium', 'large'],
      ageGroup: ['kid-young', 'kid-old'],
      duration: 'medium',
      situation: ['energy']
    }
  },
  {
    id: 'balloon-cooperate',
    emoji: '👯',
    title: '풍선 협동 유지',
    description: '두 명이 신체 사이에 풍선을 끼우고 손 안 쓰고 코스 통과! 2인 협동 레크',
    url: 'games/balloon-cooperate.html',
    people: '6명+',
    time: '10~15분',
    prep: '풍선',
    tags: {
      location: ['both'],
      groupSize: ['medium', 'large'],
      ageGroup: ['kid-young', 'kid-old'],
      duration: 'medium',
      situation: ['energy']
    }
  },
  {
    id: 'balloon-color',
    emoji: '🎨',
    title: '색깔 풍선 미션',
    description: '흩어진 풍선 중 자기 팀 색깔만 빠르게 모아라! 색깔 인지와 반응 속도를 키우는 어린이 게임',
    url: 'games/balloon-color.html',
    people: '5명+',
    time: '10~15분',
    prep: '다양한 색 풍선',
    tags: {
      location: ['indoor'],
      groupSize: ['small', 'medium'],
      ageGroup: ['young', 'kid-young'],
      duration: 'medium',
      situation: ['energy']
    }
  },
  {
    id: 'balloon-volleyball',
    emoji: '🏐',
    title: '풍선 배구',
    description: '줄 너머로 풍선을 넘겨라! 바닥에 닿으면 실점하는 팀 대항 배구 레크리에이션',
    url: 'games/balloon-volleyball.html',
    people: '8명+',
    time: '15~25분',
    prep: '풍선, 줄 또는 의자',
    tags: {
      location: ['both'],
      groupSize: ['medium', 'large'],
      ageGroup: ['kid-old', 'teen', 'adult'],
      duration: 'medium',
      situation: ['energy']
    }
  },
  {
    id: 'balloon-pair-find',
    emoji: '🔍',
    title: '풍선 짝 찾기',
    description: '풍선 안 쪽지를 꺼내 짝을 찾아라! 자연스러운 아이스브레이킹과 팀 구성에 딱',
    url: 'games/balloon-pair-find.html',
    people: '10명+',
    time: '10~15분',
    prep: '풍선, 쪽지',
    tags: {
      location: ['both'],
      groupSize: ['medium', 'large'],
      ageGroup: ['kid-old', 'teen', 'adult'],
      duration: 'medium',
      situation: ['ice-break']
    }
  },
  {
    id: 'balloon-soccer',
    emoji: '⚽',
    title: '풍선 축구',
    description: '발로 굴려 골을 넣어라! 바람에 예측 불가하게 날아가는 풍선이 웃음 포인트인 팀 대항전',
    url: 'games/balloon-soccer.html',
    people: '8명+',
    time: '15~25분',
    prep: '풍선, 골대용 의자',
    tags: {
      location: ['indoor'],
      groupSize: ['medium', 'large'],
      ageGroup: ['kid-young', 'kid-old', 'teen'],
      duration: 'medium',
      situation: ['energy']
    }
  },
  {
    id: 'wordchain',
    emoji: '🔤',
    title: '끝말잇기 배틀',
    description: '끝말잇기에 제한 시간과 벌칙을 더한 배틀 버전! 순발력과 어휘력의 대결',
    url: 'games/wordchain.html',
    people: '4~20명',
    time: '10~20분',
    prep: '타이머(선택)',
    tags: {
      location: ['both'],
      groupSize: ['small', 'medium', 'large'],
      ageGroup: ['kid-young', 'kid-old', 'teen', 'adult'],
      duration: 'medium',
      situation: ['brain', 'no-prep']
    }
  },
  {
    id: 'me-too',
    emoji: '🙋',
    title: '너도나도',
    description: '남들과 생각이 통할까? 공감과 의외성의 단어 게임',
    url: 'games/me-too.html',
    people: '4~15명',
    time: '15~25분',
    prep: '종이, 펜',
    tags: {
      location: ['indoor'],
      groupSize: ['small', 'medium'],
      ageGroup: ['kid-old', 'teen', 'adult'],
      duration: 'medium',
      situation: ['ice-break', 'brain']
    }
  },
  {
    id: 'card-flip',
    emoji: '🃏',
    title: '카드 뒤집기',
    description: '짝이 맞는 카드를 찾아라! 기억력을 겨루는 짝맞추기 팀 대항 게임. 학습용 커스텀 카드·난이도·미리보기 지원. 진행자 도구 포함',
    url: 'games/card-flip.html',
    people: '2명+',
    time: '10~15분',
    prep: '진행자 도구(화면)',
    tags: {
      location: ['indoor'],
      groupSize: ['small', 'medium', 'large'],
      ageGroup: ['young', 'kid-young', 'kid-old', 'teen', 'adult'],
      duration: 'medium',
      situation: ['brain', 'ice-break']
    }
  },
  {
    id: 'jjimpigu',
    emoji: '🏐',
    title: '찜피구',
    description: '공을 든 채 발을 고정! 패스로 공을 옮겨 상대를 터치로 잡는 독특한 공수 교대 게임. 진행자 도구 포함',
    url: 'games/jjimpigu.html',
    people: '10명+',
    time: '15~25분',
    prep: '말랑한 공·팀 띠',
    tags: {
      location: ['both'],
      groupSize: ['medium', 'large'],
      ageGroup: ['kid-old', 'teen', 'adult'],
      duration: 'medium',
      situation: ['energy']
    }
  },
  {
    id: 'iguseong',
    emoji: '🎤',
    title: '이구동성',
    description: '4명이 동시에 한 글자씩 외치면 무슨 단어일까? 목소리가 겹쳐 들리는 웃음 폭발 팀 대항 게임. 진행자 도구 포함',
    url: 'games/iguseong.html',
    people: '8명 이상',
    time: '10~20분',
    prep: '진행자 도구(폰)',
    tags: {
      location: ['both'],
      groupSize: ['medium', 'large'],
      ageGroup: ['kid-old', 'teen', 'adult'],
      duration: 'medium',
      situation: ['energy', 'brain']
    }
  },
  {
    id: 'balance-game',
    emoji: '⚖️',
    title: '밸런스게임',
    description: '치킨 vs 피자? 산 vs 바다? 취향과 가치관을 나누는 양자택일 대화 게임. 질문 36개 + 랜덤 뽑기 도구 포함',
    url: 'games/balance-game.html',
    people: '2명 이상',
    time: '5~15분',
    prep: '없음',
    tags: {
      location: ['both'],
      groupSize: ['small', 'medium', 'large', 'xlarge'],
      ageGroup: ['kid-young', 'kid-old', 'teen', 'adult'],
      duration: 'short',
      situation: ['ice-break', 'no-prep']
    }
  }
];

/* 카드 HTML 생성 헬퍼 */
function renderGameCard(g) {
  return `<a href="${g.url}" class="game-card">
    <span class="game-emoji">${g.emoji}</span>
    <h3>${g.title}</h3>
    <p class="desc">${g.description}</p>
    <div class="meta">
      <span class="meta-badge">${g.people}</span>
      <span class="meta-badge">${g.time}</span>
      <span class="meta-badge">${g.prep}</span>
    </div>
  </a>`;
}

/* 필터 함수 */
function filterGames(criteria) {
  if (!Array.isArray(gamesData)) return [];
  return gamesData.filter(g => {
    const t = g.tags;
    if (!t) return false;
    if (criteria.location) {
      const locs = Array.isArray(criteria.location) ? criteria.location : [criteria.location];
      const loc = Array.isArray(t.location) ? t.location : [];
      const gameHas = locs.some(l => loc.includes(l) || loc.includes('both'));
      if (!gameHas) return false;
    }
    if (criteria.groupSize) {
      const sizes = Array.isArray(criteria.groupSize) ? criteria.groupSize : [criteria.groupSize];
      const gs = Array.isArray(t.groupSize) ? t.groupSize : [];
      if (!sizes.some(s => gs.includes(s))) return false;
    }
    if (criteria.ageGroup) {
      const ages = Array.isArray(criteria.ageGroup) ? criteria.ageGroup : [criteria.ageGroup];
      const ag = Array.isArray(t.ageGroup) ? t.ageGroup : [];
      if (!ages.some(a => ag.includes(a))) return false;
    }
    if (criteria.situation) {
      const sits = Array.isArray(criteria.situation) ? criteria.situation : [criteria.situation];
      const st = Array.isArray(t.situation) ? t.situation : [];
      if (!sits.some(s => st.includes(s))) return false;
    }
    return true;
  });
}

if (typeof module !== 'undefined') module.exports = gamesData;
