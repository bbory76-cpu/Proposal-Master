// ============================================================
// Site Content Configuration - Proposal Master
// ============================================================

export type Language = 'ko' | 'en';

export const SITE_CONTENT = {
  ko: {
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

    pricing: {
      subtitle: 'Pricing',
      heading: '문서 작성 속도를 선택하세요',
      description: '개인 제안서 초안부터 팀 단위 문서 생산까지, 필요한 만큼 시작할 수 있습니다.',
      oneTime: '/일회성',
      recommended: '추천',
      starter: {
        label: 'Starter',
        description: '처음 제안서 초안을 빠르게 만들어보는 개인용 패키지.',
        features: ['AI 제안서 초안 생성', 'docx 파일 다운로드', '기본 제안서 템플릿'],
      },
      pro: {
        label: 'Pro',
        description: '공공지원사업, 영업제안서, 사업계획서까지 넓게 쓰는 전문가용.',
        features: ['Starter 전체 기능', '공공문서 톤 보정', '예산·일정 표 자동 구성', '프로젝트 저장 기능'],
      },
      agency: {
        label: 'Agency',
        price: 'Custom',
        description: '제안서 대행사, 컨설팅팀, 교육기관을 위한 맞춤형 문서 생산 환경.',
        features: ['Pro 전체 기능', '팀 패널 커스터마이징', '브랜드 문서 양식 적용', '전담 온보딩 지원'],
        cta: '문의하기',
      },
    },

    footer: {
      tagline:
        '문서 형식에 시간을 빼앗기지 말고, 제안의 핵심과 실행력에 집중하세요. Proposal Master가 초안을 빠르게 정리합니다.',
    },

    nav: {
      service: '서비스',
      results: '성과',
      signIn: '로그인',
      signOut: '로그아웃',
      start: '시작',
      topLabel: '맨 위로 이동',
      languageLabel: '언어 변경',
    },
  },

  en: {
    brandName: 'Proposal Master',
    copyright: '© 2026 Proposal Master. All rights reserved.',

    hero: {
      titleLeft: ['Proposal', 'Master'],
      titleRight: ['Plan to', 'Document'],
      watermark: 'MASTER',
      description:
        'Turn ideas, business outlines, budgets, and schedules into structured proposals for grants, sales, and business plans, then export polished docx drafts fast.',
    },

    cinematic: {
      text: 'Proposal Master reduces the time spent staring at a blank document. It turns scattered ideas into objectives, problem statements, execution plans, budgets, and outcomes in a proposal-ready structure.',
    },

    metrics: {
      subtitle: 'Document Performance',
      items: [
        { value: '3 min', label: 'Draft generation' },
        { value: '80%', label: 'Less writing time' },
        { value: 'DOCX', label: 'Instant Word export' },
      ],
    },

    technology: {
      title: ['Ideas', 'to Proposals'],
      description:
        'More than a chat response, it organizes content around submission-ready document flow: goals, market context, execution, budget, and expected impact.',
      features: [
        {
          title: 'Auto Document Structure',
          desc: 'Reframes your input into background, problem, solution, execution plan, and success metrics.',
        },
        {
          title: 'Public Proposal Tone',
          desc: 'Transforms short notes into formal report language and clear bullet structure.',
        },
        {
          title: 'Tables and Sections',
          desc: 'Organizes budgets, schedules, roles, and deliverables into readable tables and lists.',
        },
        {
          title: 'docx Download',
          desc: 'Export drafts directly as Word files for editing, sharing, and submission.',
        },
      ],
    },

    architecture: {
      subtitle: 'Workflow',
      heading: 'Input, refine, download.',
      description:
        'Sign in, save project details, choose the proposal type, and download the generated draft as a docx file.',
      layers: [
        { num: 1, name: 'Project Details' },
        { num: 2, name: 'AI Proposal Draft' },
        { num: 3, name: 'docx Export and Save' },
      ],
    },

    pricing: {
      subtitle: 'Pricing',
      heading: 'Choose your proposal speed',
      description: 'Start with a personal draft package or scale up for professional proposal production.',
      oneTime: '/one-time',
      recommended: 'Recommended',
      starter: {
        label: 'Starter',
        description: 'A personal package for quickly creating your first proposal draft.',
        features: ['AI proposal draft', 'docx file download', 'Basic proposal template'],
      },
      pro: {
        label: 'Pro',
        description: 'For grants, sales proposals, and business plans across broader professional needs.',
        features: ['Everything in Starter', 'Formal proposal tone', 'Budget and schedule tables', 'Project saving'],
      },
      agency: {
        label: 'Agency',
        price: 'Custom',
        description: 'A tailored proposal production environment for agencies, consultants, and educators.',
        features: ['Everything in Pro', 'Team panel customization', 'Branded document formats', 'Dedicated onboarding'],
        cta: 'Contact',
      },
    },

    footer: {
      tagline:
        'Spend less time formatting and more time sharpening the idea. Proposal Master helps turn your direction into a structured draft quickly.',
    },

    nav: {
      service: 'Service',
      results: 'Results',
      signIn: 'Sign In',
      signOut: 'Sign Out',
      start: 'Start',
      topLabel: 'Back to top',
      languageLabel: 'Change language',
    },
  },
} as const;

export const SITE_CONFIG = SITE_CONTENT.ko;
