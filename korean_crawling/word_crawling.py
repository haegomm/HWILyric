from selenium import webdriver
from selenium.webdriver.common.by import By

from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.select import Select

URL = 'http://dtims.dtaq.re.kr:8070/search/list/index.do'

driver = webdriver.Chrome(ChromeDriverManager().install())

driver.get(url=URL)
driver.implicitly_wait(time_to_wait=5)

def wait_time(driver, time=1):
    driver.implicitly_wait(time_to_wait=time)

try:
    # click
    driver.find_element(By.LINK_TEXT,'기타사전').click()
    wait_time(driver,1)
    driver.find_element(By.LINK_TEXT,"개방형한국어지식대사전").click()
    wait_time(driver,1)

    sb_count = driver.find_element(By.ID, "s_viewCount")
    Select(sb_count).select_by_value("100")
    wait_time(driver, 1)
    driver.find_element(By.LINK_TEXT, "적용").click()
    wait_time(driver,1)
    driver.find_element(By.CLASS_NAME, "align_xls").click()
    wait_time(driver,1)
    excel_size = len(Select(driver.find_element(By.CLASS_NAME, "downPopup_sel")).options)
    for i in range(5544, excel_size):
        wait = WebDriverWait(driver, 5)
        sb_count = wait.until(EC.element_to_be_clickable((By.ID, "s_viewCount")))
        Select(sb_count).select_by_value("100")
        wait = WebDriverWait(driver, 5)
        wait.until(EC.element_to_be_clickable((By.LINK_TEXT, "적용"))).click()
        wait_time(driver, 1)
        driver.find_element(By.CLASS_NAME, "align_xls").click()
        print("엑셀 버튼 클릭 완료")

        wait = WebDriverWait(driver, 5)
        element = wait.until(EC.element_to_be_clickable((By.CLASS_NAME, "downPopup_sel")))
        Select(element).select_by_index(str(i))
        print(i+1,"번째 option 선택 완료")
        btn_download = driver.find_element(By.XPATH, "//input[@value='다운로드']")
        btn_download.click()
        print(str(i+1)+"/"+str(excel_size)+" 번째 엑셀 파일 다운로드")

except Exception as e:
    print("예외 발생 !!", e)
finally:
    driver.quit()
