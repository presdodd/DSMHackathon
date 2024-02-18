import pandas as pd


def get_info(prompt,isDiagnosis):
    if not isDiagnosis:

        df = pd.read_csv('data/data.csv')

        for name in df['name']:
            #print(type(name))
            name = name.casefold()
            prompt = prompt.casefold()
            if name in prompt:
                row = df[df['name'] == name]
                return str(row)
        else:
            return ("sorry fish question could not be answered?")
    else:
        df = pd.read_csv("data/disease.csv")
        return ("Gotta finish this")