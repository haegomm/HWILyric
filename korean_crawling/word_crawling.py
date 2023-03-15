import selenium
from selenium import webdriver
from selenium.webdriver import ActionChains

from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import Select
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
    btn_excel = driver.find_element(By.CLASS_NAME,"align_xls").click()
    wait_time(driver,1)
    sb_excel_download = Select(driver.find_element(By.CLASS_NAME, "downPopup_sel"))
    excel_size = len(sb_excel_download.options)
    for i in range(excel_size):
        sb_excel_download.select_by_index(str(i))
        print("click",i)
        wait_time(driver,1)

except Exception as e:
    print("예외 발생 !!", e)
finally:
    driver.quit()
