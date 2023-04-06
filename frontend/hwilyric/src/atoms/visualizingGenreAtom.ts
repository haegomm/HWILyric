import { atom } from "recoil";
import {
  IAnnualGenreRatio,
} from "../types/visualizingType";

export const annualGenreRatioSongAtom = atom<IAnnualGenreRatio>({
  key: "annualGenreRatioSong",
  default: {
    1964: [
      {
        name: "성인가요/트로트",
        ratio: 0.95,
        songs: ["내일또 만납시다", "눈물의 연평도"],
      },
      {
        name: "록/메탈",
        ratio: 0.05,
        songs: ["빗속의 여인 (1964년작)"],
      },
    ],
    1965: [
      {
        name: "성인가요/트로트",
        ratio: 1.0,
        songs: ["내 이름은 소녀", "누가 이사람을 모르시나요 (남과북 주제가)"],
      },
    ],
    1966: [
      {
        name: "성인가요/트로트",
        ratio: 0.89,
        songs: ["고향무정", "길잃은 철새"],
      },
      {
        name: "발라드",
        ratio: 0.11,
        songs: ["동숙의 노래", "아카시아의 마음"],
      },
    ],
    1967: [
      {
        name: "성인가요/트로트",
        ratio: 0.89,
        songs: ["가슴아프게", "갈대의 순정"],
      },
      {
        name: "국악가요",
        ratio: 0.05,
        songs: ["갑돌이와 갑순이", "새타령"],
      },
      {
        name: "국악",
        ratio: 0.05,
        songs: ["갑돌이와 갑순이", "새타령"],
      },
      {
        name: "발라드",
        ratio: 0.02,
        songs: ["돌지않는 풍차"],
      },
    ],
    1968: [
      {
        name: "성인가요/트로트",
        ratio: 0.9,
        songs: ["9월의 노래", "가을의 연인"],
      },
      {
        name: "발라드",
        ratio: 0.03,
        songs: ["아카시아 이별"],
      },
      {
        name: "국악가요",
        ratio: 0.03,
        songs: ["짚세기 신고 왔네"],
      },
      {
        name: "국악",
        ratio: 0.03,
        songs: ["짚세기 신고 왔네"],
      },
    ],
    1969: [
      {
        name: "성인가요/트로트",
        ratio: 0.76,
        songs: ["가을이 오기전에", "강촌에 살고싶네"],
      },
      {
        name: "R&B/Soul",
        ratio: 0.08,
        songs: ["님아", "떠나야할 그 사람"],
      },
      {
        name: "국악가요",
        ratio: 0.05,
        songs: ["꽃타령", "성주풀이"],
      },
      {
        name: "국악",
        ratio: 0.05,
        songs: ["꽃타령", "성주풀이"],
      },
      {
        name: "발라드",
        ratio: 0.03,
        songs: ["사랑하는 마리아"],
      },
      {
        name: "포크/블루스",
        ratio: 0.03,
        songs: ["하얀손수건"],
      },
    ],
    1970: [
      {
        name: "성인가요/트로트",
        ratio: 0.81,
        songs: ["가는 정 오는 정", "그사람 바보야"],
      },
      {
        name: "록/메탈",
        ratio: 0.11,
        songs: ["늦기전에", "월남에서 돌아온 김상사"],
      },
      {
        name: "발라드",
        ratio: 0.04,
        songs: ["범띠 아가씨"],
      },
      {
        name: "포크/블루스",
        ratio: 0.04,
        songs: ["축제의 노래"],
      },
    ],
    1971: [
      {
        name: "성인가요/트로트",
        ratio: 0.72,
        songs: ["가지마오", "고향아줌마"],
      },
      {
        name: "포크/블루스",
        ratio: 0.22,
        songs: ["그리운 사람끼리", "라라라"],
      },
      {
        name: "발라드",
        ratio: 0.06,
        songs: ["먼데서 오신 손님", "바다가 육지라면"],
      },
    ],
    1972: [
      {
        name: "성인가요/트로트",
        ratio: 0.66,
        songs: ["개 여울", "고향이 좋아"],
      },
      {
        name: "포크/블루스",
        ratio: 0.3,
        songs: ["고독", "그애와 나랑은"],
      },
      {
        name: "발라드",
        ratio: 0.05,
        songs: ["달무리", "최진사댁 셋째 딸"],
      },
    ],
    1973: [
      {
        name: "성인가요/트로트",
        ratio: 0.55,
        songs: ["강원도 아리랑", "고향 못 잊어"],
      },
      {
        name: "포크/블루스",
        ratio: 0.28,
        songs: ["그건 너", "나는 너를"],
      },
      {
        name: "발라드",
        ratio: 0.1,
        songs: ["고별", "기다리게 해놓고"],
      },
      {
        name: "록/메탈",
        ratio: 0.08,
        songs: ["마른잎", "석양"],
      },
    ],
    1974: [
      {
        name: "포크/블루스",
        ratio: 0.46,
        songs: ["가난한 마음", "그리워라 (박카스D CF 최민식, 임수정편)"],
      },
      {
        name: "성인가요/트로트",
        ratio: 0.39,
        songs: ["개구리 노총각", "그대는 가고"],
      },
      {
        name: "발라드",
        ratio: 0.12,
        songs: ["고향초", "내 노래에 날개가 있다면"],
      },
      {
        name: "록/메탈",
        ratio: 0.02,
        songs: ["잊게 해주오"],
      },
    ],
    1975: [
      {
        name: "성인가요/트로트",
        ratio: 0.42,
        songs: ["가을편지", "나그네 (불망곡) (Narr. 이윤선)"],
      },
      {
        name: "포크/블루스",
        ratio: 0.34,
        songs: ["고래사냥", "긴머리 소녀"],
      },
      {
        name: "발라드",
        ratio: 0.18,
        songs: ["너", "등불"],
      },
      {
        name: "록/메탈",
        ratio: 0.05,
        songs: ["나는 못난이", "미인"],
      },
    ],
    1976: [
      {
        name: "성인가요/트로트",
        ratio: 0.53,
        songs: ["고목나무", "그누가 모르나"],
      },
      {
        name: "포크/블루스",
        ratio: 0.28,
        songs: ["그대 있음에", "그리운 사람은"],
      },
      {
        name: "발라드",
        ratio: 0.2,
        songs: ["둘이서", "빗물"],
      },
    ],
    1977: [
      {
        name: "성인가요/트로트",
        ratio: 0.63,
        songs: ["꽃순이를 아시나요", "나의 20년"],
      },
      {
        name: "포크/블루스",
        ratio: 0.26,
        songs: ["과수원 길", "나비소녀"],
      },
      {
        name: "발라드",
        ratio: 0.11,
        songs: ["나의 사람아", "내고향 충청도"],
      },
    ],
    1978: [
      {
        name: "성인가요/트로트",
        ratio: 0.65,
        songs: ["갈대", "감수광"],
      },
      {
        name: "발라드",
        ratio: 0.13,
        songs: ["가시리", "나 어떡해 (77년 대상)"],
      },
      {
        name: "록/메탈",
        ratio: 0.1,
        songs: ["내 마음에 주단을 깔고", "문 좀 열어줘"],
      },
      {
        name: "포크/블루스",
        ratio: 0.06,
        songs: ["고귀한 선물", "얼룩 고무신"],
      },
      {
        name: "댄스",
        ratio: 0.04,
        songs: ["겨울 장미", "밤차"],
      },
      {
        name: "-",
        ratio: 0.02,
        songs: ["어떤날 둘이는"],
      },
    ],
    1979: [
      {
        name: "성인가요/트로트",
        ratio: 0.4,
        songs: ["가을비 우산속", "고목나무"],
      },
      {
        name: "포크/블루스",
        ratio: 0.26,
        songs: ["구름과 나", "그대로 그렇게"],
      },
      {
        name: "발라드",
        ratio: 0.23,
        songs: ["그대생각", "그때 그사람"],
      },
      {
        name: "록/메탈",
        ratio: 0.09,
        songs: ["개구장이", "연 (Inst.)"],
      },
      {
        name: "댄스",
        ratio: 0.02,
        songs: ["봄비"],
      },
    ],
    1980: [
      {
        name: "성인가요/트로트",
        ratio: 0.47,
        songs: ["고목", "그 사람 바보"],
      },
      {
        name: "포크/블루스",
        ratio: 0.2,
        songs: ["동반자", "또 만났네"],
      },
      {
        name: "발라드",
        ratio: 0.17,
        songs: ["내가 (대상)", "당신은 별을 보고 울어 보셨나요"],
      },
      {
        name: "록/메탈",
        ratio: 0.13,
        songs: ["불놀이야", "일곱색깔 무지개"],
      },
      {
        name: "댄스",
        ratio: 0.03,
        songs: ["영원한 친구"],
      },
    ],
    1981: [
      {
        name: "성인가요/트로트",
        ratio: 0.52,
        songs: ["고추잠자리", "꿈 찾아가리"],
      },
      {
        name: "발라드",
        ratio: 0.19,
        songs: ["겨울아이", "꿈을 꾼 후에"],
      },
      {
        name: "록/메탈",
        ratio: 0.14,
        songs: ["가지마오", "벌써 나를 잊으셨나요"],
      },
      {
        name: "포크/블루스",
        ratio: 0.14,
        songs: ["가나다라", "그 사람"],
      },
    ],
    1982: [
      {
        name: "성인가요/트로트",
        ratio: 0.58,
        songs: ["같이 있게 해주세요", "기다리는 여심"],
      },
      {
        name: "포크/블루스",
        ratio: 0.18,
        songs: ["꿈을 먹는 젊은이", "나뭇잎 사이로"],
      },
      {
        name: "록/메탈",
        ratio: 0.15,
        songs: ["그대 떠난 이밤에", "내게 사랑은 너무 써"],
      },
      {
        name: "창작동요",
        ratio: 0.03,
        songs: ["산할아버지"],
      },
      {
        name: "키즈",
        ratio: 0.03,
        songs: ["산할아버지"],
      },
      {
        name: "발라드",
        ratio: 0.03,
        songs: ["잊혀진 계절"],
      },
      {
        name: "댄스",
        ratio: 0.03,
        songs: ["종이학"],
      },
    ],
    1983: [
      {
        name: "성인가요/트로트",
        ratio: 0.54,
        songs: ["가을을 남기고 간 사랑", "기도하는 마음"],
      },
      {
        name: "발라드",
        ratio: 0.25,
        songs: ["가슴앓이", "결혼기념일의 노래"],
      },
      {
        name: "록/메탈",
        ratio: 0.11,
        songs: ["다시는 사랑을 안할테야", "모두 다 사랑하리"],
      },
      {
        name: "포크/블루스",
        ratio: 0.07,
        songs: ["비와 찻잔 사이", "푸르른 날"],
      },
      {
        name: "댄스",
        ratio: 0.04,
        songs: ["바람에 구름 가듯"],
      },
    ],
    1984: [
      {
        name: "성인가요/트로트",
        ratio: 0.44,
        songs: ["그것은 인생", "잃어버린 정"],
      },
      {
        name: "발라드",
        ratio: 0.21,
        songs: ["J에게", "연인이여"],
      },
      {
        name: "록/메탈",
        ratio: 0.17,
        songs: ["내일", "눈물의 파티"],
      },
      {
        name: "포크/블루스",
        ratio: 0.14,
        songs: ["유리벽", "하얀 목련"],
      },
      {
        name: "댄스",
        ratio: 0.02,
        songs: ["사랑도 못해본 사람은", "불티"],
      },
      {
        name: "국내드라마",
        ratio: 0.01,
        songs: ["무엇이 너와 나를 슬프게 하나"],
      },
    ],
    1985: [
      {
        name: "성인가요/트로트",
        ratio: 0.37,
        songs: ["희나리", "바람, 바람, 바람"],
      },
      {
        name: "발라드",
        ratio: 0.29,
        songs: ["희나리", "우리 사랑"],
      },
      {
        name: "록/메탈",
        ratio: 0.15,
        songs: ["어제, 오늘, 그리고", "하늘 나라 우리님 1"],
      },
      {
        name: "포크/블루스",
        ratio: 0.15,
        songs: ["이젠 사랑할 수 있어요", "모두가 사랑이예요"],
      },
      {
        name: "댄스",
        ratio: 0.05,
        songs: ["아직도 어두운 밤인가봐", "도시의 거리"],
      },
    ],
    1986: [
      {
        name: "발라드",
        ratio: 0.34,
        songs: ["가까이 하기엔 너무 먼 당신", "난 아직 모르잖아요"],
      },
      {
        name: "성인가요/트로트",
        ratio: 0.33,
        songs: ["허공", "철없던 사랑"],
      },
      {
        name: "포크/블루스",
        ratio: 0.15,
        songs: ["사랑은 언제나 그 자리에", "내 잘못인가"],
      },
      {
        name: "록/메탈",
        ratio: 0.12,
        songs: ["아픈만큼 성숙해지고", "바다에 누워"],
      },
      {
        name: "댄스",
        ratio: 0.06,
        songs: ["지난이야기 (Remake)", "사랑은 이제 그만"],
      },
      {
        name: "국내영화",
        ratio: 0.01,
        songs: ["당신때문에 (연인극장 '그대, 봄을 그리는 나무' 주제곡)"],
      },
    ],
    1987: [
      {
        name: "발라드",
        ratio: 0.35,
        songs: ["사랑이 지나가면", "알고 싶어요"],
      },
      {
        name: "성인가요/트로트",
        ratio: 0.33,
        songs: ["그날", "내일이 찾아와도"],
      },
      {
        name: "포크/블루스",
        ratio: 0.12,
        songs: ["내마음의 보석상자", "참새의 하루"],
      },
      {
        name: "록/메탈",
        ratio: 0.11,
        songs: ["사랑의 슬픔", "희야"],
      },
      {
        name: "댄스",
        ratio: 0.11,
        songs: ["영", "고독한 DJ"],
      },
    ],
    1988: [
      {
        name: "발라드",
        ratio: 0.46,
        songs: ["비처럼 음악처럼", "사랑하면 안되나"],
      },
      {
        name: "성인가요/트로트",
        ratio: 0.18,
        songs: ["동행", "신사동 그사람"],
      },
      {
        name: "포크/블루스",
        ratio: 0.14,
        songs: ["거리에서", "내 그리운 나라"],
      },
      {
        name: "록/메탈",
        ratio: 0.11,
        songs: ["울고 싶어라", "돌고, 돌고, 돌고"],
      },
      {
        name: "댄스",
        ratio: 0.1,
        songs: ["토요일은 밤이 좋아", "그대는 인형처럼 웃고 있지만"],
      },
      {
        name: "국내드라마",
        ratio: 0.01,
        songs: ["꼬마야"],
      },
      {
        name: "국내영화",
        ratio: 0.01,
        songs: ["우리 엄마"],
      },
    ],
    1989: [
      {
        name: "발라드",
        ratio: 0.5,
        songs: ["마지막 나의 모습", "추억속의 그대"],
      },
      {
        name: "성인가요/트로트",
        ratio: 0.14,
        songs: ["짝사랑", "안개 그림자"],
      },
      {
        name: "포크/블루스",
        ratio: 0.13,
        songs: ["흐린 가을 하늘에 편지를 써", "루씰"],
      },
      {
        name: "록/메탈",
        ratio: 0.12,
        songs: ["우리 앞의 생이 끝나갈 때", "바람에 실려간 사랑 A"],
      },
      {
        name: "댄스",
        ratio: 0.1,
        songs: ["널 그리며", "탄생"],
      },
      {
        name: "국내영화",
        ratio: 0.01,
        songs: ["마지막 인사"],
      },
    ],
    1990: [
      {
        name: "발라드",
        ratio: 0.57,
        songs: ["희망사항", "사랑일뿐야"],
      },
      {
        name: "록/메탈",
        ratio: 0.16,
        songs: ["비오는 날 수채화", "어떤이의 꿈"],
      },
      {
        name: "포크/블루스",
        ratio: 0.11,
        songs: ["사계", "시청앞 지하철 역에서"],
      },
      {
        name: "성인가요/트로트",
        ratio: 0.1,
        songs: ["얄미운 사람", "인디안 인형처럼"],
      },
      {
        name: "댄스",
        ratio: 0.05,
        songs: ["보고싶은 얼굴", "존대말을 써야할지 반말로 얘기해야 할지"],
      },
      {
        name: "국내영화",
        ratio: 0.01,
        songs: ["비오는 날 수채화"],
      },
      {
        name: "-",
        ratio: 0.01,
        songs: ["떠나는 자만이 사랑을 꿈꿀 수 있다"],
      },
    ],
    1991: [
      {
        name: "발라드",
        ratio: 0.59,
        songs: ["내사랑 내곁에 (응답하라 1988 삽입곡)", "이별의 그늘"],
      },
      {
        name: "포크/블루스",
        ratio: 0.17,
        songs: ["사랑했지만", "시청앞 지하철 역에서"],
      },
      {
        name: "성인가요/트로트",
        ratio: 0.09,
        songs: ["만남", "당신"],
      },
      {
        name: "록/메탈",
        ratio: 0.09,
        songs: ["내 마음 깊은 곳의 너", "재즈 카페"],
      },
      {
        name: "댄스",
        ratio: 0.07,
        songs: ["삐에로는 우릴 보고 웃지", "날 울리지마"],
      },
    ],
    1992: [
      {
        name: "발라드",
        ratio: 0.6,
        songs: ["아주 오래된 연인들", "또 다른 만남을 위해"],
      },
      {
        name: "댄스",
        ratio: 0.15,
        songs: ["난 알아요", "꿈"],
      },
      {
        name: "록/메탈",
        ratio: 0.1,
        songs: ["10년전의 일기를 꺼내어", "도시인"],
      },
      {
        name: "포크/블루스",
        ratio: 0.07,
        songs: ["먼지가 되어", "나의 노래"],
      },
      {
        name: "성인가요/트로트",
        ratio: 0.07,
        songs: ["타타타", "낭랑 18세(Mega Mix)"],
      },
      {
        name: "국내드라마",
        ratio: 0.01,
        songs: ["질투"],
      },
    ],
    1993: [
      {
        name: "발라드",
        ratio: 0.45,
        songs: ["너를 사랑해", "방황"],
      },
      {
        name: "댄스",
        ratio: 0.21,
        songs: ["너에게 원한건", "난 멈추지 않는다"],
      },
      {
        name: "록/메탈",
        ratio: 0.14,
        songs: ["다시만난 너에게", "걸어서 하늘까지"],
      },
      {
        name: "포크/블루스",
        ratio: 0.06,
        songs: ["나의 노래", "옛 친구에게"],
      },
      {
        name: "국내드라마",
        ratio: 0.06,
        songs: ["걸어서 하늘까지", "장미의 미소"],
      },
      {
        name: "성인가요/트로트",
        ratio: 0.04,
        songs: ["애모", "흔적"],
      },
      {
        name: "국내영화",
        ratio: 0.03,
        songs: ["그대안의 블루", "천년학 (대금 타이틀)"],
      },
      {
        name: "랩/힙합",
        ratio: 0.01,
        songs: ["나를 돌아봐"],
      },
      {
        name: "-",
        ratio: 0.01,
        songs: ["Pilot"],
      },
    ],
    1994: [
      {
        name: "발라드",
        ratio: 0.46,
        songs: ["달의 몰락", "기억의 습작"],
      },
      {
        name: "댄스",
        ratio: 0.22,
        songs: ["핑계", "칵테일 사랑"],
      },
      {
        name: "록/메탈",
        ratio: 0.15,
        songs: ["사랑할수록", "다시만난 너에게"],
      },
      {
        name: "국내드라마",
        ratio: 0.04,
        songs: ["비창", "마지막 승부"],
      },
      {
        name: "성인가요/트로트",
        ratio: 0.03,
        songs: ["립스틱 짙게 바르고", "너의 마음을 내게 준다면"],
      },
      {
        name: "랩/힙합",
        ratio: 0.03,
        songs: ["우리는", "수퍼맨의 비애 (Feat. Proud Marry)"],
      },
      {
        name: "포크/블루스",
        ratio: 0.03,
        songs: ["난 너에게", "일어나"],
      },
      {
        name: "재즈",
        ratio: 0.01,
        songs: ["낯선 사람들"],
      },
      {
        name: "보컬재즈",
        ratio: 0.01,
        songs: ["낯선 사람들"],
      },
      {
        name: "인디음악",
        ratio: 0.01,
        songs: ["친구에게 (Feat. 전혜선)"],
      },
      {
        name: "-",
        ratio: 0.01,
        songs: ["당신이 그리워질 때(Main Title Song)"],
      },
    ],
    1995: [
      {
        name: "발라드",
        ratio: 0.48,
        songs: ["사랑을 할꺼야", "슬픈 인연"],
      },
      {
        name: "댄스",
        ratio: 0.24,
        songs: ["잘못된 만남", "상상속의 너"],
      },
      {
        name: "록/메탈",
        ratio: 0.13,
        songs: ["슬프도록 아름다운 ...", "시간이 흐른뒤에"],
      },
      {
        name: "포크/블루스",
        ratio: 0.06,
        songs: ["살다보면", "두바퀴로 가는 자동차"],
      },
      {
        name: "R&B/Soul",
        ratio: 0.02,
        songs: ["이 밤의 끝을 잡고", "나만의 친구"],
      },
      {
        name: "랩/힙합",
        ratio: 0.02,
        songs: ["머피의 법칙", "수퍼맨의 비애 (Feat. Proud Marry)"],
      },
      {
        name: "국내영화",
        ratio: 0.02,
        songs: ["끝난 건가요", "너의 곁으로"],
      },
      {
        name: "인디음악",
        ratio: 0.02,
        songs: ["너를 품에 안으면", "안녕하세요"],
      },
      {
        name: "국내드라마",
        ratio: 0.01,
        songs: ["Main Title"],
      },
      {
        name: "재즈",
        ratio: 0.01,
        songs: ["Happy End (Edit Ver.)"],
      },
      {
        name: "애시드/퓨전/팝",
        ratio: 0.01,
        songs: ["Happy End (Edit Ver.)"],
      },
    ],
    1996: [
      {
        name: "발라드",
        ratio: 0.46,
        songs: ["널 사랑하겠어", "모래성"],
      },
      {
        name: "댄스",
        ratio: 0.29,
        songs: ["정 (위험한 이별)", "꿍따리 샤바라"],
      },
      {
        name: "록/메탈",
        ratio: 0.12,
        songs: ["달팽이", "Aspirin (아스피린) (12 String Guitar Ver.)"],
      },
      {
        name: "R&B/Soul",
        ratio: 0.03,
        songs: ["넌 나의 처음이자 마지막이야!", "천생연분"],
      },
      {
        name: "포크/블루스",
        ratio: 0.03,
        songs: ["내가 만일", "널 사랑하겠어"],
      },
      {
        name: "랩/힙합",
        ratio: 0.03,
        songs: ["여름이야기 (Sky Mix)", "말하자면"],
      },
      {
        name: "국내영화",
        ratio: 0.02,
        songs: ["아주 가끔은", "너의 곁으로"],
      },
      {
        name: "인디음악",
        ratio: 0.02,
        songs: ["너를 품에 안으면", "안녕하세요"],
      },
      {
        name: "성인가요/트로트",
        ratio: 0.01,
        songs: ["존재의 이유 1"],
      },
    ],
    1997: [
      {
        name: "발라드",
        ratio: 0.39,
        songs: ["애송이의 사랑", "영원"],
      },
      {
        name: "댄스",
        ratio: 0.34,
        songs: ["그녀는 예뻤다", "Doc와 춤을"],
      },
      {
        name: "록/메탈",
        ratio: 0.13,
        songs: ["나를 슬프게 하는 사람들", "아름다운 구속"],
      },
      {
        name: "랩/힙합",
        ratio: 0.05,
        songs: ["다시 만나 줘", "사랑해 (Hiphop Ver.) (Contain Sample Of)"],
      },
      {
        name: "성인가요/트로트",
        ratio: 0.04,
        songs: ["사랑을 위하여", "바람의 노래"],
      },
      {
        name: "포크/블루스",
        ratio: 0.02,
        songs: ["영산강", "진실에 관하여"],
      },
      {
        name: "국내영화",
        ratio: 0.01,
        songs: ["사랑의 송가"],
      },
      {
        name: "R&B/Soul",
        ratio: 0.01,
        songs: ["끼리 끼리"],
      },
      {
        name: "-",
        ratio: 0.01,
        songs: ["상처 (별은 내 가슴에)"],
      },
    ],
    1998: [
      {
        name: "발라드",
        ratio: 0.49,
        songs: ["지킬 수 없는 약속", "믿음"],
      },
      {
        name: "댄스",
        ratio: 0.25,
        songs: ["Poison", "그녀와의 이별"],
      },
      {
        name: "록/메탈",
        ratio: 0.16,
        songs: ["나의 사랑 천상(天上)에서도", "Epilogue(에필로그)"],
      },
      {
        name: "랩/힙합",
        ratio: 0.04,
        songs: ["올라올라", "내안의 그대"],
      },
      {
        name: "포크/블루스",
        ratio: 0.02,
        songs: ["사람이 꽃보다 아름다워", "정동진1"],
      },
      {
        name: "-",
        ratio: 0.02,
        songs: ["Love Love", "사랑한 후에 (내 마음을 뺏어 봐)"],
      },
      {
        name: "성인가요/트로트",
        ratio: 0.01,
        songs: ["사랑을 위하여"],
      },
      {
        name: "R&B/Soul",
        ratio: 0.01,
        songs: ["널 위해 준비된 사랑"],
      },
    ],
    1999: [
      {
        name: "댄스",
        ratio: 0.35,
        songs: ["미절 (Misery)", "영원한 사랑"],
      },
      {
        name: "발라드",
        ratio: 0.34,
        songs: ["For Your Soul (슬픈 영혼식)", "오직 너뿐인 나를…"],
      },
      {
        name: "록/메탈",
        ratio: 0.14,
        songs: ["그녀의 연인에게... #Story Ⅰ", "비정(非情)"],
      },
      {
        name: "랩/힙합",
        ratio: 0.11,
        songs: ["여름안에서", "남자이야기 -My Way"],
      },
      {
        name: "성인가요/트로트",
        ratio: 0.02,
        songs: ["사랑하는 날까지", "사랑을 위하여"],
      },
      {
        name: "인디음악",
        ratio: 0.01,
        songs: ["달려라 자전거"],
      },
      {
        name: "R&B/Soul",
        ratio: 0.01,
        songs: ["편지할께요"],
      },
      {
        name: "포크/블루스",
        ratio: 0.01,
        songs: ["사랑하게 되면"],
      },
      {
        name: "뉴에이지",
        ratio: 0.01,
        songs: ["지금은 우리가 멀리 있을지라도"],
      },
    ],
    2000: [
      {
        name: "댄스",
        ratio: 0.36,
        songs: ["Run To You", "초련(初戀) (Techno Mix) (Feat. 윤진)"],
      },
      {
        name: "발라드",
        ratio: 0.34,
        songs: ["아시나요", "다 줄거야 (Acoustic Ver.)"],
      },
      {
        name: "록/메탈",
        ratio: 0.13,
        songs: ["영원", "매직 카펫 라이드"],
      },
      {
        name: "R&B/Soul",
        ratio: 0.08,
        songs: ["바보", "해줄 수 없는 일"],
      },
      {
        name: "랩/힙합",
        ratio: 0.07,
        songs: ["Run To You", "One Love"],
      },
      {
        name: "포크/블루스",
        ratio: 0.02,
        songs: ["왠지 느낌이 좋아", "이등병의 편지"],
      },
      {
        name: "국내드라마",
        ratio: 0.01,
        songs: ["기도"],
      },
    ],
    2001: [
      {
        name: "발라드",
        ratio: 0.38,
        songs: ["I Love You", "미안해요"],
      },
      {
        name: "댄스",
        ratio: 0.25,
        songs: ["떠난 너", "Double"],
      },
      {
        name: "록/메탈",
        ratio: 0.13,
        songs: ["내게 와 줘", "밤이 깊었네"],
      },
      {
        name: "R&B/Soul",
        ratio: 0.12,
        songs: ["벌써 일년", "시간이 흐른 뒤 (As Time Goes By)"],
      },
      {
        name: "랩/힙합",
        ratio: 0.07,
        songs: ["Good Life", "A-Yo"],
      },
      {
        name: "인디음악",
        ratio: 0.02,
        songs: ["밤이 깊었네", "항상 엔진을 켜둘께"],
      },
      {
        name: "국내영화",
        ratio: 0.01,
        songs: ["I Believe"],
      },
      {
        name: "국내드라마",
        ratio: 0.01,
        songs: ["기도"],
      },
      {
        name: "포크/블루스",
        ratio: 0.01,
        songs: ["흐린 가을 하늘에 편지를 써"],
      },
    ],
    2002: [
      {
        name: "발라드",
        ratio: 0.47,
        songs: ["우린 제법 잘 어울려요", "좋은사람"],
      },
      {
        name: "댄스",
        ratio: 0.23,
        songs: ["No.1", "비몽"],
      },
      {
        name: "록/메탈",
        ratio: 0.14,
        songs: ["Never Ending Story", "사랑 Two"],
      },
      {
        name: "랩/힙합",
        ratio: 0.07,
        songs: ["Memories... (Smiling Tears)", "A Better Day"],
      },
      {
        name: "R&B/Soul",
        ratio: 0.04,
        songs: ["...안 되나요... (부제: 화양연화)", "Sea Of Love"],
      },
      {
        name: "국내드라마",
        ratio: 0.02,
        songs: ["미련한 사랑", "If I Leave (나 가거든)"],
      },
      {
        name: "인디음악",
        ratio: 0.02,
        songs: ["낭만고양이", "Buenos Aires"],
      },
      {
        name: "포크/블루스",
        ratio: 0.01,
        songs: ["달팽이와 해바라기 (Men's Ver.)"],
      },
    ],
    2003: [
      {
        name: "발라드",
        ratio: 0.39,
        songs: ["어쩌다..", "보고 싶다"],
      },
      {
        name: "댄스",
        ratio: 0.19,
        songs: ["아틀란티스 소녀 (Atlantis Princess)", "결혼을 할 거라면"],
      },
      {
        name: "록/메탈",
        ratio: 0.15,
        songs: ["잊을께", "안녕"],
      },
      {
        name: "R&B/Soul",
        ratio: 0.13,
        songs: ["Break Away", "점점"],
      },
      {
        name: "랩/힙합",
        ratio: 0.08,
        songs: ["남자기 때문에", "악으로"],
      },
      {
        name: "인디음악",
        ratio: 0.03,
        songs: ["고백", "오리 날다 (영화 '권순분여사 납치사건' CF 테마송)"],
      },
      {
        name: "포크/블루스",
        ratio: 0.02,
        songs: ["목포의 눈물", "Chiki Chiki-Love Song"],
      },
      {
        name: "국내드라마",
        ratio: 0.01,
        songs: ["처음 그 날처럼"],
      },
    ],
    2004: [
      {
        name: "발라드",
        ratio: 0.42,
        songs: ["긴 하루", "사랑은...향기를 남기고"],
      },
      {
        name: "R&B/Soul",
        ratio: 0.17,
        songs: ["열정", "불치병 (Feat. Masta Wu)"],
      },
      {
        name: "댄스",
        ratio: 0.13,
        songs: ["My Name", "It's Raining"],
      },
      {
        name: "록/메탈",
        ratio: 0.12,
        songs: ["야상곡(夜想曲)", "Monologue"],
      },
      {
        name: "랩/힙합",
        ratio: 0.11,
        songs: [
          "친구여 (Feat. 인순이)",
          "고래의 꿈 (Falling In Love Again) (Feat. 김영근)",
        ],
      },
      {
        name: "일렉트로니카",
        ratio: 0.01,
        songs: ["Sweety"],
      },
      {
        name: "-",
        ratio: 0.01,
        songs: ["인연"],
      },
      {
        name: "국내드라마",
        ratio: 0.01,
        songs: ["너의 곁으로"],
      },
      {
        name: "POP",
        ratio: 0.01,
        songs: ["Ave Maria In A Minor (드라마 '천국의 계단' 테마곡)"],
      },
      {
        name: "인디음악",
        ratio: 0.01,
        songs: ["El Disco Amor"],
      },
    ],
    2005: [
      {
        name: "발라드",
        ratio: 0.43,
        songs: ["죄와벌", "살다가"],
      },
      {
        name: "댄스",
        ratio: 0.17,
        songs: ["둘이서 (CF - 빙그레 '바나나맛 우유')", "사랑스러워"],
      },
      {
        name: "R&B/Soul",
        ratio: 0.15,
        songs: ["체념 後(후)", "귀로"],
      },
      {
        name: "록/메탈",
        ratio: 0.12,
        songs: ["겁쟁이", "사랑했나봐"],
      },
      {
        name: "랩/힙합",
        ratio: 0.07,
        songs: [
          "I Love U Oh Thank U (Feat. 김태우 Of God)",
          "Fly (Feat. Amin. J of Soulciety)",
        ],
      },
      {
        name: "국내드라마",
        ratio: 0.05,
        songs: ["가슴 아파도", "응급실"],
      },
      {
        name: "일렉트로니카",
        ratio: 0.01,
        songs: ["She Is"],
      },
    ],
    2006: [
      {
        name: "발라드",
        ratio: 0.52,
        songs: ["사랑 안해", "여인의 향기"],
      },
      {
        name: "R&B/Soul",
        ratio: 0.21,
        songs: ["내사람 : Partner For Life", "사랑했어요 (Feat. 데니안)"],
      },
      {
        name: "댄스",
        ratio: 0.1,
        songs: ["비행기", "누나의 꿈"],
      },
      {
        name: "록/메탈",
        ratio: 0.07,
        songs: ["남자를 몰라", "My Love (And)"],
      },
      {
        name: "랩/힙합",
        ratio: 0.06,
        songs: ["Hold the line", "아이스크림"],
      },
      {
        name: "국내드라마",
        ratio: 0.04,
        songs: ["미친 사랑의 노래", "Perhaps Love (사랑인가요)"],
      },
    ],
    2007: [
      {
        name: "발라드",
        ratio: 0.56,
        songs: ["미인 (美人)", "이럴거면"],
      },
      {
        name: "댄스",
        ratio: 0.12,
        songs: ["유혹의 소나타", "거짓말"],
      },
      {
        name: "R&B/Soul",
        ratio: 0.11,
        songs: ["한여름날의 꿈 (Duet With 옥주현)", "아리랑"],
      },
      {
        name: "랩/힙합",
        ratio: 0.1,
        songs: ["Love Love Love (Feat. Yoong Jin Of Casker)", "수취인 불명"],
      },
      {
        name: "록/메탈",
        ratio: 0.07,
        songs: ["비밀번호 486", "사랑앓이"],
      },
      {
        name: "국내영화",
        ratio: 0.02,
        songs: ["Maria", "별 (Original Dialog Ver.)"],
      },
      {
        name: "국내드라마",
        ratio: 0.02,
        songs: ["통증", "미련한 가슴아"],
      },
    ],
    2008: [
      {
        name: "발라드",
        ratio: 0.34,
        songs: ["가지마 가지마", "발자국"],
      },
      {
        name: "댄스",
        ratio: 0.31,
        songs: ["So Hot", "하루 하루"],
      },
      {
        name: "랩/힙합",
        ratio: 0.24,
        songs: ["하루 하루", "서커스 (Feat. 임유경 - 달래 음악단 , ＄howgun)"],
      },
      {
        name: "R&B/Soul",
        ratio: 0.05,
        songs: ["나만 바라봐", "미안해요 (Feat. T.O.P)"],
      },
      {
        name: "국내드라마",
        ratio: 0.03,
        songs: ["만약에", "들리나요..."],
      },
      {
        name: "록/메탈",
        ratio: 0.03,
        songs: ["기억을 걷는 시간", "사랑후애 (僞愛)"],
      },
      {
        name: "성인가요/트로트",
        ratio: 0.01,
        songs: ["날 봐, 귀순"],
      },
    ],
    2009: [
      {
        name: "댄스",
        ratio: 0.5,
        songs: ["Gee", "I Don't Care"],
      },
      {
        name: "발라드",
        ratio: 0.33,
        songs: ["심장이 없어", "사랑비"],
      },
      {
        name: "랩/힙합",
        ratio: 0.09,
        songs: [
          "외톨이",
          "헤어지지 못하는 여자, 떠나가지 못하는 남자 (Feat. 정인)",
        ],
      },
      {
        name: "R&B/Soul",
        ratio: 0.04,
        songs: ["Insomnia (불면증)", "사랑..그 놈"],
      },
      {
        name: "록/메탈",
        ratio: 0.03,
        songs: ["비와 당신 (영화 '라디오스타' 삽입곡)", "바래"],
      },
      {
        name: "국내드라마",
        ratio: 0.01,
        songs: ["내 머리가 나빠서"],
      },
    ],
    2010: [
      {
        name: "댄스",
        ratio: 0.41,
        songs: ["Bad Girl Good Girl", "Oh!"],
      },
      {
        name: "발라드",
        ratio: 0.37,
        songs: ["잔소리 (With 2AM 슬옹)", "못해 (Feat. 美)"],
      },
      {
        name: "랩/힙합",
        ratio: 0.09,
        songs: ["죽을 만큼 아파서 (Feat. 멜로우)", "그땐 그땐 그땐"],
      },
      {
        name: "록/메탈",
        ratio: 0.06,
        songs: ["외톨이야", "고백"],
      },
      {
        name: "R&B/Soul",
        ratio: 0.04,
        songs: ["I Need A Girl (Feat. G-dragon)", "결혼까지 생각했어"],
      },
      {
        name: "국내드라마",
        ratio: 0.03,
        songs: ["죽어도 사랑해", "너 아니면 안돼"],
      },
      {
        name: "인디음악",
        ratio: 0.01,
        songs: ["고백"],
      },
    ],
    2011: [
      {
        name: "댄스",
        ratio: 0.46,
        songs: ["Roly-Poly", "바람났어 (Feat. 박봄)"],
      },
      {
        name: "발라드",
        ratio: 0.34,
        songs: ["비가 오는 날엔", "살다가 한번쯤"],
      },
      {
        name: "랩/힙합",
        ratio: 0.1,
        songs: [
          "TV를 껐네... (Feat. t윤미래, 권정열 Of 10cm)",
          "회상 (Feat. 백지영)",
        ],
      },
      {
        name: "록/메탈",
        ratio: 0.07,
        songs: ["동경소녀", "달의 몰락"],
      },
      {
        name: "인디음악",
        ratio: 0.02,
        songs: ["아메리카노", "사랑은 은하수 다방에서"],
      },
      {
        name: "포크/블루스",
        ratio: 0.01,
        songs: ["사랑은 은하수 다방에서"],
      },
    ],
    2012: [
      {
        name: "댄스",
        ratio: 0.39,
        songs: ["나혼자 (Alone)", "Loving U (러빙유)"],
      },
      {
        name: "발라드",
        ratio: 0.31,
        songs: ["Heaven", "나를 사랑했던 사람아"],
      },
      {
        name: "랩/힙합",
        ratio: 0.14,
        songs: ["강남스타일", "충분히 예뻐 (feat. 산체스 Of 팬텀)"],
      },
      {
        name: "록/메탈",
        ratio: 0.12,
        songs: ["벚꽃 엔딩", "정말로 사랑한다면"],
      },
      {
        name: "R&B/Soul",
        ratio: 0.03,
        songs: ["바람기억", "1,2,3,4 (원,투,쓰리,포)"],
      },
      {
        name: "포크/블루스",
        ratio: 0.01,
        songs: ["애상"],
      },
    ],
    2013: [
      {
        name: "발라드",
        ratio: 0.32,
        songs: ["모노드라마 (With 유승우)", "My Love"],
      },
      {
        name: "댄스",
        ratio: 0.26,
        songs: ["NoNoNo", "Give It To Me"],
      },
      {
        name: "랩/힙합",
        ratio: 0.18,
        songs: ["자니 (Feat. Dynamic Duo)", "눈물 (Feat. 유진 Of 더 씨야)"],
      },
      {
        name: "국내드라마",
        ratio: 0.1,
        songs: ["Touch Love", "I Love You"],
      },
      {
        name: "록/메탈",
        ratio: 0.07,
        songs: ["벚꽃 엔딩", "처음엔 사랑이란게"],
      },
      {
        name: "R&B/Soul",
        ratio: 0.05,
        songs: ["미친연애 (Bad Girl) (Feat. E-Sens Of 슈프림팀)", "Touch Love"],
      },
      {
        name: "포크/블루스",
        ratio: 0.02,
        songs: ["봄봄봄", "외국인의 고백"],
      },
      {
        name: "일렉트로니카",
        ratio: 0.01,
        songs: ["콩떡빙수"],
      },
    ],
    2014: [
      {
        name: "발라드",
        ratio: 0.33,
        songs: ["야생화", "금요일에 만나요 (Feat. 장이정 Of HISTORY)"],
      },
      {
        name: "댄스",
        ratio: 0.24,
        songs: ["Mr. Chu (On Stage)", "Something"],
      },
      {
        name: "랩/힙합",
        ratio: 0.17,
        songs: ["한여름밤의 꿀", "사람냄새"],
      },
      {
        name: "R&B/Soul",
        ratio: 0.09,
        songs: ["썸 (Feat. 릴보이 Of 긱스)", "눈, 코, 입"],
      },
      {
        name: "국내드라마",
        ratio: 0.09,
        songs: ["너의 모든 순간", "안녕"],
      },
      {
        name: "일렉트로니카",
        ratio: 0.03,
        songs: ["Come Back Home", "너 아님 안돼"],
      },
      {
        name: "포크/블루스",
        ratio: 0.03,
        songs: ["200%", "너 사용법"],
      },
      {
        name: "록/메탈",
        ratio: 0.02,
        songs: ["벚꽃 엔딩", "Can't Stop"],
      },
      {
        name: "인디음악",
        ratio: 0.01,
        songs: ["Dali, Van, Picasso"],
      },
    ],
    2015: [
      {
        name: "랩/힙합",
        ratio: 0.28,
        songs: ["뱅뱅뱅 (BANG BANG BANG)", "LOSER"],
      },
      {
        name: "댄스",
        ratio: 0.26,
        songs: ["레옹", "SHAKE IT"],
      },
      {
        name: "발라드",
        ratio: 0.21,
        songs: ["이럴거면 그러지말지 (Feat. Young K)", "우연히 봄"],
      },
      {
        name: "R&B/Soul",
        ratio: 0.09,
        songs: ["같은 시간 속의 너", "꺼내 먹어요"],
      },
      {
        name: "국내드라마",
        ratio: 0.07,
        songs: ["우연히 봄", "그 남잔 말야"],
      },
      {
        name: "록/메탈",
        ratio: 0.05,
        songs: ["위잉위잉", "와리가리"],
      },
      {
        name: "인디음악",
        ratio: 0.02,
        songs: ["위잉위잉", "와리가리"],
      },
      {
        name: "포크/블루스",
        ratio: 0.02,
        songs: ["마음", "IF YOU"],
      },
    ],
    2016: [
      {
        name: "발라드",
        ratio: 0.27,
        songs: ["어디에도", "널 사랑하지 않아"],
      },
      {
        name: "댄스",
        ratio: 0.19,
        songs: ["CHEER UP", "시간을 달려서 (Rough)"],
      },
      {
        name: "R&B/Soul",
        ratio: 0.15,
        songs: ["너는 나 나는 너", "잊어버리지마 (Feat. 태연)"],
      },
      {
        name: "랩/힙합",
        ratio: 0.14,
        songs: [
          "Boys And Girls (Feat. Babylon)",
          "Day Day (Feat. 박재범) (Prod. by GRAY)",
        ],
      },
      {
        name: "국내드라마",
        ratio: 0.13,
        songs: ["이 사랑", "You Are My Everything"],
      },
      {
        name: "포크/블루스",
        ratio: 0.06,
        songs: ["우주를 줄게", "봄이 좋냐??"],
      },
      {
        name: "인디음악",
        ratio: 0.05,
        songs: ["우주를 줄게", "봄이 좋냐??"],
      },
      {
        name: "록/메탈",
        ratio: 0.03,
        songs: ["안아줘", "사랑에 빠졌죠 (당신만이)"],
      },
    ],
    2017: [
      {
        name: "발라드",
        ratio: 0.27,
        songs: ["첫눈처럼 너에게 가겠다", "밤편지"],
      },
      {
        name: "댄스",
        ratio: 0.21,
        songs: ["KNOCK KNOCK", "REALLY REALLY"],
      },
      {
        name: "랩/힙합",
        ratio: 0.14,
        songs: ["봄날", "에라 모르겠다"],
      },
      {
        name: "R&B/Soul",
        ratio: 0.11,
        songs: ["비도 오고 그래서 (Feat. 신용재)", "팔레트 (Feat. G-DRAGON)"],
      },
      {
        name: "인디음악",
        ratio: 0.1,
        songs: ["좋다고 말해", "우주를 줄게"],
      },
      {
        name: "포크/블루스",
        ratio: 0.09,
        songs: ["좋다고 말해", "오랜 날 오랜 밤"],
      },
      {
        name: "국내드라마",
        ratio: 0.07,
        songs: ["첫눈처럼 너에게 가겠다", "Beautiful"],
      },
      {
        name: "록/메탈",
        ratio: 0.02,
        songs: ["TOMBOY", "사랑하지 않은 것처럼"],
      },
    ],
    2018: [
      {
        name: "발라드",
        ratio: 0.31,
        songs: ["그날처럼", "모든 날, 모든 순간 (Every day, Every Moment)"],
      },
      {
        name: "댄스",
        ratio: 0.26,
        songs: ["뿜뿜", "별이 빛나는 밤"],
      },
      {
        name: "랩/힙합",
        ratio: 0.16,
        songs: ["사랑을 했다 (LOVE SCENARIO)", "뚜두뚜두 (DDU-DU DDU-DU)"],
      },
      {
        name: "R&B/Soul",
        ratio: 0.11,
        songs: ["꽃 길", "미안해"],
      },
      {
        name: "인디음악",
        ratio: 0.07,
        songs: ["선물", "Way Back Home"],
      },
      {
        name: "국내드라마",
        ratio: 0.04,
        songs: ["모든 날, 모든 순간 (Every day, Every Moment)", "My Way"],
      },
      {
        name: "록/메탈",
        ratio: 0.03,
        songs: ["여행", "비행운"],
      },
      {
        name: "포크/블루스",
        ratio: 0.02,
        songs: ["#첫사랑", "썸 탈꺼야"],
      },
      {
        name: "일렉트로니카",
        ratio: 0.01,
        songs: ["Way Back Home"],
      },
    ],
    2019: [
      {
        name: "발라드",
        ratio: 0.41,
        songs: ["사랑에 연습이 있었다면 (Prod. 2soo)", "그때가 좋았어"],
      },
      {
        name: "댄스",
        ratio: 0.12,
        songs: [
          "작은 것들을 위한 시 (Boy With Luv) (Feat. Halsey)",
          "벌써 12시",
        ],
      },
      {
        name: "랩/힙합",
        ratio: 0.12,
        songs: ["이 노래가 클럽에서 나온다면", "봄날"],
      },
      {
        name: "인디음악",
        ratio: 0.09,
        songs: [
          "주저하는 연인들을 위해",
          "오늘도 빛나는 너에게 (To You My Light) (Feat.이라온)",
        ],
      },
      {
        name: "국내드라마",
        ratio: 0.08,
        songs: ["모든 날, 모든 순간 (Every day, Every Moment)", "안녕"],
      },
      {
        name: "록/메탈",
        ratio: 0.07,
        songs: ["주저하는 연인들을 위해", "옥탑방 (Rooftop)"],
      },
      {
        name: "R&B/Soul",
        ratio: 0.06,
        songs: ["오늘도 빛나는 너에게 (To You My Light) (Feat.이라온)", "비"],
      },
      {
        name: "포크/블루스",
        ratio: 0.02,
        songs: ["나만, 봄", "별 보러 갈래?"],
      },
      {
        name: "일렉트로니카",
        ratio: 0.01,
        songs: ["Way Back Home"],
      },
      {
        name: "성인가요/트로트",
        ratio: 0.01,
        songs: ["오늘 밤에"],
      },
    ],
    2020: [
      {
        name: "발라드",
        ratio: 0.33,
        songs: ["아로하", "늦은 밤 너의 집 앞 골목길에서"],
      },
      {
        name: "댄스",
        ratio: 0.16,
        songs: ["작은 것들을 위한 시 (Boy With Luv) (Feat. Halsey)", "Psycho"],
      },
      {
        name: "랩/힙합",
        ratio: 0.16,
        songs: ["아무노래", "METEOR"],
      },
      {
        name: "국내드라마",
        ratio: 0.15,
        songs: ["아로하", "흔들리는 꽃들 속에서 네 샴푸향이 느껴진거야"],
      },
      {
        name: "인디음악",
        ratio: 0.07,
        songs: [
          "오늘도 빛나는 너에게 (To You My Light) (Feat.이라온)",
          "Downtown Baby",
        ],
      },
      {
        name: "록/메탈",
        ratio: 0.05,
        songs: [
          "흔들리는 꽃들 속에서 네 샴푸향이 느껴진거야",
          "에잇(Prod.&Feat. SUGA of BTS)",
        ],
      },
      {
        name: "R&B/Soul",
        ratio: 0.04,
        songs: [
          "오늘도 빛나는 너에게 (To You My Light) (Feat.이라온)",
          "Square (2017)",
        ],
      },
      {
        name: "포크/블루스",
        ratio: 0.02,
        songs: ["나비와 고양이 (feat.백현 (BAEKHYUN))", "오래된 노래"],
      },
      {
        name: "성인가요/트로트",
        ratio: 0.02,
        songs: ["이제 나만 믿어요", "어느 60대 노부부이야기"],
      },
    ],
    2021: [
      {
        name: "발라드",
        ratio: 0.34,
        songs: ["밤하늘의 별을(2020)", "내 손을 잡아"],
      },
      {
        name: "댄스",
        ratio: 0.24,
        songs: ["Celebrity", "롤린 (Rollin')"],
      },
      {
        name: "랩/힙합",
        ratio: 0.11,
        songs: ["VVS (Feat. JUSTHIS) (Prod. GroovyRoom)", "Life Goes On"],
      },
      {
        name: "록/메탈",
        ratio: 0.09,
        songs: ["신호등", "Blueming"],
      },
      {
        name: "국내드라마",
        ratio: 0.09,
        songs: ["내 손을 잡아", "흔들리는 꽃들 속에서 네 샴푸향이 느껴진거야"],
      },
      {
        name: "인디음악",
        ratio: 0.07,
        songs: ["오래된 노래", "나랑 같이 걸을래 (바른연애 길잡이 X 적재)"],
      },
      {
        name: "R&B/Soul",
        ratio: 0.04,
        songs: ["밝게 빛나는 별이 되어 비춰줄게", "헤픈 우연"],
      },
      {
        name: "성인가요/트로트",
        ratio: 0.02,
        songs: ["이제 나만 믿어요", "별빛 같은 나의 사랑아"],
      },
      {
        name: "포크/블루스",
        ratio: 0.01,
        songs: ["오래된 노래"],
      },
    ],
    2022: [
      {
        name: "발라드",
        ratio: 0.26,
        songs: ["취중고백", "사랑인가 봐"],
      },
      {
        name: "댄스",
        ratio: 0.26,
        songs: ["LOVE DIVE", "ELEVEN"],
      },
      {
        name: "랩/힙합",
        ratio: 0.15,
        songs: ["회전목마 (Feat. Zion.T, 원슈타인) (Prod. Slom)", "LOVE me"],
      },
      {
        name: "R&B/Soul",
        ratio: 0.08,
        songs: ["정이라고 하자 (Feat. 10CM)", "GANADARA (Feat. 아이유)"],
      },
      {
        name: "록/메탈",
        ratio: 0.08,
        songs: ["TOMBOY", "봄여름가을겨울 (Still Life)"],
      },
      {
        name: "국내드라마",
        ratio: 0.08,
        songs: ["사랑인가 봐", "사랑은 늘 도망가"],
      },
      {
        name: "인디음악",
        ratio: 0.07,
        songs: ["너를 생각해", "그라데이션"],
      },
      {
        name: "포크/블루스",
        ratio: 0.02,
        songs: ["그라데이션", "Love story"],
      },
      {
        name: "성인가요/트로트",
        ratio: 0.01,
        songs: ["이제 나만 믿어요"],
      },
    ],
  },
});
