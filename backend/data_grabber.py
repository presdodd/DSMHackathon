import pandas as pd

prompt = ""

def get_info():
    data = df = pd.read_csv('data.csv')
    for name in df['info']:
        return (name)
