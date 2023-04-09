export default {
  User: [
    {
      user_id: 1,
      name: '관리자',
      created_at: '2023-03-21',
    },
    {
      user_id: 2,
      name: '송태현',
      created_at: '2023-03-23',
    },
    {
      user_id: 3,
      name: '신재형',
      created_at: '2023-03-23',
    },
    {
      user_id: 4,
      name: '우제혁',
      created_at: '2023-03-23',
    },
    {
      user_id: 5,
      name: '이예준',
      created_at: '2023-03-23',
    },
    {
      user_id: 6,
      name: '이정호',
      created_at: '2023-03-23',
    },
  ],
  Content: [
    {
      content_id: 1,
      user_id: 1,
      title: 'Joongsint 게시판 규칙',
      context:
        '가상 모의 기업 Joongsint의 게시판으로, 테스트 목적의 기업이다. 실제 사람들의 정보가 아닌 우리가 설정해놓은 Jungsint 가상 모의 기업을 대상으로 데이터를 수집, 가공, 처리하도록 한다.',
      created_at: '2023-03-23',
      updated_at: null,
    },
    {
      content_id: 2,
      user_id: 5,
      title: '도메인 관련 공지사항',
      context:
        '해당 도메인은 무료 도메인이며, 구글 서치 콘솔을 이용하여 검색엔진에 올라갈 수 있도록 하였습니다. 도메인으로 인한 접속에 오류가 생긴다면 해당 담당자인 이예준 사원에게 연락주세요. (이메일: exit3015@gmail.com)',
      created_at: '2023-04-05',
      updated_at: null,
    },
    {
      content_id: 3,
      user_id: 3,
      title: '네트워크 관련 공지사항',
      context:
        '안녕하세요. 네트워크 관리부장 신재형입니다. 네트워크 관련 오류가 있다면 문의주세요. (이메일: shinwogud12@naver.com)',
      created_at: '2023-04-06',
      updated_at: null,
    },
    {
      content_id: 4,
      user_id: 2,
      title: '검색 관련 공지사항',
      context:
        '안녕하세요. 송태현입니다. 여러 검색엔진에 대한 결과 값을 정리하여 더 정확하고 좋은 데이터를 제공할 수 있게 노력하겠습니다. (이메일: truebird0109@gmail.com)',
      created_at: '2023-04-06',
      updated_at: null,
    },
    {
      content_id: 5,
      user_id: 6,
      title: '서버 관련 공지사항',
      context:
        '서버 부장입니다. 서버가 느려지거나 다운될 경우 거침없이 연락주세요. (이메일: wjdgh7575@naver.com)',
      created_at: '2023-04-06',
      updated_at: null,
    },
    {
      content_id: 5,
      user_id: 4,
      title: 'CEO 인사말',
      context:
        '정확하고 최적의 데이터 추출을 통해, 기업에 있는 위협요소를 확인하고 조치할 수 있는 최고의 솔루션을 위해 노력하겠습니다. 감사합니다. (이메일: wpgur0510@gmail.com)',
      created_at: '2023-04-06',
      updated_at: null,
    },
    {
      content_id: 6,
      user_id: 5,
      title: '크롤링 데이터 추출 서비스',
      context:
        '저희 OSINT 솔루션에서는 다양한 SNS 및 URL을 통한 체계적인 크롤링과 정규식을 사용하여 보다 많은 정보를 수집할 수 있습니다. (이메일: exit3015@gmail.com)',
      created_at: '2023-04-06',
      updated_at: null,
    },
  ],
};
