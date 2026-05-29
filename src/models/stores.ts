export interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  isBest?: boolean;
}

export interface Store {
  id: number;
  name: string;
  rating: number;
  reviewCount: number;
  category: string;
  minOrderPrice: number;
  deliveryFee: number;
  deliveryTime: string;
  menuItems: MenuItem[];
}

export const stores: Store[] = [
  {
    id: 1,
    name: '0위 셀로리 건대점',
    rating: 4.9,
    reviewCount: 3919,
    category: '샐러드',
    minOrderPrice: 13000,
    deliveryFee: 2000,
    deliveryTime: '15~25분',
    menuItems: [
      { id: 1, name: '토마토 샐러드', price: 7900, description: '신선한 토마토, 양상추, 올리브유, 발사믹, 시저드레싱', isBest: true },
      { id: 2, name: '시저 샐러드', price: 8900, description: '로메인 상추에 크루통과 치킨, 달걀, 올리브유, 치즈', isBest: false },
      { id: 3, name: '리코타치즈 샐러드', price: 11900, description: '리코타치즈, 방울토마토, 루꼴라, 꿀, 블랙올리브, 발사믹', isBest: false },
      { id: 4, name: '한당지 샐러드', price: 7400, description: '닭가슴, 고구마, 귀리, 계란, 아보카도', isBest: false },
      { id: 5, name: '연어 샐러드', price: 9500, description: '훈제연어와 크림치즈, 케이퍼, 새콤달콤, 방울토마토, 잎채소', isBest: false },
      { id: 6, name: '우삼겹 재료꾼 샐러드', price: 8900, description: '우삼겹, 래디쉬, 어린잎, 양배추, 두부, 무화과, 양파 드레싱', isBest: false },
    ],
  },
  {
    id: 2,
    name: '1위 셀로리 한남점',
    rating: 4.9,
    reviewCount: 97,
    category: '샐러드',
    minOrderPrice: 13000,
    deliveryFee: 2000,
    deliveryTime: '13분~30분',
    menuItems: [
      { id: 1, name: '닭가슴살 샐러드', price: 8900, description: '닭가슴살, 양상추, 토마토, 올리브유, 발사믹', isBest: true },
      { id: 2, name: '아보카도 샐러드', price: 9900, description: '아보카도, 루꼴라, 방울토마토, 레몬드레싱', isBest: false },
      { id: 3, name: '그릭 샐러드', price: 8500, description: '페타치즈, 오이, 올리브, 양파, 토마토, 올리브유', isBest: false },
      { id: 4, name: '퀴노아 샐러드', price: 10900, description: '퀴노아, 병아리콩, 오이, 파프리카, 레몬드레싱', isBest: false },
    ],
  },
  {
    id: 3,
    name: '2위 옐로우푸드 샐러드',
    rating: 4.9,
    reviewCount: 1358,
    category: '샐러드',
    minOrderPrice: 13000,
    deliveryFee: 2000,
    deliveryTime: '13분~30분',
    menuItems: [
      { id: 1, name: '망고 치킨 샐러드', price: 9800, description: '망고, 닭가슴살, 양상추, 적양파, 망고드레싱', isBest: true },
      { id: 2, name: '옐로우 에그 샐러드', price: 7900, description: '달걀, 옥수수, 체다치즈, 양상추, 머스타드드레싱', isBest: false },
      { id: 3, name: '단호박 샐러드', price: 8500, description: '단호박, 크랜베리, 호두, 루꼴라, 발사믹', isBest: false },
      { id: 4, name: '파인애플 새우 샐러드', price: 11500, description: '새우, 파인애플, 양상추, 적채, 타이소스', isBest: false },
      { id: 5, name: '레몬 연어 샐러드', price: 12900, description: '훈제연어, 케이퍼, 루꼴라, 레몬드레싱, 크림치즈', isBest: false },
    ],
  },
  {
    id: 4,
    name: '3위 산디에블도 한남점',
    rating: 4.6,
    reviewCount: 80,
    category: '샐러드',
    minOrderPrice: 13000,
    deliveryFee: 2000,
    deliveryTime: '13분~30분',
    menuItems: [
      { id: 1, name: '스테이크 샐러드', price: 14900, description: '소고기 스테이크, 루꼴라, 파마산치즈, 발사믹글레이즈', isBest: true },
      { id: 2, name: '참치 샐러드', price: 8900, description: '참치, 양상추, 오이, 토마토, 레몬드레싱', isBest: false },
      { id: 3, name: '두부 샐러드', price: 7500, description: '두부, 시금치, 깨소스, 양파, 당근', isBest: false },
      { id: 4, name: '콥 샐러드', price: 10900, description: '베이컨, 달걀, 아보카도, 블루치즈, 토마토, 랜치드레싱', isBest: false },
    ],
  },
  {
    id: 5,
    name: 'THE 샐러드가득담은',
    rating: 5.0,
    reviewCount: 27,
    category: '샐러드',
    minOrderPrice: 13000,
    deliveryFee: 2000,
    deliveryTime: '13분~30분',
    menuItems: [
      { id: 1, name: '더블 치킨 샐러드', price: 10900, description: '닭가슴살 2배, 양상추, 토마토, 오이, 허니머스타드', isBest: true },
      { id: 2, name: '슈퍼푸드 샐러드', price: 12900, description: '케일, 퀴노아, 아보카도, 블루베리, 아몬드, 레몬드레싱', isBest: false },
      { id: 3, name: '새우 아보카도 샐러드', price: 11900, description: '새우, 아보카도, 루꼴라, 망고살사, 라임드레싱', isBest: false },
    ],
  },
  {
    id: 6,
    name: '파스토보어',
    rating: 4.8,
    reviewCount: 81,
    category: '샐러드',
    minOrderPrice: 13000,
    deliveryFee: 2500,
    deliveryTime: '13분~30분',
    menuItems: [
      { id: 1, name: '파스타 샐러드', price: 9900, description: '펜네, 올리브, 선드라이토마토, 바질페스토, 파마산', isBest: true },
      { id: 2, name: '카프레제 샐러드', price: 10900, description: '모짜렐라, 토마토, 바질, 올리브유, 발사믹', isBest: false },
      { id: 3, name: '니수아즈 샐러드', price: 11500, description: '참치, 달걀, 감자, 그린빈, 올리브, 앤초비드레싱', isBest: false },
      { id: 4, name: '루꼴라 프로슈토 샐러드', price: 13900, description: '프로슈토, 루꼴라, 파마산, 발사믹글레이즈, 방울토마토', isBest: false },
    ],
  },
  {
    id: 7,
    name: '한나다 샐러드',
    rating: 4.7,
    reviewCount: 102,
    category: '샐러드',
    minOrderPrice: 13000,
    deliveryFee: 2000,
    deliveryTime: '13분~30분',
    menuItems: [
      { id: 1, name: '한식 샐러드', price: 8500, description: '된장드레싱, 두부, 나물, 현미밥, 깨', isBest: true },
      { id: 2, name: '불고기 샐러드', price: 10900, description: '불고기, 양상추, 깻잎, 당근, 간장드레싱', isBest: false },
      { id: 3, name: '명란 샐러드', price: 11500, description: '명란, 아보카도, 오이, 적채, 참기름드레싱', isBest: false },
      { id: 4, name: '제육 샐러드', price: 9900, description: '제육볶음, 양상추, 깻잎, 파, 고추장드레싱', isBest: false },
      { id: 5, name: '비빔 샐러드', price: 8900, description: '각종 나물, 고추장, 참기름, 달걀, 현미밥', isBest: false },
    ],
  },
];

export const categories = [
  { id: 1, name: '치킨', emoji: '🍗' },
  { id: 2, name: '샐러드', emoji: '🥗' },
  { id: 3, name: '햄버거', emoji: '🍔' },
  { id: 4, name: '한식', emoji: '🍱' },
  { id: 5, name: '분식', emoji: '🍜' },
  { id: 6, name: '지킨', emoji: '🍖' },
  { id: 7, name: '초밥', emoji: '🍣' },
  { id: 8, name: '샌드위치', emoji: '🥪' },
  { id: 9, name: '파스타', emoji: '🍝' },
  { id: 10, name: '디저트', emoji: '🍰' },
  { id: 11, name: '카페', emoji: '☕' },
  { id: 12, name: '더보기', emoji: '⋯' },
];

export const cartItems = [];