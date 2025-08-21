def make_m3u8(m3u8_raw, head_url, filename):
    new_lines = []
    ls = m3u8_raw.split()
    ads = "314e0b390716cd1d898aa6cda212f5d9"
    length = len(ls)
    for j in range(length):
        i = ls[j]
        if (length > j + 1 and ads in ls[j + 1]) or ads in ls[j]:
            continue

        if len(i) > 0 and i[0] != "#":
            new_lines.append(head_url + i)
            continue
        new_lines.append(i)

    with open(filename, mode="w", encoding="utf-8") as f:
        f.write("\n".join(new_lines))
        f.close()


import sys, requests, time
from bs4 import BeautifulSoup

url_motchill = sys.argv[1]
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                  "Chrome/115.0.0.0 Safari/537.36"
}
def get_url_m3u8(url_motchill):
    #call 1
    a = requests.get(url_motchill, headers=headers)
    if not a.ok:
        return None
    soup = BeautifulSoup(a.text,"html.parser")
    a = soup.find("a", class_="streaming-server btn-sv btn-hls btn btn-primary")
    print(a["data-link"])
    #call 2
    
    b = requests.get(a["data-link"], headers=headers)
    if not b.ok:
        return None
    c = b.text.split()[2]
    m3u8 = a["data-link"].replace("index.m3u8", "") + c
    return m3u8

file_m3u8 = f"{url_motchill.split('/')[4]}.m3u8"

m3u8 = get_url_m3u8(url_motchill)
if m3u8:
    print(m3u8)
    a = requests.get(m3u8, headers=headers)
    if a.ok:
        head_url = m3u8.replace("index.m3u8", "")
        make_m3u8(a.text, head_url, file_m3u8)
    
else:
    print("Không tìm thấy url m3u8")