# Zumul Market
![Image](https://github.com/user-attachments/assets/a333d329-f1aa-4d69-966f-8b52e3693b52)

### 프로잭트 개요

- **창작자(판매자)** 가 자신의 작품(음원, 디지털 콘텐츠, 예술품 등)을 쉽게 판매하고, 팬과 직접 연결될 수 있는 커머스 플랫폼 입니다
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

### 핵심 기능

- **창작자의 기능 강화**: 작품 홍보 및 판매 지원
- **소통 중심 플랫폼**: 팬들과의 실시간 소통(채팅) 기능 제공


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

### 활용방법(프로젝트 예시)

![Image](https://github.com/user-attachments/assets/a79cf771-3df9-4fa4-b7f5-19d7476cec31)

- 회원가입 시 **창작자(판매자)와 팬(소비자, 일반 회원)** 중 하나를 선택하면, 선택한 유형에 따라 **권한과 기능**이 제공됩니다.
<details>
  <summary>창작자(판매자)의 상품등록/조회 기능</summary>
  <!-- 내용 -->
     
</details>
<details>
  <summary>장바구니/구매 </summary>
  <!-- 내용 -->
- 로그인하지 않은 경우: 알림 팝업을 표시
        <img width="2503" alt="Image" src="https://github.com/user-attachments/assets/dd5c2c1d-830c-469d-a89f-1d1f9079a69a" />
    
- 로그인을 한 경우: `handleAddToCartg`함수를 호출하여 cart DB에 저장
![Image](https://github.com/user-attachments/assets/0cd2f5b4-3c6a-4b05-a413-525a39891567)

</details>
<details>
  <summary>로그인/회원가입</summary>
  <!-- 내용 -->
</details>


### 화면설계/유저 플로우 [이동링크](https://www.figma.com/design/ZuHIjGrhASbvrYKbIHKHXk/%EC%AA%BC%EB%AC%BC%EB%A7%88%EC%BC%93_%ED%99%94%EB%A9%B4%EC%84%A4%EA%B3%84%EC%84%9C_ver241218?node-id=32-99&t=n3FhKS3jvT6imT7Q-1)
![Image](https://github.com/user-attachments/assets/63e18f1a-881e-42a1-a38c-77b73f134b7a)

### 프로젝트 ERD [이동링크](https://drawsql.app/teams/-2680/diagrams/zumulmarket/embed)
![Image](https://github.com/user-attachments/assets/6c40c23e-2803-4014-bf6a-ebe795bcb48f)

### 폴더 구조

기능 중심으로 폴더 분리 채택

`atomic design` 도입을 고민 했으나 `Atomic`을 반영하기에는 소규모 프로젝트에서 과도한 설계라 판단하여 각 폴더의 역할이 명확하게 나눠진 구조를 채택했습니다.

추후 프로젝트 규모 확대로 인해 `atomic design`구조를 반영해야 된다면 페이지별 컴포넌트를 `components`로 옮겨 계층화를 진행할 예정입니다.
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
