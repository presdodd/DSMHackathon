import pandas as pd


def get_info(prompt,isDiagnosis):
    if not isDiagnosis:

        df = pd.read_csv('data/data.csv')
        df['name'] = df['name'].str.lower()
    
        for name in df['name']:
            names = name.split()
            #print(type(name))
            prompt = prompt.casefold()
            if any(string in prompt for string in names):
                row = df[df['name'] == name]
                return str(row)
        else:
            return ("sorry fish question could not be answered?")
    else:
        df = pd.read_csv("data/disease.csv")
        df_SD = df[['Diagnosis','Symptoms']]
        df_SD['combined'] = df_SD.apply(lambda row: ': '.join(row), axis=1)
        df_string = '\n'.join(df_SD['combined'])

        # print(df_string)

        return (df_string)
    


def get_treatment(resp):
    df = pd.read_csv("data/disease.csv")
    resp_case = resp.casefold()
    df['Diagnosis'] = df['Diagnosis'].str.lower()
    for name in df['Diagnosis']:
        #print(type(name))
        name_adjusted = name.split('(')[0]
        # print(name)
        if name_adjusted in resp_case:
            treatment = df[df['Diagnosis'] == name]['Treatment'].iloc[0]
            # print(treatment) #works
            return "Diagnosis: "+resp+"\n"+"Treatment: "+str(treatment)
    else:
        return ("sorry fish question could not be answered?")