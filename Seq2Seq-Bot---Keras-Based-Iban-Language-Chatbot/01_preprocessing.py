import csv #preprocessing.py
import os
import re

# procedure clean noise dataset
def preprocessing_text(text):
    text = text.lower()
 
    text = re.sub(r'[^a-zA-Z\s.,?!]', u'', text, flags=re.UNICODE)

    
    aku = ['ku', 'aku'] 
    nuan =['dek'] 
    iya = ['ya']
    kami = ['kita']
    enda = ['enda', 'nda', 'nadai', 'ukai'] 
    iya = ['ya', 'sanu'] 
    hai = ['hi', 'hey', 'halo', 'hay'] 
    
    lines = []
    for word in text.split():
        if word in aku:
            lines.append("ku")
        elif word in nuan:
            lines.append("dek")
        elif word in iya:
            lines.append("ya")
        elif word in kami:
            lines.append("kita")
        elif word in enda:
            lines.append("nadai")
        elif word in hai:
            lines.append("hi")
        else:
            lines.append(word)
            
    text = ' '.join(lines)  

    text = ' '.join(text.split())
   
    maxlen = 15
    if len(text.split()) > maxlen:
        text = (' ').join(text.split()[:maxlen])

    return text

# read Corpus
lines_filepath = os.path.join("Corpus","Iban.tsv")
with open(lines_filepath, "r", encoding="utf-8") as lines:
    array = []
    for line in lines:
        line = preprocessing_text(line.rstrip('\n'))
        array.append(line)
lines.close()
# write context-target
lines_filepath = os.path.join("Corpus","Iban.tsv")
with open(lines_filepath, "w", encoding="utf-8",newline='') as lines:
    writer = csv.writer(lines, delimiter='\t')
    i = 0
    while i < len(array):
        try:
            writer.writerow([array[i], array[i+1]])
        except:
            pass
        i+=1      
lines.close()