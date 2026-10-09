import urllib.request, re
try:
    req = urllib.request.Request('https://duckduckgo.com/html/?q=street+fighter+2+gameplay+arcade+screenshot', headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req).read().decode('utf-8')
    urls = re.findall(r'img.*?src="([^"]+bing\.net[^"]+)"', html)
    if urls:
        img_url = urls[0]
        if img_url.startswith('//'):
            img_url = 'https:' + img_url
        urllib.request.urlretrieve(img_url, 'public/street_fighter.jpg')
        print("Success")
    else:
        print("No image found in DDG html")
except Exception as e:
    print("Error:", e)
