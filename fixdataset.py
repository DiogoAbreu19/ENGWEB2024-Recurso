import json 
import ast

def main():
    with open("./datasets/dataset.json", "r") as f:
        data = json.load(f)
        f.close()

    for item in data:
        item['_id'] = item.pop('bookId')
        if isinstance(item['genres'], str):
            try:
                item['genres'] = ast.literal_eval(item['genres'])
            except (ValueError, SyntaxError):
                print(f"Erro ao converter genres para lista: {item['genres']}")

        if isinstance(item['characters'], str):
            try:
                item['characters'] = ast.literal_eval(item['characters'])
            except (ValueError, SyntaxError):
                print(f"Erro ao converter characters para lista: {item['characters']}")

        if isinstance(item['awards'], str):
            try:
                item['awards'] = ast.literal_eval(item['awards'])
            except (ValueError, SyntaxError):
                print(f"Erro ao converter characters para lista: {item['awards']}")

        if isinstance(item['setting'], str):
            try:
                item['setting'] = ast.literal_eval(item['setting'])
            except (ValueError, SyntaxError):
                print(f"Erro ao converter characters para lista: {item['setting']}")

        if isinstance(item['ratingsByStars'], str):
            try:
                item['ratingsByStars'] = ast.literal_eval(item['ratingsByStars'])
            except (ValueError, SyntaxError):
                print(f"Erro ao converter characters para lista: {item['ratingsByStars']}")

    with open("./datasets/datasetfinal.json", "w") as fw:
        json.dump(data, fw, indent=2, ensure_ascii=False)
        f.close()

if __name__ == "__main__":
    main()