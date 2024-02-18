import pandas as pd


def get_info(prompt):
    df = pd.read_csv('data/data.csv')

    for name in df['name']:
        #print(type(name))
        x = name.casefold()
        y = prompt.casefold()
        if x in y:
            temp = df['info']
            #print(type(temp))
            return str(temp)
    else:
        return ("sorry fish question could not be answered?")