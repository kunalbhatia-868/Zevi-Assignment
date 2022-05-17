from flask import Flask
from flickrapi import FlickrAPI
import json
from flask_cors import cross_origin

app=Flask(__name__)

@app.route("/api/search/<keyword>", methods=["GET"])
@cross_origin()
def search_images(keyword):
    api_key='3aae1e7e09869acf99331417f801ee1f'
    secret_key='d610c270a6c80069'
    flickr = FlickrAPI(api_key, secret_key,format='parsed-json')
    extras='url_s'
    photoData = flickr.photos.search(text=keyword, per_page=25, extras=extras)
    photos = photoData['photos']
    response=json.dumps(photos.get('photo'))
    return response 
    

if __name__=='__main__':
    app.run()
