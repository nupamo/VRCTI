export interface ResultInfo {
  nickname: string;
  description: string;
  avatar: string;
  avatarStyle: string;
}

const avatarUrls = {
  chiffon: 'https://booth.pximg.net/61a3b2d7-b4b1-4f97-9e48-ffe959b26ae9/i/5354471/c42b543c-a334-4f18-bd26-a5cf23e2a61b_base_resized.jpg',
  manuka: 'https://booth.pximg.net/8a7426aa-ba62-4ef0-9e7d-2c8ea96e7c9b/i/5058077/a18424fe-a56e-411a-9c47-27c56909593c_base_resized.jpg',
  shinano: 'https://booth.pximg.net/ed52788c-0b3b-4e38-9ded-1e5797daf0ef/i/6106863/07bd77df-a8ee-4244-8c4e-16cf7cb584bb_base_resized.jpg',
  mame: 'https://booth.pximg.net/c80ffe79-d9d7-4481-bc64-40d80bcd71e6/i/4340548/cb43c1f7-bbdf-4115-942a-491c32b1de24_base_resized.jpg',
  airi: 'https://booth.pximg.net/f420c992-4225-4ce0-b751-3a4acdceaab6/i/6082686/81021dbd-ca83-4c3b-8868-230e780b63a3_base_resized.jpg',
  lime: 'https://booth.pximg.net/61a3b2d7-b4b1-4f97-9e48-ffe959b26ae9/i/4876459/73a1c9e3-825d-4045-bf14-e07392ad7afa_base_resized.jpg',
  lumina: 'https://booth.pximg.net/87b70515-e32e-4a2e-bf41-317cf2c2177c/i/7502898/a2c93b99-de64-49f4-a76b-30ff769a5021_base_resized.jpg',
  sio: 'https://booth.pximg.net/817e9a9a-020c-4fac-8b21-96f80d6e25cb/i/5650156/95fc778d-3254-45ca-8a6e-2590dc30f87c_base_resized.jpg',
  milfy: 'https://booth.pximg.net/1ae5d9f5-29a4-4574-ab86-a316c22db92a/i/6571299/7bda05bb-f9d5-45a8-811a-b95ac555beb8_base_resized.jpg',
  kipfel: 'https://booth.pximg.net/c80ffe79-d9d7-4481-bc64-40d80bcd71e6/i/5813187/9163df6c-cc4e-4a07-ace2-d22e3be58be8_base_resized.jpg',
  milltina: 'https://booth.pximg.net/01965a9e-bce5-4027-bc0e-0b8e7df43c6e/i/6538026/182b133f-1c86-4ae8-8536-5e00f63b86cf_base_resized.jpg',
  rurune: 'https://booth.pximg.net/96d1d589-6879-4d30-8891-a2c6b8d64186/i/5957830/a4e0ae5b-7797-448b-80b1-e852c861e080_base_resized.jpg',
  mafuyu: 'https://booth.pximg.net/1ae5d9f5-29a4-4574-ab86-a316c22db92a/i/5007531/dfdc2835-e4db-44f8-85ed-20bf607ad64e_base_resized.jpg',
  karin: 'https://booth.pximg.net/61a3b2d7-b4b1-4f97-9e48-ffe959b26ae9/i/3470989/a70bc916-21f3-4b06-ae3a-eb302058a0b5_base_resized.jpg',
  chocolat: 'https://booth.pximg.net/61a3b2d7-b4b1-4f97-9e48-ffe959b26ae9/i/6405390/6e6332b4-d56c-4d2f-8f23-328f702949c8_base_resized.jpg',
  maya: 'https://booth.pximg.net/f420c992-4225-4ce0-b751-3a4acdceaab6/i/3390957/452e082f-67e8-480d-b697-9378977f41b0_base_resized.jpg'
}

export const results: Record<string, ResultInfo> = {
  // ESDA - Explorer, Sync, Deep, Adapt
  "ESDA": {
    nickname: "퍼블릭의 트렌드 세터",
    description: "퍼블릭 월드의 넘치는 에너지를 즐기며, 트렌디한 아바타와 매너 있는 모습으로 모두에게 호감을 사는 타입입니다. 남들에게 비춰지는 자신의 모습을 소중히 여기며 조화로운 분위기를 이끌어갑니다.",
    avatar: avatarUrls.chiffon,
    avatarStyle: "대중적이고 인기 있는 캐주얼 아바타, 트렌디한 스트릿 패션."
  },
  // ESDU - Explorer, Sync, Deep, Unique
  "ESDU": {
    nickname: "자유로운 영혼의 모험가",
    description: "남들의 시선은 신경 쓰지 않고 자신이 보고 싶은 월드, 입고 싶은 아바타를 고집하며 퍼블릭을 누비는 타입입니다. 독창적인 개성으로 사람들에게 신선한 충격과 영감을 주는 존재네요.",
    avatar: avatarUrls.lumina,
    avatarStyle: "자신만의 확고한 취향이 반영된 유니크한 커스텀 아바타."
  },
  "ISDA": {
    nickname: "포근한 분위기 메이커",
    description: "지인들과의 깊은 유대를 중시하며, 주변 사람들에게 편안하고 예쁜 모습을 보여주고 싶어 하는 정 많은 타입입니다. 친구들이 좋아하는 자신의 모습을 잘 알고 그에 맞춰 행동합니다.",
    avatar: avatarUrls.shinano,
    avatarStyle: "누구나 좋아할 만한 포근한 니트웨어나 일상복 스타일."
  },
  "ISDU": {
    nickname: "고집 있는 낭만 아티스트",
    description: "소수의 소중한 사람들과 함께하며 자신만의 깊은 내면 세계를 아바타나 창작물로 표현하는 타입입니다. 타인의 평가보다는 본인이 만족하는 예술적 감성을 완성하는 데 집중합니다.",
    avatar: avatarUrls.karin,
    avatarStyle: "개조된 기믹이나 독특한 셰이더가 적용된 아바타."
  },
  "ESGA": {
    nickname: "세련된 프로 소셜러",
    description: "VRChat을 효율적으로 즐기며, 어떤 모임에서도 매끄럽게 녹아드는 사교의 달인입니다. 사람들의 눈에 띄는 법을 잘 알며, 상황에 맞는 센스 있는 아바타 선택으로 환영받습니다.",
    avatar: avatarUrls.milltina,
    avatarStyle: "깔끔하고 세련된 아이돌풍 의상이나 제복 스타일."
  },
  "ESGU": {
    nickname: "독창적인 월드 사냥꾼",
    description: "게임 시스템과 지식을 탐구하며, 남들은 잘 모르는 자신만의 독특한 플레이 스타일을 고수합니다. 유행을 따르기보다는 자신이 재미있다고 느끼는 기믹과 아바타를 찾아다닙니다.",
    avatar: avatarUrls.kipfel,
    avatarStyle: "흔하지 않은 디자인의 미니멀하거나 사이버틱한 외관."
  },
  "ISGA": {
    nickname: "예의 바른 조용한 관찰자",
    description: "프라이빗한 공간에서 지인들과 시간을 보내며, 튀지 않으면서도 세련된 모습을 유지하려 노력하는 타입입니다. 주변 사람들의 기분을 살피며 안정적인 소통을 이어갑니다.",
    avatar: avatarUrls.manuka,
    avatarStyle: "단정하고 깔끔한 데일리 룩, 정돈된 분위기의 액세서리."
  },
  "ISGU": {
    nickname: "마이웨이 지식 장인",
    description: "친한 사람들 사이에서도 자신만의 확고한 세계관이나 기술적 관심사를 가감 없이 드러내는 타입입니다. 남들이 뭐라 하든 자신이 꽂힌 분야를 파고드는 데서 즐거움을 찾습니다.",
    avatar: avatarUrls.karin,
    avatarStyle: "직접 수정한 기믹이나 유니크한 파츠가 돋보이는 외형."
  },
  "ECDA": {
    nickname: "컨셉에 진심인 롤플레이어",
    description: "캐릭터에 완벽히 몰입하면서도, 그 캐릭터가 타인에게 매력적으로 보이도록 세심하게 연출하는 타입입니다. 사람들의 반응을 보며 자신의 페르소나를 더 정교하게 다듬어갑니다.",
    avatar: avatarUrls.milfy,
    avatarStyle: "화려하고 컨셉이 확실한 드레스나 판타지 의상."
  },
  "ECDU": {
    nickname: "독보적 세계관의 창조자",
    description: "현실과는 완전히 다른 자신만의 독창적인 캐릭터를 구축하고, 남들의 시선보다는 그 컨셉의 완결성에 집착하는 타입입니다. 당신의 아바타는 그 자체로 하나의 예술 작품과 같습니다.",
    avatar: avatarUrls.lumina,
    avatarStyle: "강렬한 코스튬, 비현실적이고 개성 넘치는 연출."
  },
  "ICDA": {
    nickname: "신비로운 분위기 수호자",
    description: "철저히 준비된 페르소나 뒤에서 지인들에게 믿음직하고 멋진 모습을 보여주는 타입입니다. 신비로운 매력을 유지하면서도 주변 사람들과의 조화를 깨지 않으려 노력합니다.",
    avatar: avatarUrls.mame,
    avatarStyle: "얼굴을 살짝 가리는 마스크나 분위기 있는 다크톤 의상."
  },
  "ICDU": {
    nickname: "은둔하는 고독한 장인",
    description: "프라이빗 월드에서 자신만이 만족할 수 있는 캐릭터와 공간을 만드는 데 열중하는 타입입니다. 타인의 인정보다는 자기만족과 설정의 깊이를 더 중요하게 생각합니다.",
    avatar: avatarUrls.maya,
    avatarStyle: "고도의 테크니컬한 수정이 가해진 사이버펑크풍 아바타."
  },
  "ECGA": {
    nickname: "유쾌한 소셜 엔터테이너",
    description: "아바타를 도구 삼아 사람들에게 즐거움을 선사하며, 모두의 주목과 웃음을 받는 데서 보람을 느끼는 타입입니다. 대중적인 유머 코드와 트렌드를 잘 활용하여 분위기를 주도합니다.",
    avatar: avatarUrls.milfy,
    avatarStyle: "친근하고 귀여운 캐릭터 스타일, 과장된 액세서리."
  },
  "ECGU": {
    nickname: "괴짜 기믹 전략가",
    description: "남들이 생각하지 못한 독특한 컨셉이나 기술적 기믹으로 사람들을 놀라게 하는 것을 즐기는 타입입니다. 대중적인 유행보다는 본인의 창의력을 뽐낼 수 있는 독창적인 플레이를 선호합니다.",
    avatar: avatarUrls.mame,
    avatarStyle: "독특한 기믹이 포함된 수트나 메카 아바타."
  },
  "ICGA": {
    nickname: "센스 있는 패션 피플",
    description: "지인들 사이에서 유행하는 아바타나 의상을 발 빠르게 챙기며, 남들에게 뒤처지지 않는 예쁜 모습을 유지하는 타입입니다. 친구들의 칭찬과 긍정적인 반응이 큰 활력소가 됩니다.",
    avatar: avatarUrls.chocolat,
    avatarStyle: "매 시즌 유행하는 새로운 아바타와 데일리 룩."
  },
  "ICGU": {
    nickname: "무심한 기술주의자",
    description: "감정적인 교류나 타인의 시선보다는 본인이 관심 있는 기술적 구현이나 설정을 묵묵히 즐기는 타입입니다. 아바타 뒤의 본모습을 드러내기보다 설정된 기능을 완벽하게 구동하는 데 집중합니다.",
    avatar: avatarUrls.kipfel,
    avatarStyle: "안드로이드풍 디자인, 차가운 금속 광택의 셰이더 적용."
  },
  "DEFAULT": {
    nickname: "미스테리한 여행자",
    description: "당신은 아직 정의되지 않은 독특한 스타일의 유저입니다. 여러 지표가 균형을 이루고 있어 상황에 따라 다양한 모습을 보여주네요!",
    avatar: avatarUrls.chiffon,
    avatarStyle: "여러 스타일이 섞인 커스텀 아바타, 개성 있는 액세서리."
  }
};
