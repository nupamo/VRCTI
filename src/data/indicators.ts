export type Indicator = 'E' | 'I' | 'S' | 'P' | 'D' | 'G' | 'F' | 'C' | 'x';

export type IndicatorName = {
  E: 'Explorer';
  I: 'Inside';
  S: 'Sync';
  P: 'Persona';
  D: 'Deep';
  G: 'Gamer';
  F: 'Friendly';
  C: 'Creator';
  x: 'Neutral';
}

export interface IndicatorInfo {
  name: string;
  description: string;
}

export const indicatorDescriptions: Record<Indicator, IndicatorInfo> = {
  'E': { name: 'Explorer', description: '퍼블릭 월드와 새로운 만남을 즐기며 미지의 세계를 탐험합니다.' },
  'I': { name: 'Inside', description: '지인 위주의 프라이빗한 공간에서 안정적인 유대를 쌓는 것을 선호합니다.' },
  'S': { name: 'Sync', description: '현실의 자아를 아바타에 투영하여 진솔하고 일관되게 소통합니다.' },
  'P': { name: 'Persona', description: '아바타에 맞춘 캐릭터 설정과 페르소나를 유지하며 가상 세계의 삶을 즐깁니다.' },
  'D': { name: 'Deep', description: '가상 세계의 감각과 감정에 깊게 몰입하며 물리적/정서적 교감을 중시합니다.' },
  'G': { name: 'Gamer', description: 'VRChat을 하나의 시스템이나 게임으로 인지하며 관조적인 태도를 유지합니다.' },
  'F': { name: 'Friendly', description: '사람들과의 정서적 교류와 친목 형성을 주목적으로 활동합니다.' },
  'C': { name: 'Creator', description: '아바타 제작, 사진 촬영, 월드 제작 등 가상 세계를 구축하는 창작 활동에 집중합니다.' },
  'x': { name: 'Neutral', description: '해당 지표에서 중립적인 성향을 보이며 상황에 따라 유연하게 대처합니다.' }
};
