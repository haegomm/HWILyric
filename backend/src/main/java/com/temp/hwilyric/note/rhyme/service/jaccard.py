import re

def decomposition(word):
    sp_list = list(word)
    jaccard_set = set()

    result = []
    for keyword in sp_list:

        if re.match('.*[ㄱ-ㅎ ㅏ-ㅣ 가-힣]+.*', keyword) is not None:

            char_code = ord(keyword) - BASE_CODE
            char1 = int(char_code / CHOSUNG)
            result.append(CHOSUNG_LIST[char1])

            char2 = int((char_code - (CHOSUNG * char1)) / JUNGSUNG)
            result.append(JUNGSUNG_LIST[char2])

            char3 = int((char_code - (CHOSUNG * char1) - (JUNGSUNG * char2)))
            result.append(JONGSUNG_LIST[char3])

        else:
            result.append(keyword)

    for j in range(1, len(result)):
        jaccard_set.add((result[j - 1], result[j]))

    return result, jaccard_set

BASE_CODE, CHOSUNG, JUNGSUNG = 44032, 588, 28

CHOSUNG_LIST = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ']
JUNGSUNG_LIST = ['ㅏ', 'ㅐ','ㅑ','ㅒ','ㅓ','ㅔ','ㅕ','ㅖ','ㅗ','ㅘ','ㅙ','ㅚ','ㅛ','ㅜ','ㅝ','ㅞ','ㅟ','ㅠ','ㅡ','ㅢ','ㅣ']
JONGSUNG_LIST = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ']

if __name__ == '__main__':
    req_word = input()
    print(req_word)
    # string_result, string_jaccard_set = decomposition(req_word)
    # # string_set = set(list(input().split()))
    # # string_list = list(string_set)
    # string_list = list(input().split(,))
    # string_result, string_jaccard_set = decomposition(string_list[0])
    # compare_list = []
    # jaccard_similarity_list = []
    # rhyme_list = []
    #
    # for i in range(1,len(string_list)):
    #     if string_list[i] == string_list[0]:
    #         continue
    #     result, jaccard_set = decomposition(string_list[i])
    #     compare_list.append((result,jaccard_set,string_list[i]))
    #
    # for k in range(len(compare_list)):
    #     jaccard_similarity = float(len(string_jaccard_set&compare_list[k][1])/len(string_jaccard_set|compare_list[k][1]))
    #     if compare_list[k][0][-2] == string_result[-2]:
    #         jaccard_similarity += 0.2
    #     if compare_list[k][0][-1] == string_result[-1]:
    #         jaccard_similarity += 0.1
    #     if jaccard_similarity > 0.3:
    #         jaccard_similarity_list.append((jaccard_similarity, compare_list[k][2]))
    #
    # jaccard_similarity_list.sort(reverse=True)
    # # print(f'{req_word}과(와) 가장 유사한 구성의 단어는 {jaccard_similarity_list[0][1]}입니다')
    # rhyme_len = min(10, len(jaccard_similarity_list))
    # for l in range(rhyme_len):
    #     # rhyme_list.append(jaccard_similarity_list[l][1])
    #     print(jaccard_similarity_list[l][1])