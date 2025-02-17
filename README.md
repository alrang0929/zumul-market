# Zumul Market
![Image](https://github.com/user-attachments/assets/a333d329-f1aa-4d69-966f-8b52e3693b52)

### 프로잭트 개요
- **서비스 기획 배경**
 최근 3년간 창작자 기반 커머스 플랫폼은 빠르게 성장하며 새로운 경제 모델로 자리 잡았습니다. 크리에이터들이 직접 팬과 소통하며 수익을 창출할 수 있는 기회가 늘어났지만 여전히 창작자들이 겪는 문제점들은 많습니다. 다양한 문제들 중
디지털 및 물리적 상품을 동시에 판매할 수 있는 플랫폼이 제한적이라는 것과 소통의 어려움과 맞춤형 창작 서비스의 부족에 초점을 맞춰 크리에이터들이 보다 자유롭고 창의적으로 활동할 수 있는 플랫폼을 만들고자 **쪼물마켓** 을 기획하게 되었습니다.
- 📃[배포링크](https://zumul-market-git-main-alrangs-projects.vercel.app/)


### 기술 스텍
|분류|이름|
|---|---|
|Framework|React(v18)|
|Language|JavaScript|
|Database|Supabase|
|Build Tools|Vite(v6.0.1)|
|State Management|Zustand(v5.0.2)|
|Data Fetching & Caching|TanStack Query(v5.62.8)|
|Security & Authentication|bcryptjs(v2.4.3)|
|Form Management|React Hook Form(v7.54.2)|
|Styling|SCSS(Sass)(v1.32.0), Styled-components(v6.1.13)|

### 기술 의사 선택
- **React (v18)**
    - 이커머스 서비스에서는 동적인 UI 인터랙션, 전역 상태 관리, 데이터 페칭 및 최적화된 렌더링이 중요한 요소이다. React(v18)는 이러한 요구사항을 충족하며 다음과 같은 이유로 선택함.
        - React Hook Form과의 연계로 최적화된 폼 관리 구현
        - Concurrent Mode 및 자동 배치 기능을 활용한 UI 성능 최적화
        - TanStack Query와의 궁합이 좋아 데이터 패칭 최적화 가능
        - 스타일링 유연성 확보 (SCSS & Styled-components 동시 활용)

- **JavaScript**
    - React 및 Vite와의 호환성이 뛰어나며 빠른 개발 속도와 광범위한 생태계를 활용하여 유연한 애플리케이션 개발이 가능프로젝트 
    - 규모가 커질수록 런타임 에러 발생 가능성이 증가하고 타입 안정성이 부족하여 에러 추적이 어려워질 수 있기 때문에 향후 TypeScript로 마이그레이션할 예정

- **Supabase**
    - 이커머스 특성상 주문, 결제, 상품, 사용자 정보 등 연관된 데이터 간의 관계를 효율적으로 관리하기 위해 연계형 데이터베이스(RDBMS)가 필요
    - Firebase와 비교한 결과, PostgreSQL 기반의 Supabase가 즉시 사용 가능한 인증, 스토리지, Row-Level Security(RLS)를 제공하며, SQL을 활용한 데이터 관리가 용이하여 빠르고 안정적인 백엔드 구성이 가능하다고 판단하여 선택

- **Vite (v6.0.1)**
    - 초고속 개발 서버와 트리 쉐이킹을 지원하여 빠른 HMR(Hot Module Replacement)을 제공
    - ESM(ECMAScript Modules) 기반의 최적화된 번들링을 통해 빌드 속도를 극대화 가능
    
- **Zustand (v5.0.2)**
    - 이커머스 서비스에서는 장바구니, 사용자 인증 상태, UI 토글 상태 등 전역에서 관리해야 할 데이터가 많으며 이를 효율적으로 처리하기 위해 상태 관리 라이브러리가 필요했음
    - 불필요한 리렌더링을 방지하고 React Query와의 결합으로 서버 상태와 클라이언트 상태를 분리하여 최적화된 성능을 유지할 수 있기 때문에 선택
- **React Hook Form (v7.54.2)**
    - 이커머스 서비스에서는 상품 등록, 결제, 회원가입 등 다양한 폼이 사용되므로, 성능 최적화가 중요한 요소
    - Uncontrolled Form을 기본으로 하여 불필요한 리렌더링을 방지하고, setValue(), watch(), Controller를 활용한 동적 폼 관리로 입력값을 효율적으로 처리할 수 있어 선택
    - 내장된 유효성 검사 기능과 FormProvider를 활용한 전역 폼 관리를 통해 코드 복잡도를 줄이고 유지보수를 용이하게 하여 사용자 경험(UX)과 개발 생산성을 향상 
- **스타일링 유연성 확보 (SCSS & Styled-components 동시 활용)**
    - 이커머스 서비스에서는 상품 목록, 버튼, 유저 프로필 등 다양한 UI 요소의 스타일을 일관되게 유지하는 것이 중요
    - SCSS를 활용하여 전역 스타일을 관리하고 Styled-components를 사용하여 컴포넌트 단위의 동적 스타일링을 최적화하여 반복적인 스타일링을 줄이고 유지보수성을 높임

</br>

- - - 

</br>

### 실행 방법

**Node.js** (버전 16 이상 권장) 및 yarn환경에서 실행 가능합니다
<details>
  <summary>how to run</summary>
  <!-- 내용 -->
      1. 이 저장소를 복제하세요
    
    ```bash
    git clone https://github.com/alrang0929/zumul-market-rere.git
    ```
    
    2. 프로젝트 디렉토리로 이동합니다
    
    ```bash
    cd zumul-app
    ```
    
    3. 의존성을 설치합니다
    
    ```bash
    yarn
    ```
    
    4. 개발 서버를 실행합니다
    
    ```bash
    yarn dev
    ```
</details>

</br>

- - - 

</br>

### 활용방법(프로젝트 예시)

<details>
 
  <summary>로그인/회원가입</summary>
  
  <!-- 내용 -->
  - 회원가입 시 **창작자(판매자)와 팬(소비자, 일반 회원)** 중 하나를 선택하면, 선택한 유형에 따라 **권한과 기능**이 제공됩니다.
  - 사용자를 팬(Fan)과 창작자(Creator)로 구분하여 권한을 관리
  - 창작자만 상품 등록 및 판매 관리 페이지 접근 가능
  - 팬은 상품 검색 및 구매 기능만 이용 가능
  
![Image](https://github.com/user-attachments/assets/a79cf771-3df9-4fa4-b7f5-19d7476cec31)
  
</details>



<details>
 
  <summary>창작자(판매자)의 상품등록/조회 기능</summary>
 
  <!-- 내용 -->
  
   ##### 📌핵심 기능
 - React Hook Form을 활용한 상품 입력 및 유효성 검사 적용
 - 상품 옵션을 동적으로 추가 및 삭제 가능 (useOptionHandler 활용)
 - 대표 이미지 및 상세 이미지를 WebP 변환 후 Supabase Storage에 저장하여 로딩 최적화
 - Supabase DB에 상품 데이터 저장 후, 등록 완료 시 창작자 관리 페이지로 이동

  ##### 상품 입력 및 유효성 검사
  **상품 등록** 
-  React Hook Form을 사용하여 입력 필드의 상태 관리와 Controller로 상품명, 카테고리, 가격, 재고 등의 입력값을 검증
- 옵션 추가/삭제 기능을 적용하여 동적인 상품 옵션 관리 가능
- Supabase DB와 연동하여 상품 등록 및 조회

- Controller로 상품명, 카테고리, 가격, 재고 등의 입력값을 검증
- 
![Image](https://github.com/user-attachments/assets/ccd9dfeb-6418-46f4-83ea-d204eea5768e)

<details>
 
  <summary>구현코드</summary>

  ``` javascript
const { handleSubmit, setValue, getValues, control, register } = useForm({
  defaultValues: {
    title: '',
    category: 'handmade',
    sell_start: '',
    sell_end: '',
    stock: 0,
    price: 0,
    shipping_fee: 0,
    document: '',
    title_image: null,
    uploadedDetailImages: null,
    sellStatus: false,
    uploadedPaths: [],
  },
});

// 상품명 입력 유효성 검사 적용
<Controller
  name="title"
  control={control}
  rules={{
    required: '상품명을 입력해주세요',
    minLength: 5,
    maxLength: 20,
  }}
  render={({ field, fieldState }) => (
    <InputBox
      {...field}
      type="text"
      placeholder="상품명을 입력해주세요"
      className={fieldState.error ? 'error' : ''}
    />
  )}
/>


```
</details>
     
</details>

<details>
 
  <summary>장바구니/구매 </summary>
  
  <!-- 내용 -->
 
 ##### 📌핵심 기능
 
- Zustand를 활용하여 장바구니 데이터를 전역 상태로 관리
- React Query를 활용한 자동 동기화 및 API 요청 최적화 (invalidateQueries() 적용)
- Supabase Storage를 활용하여 새로고침 시에도 장바구니 데이터 유지

 
- 로그인하지 않은 경우: 알림 팝업을 표시
        <img width="2503" alt="Image" src="https://github.com/user-attachments/assets/dd5c2c1d-830c-469d-a89f-1d1f9079a69a" />
    
- 로그인을 한 경우: `handleAddToCartg`함수를 호출하여 cart DB에 저장
![Image](https://github.com/user-attachments/assets/0cd2f5b4-3c6a-4b05-a413-525a39891567)

</details>

</br>

- - - 

</br>


### 화면설계/유저 플로우 [이동링크](https://www.figma.com/design/ZuHIjGrhASbvrYKbIHKHXk/%EC%AA%BC%EB%AC%BC%EB%A7%88%EC%BC%93_%ED%99%94%EB%A9%B4%EC%84%A4%EA%B3%84%EC%84%9C_ver241218?node-id=32-99&t=n3FhKS3jvT6imT7Q-1)
![Image](https://github.com/user-attachments/assets/63e18f1a-881e-42a1-a38c-77b73f134b7a)

### 프로젝트 ERD [이동링크](https://drawsql.app/teams/-2680/diagrams/zumulmarket/embed)
![Image](https://github.com/user-attachments/assets/6c40c23e-2803-4014-bf6a-ebe795bcb48f)

### 폴더 구조

기능 중심으로 폴더 분리 채택

`atomic design` 도입을 고민 했으나 `atomic`을 반영하기에는 소규모 프로젝트에서 과도한 설계라 판단하여 각 폴더의 역할이 명확하게 나눠진 구조를 채택했습니다.
추후 프로젝트 규모 확대로 인해 `atomic design` 구조를 반영해야 된다면 페이지별 컴포넌트를 `components` 로 옮겨 계층화를 진행할 예정입니다.
<details>
<summary>폴더구조</summary>
  
```
    src/
    ├── api/
    ├──── auth/            
    │     └── loginUsers.js                           
    ├── common/
    │   └── SubTitle.jsx      
    ├── store/       
    ├──── auth/            
    │     └── useStore.js      
    ├── layouts/                  
    │   ├── MainLayout.jsx          
    │   └── AuthLayout.jsx         
    ├── pages/                   
    │   ├── Home/                  
    │   ├── Login/                
    │   └── Signup/               
    ├── stores/                   
    │   └── useStore.js 
    ├── styles/                    
    │   ├── globals.css          
    │   └── components.css    
    ├── utils/                      
    │   └── orderUtils.js           
    ├── App.jsx                    
    ├── main.jsx                  
    └── index.html          

```
</details>
