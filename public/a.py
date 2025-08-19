filename = 'mai.m3u8'
head_url = "https://s3.phim1280.tv/20240517/kHTjz9g4/2000kb/hls/"
lines = []
with open(filename, mode="r", encoding="utf-8") as f:
    lines = f.read().split()
    f.close()

new_lines = []

for i in lines:
    if len(i) > 0 and i[0] != "#":
        new_lines.append(head_url + i)
        continue
    new_lines.append(i)

with open(filename, mode="w", encoding="utf-8") as f:
    f.write("\n".join(new_lines))
    f.close()