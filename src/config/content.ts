// ============================================================
// Site Content Configuration - Proposal Master
// ============================================================

export const SITE_CONFIG = {
  brandName: 'Proposal Master',
  copyright: '© 2026 Proposal Master. All rights reserved.',

  hero: {
    titleLeft: ['제안서', '마스터'],
    titleRight: ['기획을', '문서로'],
    watermark: 'MASTER',
    description:
      '아이디어, 사업 개요, 예산, 일정만 입력하면 공공지원사업·영업제안서·사업계획서에 맞는 구조로 정리하고 docx 문서까지 빠르게 완성하는 AI 제안서 자동작성 서비스입니다.',
  },

  cinematic: {
    text: 'Proposal Master는 빈 문서 앞에서 멈추는 시간을 줄입니다. 흩어진 아이디어를 목적, 문제정의, 실행전략, 예산, 기대효과로 재구성하고 제안서다운 문장과 표 구조로 정돈해 바로 제출 가능한 초안을 만듭니다.',
  },

  metrics: {
    subtitle: 'Document Performance',
    items: [
      { value: '3분', label: '초안 생성 시간' },
      { value: '80%', label: '문서 작성 시간 절감' },
      { value: 'DOCX', label: '워드 파일 즉시 출력' },
    ],
  },

  technology: {
    title: ['아이디어를', '제안서로'],
    description:
      '단순한 채팅 답변이 아니라 제출용 문서 흐름에 맞춰 내용을 정리합니다. 사업 목적, 시장성, 추진계획, 예산, 기대효과를 한 번에 연결합니다.',
    features: [
      {
        title: '문서 구조 자동 설계',
        desc: '입력한 내용을 제안 배경, 문제정의, 솔루션, 실행계획, 성과지표 순서로 재배치합니다.',
      },
      {
        title: '공공문서 톤 보정',
        desc: '짧은 메모를 보고서형 문장과 개조식 표현으로 다듬어 제안서다운 완성도를 만듭니다.',
      },
      {
        title: '표와 항목 자동 구성',
        desc: '예산, 일정, 역할, 산출물을 문서 안에서 읽기 쉬운 표와 목록 구조로 정리합니다.',
      },
      {
        title: 'docx 다운로드',
        desc: '완성된 초안을 브라우저에서 바로 워드 파일로 내려받아 수정과 제출 흐름을 빠르게 이어갑니다.',
      },
    ],
  },

  architecture: {
    subtitle: 'Workflow',
    heading: '입력하고, 정리하고, 다운로드.',
    description:
      '로그인 후 프로젝트 정보를 저장하고, 필요한 제안서 유형을 선택한 뒤, 생성된 문서를 docx로 내려받는 간단한 흐름으로 설계합니다.',
    layers: [
      { num: 1, name: '프로젝트 정보 입력' },
      { num: 2, name: 'AI 제안서 초안 생성' },
      { num: 3, name: 'docx 다운로드 및 저장' },
    ],
  },

  footer: {
    tagline:
      '문서 형식에 시간을 빼앗기지 말고, 제안의 핵심과 실행력에 집중하세요. Proposal Master가 초안을 빠르게 정리합니다.',
  },

  nav: {
    links: [
      { label: '소개', scrollMultiplier: 1 },
      { label: '성과', scrollMultiplier: 2 },
    ],
    downloadLabel: '시작하기',
  },
};
