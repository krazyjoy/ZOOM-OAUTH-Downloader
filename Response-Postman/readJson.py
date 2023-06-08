import json

with open('response.json', 'r', encoding='utf-8') as recordings:
    data = json.loads(recordings.read())
    print(type(data)) # list
    line = 0
    for record in data:
        print("--------------------------")
        print(line)
        print(record)
        line+=1

   