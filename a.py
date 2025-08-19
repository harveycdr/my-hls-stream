def make_m3u8(m3u8_raw, head_url, filename):
    new_lines = []

    for i in m3u8_raw.split():
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
        return None, None
    soup = BeautifulSoup(a.text,"html.parser")
    a = soup.find("a", class_="streaming-server btn-sv btn-hls btn btn-primary")
    print(a["data-link"])
    #call 2
    
    b = requests.get(a["data-link"], headers=headers)
    if not b.ok:
        return None, None
    c = b.text.split()[2]
    head_url = a["data-link"].replace("index.m3u8", "")
    return head_url, c

head_url, c = get_url_m3u8(url_motchill)
if head_url:
    print(head_url, c)
    a = requests.get(head_url+c, headers=headers)
    if a.ok:
        make_m3u8(a.text, head_url,"index.m3u8")
    
else:
    print("Không tìm thấy url m3u8")