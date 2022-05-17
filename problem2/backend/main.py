from flask import Flask
import requests

app=Flask(__name__)

@app.route("/api/search/<keyword>")
def search_images(keyword):
    api_key='3aae1e7e09869acf99331417f801ee1f'
    url=f"https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key={api_key}&format=json&tags=horses"
    response=requests.get(url)
    print(response.json())
    return "completed"

if __name__=='__main__':
    app.run()
    
    
    # //https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=3aae1e7e09869acf99331417f801ee1f&format=json&tags=bank